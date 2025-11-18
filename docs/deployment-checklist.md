# Deployment Checklist

> Pre-deployment verification checklist for PWA Claude

**Last Updated:** 2025-11-18

Use this checklist before every production deployment to ensure quality and reliability.

---

## Pre-Deployment

### Code Quality

- [ ] All tests passing locally
  ```bash
  npm run test
  npm run test:e2e
  ```

- [ ] No TypeScript errors
  ```bash
  npm run type-check
  ```

- [ ] ESLint passing with no warnings
  ```bash
  npm run lint
  ```

- [ ] Code formatted with Prettier
  ```bash
  npm run format:check
  ```

- [ ] All code reviews approved
- [ ] All CI/CD pipeline checks passing (GitHub Actions, etc.)

### Testing

- [ ] Unit tests pass (minimum 80% coverage)
  ```bash
  npm run test:coverage
  ```

- [ ] E2E tests pass for critical flows:
  - [ ] Product search and filtering
  - [ ] Add to cart
  - [ ] Checkout flow
  - [ ] Payment processing (PayPal, DHL)
  - [ ] User authentication
  - [ ] Order placement

- [ ] Integration tests pass
  ```bash
  npm run test:integration
  ```

- [ ] Accessibility tests pass (axe-core)
  ```bash
  npm run test:a11y
  ```

- [ ] Manual smoke testing completed on staging:
  - [ ] Homepage loads correctly
  - [ ] Product pages display properly
  - [ ] Cart functionality works
  - [ ] Checkout completes successfully
  - [ ] Payment providers functional
  - [ ] Account pages accessible

### Performance

- [ ] Bundle size within budget
  ```bash
  npm run build:analyze
  # Check that main bundle < 250KB gzipped
  ```

- [ ] Lighthouse scores meet thresholds:
  - [ ] Performance: ≥90
  - [ ] Accessibility: ≥95
  - [ ] Best Practices: ≥90
  - [ ] SEO: ≥90
  - [ ] PWA: ≥90

  ```bash
  npm run lighthouse
  ```

- [ ] Core Web Vitals in "Good" range:
  - [ ] LCP (Largest Contentful Paint): <2.5s
  - [ ] FID (First Input Delay): <100ms
  - [ ] CLS (Cumulative Layout Shift): <0.1

- [ ] No memory leaks detected in Chrome DevTools
- [ ] Service Worker caching properly configured
- [ ] Image optimization enabled (AVIF/WebP with fallbacks)

### Security

- [ ] Security headers configured correctly
  ```bash
  curl -I https://staging.example.com | grep -E '(Content-Security-Policy|X-Frame-Options|X-Content-Type-Options)'
  ```

- [ ] CSP (Content Security Policy) enforced:
  - [ ] No `unsafe-inline` or `unsafe-eval` in production
  - [ ] All external resources whitelisted
  - [ ] Nonce-based inline scripts only

- [ ] Environment variables properly secured:
  - [ ] No secrets in client-side code
  - [ ] `.env` files not committed to git
  - [ ] Production secrets rotated regularly

- [ ] Dependencies up-to-date with no critical vulnerabilities
  ```bash
  npm audit --audit-level=high
  ```

- [ ] API rate limiting configured
- [ ] Input sanitization applied to all user inputs
- [ ] XSS protection enabled
- [ ] CSRF tokens implemented where needed
- [ ] HTTPS enforced (no HTTP traffic)

### Configuration

- [ ] Environment variables set for production:
  - [ ] `API_ENDPOINT` - Production API URL
  - [ ] `API_SECURITY_TOKEN` - Production token
  - [ ] `NODE_ENV=production`
  - [ ] Feature flags configured
  - [ ] Analytics/monitoring keys set

- [ ] `.env.example` matches all required variables
- [ ] Environment validation passes on startup

- [ ] Feature flags configured correctly:
  - [ ] Disabled features turned off
  - [ ] Beta features properly gated
  - [ ] A/B tests configured

- [ ] Cache configuration validated:
  - [ ] CDN cache headers set
  - [ ] Browser cache policies correct
  - [ ] Service Worker cache strategies appropriate

### Database & API

- [ ] Database migrations run successfully
  ```bash
  # Run migrations on staging first
  npm run migrate
  ```

- [ ] API endpoints tested:
  - [ ] All critical endpoints responding
  - [ ] Authentication working
  - [ ] Data retrieval functional
  - [ ] Rate limiting in place

- [ ] Third-party integrations verified:
  - [ ] Payment providers (PayPal, etc.)
  - [ ] Shipping providers (DHL, etc.)
  - [ ] Analytics services
  - [ ] Error tracking (Sentry, etc.)

- [ ] Database backups recent and tested
- [ ] API versioning correct

### Content

- [ ] All images optimized and compressed
- [ ] Translations complete for all active languages
  ```bash
  npm run i18n:validate
  ```

- [ ] No hardcoded text (all i18n keys used)
- [ ] SEO meta tags correct on all pages:
  - [ ] Title tags unique and descriptive
  - [ ] Meta descriptions present
  - [ ] Open Graph tags set
  - [ ] Twitter Card tags set
  - [ ] Canonical URLs configured

- [ ] Sitemap generated and accessible
  ```bash
  curl https://staging.example.com/sitemap.xml
  ```

- [ ] robots.txt configured for production

---

## Deployment

### Pre-Deploy

- [ ] **Announce deployment** (Slack/Discord notification)
- [ ] **Enable maintenance mode** (if needed)
  ```bash
  # Set maintenance mode on
  npm run maintenance:enable
  ```

- [ ] **Tag release** in git
  ```bash
  git tag -a v1.2.3 -m "Release v1.2.3"
  git push origin v1.2.3
  ```

- [ ] **Create deployment branch** (if using git-flow)

### Build

- [ ] Production build succeeds without errors
  ```bash
  npm run build
  ```

- [ ] Build artifacts generated correctly:
  - [ ] `.output/` directory created
  - [ ] Static assets in `.output/public/`
  - [ ] Server bundle in `.output/server/`

- [ ] Build warnings reviewed and addressed

### Deploy

- [ ] **Deploy to staging first**
  ```bash
  npm run deploy:staging
  ```

- [ ] **Smoke test staging deployment:**
  - [ ] Homepage loads
  - [ ] Critical user flows work
  - [ ] No console errors
  - [ ] API connectivity verified

- [ ] **Deploy to production**
  ```bash
  npm run deploy:production
  ```

- [ ] Deployment completes successfully
- [ ] Health check endpoints responding
  ```bash
  curl https://production.example.com/health
  ```

### Post-Deploy

- [ ] **Verify production deployment:**
  - [ ] Homepage loads correctly
  - [ ] Run critical E2E tests on production
  - [ ] Check error monitoring dashboard (no spike in errors)
  - [ ] Verify Core Web Vitals in RUM (Real User Monitoring)

- [ ] **CDN cache purged** (if needed)
  ```bash
  npm run cdn:purge
  ```

- [ ] **Service Worker updated** on clients
  - [ ] Check for update prompts
  - [ ] Verify new version number

- [ ] **Monitor for 30 minutes:**
  - [ ] Error rates normal
  - [ ] Response times acceptable
  - [ ] No user complaints
  - [ ] Logs clean

- [ ] **Disable maintenance mode**
  ```bash
  npm run maintenance:disable
  ```

---

## Monitoring & Alerts

### Error Tracking

- [ ] Error tracking enabled:
  - [ ] Sentry/Bugsnag configured
  - [ ] Source maps uploaded
  - [ ] Release tagged in error tracker

- [ ] Alert thresholds configured:
  - [ ] Error rate spikes
  - [ ] Performance degradation
  - [ ] Availability issues

### Analytics

- [ ] Analytics tracking verified:
  - [ ] Google Analytics/Plausible working
  - [ ] Custom events firing
  - [ ] E-commerce tracking active

### Performance Monitoring

- [ ] Performance monitoring active:
  - [ ] Core Web Vitals tracking
  - [ ] Server response times
  - [ ] API latency monitoring

- [ ] Uptime monitoring configured:
  - [ ] Ping checks every 1-5 minutes
  - [ ] Alert on downtime

---

## Rollback Plan

### Preparation

- [ ] **Previous version tagged** in git
- [ ] **Rollback procedure documented** below:

  ```bash
  # Rollback steps
  1. git checkout v1.2.2  # Previous stable version
  2. npm run build
  3. npm run deploy:production
  4. npm run cdn:purge
  5. Monitor for 15 minutes
  ```

- [ ] **Database rollback plan** (if schema changed):
  - [ ] Backup taken before migration
  - [ ] Rollback migration script tested

### When to Rollback

Rollback immediately if:
- Error rate increases by >50%
- Critical functionality broken
- Performance degradation >30%
- Data corruption detected
- Security vulnerability discovered

### Rollback Execution

- [ ] Execute rollback procedure
- [ ] Verify rollback successful
- [ ] Communicate status to team
- [ ] Post-mortem scheduled

---

## Post-Deployment

### Documentation

- [ ] **Update CHANGELOG.md** with release notes
- [ ] **Document any known issues**
- [ ] **Update version number** in package.json
- [ ] **Close related issues/tickets** in project tracker

### Communication

- [ ] **Announce deployment complete:**
  - [ ] Team notification (Slack/Discord)
  - [ ] Stakeholder notification (email)
  - [ ] Customer notification (if major release)

- [ ] **Release notes published:**
  - [ ] GitHub release created
  - [ ] Blog post (if significant)
  - [ ] Documentation updated

### Cleanup

- [ ] **Old build artifacts cleaned up**
- [ ] **Temporary branches deleted**
- [ ] **Staging environment synced** with production

---

## Emergency Contacts

**On-Call Rotation:**
- Primary: [Name] - [Contact]
- Secondary: [Name] - [Contact]
- DevOps: [Name] - [Contact]

**Third-Party Support:**
- Hosting Provider: [Contact]
- CDN Support: [Contact]
- Payment Processor: [Contact]

---

## Deployment History

| Version | Date | Deployed By | Status | Notes |
|---------|------|-------------|--------|-------|
| v1.2.3  | 2025-11-18 | Claude Agent | ✅ Success | Added task system |
| v1.2.2  | 2025-11-15 | Team | ✅ Success | Bug fixes |
| v1.2.1  | 2025-11-10 | Team | ⚠️ Rolled back | Performance issues |

---

## Notes

- Always deploy to staging first
- Never deploy on Fridays (unless critical security fix)
- Monitor for at least 30 minutes post-deployment
- Keep rollback procedure ready
- Document everything

---

**Checklist Version:** 1.0
**Last Review:** 2025-11-18
**Next Review:** 2025-12-18
