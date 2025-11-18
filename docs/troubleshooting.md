# Troubleshooting Guide

> Common issues and solutions for PWA Claude developers

**Last Updated:** 2025-11-18

---

## Table of Contents

- [Local Setup Issues](#local-setup-issues)
- [API Connection Problems](#api-connection-problems)
- [Build Failures](#build-failures)
- [Test Failures](#test-failures)
- [TypeScript Errors](#typescript-errors)
- [Environment Variable Problems](#environment-variable-problems)
- [Deployment Issues](#deployment-issues)
- [Runtime Errors](#runtime-errors)
- [Performance Issues](#performance-issues)

---

## Local Setup Issues

### Node Version Mismatch

**Problem:** `npm install` fails with version errors

**Solution:**
```bash
# Use nvm to switch to correct Node version
nvm install
nvm use

# Verify version matches .nvmrc
node --version
```

**Expected:** Node.js >= 20.0.0

---

### NPM Install Fails

**Problem:** Dependencies fail to install

**Symptoms:**
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

**Solutions:**

1. **Clear caches:**
   ```bash
   rm -rf node_modules
   rm package-lock.json
   npm cache clean --force
   npm install
   ```

2. **Use correct npm version:**
   ```bash
   npm --version  # Should be 10.8.1+
   npm install -g npm@10.8.1
   ```

3. **Check disk space:**
   ```bash
   df -h
   ```

---

### Port Already in Use

**Problem:** `Error: listen EADDRINUSE: address already in use :::3000`

**Solution:**

```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use a different port
PORT=3001 npm run dev
```

---

### Turbo Cache Issues

**Problem:** Stale builds or unexpected behavior

**Solution:**
```bash
# Clear Turbo cache
npm run clean
rm -rf .turbo

# Full clean rebuild
npm run clean
rm -rf node_modules
npm install
npm run build
```

---

## API Connection Problems

### Missing API Credentials

**Problem:** `Environment validation failed` on startup

**Symptoms:**
```
❌ Missing required environment variable: API_ENDPOINT
❌ Missing required environment variable: API_SECURITY_TOKEN
```

**Solution:**

1. **Create `.env` file:**
   ```bash
   cd apps/web
   cp .env.example .env
   ```

2. **Add your credentials:**
   ```bash
   API_ENDPOINT=https://your-store.plentyone.com
   API_SECURITY_TOKEN=your_token_here
   ```

3. **Restart the application:**
   ```bash
   npm run dev
   ```

**Get credentials:** Log into your PlentyONE admin panel to generate API tokens.

---

### API Endpoint 404 Errors

**Problem:** API requests fail with 404

**Symptoms:**
```
Error: Request failed with status code 404
GET https://your-store.plentyone.com/api/products
```

**Solutions:**

1. **Verify endpoint format:**
   - ✅ Correct: `https://your-store.plentyone.com`
   - ❌ Wrong: `https://your-store.plentyone.com/`
   - ❌ Wrong: `https://your-store.plentyone.com/api`

2. **Check API availability:**
   ```bash
   curl https://your-store.plentyone.com/rest/io/ping
   ```

3. **Verify security token:**
   - Ensure token hasn't expired
   - Check token permissions in PlentyONE admin

---

### CORS Errors

**Problem:** `Access-Control-Allow-Origin` errors in browser console

**Symptoms:**
```
Access to fetch at 'https://api.example.com' from origin 'http://localhost:3000'
has been blocked by CORS policy
```

**Solutions:**

1. **Use middleware (recommended):**
   - All API calls should go through Alokai middleware
   - Middleware handles CORS for you

2. **Check middleware configuration:**
   ```bash
   # Verify middleware is running
   curl http://localhost:4000/healthz
   ```

3. **Update CORS settings** in `apps/server/src/index.ts` for development

---

### API Rate Limiting

**Problem:** `429 Too Many Requests` errors

**Solution:**

1. **Implement client-side throttling:**
   ```typescript
   import { useRateLimiter } from '~/composables/useRateLimiter'

   const { throttle } = useRateLimiter()
   await throttle(() => fetchData())
   ```

2. **Add caching:**
   - Use `useFetch` with caching enabled
   - Implement service worker caching

3. **Contact API provider** to increase limits

---

## Build Failures

### TypeScript Compilation Errors

**Problem:** Build fails with TypeScript errors

**Symptoms:**
```
apps/web/app/pages/index.vue:42:5 - error TS2322:
Type 'string' is not assignable to type 'number'.
```

**Solutions:**

1. **Run type checking:**
   ```bash
   npm run type-check
   ```

2. **Check for circular dependencies:**
   ```bash
   npm run lint
   ```

3. **Clear .nuxt directory:**
   ```bash
   rm -rf apps/web/.nuxt
   npm run dev
   ```

4. **Verify TypeScript version:**
   ```bash
   npm list typescript
   # Should be 5.9.x
   ```

---

### Pre-render Failures

**Problem:** Build fails during pre-rendering

**Note:** Pre-rendering is currently disabled due to known issues. See `apps/web/nuxt.config.ts:76`

**If re-enabling:**

1. **Check dynamic routes:**
   - Ensure all dynamic routes have fallback data
   - Verify API is accessible during build

2. **Disable for specific routes:**
   ```typescript
   // nuxt.config.ts
   nitro: {
     prerender: {
       ignore: ['/dynamic-route']
     }
   }
   ```

---

### Out of Memory Errors

**Problem:** `JavaScript heap out of memory`

**Solution:**

```bash
# Increase Node memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

**Or add to `package.json`:**
```json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' nuxt build"
  }
}
```

---

### ESLint Errors Blocking Build

**Problem:** Build fails due to linting errors

**Quick fix (development only):**
```bash
# Skip linting
npm run build -- --no-lint
```

**Proper fix:**
```bash
# Fix auto-fixable issues
npm run lint:fix

# Review remaining issues
npm run lint
```

---

## Test Failures

### Vitest Tests Fail

**Problem:** Unit tests fail unexpectedly

**Common causes:**

1. **Stale mocks:**
   ```bash
   rm -rf apps/web/__tests__/__mocks__/.cache
   npm run test -- --clearCache
   ```

2. **Missing test dependencies:**
   ```bash
   npm install --save-dev @vitest/ui @vue/test-utils
   ```

3. **Timeout issues:**
   ```typescript
   // Increase timeout in test
   it('slow test', async () => {
     // ...
   }, { timeout: 10000 })
   ```

---

### Cypress E2E Tests Fail

**Problem:** E2E tests fail in CI or locally

**Solutions:**

1. **Verify API endpoint:**
   ```bash
   # Check cypress.config.ts
   cat apps/web/cypress.config.ts
   ```

2. **Run in headed mode for debugging:**
   ```bash
   npm run test:e2e:dev
   ```

3. **Clear Cypress cache:**
   ```bash
   npx cypress cache clear
   npm run test:e2e
   ```

4. **Check for timing issues:**
   ```typescript
   // Add explicit waits
   cy.wait(1000)
   cy.get('[data-testid="product"]').should('be.visible')
   ```

---

### Test Coverage Issues

**Problem:** Coverage reports not generating

**Solution:**
```bash
# Generate coverage report
npm run test:coverage

# View HTML report
open apps/web/coverage/index.html
```

---

## TypeScript Errors

### Cannot Find Module

**Problem:** `Cannot find module '~/composables/useCart'`

**Solutions:**

1. **Check path alias configuration:**
   ```typescript
   // tsconfig.json should have:
   {
     "compilerOptions": {
       "paths": {
         "~/*": ["./apps/web/app/*"]
       }
     }
   }
   ```

2. **Restart TypeScript server:**
   - VSCode: `Cmd+Shift+P` → "TypeScript: Restart TS Server"

3. **Verify file exists:**
   ```bash
   ls apps/web/app/composables/useCart
   ```

---

### Type Errors with Auto-imported Composables

**Problem:** TypeScript doesn't recognize auto-imported composables

**Solution:**

1. **Regenerate types:**
   ```bash
   rm -rf apps/web/.nuxt
   npm run dev
   # Wait for .nuxt/imports.d.ts to regenerate
   ```

2. **Explicit import (temporary workaround):**
   ```typescript
   import { useCart } from '~/composables/useCart'
   ```

---

### Generic Type Errors

**Problem:** Complex generic type errors in Vue components

**Solution:**

1. **Use type assertions:**
   ```typescript
   const data = ref<MyType | null>(null)
   ```

2. **Simplify component props:**
   ```typescript
   // Instead of complex generics
   interface Props {
     items: Product[]  // Explicit type
   }
   ```

---

## Environment Variable Problems

### Variables Not Loading

**Problem:** Environment variables undefined at runtime

**Solutions:**

1. **Check file location:**
   - ✅ Correct: `apps/web/.env`
   - ❌ Wrong: `.env` (root directory)

2. **Restart dev server:**
   ```bash
   # Env vars only load on startup
   npm run dev
   ```

3. **Use correct prefix for public vars:**
   ```bash
   # Public (accessible in browser)
   NUXT_PUBLIC_API_URL=https://api.example.com

   # Private (server-only)
   API_SECRET_KEY=secret123
   ```

4. **Check validation plugin:**
   - Review `apps/web/app/plugins/01.validate-env.ts`
   - Ensure variable is added to validation list

---

### Variables Not Available in Production

**Problem:** Env vars work locally but not in production

**Solutions:**

1. **Set variables in deployment platform:**
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment
   - Docker: Pass via `docker run -e`

2. **Don't rely on `.env` file in production:**
   - `.env` is gitignored (as it should be)
   - Use platform-specific env var management

---

## Deployment Issues

### Build Succeeds Locally, Fails in CI

**Problem:** CI build fails but local build works

**Common causes:**

1. **Node version mismatch:**
   ```yaml
   # .github/workflows/ci.yml
   - uses: actions/setup-node@v3
     with:
       node-version-file: '.nvmrc'
   ```

2. **Missing environment variables:**
   - Add required vars to CI secrets
   - Use `.env.example` as reference

3. **Insufficient memory:**
   ```yaml
   # Increase Node memory in CI
   - run: NODE_OPTIONS='--max-old-space-size=4096' npm run build
   ```

---

### Static Assets 404 in Production

**Problem:** Images/fonts return 404 in production

**Solutions:**

1. **Use correct asset paths:**
   ```vue
   <!-- ✅ Correct -->
   <img src="/images/logo.png" alt="Logo" />

   <!-- ❌ Wrong -->
   <img src="~/assets/images/logo.png" alt="Logo" />
   ```

2. **Check output directory:**
   ```bash
   ls -R .output/public/
   ```

3. **Verify CDN configuration** if using one

---

### Service Worker Not Updating

**Problem:** Users see old version after deployment

**Solutions:**

1. **Force SW update:**
   ```typescript
   // In app
   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.getRegistrations().then(registrations => {
       registrations.forEach(reg => reg.update())
     })
   }
   ```

2. **Clear CDN cache** after deployment

3. **Check cache versioning:**
   - Review `nuxt.config.ts` PWA configuration
   - Ensure version number increments

---

## Runtime Errors

### Hydration Mismatch

**Problem:** `Hydration mismatch` warnings in console

**Symptoms:**
```
[Vue warn]: Hydration node mismatch
```

**Solutions:**

1. **Check for client-only content:**
   ```vue
   <ClientOnly>
     <div>{{ new Date() }}</div>
   </ClientOnly>
   ```

2. **Ensure consistent data:**
   - Don't use `Math.random()` during SSR
   - Don't use `Date.now()` without `ClientOnly`

3. **Review third-party libraries:**
   - Some libraries don't support SSR
   - Wrap in `<ClientOnly>` if needed

---

### Composable Used Outside Setup

**Problem:** `Error: [nuxt] A composable was called outside of a plugin, Nuxt hook, Nuxt middleware, or Vue setup`

**Solution:**

```typescript
// ❌ Wrong - outside setup
const { data } = useFetch('/api/data')

export default defineComponent({
  setup() {
    // ✅ Correct - inside setup
    const { data } = useFetch('/api/data')
  }
})
```

---

### PayPal SDK Not Loading

**Problem:** PayPal buttons don't appear

**Solutions:**

1. **Check console for errors:**
   - Open DevTools → Console
   - Look for PayPal-related errors

2. **Verify configuration:**
   ```typescript
   // Check that credentials are set
   const { config } = usePayPal()
   console.log(config.value)
   ```

3. **Check network tab:**
   - Ensure PayPal SDK script loads
   - Check for CORS errors

4. **Try manual refresh:**
   - PayPal SDK has retry logic now (TASK-003)
   - Errors logged to console with helpful messages

---

## Performance Issues

### Slow Page Load Times

**Problem:** Pages take >3 seconds to load

**Diagnosis:**

```bash
# Run Lighthouse
npm run lighthouse

# Check bundle size
npm run build:analyze
```

**Solutions:**

1. **Enable lazy loading:**
   ```vue
   <script setup>
   const HeavyComponent = defineAsyncComponent(
     () => import('~/components/HeavyComponent.vue')
   )
   </script>
   ```

2. **Optimize images:**
   - Enable WebP/AVIF in `.env`
   - Use `<nuxt-img>` component

3. **Review network waterfall:**
   - Reduce number of API calls
   - Implement request batching

---

### Large Bundle Size

**Problem:** JavaScript bundle >500KB

**Solutions:**

1. **Analyze bundle:**
   ```bash
   npm run build:analyze
   open apps/web/.nuxt/analyze/client.html
   ```

2. **Code split large dependencies:**
   ```typescript
   // nuxt.config.ts
   vite: {
     build: {
       rollupOptions: {
         output: {
           manualChunks: {
             'vendor': ['vue', 'vue-router'],
             'ui': ['@storefront-ui/vue']
           }
         }
       }
     }
   }
   ```

3. **Use dynamic imports:**
   ```typescript
   const module = await import('heavy-library')
   ```

---

### Memory Leaks

**Problem:** Browser memory usage increases over time

**Diagnosis:**

1. **Use Chrome DevTools:**
   - Performance → Memory
   - Take heap snapshots
   - Compare snapshots over time

2. **Common causes:**
   - Event listeners not removed
   - Intervals/timeouts not cleared
   - Large reactive objects

**Solutions:**

```typescript
// Clean up in onUnmounted
onUnmounted(() => {
  clearInterval(intervalId)
  window.removeEventListener('scroll', handler)
})
```

---

## Getting More Help

### Enable Debug Mode

```bash
# In .env
NUXT_PUBLIC_DEBUG=true

# Or at runtime (browser console)
__logger.enableDebug()
```

### Check Logs

```bash
# Server logs
npm run dev | tee debug.log

# Build logs
npm run build 2>&1 | tee build.log
```

### Collect Diagnostic Info

```bash
# Node and npm versions
node --version
npm --version

# Package versions
npm list --depth=0

# System info
uname -a
```

### Report Issues

When reporting issues, include:

1. **Error message** (full stack trace)
2. **Steps to reproduce**
3. **Expected vs actual behavior**
4. **Environment info** (Node version, OS, etc.)
5. **Relevant code snippets**

**GitHub Issues:** https://github.com/thezubek/pwa-claude/issues

---

## Useful Commands

```bash
# Development
npm run dev                    # Start dev server
npm run dev:server             # Start middleware only

# Building
npm run build                  # Production build
npm run build:analyze          # Build with bundle analysis

# Testing
npm run test                   # Run unit tests
npm run test:e2e               # Run E2E tests
npm run test:coverage          # Generate coverage

# Code Quality
npm run lint                   # Run ESLint
npm run lint:fix               # Auto-fix issues
npm run type-check             # TypeScript validation
npm run format                 # Format code with Prettier

# Debugging
npm run clean                  # Clean build artifacts
./scripts/task-runner.sh stats # View task progress
```

---

**Last Updated:** 2025-11-18
**Maintainer:** Development Team
**Related:** See [Deployment Checklist](deployment-checklist.md) for production issues
