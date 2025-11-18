import type { FeatureFlag } from '~/composables/useFeatureFlags'

/**
 * Feature Flags Configuration
 *
 * Define all feature flags here. Flags can be toggled via:
 * 1. This configuration file (default state)
 * 2. Environment variables (NUXT_PUBLIC_FF_<FLAG_KEY>=true)
 * 3. Runtime overrides (localStorage or admin panel)
 * 4. URL query parameters (?ff_<flag_key>=true)
 */
export const featureFlags: Record<string, FeatureFlag> = {
  // Image Optimization Features
  'image-avif': {
    key: 'image-avif',
    name: 'AVIF Image Format',
    description: 'Enable AVIF image format support for better compression',
    enabled: true,
    rolloutPercentage: 100,
    environments: ['development', 'staging', 'production'],
    tags: ['performance', 'images'],
  },

  'image-webp': {
    key: 'image-webp',
    name: 'WebP Image Format',
    description: 'Enable WebP image format support',
    enabled: true,
    rolloutPercentage: 100,
    environments: ['development', 'staging', 'production'],
    tags: ['performance', 'images'],
  },

  // Performance Features
  'web-vitals-tracking': {
    key: 'web-vitals-tracking',
    name: 'Web Vitals Tracking',
    description: 'Track and report Core Web Vitals metrics',
    enabled: true,
    environments: ['development', 'staging', 'production'],
    tags: ['performance', 'monitoring'],
  },

  'lazy-hydration': {
    key: 'lazy-hydration',
    name: 'Lazy Hydration',
    description: 'Use lazy hydration for non-critical components',
    enabled: true,
    rolloutPercentage: 100,
    environments: ['production'],
    tags: ['performance', 'optimization'],
  },

  // Experimental Features
  'new-checkout-flow': {
    key: 'new-checkout-flow',
    name: 'New Checkout Flow',
    description: 'Redesigned checkout experience with improved UX',
    enabled: false,
    rolloutPercentage: 10,
    environments: ['development', 'staging'],
    tags: ['experimental', 'checkout'],
  },

  'quick-checkout': {
    key: 'quick-checkout',
    name: 'Quick Checkout',
    description: 'One-click checkout for returning customers',
    enabled: false,
    rolloutPercentage: 25,
    segments: ['premium', 'returning'],
    tags: ['experimental', 'checkout', 'conversion'],
  },

  'product-recommendations': {
    key: 'product-recommendations',
    name: 'AI Product Recommendations',
    description: 'ML-powered product recommendations',
    enabled: false,
    rolloutPercentage: 50,
    environments: ['development', 'staging'],
    tags: ['experimental', 'ai', 'personalization'],
  },

  // A/B Testing Features
  'hero-banner-variant-a': {
    key: 'hero-banner-variant-a',
    name: 'Hero Banner Variant A',
    description: 'Show hero banner variant A (control)',
    enabled: true,
    rolloutPercentage: 50,
    tags: ['ab-test', 'homepage'],
  },

  'hero-banner-variant-b': {
    key: 'hero-banner-variant-b',
    name: 'Hero Banner Variant B',
    description: 'Show hero banner variant B (treatment)',
    enabled: true,
    rolloutPercentage: 50,
    tags: ['ab-test', 'homepage'],
  },

  // Developer Features
  'debug-mode': {
    key: 'debug-mode',
    name: 'Debug Mode',
    description: 'Enable debug logging and developer tools',
    enabled: false,
    environments: ['development'],
    tags: ['developer', 'debugging'],
  },

  'mock-api': {
    key: 'mock-api',
    name: 'Mock API',
    description: 'Use mock API instead of real PlentyONE backend',
    enabled: false,
    environments: ['development'],
    tags: ['developer', 'testing'],
  },

  // UI Features
  'dark-mode': {
    key: 'dark-mode',
    name: 'Dark Mode',
    description: 'Enable dark mode theme',
    enabled: false,
    rolloutPercentage: 0,
    tags: ['ui', 'theme'],
  },

  'new-navigation': {
    key: 'new-navigation',
    name: 'New Navigation',
    description: 'Redesigned navigation menu',
    enabled: false,
    rolloutPercentage: 10,
    environments: ['development', 'staging'],
    tags: ['ui', 'navigation', 'experimental'],
  },

  // Payment Features
  'apple-pay': {
    key: 'apple-pay',
    name: 'Apple Pay',
    description: 'Enable Apple Pay payment method',
    enabled: true,
    environments: ['staging', 'production'],
    tags: ['payment', 'mobile'],
  },

  'google-pay': {
    key: 'google-pay',
    name: 'Google Pay',
    description: 'Enable Google Pay payment method',
    enabled: true,
    environments: ['staging', 'production'],
    tags: ['payment', 'mobile'],
  },

  // Social Features
  'social-login': {
    key: 'social-login',
    name: 'Social Login',
    description: 'Login with Google, Facebook, etc.',
    enabled: false,
    rolloutPercentage: 50,
    tags: ['authentication', 'social'],
  },

  'product-reviews': {
    key: 'product-reviews',
    name: 'Product Reviews',
    description: 'Allow customers to review products',
    enabled: true,
    environments: ['production'],
    tags: ['social', 'ugc'],
  },

  // Accessibility Features
  'high-contrast-mode': {
    key: 'high-contrast-mode',
    name: 'High Contrast Mode',
    description: 'High contrast theme for better accessibility',
    enabled: true,
    tags: ['accessibility', 'theme'],
  },

  'screen-reader-announcements': {
    key: 'screen-reader-announcements',
    name: 'Screen Reader Announcements',
    description: 'Enhanced screen reader support',
    enabled: true,
    tags: ['accessibility', 'a11y'],
  },
}

/**
 * Load feature flags from environment variables
 *
 * Environment variables override default configuration:
 * NUXT_PUBLIC_FF_IMAGE_AVIF=true
 */
export function loadFeatureFlagsFromEnv(
  config: any,
  flags: Record<string, FeatureFlag>,
): Record<string, FeatureFlag> {
  const updatedFlags = { ...flags }

  // Check for environment variable overrides
  Object.keys(updatedFlags).forEach((key) => {
    const envKey = `ff${key.replace(/-/g, '')}`
    const envValue = config.public[envKey]

    if (envValue !== undefined) {
      updatedFlags[key] = {
        ...updatedFlags[key],
        enabled: envValue === true || envValue === 'true',
      }
    }
  })

  return updatedFlags
}
