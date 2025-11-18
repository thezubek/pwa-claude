/**
 * Feature Flags Plugin
 *
 * Initializes the feature flag system on app startup.
 * Loads flags from configuration and environment variables.
 */

import { featureFlags, loadFeatureFlagsFromEnv } from '~/config/featureFlags'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const { initialize, setUserId, setUserSegments } = useFeatureFlags()

  // Load flags with environment variable overrides
  const flags = loadFeatureFlagsFromEnv(config, featureFlags)

  // Initialize feature flags
  initialize(flags)

  // Set user context if available
  // This would typically come from authentication
  if (process.client) {
    // Try to get user ID from localStorage or session
    const storedUserId = localStorage.getItem('userId')
    if (storedUserId) {
      setUserId(storedUserId)
    }

    // Set user segments based on user data
    // Example: premium users, returning customers, etc.
    const segments: string[] = []

    // Check if user has made purchases before
    const hasPurchaseHistory = localStorage.getItem('hasPurchaseHistory') === 'true'
    if (hasPurchaseHistory) {
      segments.push('returning')
    }

    // Check if user is premium
    const isPremium = localStorage.getItem('isPremium') === 'true'
    if (isPremium) {
      segments.push('premium')
    }

    if (segments.length > 0) {
      setUserSegments(segments)
    }
  }
})
