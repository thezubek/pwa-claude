# Feature Flags System

A comprehensive feature flag system for runtime feature toggling, A/B testing, and gradual rollouts without deployments.

## Overview

The feature flag system allows you to:

- **Toggle features at runtime** without code deployments
- **A/B test** new features with percentage-based rollouts
- **Target specific users** with segment-based flags
- **Environment-specific features** (dev/staging/prod)
- **Gradual rollouts** with percentage-based targeting
- **Override flags** for testing and debugging

## Quick Start

### Check if Feature is Enabled

```vue
<template>
  <div>
    <!-- Conditional rendering -->
    <NewCheckout v-if="isEnabled('new-checkout-flow')" />
    <OldCheckout v-else />

    <!-- Show experimental features -->
    <template v-if="isEnabled('product-recommendations')">
      <ProductRecommendations />
    </template>
  </div>
</template>

<script setup lang="ts">
const { isEnabled } = useFeatureFlags()
</script>
```

### Get Flag Details

```typescript
const { getFlag, getEvaluation } = useFeatureFlags()

// Get flag definition
const flag = getFlag('new-checkout-flow')
console.log(flag.name, flag.description)

// Get evaluation with reason
const result = getEvaluation('new-checkout-flow')
console.log(result.enabled, result.reason)
// { enabled: true, reason: 'rollout' }
```

## Configuration

### Define Feature Flags

Edit `apps/web/app/config/featureFlags.ts`:

```typescript
export const featureFlags: Record<string, FeatureFlag> = {
  'my-new-feature': {
    key: 'my-new-feature',
    name: 'My New Feature',
    description: 'Description of what this feature does',
    enabled: true,
    rolloutPercentage: 100,
    environments: ['development', 'staging', 'production'],
    tags: ['experimental', 'ui'],
  },
}
```

### Flag Properties

| Property | Type | Description |
|----------|------|-------------|
| `key` | string | Unique identifier (required) |
| `name` | string | Human-readable name (required) |
| `description` | string | What the flag controls (required) |
| `enabled` | boolean | Default enabled state (required) |
| `rolloutPercentage` | number | Rollout percentage 0-100 (optional) |
| `environments` | string[] | Allowed environments (optional) |
| `segments` | string[] | User segments that can see this (optional) |
| `expiresAt` | string | ISO date when flag auto-disables (optional) |
| `tags` | string[] | Tags for categorization (optional) |

## Usage Examples

### Basic Feature Toggle

```typescript
const { isEnabled } = useFeatureFlags()

if (isEnabled('dark-mode')) {
  document.body.classList.add('dark')
}
```

### A/B Testing

```typescript
// Define two variants with 50/50 split
const flags = {
  'variant-a': {
    key: 'variant-a',
    name: 'Variant A',
    description: 'Control group',
    enabled: true,
    rolloutPercentage: 50,
  },
  'variant-b': {
    key: 'variant-b',
    name: 'Variant B',
    description: 'Treatment group',
    enabled: true,
    rolloutPercentage: 50,
  },
}

// In component
const { isEnabled } = useFeatureFlags()

if (isEnabled('variant-a')) {
  // Show variant A
} else if (isEnabled('variant-b')) {
  // Show variant B
}
```

Users are consistently assigned to the same variant based on their user ID.

### Gradual Rollout

```typescript
// Start with 10% rollout
'new-feature': {
  key: 'new-feature',
  name: 'New Feature',
  description: 'Experimental feature',
  enabled: true,
  rolloutPercentage: 10, // Only 10% of users see this
}

// Gradually increase rollout percentage
// Week 1: 10%
// Week 2: 25%
// Week 3: 50%
// Week 4: 100%
```

### Environment-Specific Features

```typescript
'staging-feature': {
  key: 'staging-feature',
  name: 'Staging Feature',
  description: 'Only available in staging',
  enabled: true,
  environments: ['staging'], // Not available in production
}
```

### Segment-Based Targeting

```typescript
'premium-feature': {
  key: 'premium-feature',
  name: 'Premium Feature',
  description: 'Only for premium users',
  enabled: true,
  segments: ['premium', 'vip'], // Only these segments
}

// Set user segments
const { setUserSegments } = useFeatureFlags()
setUserSegments(['premium'])
```

### Temporary Features with Expiry

```typescript
'holiday-theme': {
  key: 'holiday-theme',
  name: 'Holiday Theme',
  description: 'Special holiday theme',
  enabled: true,
  expiresAt: '2025-01-01T00:00:00Z', // Auto-disable after New Year
}
```

## Runtime Overrides

### Local Development

Use localStorage overrides for testing:

```typescript
const { setOverride, clearOverride } = useFeatureFlags()

// Enable a feature temporarily
setOverride('new-feature', true)

// Disable a feature temporarily
setOverride('new-feature', false)

// Clear override (use default value)
clearOverride('new-feature')

// Clear all overrides
clearAllOverrides()
```

### URL Query Parameters

Override flags via URL for testing:

```
# Enable feature
https://yoursite.com/?ff_new-feature=true

# Disable feature
https://yoursite.com/?ff_new-feature=false
```

### Environment Variables

Override default values with environment variables:

```bash
# In .env
NUXT_PUBLIC_FF_IMAGE_AVIF=true
NUXT_PUBLIC_FF_NEW_CHECKOUT_FLOW=false
```

Format: `NUXT_PUBLIC_FF_<FLAG_KEY>=true/false` (replace dashes with underscores)

## Admin Panel

Access the feature flags admin panel to manage flags at runtime:

```vue
<template>
  <div>
    <!-- Admin panel component -->
    <FeatureFlagsAdmin v-if="isAdmin" />
  </div>
</template>

<script setup lang="ts">
const isAdmin = ref(true) // Your auth logic
</script>
```

Admin panel features:
- View all flags and their states
- Toggle flags with overrides
- See evaluation reason (default, override, rollout, etc.)
- Filter by tags
- Search flags
- Clear overrides

## User Context

### Set User ID

For consistent A/B testing, set a user ID:

```typescript
const { setUserId } = useFeatureFlags()

// On login
function onLogin(user) {
  setUserId(user.id)
}
```

Same user ID always gets the same rollout bucket.

### Set User Segments

Target specific user groups:

```typescript
const { setUserSegments } = useFeatureFlags()

// Set segments based on user data
const segments = []
if (user.isPremium) segments.push('premium')
if (user.purchaseCount > 0) segments.push('returning')
if (user.role === 'admin') segments.push('admin')

setUserSegments(segments)
```

## Best Practices

### Naming Conventions

- Use kebab-case: `new-checkout-flow`
- Be descriptive: `product-recommendations` not `new-feature-1`
- Group related flags with prefixes: `payment-apple-pay`, `payment-google-pay`

### Lifecycle Management

1. **Development**: Start with flag disabled, test locally
2. **Staging**: Enable for staging environment
3. **Production**: Gradual rollout (10% → 25% → 50% → 100%)
4. **Cleanup**: Remove flag code after 100% rollout for 2+ weeks

### Flag Hygiene

- **Remove old flags**: Clean up flags after features are fully rolled out
- **Document flags**: Always include clear name and description
- **Set expiry dates**: Use `expiresAt` for temporary features
- **Tag appropriately**: Use tags for easy filtering and searching

### Performance Considerations

- **Cache flag checks**: Don't call `isEnabled()` repeatedly in loops
- **Use computed values**: Cache flag results in computed properties
- **Minimize flag count**: Too many flags can be hard to manage

```vue
<script setup lang="ts">
const { isEnabled } = useFeatureFlags()

// ❌ Bad: Checking in loop
for (const item of items) {
  if (isEnabled('feature')) {
    // ...
  }
}

// ✅ Good: Cache the result
const featureEnabled = computed(() => isEnabled('feature'))
for (const item of items) {
  if (featureEnabled.value) {
    // ...
  }
}
</script>
```

### Testing

Test both enabled and disabled states:

```typescript
import { describe, it, expect } from 'vitest'

describe('MyComponent', () => {
  it('shows new UI when flag enabled', () => {
    const { setOverride } = useFeatureFlags()
    setOverride('new-ui', true)

    const wrapper = mount(MyComponent)
    expect(wrapper.find('.new-ui').exists()).toBe(true)
  })

  it('shows old UI when flag disabled', () => {
    const { setOverride } = useFeatureFlags()
    setOverride('new-ui', false)

    const wrapper = mount(MyComponent)
    expect(wrapper.find('.old-ui').exists()).toBe(true)
  })
})
```

## Advanced Usage

### Get All Enabled Flags

```typescript
const { getEnabledFlags } = useFeatureFlags()

const enabledFlags = getEnabledFlags()
console.log('Enabled flags:', enabledFlags)
// ['image-avif', 'web-vitals-tracking', 'product-reviews']
```

### Get Flags by Tag

```typescript
const { getFlagsByTag } = useFeatureFlags()

const experimentalFlags = getFlagsByTag('experimental')
const performanceFlags = getFlagsByTag('performance')
```

### Get Current Context

```typescript
const { getContext } = useFeatureFlags()

const context = getContext()
console.log('Environment:', context.environment)
console.log('User ID:', context.userId)
console.log('Segments:', context.userSegments)
```

## Analytics Integration

Track which variant users see:

```typescript
const { isEnabled, getEvaluation } = useFeatureFlags()

const result = getEvaluation('new-checkout-flow')
if (result.enabled) {
  // Track with analytics
  gtag('event', 'feature_flag', {
    flag: 'new-checkout-flow',
    enabled: true,
    reason: result.reason,
  })
}
```

## Migration Guide

### From Environment Variables

Before:
```typescript
if (process.env.ENABLE_NEW_FEATURE === 'true') {
  // Feature code
}
```

After:
```typescript
const { isEnabled } = useFeatureFlags()

if (isEnabled('new-feature')) {
  // Feature code
}
```

### From Hard-Coded Toggles

Before:
```typescript
const ENABLE_FEATURE = true // Change and redeploy
```

After:
```typescript
// Configure in featureFlags.ts
'my-feature': {
  key: 'my-feature',
  name: 'My Feature',
  description: 'Feature description',
  enabled: true,
}
```

## Troubleshooting

### Flag Not Working

1. Check flag exists in configuration:
   ```typescript
   const { getFlag } = useFeatureFlags()
   console.log(getFlag('my-feature'))
   ```

2. Check evaluation result:
   ```typescript
   const { getEvaluation } = useFeatureFlags()
   const result = getEvaluation('my-feature')
   console.log('Enabled:', result.enabled, 'Reason:', result.reason)
   ```

3. Check for overrides:
   ```typescript
   localStorage.getItem('feature-flag-overrides')
   ```

4. Clear overrides:
   ```typescript
   const { clearAllOverrides } = useFeatureFlags()
   clearAllOverrides()
   ```

### Inconsistent Rollout

Ensure user ID is set consistently:

```typescript
const { setUserId } = useFeatureFlags()

// Set on app init and after login
onMounted(() => {
  const userId = getCurrentUserId()
  if (userId) {
    setUserId(userId)
  }
})
```

### Flag Not Available in Environment

Check environment configuration:

```typescript
'my-feature': {
  key: 'my-feature',
  enabled: true,
  environments: ['staging', 'production'], // Not in development
}
```

## API Reference

See the auto-generated documentation at `/docs/reference/composables/useFeatureFlags.html` for detailed API information.

## Examples

See `apps/web/app/config/featureFlags.ts` for comprehensive examples of all flag types and configurations.

## Resources

- [Feature Flags Best Practices](https://martinfowler.com/articles/feature-toggles.html)
- [LaunchDarkly Feature Flag Guide](https://launchdarkly.com/blog/what-are-feature-flags/)
- [Unleash Feature Toggle Patterns](https://docs.getunleash.io/)
