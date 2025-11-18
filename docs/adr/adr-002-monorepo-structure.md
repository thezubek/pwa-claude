# ADR-002: Monorepo Structure with Turborepo

**Date:** 2024-Q2
**Status:** Accepted
**Deciders:** Platform Team, DevOps Team
**Tags:** infrastructure, build-system, monorepo

## Context

PWA Claude consists of multiple related packages:
- **Web Application** (Nuxt 3 frontend)
- **Middleware Server** (Alokai middleware for API integration)
- **CLI Tools** (Code generators for components/composables)
- **Shared Utilities** (potential future package)

We needed a way to manage these packages that:
- Enables code sharing between packages
- Provides fast, incremental builds
- Supports parallel task execution
- Maintains consistent dependencies
- Simplifies CI/CD pipelines
- Allows independent deployment of services

## Decision

We chose **Turborepo** to manage a monorepo structure.

**Repository Structure:**
```
pwa-claude/
├── apps/
│   ├── web/           # Nuxt 3 application
│   └── server/        # Alokai middleware
├── packages/
│   └── shop-cli/      # Code generation CLI
├── turbo.json         # Turborepo configuration
└── package.json       # Root workspace config
```

**Key Features Used:**
- **Remote caching**: Shared build cache across team and CI
- **Task pipelines**: Defined dependencies between tasks (build → test)
- **Parallel execution**: Run tasks across packages simultaneously
- **Incremental builds**: Only rebuild changed packages

## Alternatives Considered

### Option 1: Separate Repositories

**Pros:**
- Complete independence between projects
- Simpler deployment pipelines
- Clearer ownership boundaries
- No monorepo tooling needed

**Cons:**
- Code duplication across repositories
- Difficult to share types/utilities
- Version synchronization challenges
- Complex dependency updates
- Slower development velocity

**Why rejected:**
- Web app and middleware are tightly coupled
- Sharing TypeScript types between them is critical
- Coordinating releases would be complex

### Option 2: Nx Monorepo

**Pros:**
- More mature than Turborepo
- Rich plugin ecosystem
- Excellent VS Code integration
- Advanced dependency graphing
- Built-in code generators

**Cons:**
- More complex configuration
- Steeper learning curve
- Opinionated project structure
- Heavier tooling overhead
- Angular-focused heritage

**Why rejected:**
- Turborepo is simpler and faster for our use case
- We don't need Nx's advanced features (affected commands, etc.)
- Turborepo has better Vercel integration
- Smaller configuration surface area

### Option 3: Lerna

**Pros:**
- Veteran monorepo tool
- Well-documented
- Wide adoption
- Flexible configuration

**Cons:**
- Primarily for package versioning/publishing
- Slower than modern alternatives
- Less focus on build performance
- Maintenance mode (team moved to Nx)

**Why rejected:**
- Not optimized for build performance
- We're not publishing npm packages
- Turborepo is faster and more modern

### Option 4: npm/pnpm Workspaces Only

**Pros:**
- Native to npm/pnpm
- Zero additional tooling
- Simple to understand
- Fast package linking

**Cons:**
- No task orchestration
- No caching layer
- No parallel execution
- Manual dependency ordering
- Poor CI performance

**Why rejected:**
- We need intelligent task orchestration
- CI builds would be much slower
- No remote caching capabilities

## Consequences

### Positive

- **Fast Builds**: Remote caching means developers rarely rebuild unchanged packages
- **Parallel Execution**: `turbo run build` runs all builds in parallel
- **Simple Configuration**: `turbo.json` is straightforward and easy to understand
- **Great DX**: `turbo run dev` starts all services with one command
- **CI Performance**: Remote cache dramatically speeds up CI pipelines
- **Code Sharing**: Easy to share types, utilities, and constants
- **Consistent Dependencies**: Shared `package.json` prevents version drift
- **Atomic Commits**: Changes across packages can be committed together

### Negative

- **Monorepo Complexity**: New developers need to understand workspace structure
- **Build Tool Dependency**: Tied to Turborepo's lifecycle and updates
- **All-or-Nothing Clones**: Can't clone just one package
- **Larger Repository**: Git repo size grows with all packages
- **Potential Coupling**: Easy to create tight coupling between packages

### Neutral

- **Deployment**: Can still deploy apps independently
- **Testing**: Each package has its own test suite
- **Versioning**: Packages share a version, but can be versioned independently if needed

## Implementation

### Configuration

**turbo.json:**
```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".nuxt/**", ".output/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "outputs": []
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    }
  }
}
```

**package.json (root):**
```json
{
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint"
  }
}
```

### Migration Plan

1. ✅ Set up Turborepo structure
2. ✅ Configure remote caching (Vercel)
3. ✅ Migrate existing apps to monorepo
4. ✅ Set up CI/CD with Turborepo
5. ✅ Document workspace commands

### Current Status

- ✅ Turborepo installed and configured
- ✅ Remote caching enabled (Vercel)
- ✅ All packages using workspace protocol
- ✅ CI using Turborepo for caching
- ✅ Developer onboarding documentation

### Performance Impact

**Before (separate repos):**
- Full CI build: ~15 minutes
- Local fresh build: ~8 minutes

**After (Turborepo):**
- Full CI build (cache hit): ~2 minutes
- Full CI build (cache miss): ~12 minutes
- Local fresh build (cache hit): ~30 seconds
- Local fresh build (cache miss): ~6 minutes

**Cache hit rate in CI:** ~75%

## Related Decisions

- [ADR-001: Nuxt 3 Framework](adr-001-nuxt-framework-choice.md) - Web app in monorepo
- Infrastructure decisions rely on this monorepo structure

## Notes

### Team Feedback

> "Turborepo's remote caching has been a game-changer for CI. Builds that used to take 15 minutes now complete in 2-3 minutes on average." - DevOps Team

> "Being able to share TypeScript types between web and middleware without publishing packages is huge for development velocity." - Backend Team

### Best Practices

1. **Keep packages loosely coupled**: Avoid circular dependencies
2. **Use workspace protocol**: `"dependency": "workspace:*"`
3. **Cache selectively**: Don't cache `dev` tasks
4. **Clear outputs**: Define explicit output directories
5. **Document scripts**: Add comments in package.json

### Future Considerations

- Consider extracting shared utilities to `packages/shared`
- Evaluate Turborepo 2.0 features when stable
- Monitor repository size and consider Git LFS for large assets

---

**Last Reviewed:** 2025-11-18
**Reviewers:** Platform Team, DevOps Team
