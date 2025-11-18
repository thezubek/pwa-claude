import { logger } from '~/utils/logger'
import type {
  FeatureFlag,
  FeatureFlagsConfig,
  FeatureFlagContext,
  FeatureFlagResult,
} from './types'

/**
 * Feature Flags Composable
 *
 * Provides runtime feature toggling without deployments.
 * Supports A/B testing, gradual rollouts, and user segmentation.
 *
 * @example
 * ```ts
 * const { isEnabled, getFlag, setOverride } = useFeatureFlags()
 *
 * if (isEnabled('new-checkout-flow')) {
 *   // Show new checkout
 * }
 *
 * // A/B testing
 * const showNewFeature = isEnabled('experimental-ui')
 *
 * // Override for testing
 * setOverride('new-feature', true)
 * ```
 */
export function useFeatureFlags() {
  const log = logger.namespace('FeatureFlags')
  const config = useRuntimeConfig()
  const route = useRoute()

  // State management
  const flags = useState<Record<string, FeatureFlag>>('feature-flags', () => ({}))
  const overrides = useState<Record<string, boolean>>('feature-flag-overrides', () => ({}))
  const context = useState<FeatureFlagContext>('feature-flag-context', () => ({
    environment: (process.env.NODE_ENV as any) || 'development',
  }))

  /**
   * Initialize feature flags from configuration
   */
  function initialize(initialFlags: Record<string, FeatureFlag>) {
    flags.value = initialFlags
    loadOverridesFromStorage()
    loadContextFromStorage()
    log.info(`Initialized ${Object.keys(initialFlags).length} feature flags`)
  }

  /**
   * Load overrides from localStorage
   */
  function loadOverridesFromStorage() {
    if (process.client) {
      try {
        const stored = localStorage.getItem('feature-flag-overrides')
        if (stored) {
          overrides.value = JSON.parse(stored)
          log.debug('Loaded overrides from storage', overrides.value)
        }
      } catch (err) {
        log.error('Failed to load overrides from storage', err)
      }
    }
  }

  /**
   * Save overrides to localStorage
   */
  function saveOverridesToStorage() {
    if (process.client) {
      try {
        localStorage.setItem('feature-flag-overrides', JSON.stringify(overrides.value))
        log.debug('Saved overrides to storage')
      } catch (err) {
        log.error('Failed to save overrides to storage', err)
      }
    }
  }

  /**
   * Load context (userId, segments) from localStorage
   */
  function loadContextFromStorage() {
    if (process.client) {
      try {
        const stored = localStorage.getItem('feature-flag-context')
        if (stored) {
          const storedContext = JSON.parse(stored)
          context.value = {
            ...context.value,
            ...storedContext,
          }
          log.debug('Loaded context from storage', context.value)
        }
      } catch (err) {
        log.error('Failed to load context from storage', err)
      }
    }
  }

  /**
   * Save context to localStorage
   */
  function saveContextToStorage() {
    if (process.client) {
      try {
        localStorage.setItem('feature-flag-context', JSON.stringify(context.value))
        log.debug('Saved context to storage')
      } catch (err) {
        log.error('Failed to save context to storage', err)
      }
    }
  }

  /**
   * Hash a string to a number (for consistent A/B testing)
   */
  function hashString(str: string): number {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash // Convert to 32-bit integer
    }
    return Math.abs(hash)
  }

  /**
   * Check if user is in rollout percentage
   */
  function isInRollout(flagKey: string, percentage: number): boolean {
    const userId = context.value.userId || 'anonymous'
    const seed = `${flagKey}:${userId}`
    const hash = hashString(seed)
    const bucket = hash % 100
    return bucket < percentage
  }

  /**
   * Evaluate a feature flag
   */
  function evaluate(flagKey: string): FeatureFlagResult {
    const flag = flags.value[flagKey]

    // Flag doesn't exist
    if (!flag) {
      log.warn(`Feature flag "${flagKey}" not found`)
      return {
        enabled: false,
        reason: 'default',
      }
    }

    // Check for override
    if (overrides.value[flagKey] !== undefined) {
      return {
        enabled: overrides.value[flagKey],
        reason: 'override',
        flag,
      }
    }

    // Check for URL query parameter override
    if (process.client && route.query[`ff_${flagKey}`] !== undefined) {
      const queryValue = route.query[`ff_${flagKey}`] === 'true'
      return {
        enabled: queryValue,
        reason: 'override',
        flag,
      }
    }

    // Check expiry
    if (flag.expiresAt) {
      const expiryDate = new Date(flag.expiresAt)
      if (expiryDate < new Date()) {
        return {
          enabled: false,
          reason: 'expired',
          flag,
        }
      }
    }

    // Check environment
    if (flag.environments && flag.environments.length > 0) {
      if (!flag.environments.includes(context.value.environment)) {
        return {
          enabled: false,
          reason: 'environment',
          flag,
        }
      }
    }

    // Check user segments
    if (flag.segments && flag.segments.length > 0) {
      const userSegments = context.value.userSegments || []
      const hasSegment = flag.segments.some((seg) => userSegments.includes(seg))
      if (!hasSegment) {
        return {
          enabled: false,
          reason: 'segment',
          flag,
        }
      }
    }

    // Check rollout percentage (A/B testing)
    if (flag.rolloutPercentage !== undefined && flag.rolloutPercentage < 100) {
      const inRollout = isInRollout(flagKey, flag.rolloutPercentage)
      return {
        enabled: inRollout && flag.enabled,
        reason: 'rollout',
        flag,
      }
    }

    // Default: use flag's enabled value
    return {
      enabled: flag.enabled,
      reason: 'default',
      flag,
    }
  }

  /**
   * Check if a feature is enabled
   */
  function isEnabled(flagKey: string): boolean {
    const result = evaluate(flagKey)
    return result.enabled
  }

  /**
   * Get a feature flag
   */
  function getFlag(flagKey: string): FeatureFlag | undefined {
    return flags.value[flagKey]
  }

  /**
   * Get all feature flags
   */
  function getAllFlags(): Record<string, FeatureFlag> {
    return flags.value
  }

  /**
   * Get evaluation result for a flag
   */
  function getEvaluation(flagKey: string): FeatureFlagResult {
    return evaluate(flagKey)
  }

  /**
   * Set an override for a flag
   */
  function setOverride(flagKey: string, enabled: boolean) {
    overrides.value[flagKey] = enabled
    saveOverridesToStorage()
    log.info(`Set override for "${flagKey}": ${enabled}`)
  }

  /**
   * Clear override for a flag
   */
  function clearOverride(flagKey: string) {
    delete overrides.value[flagKey]
    saveOverridesToStorage()
    log.info(`Cleared override for "${flagKey}"`)
  }

  /**
   * Clear all overrides
   */
  function clearAllOverrides() {
    overrides.value = {}
    saveOverridesToStorage()
    log.info('Cleared all overrides')
  }

  /**
   * Set user ID for consistent A/B testing
   */
  function setUserId(userId: string) {
    context.value.userId = userId
    saveContextToStorage()
    log.info(`Set user ID: ${userId}`)
  }

  /**
   * Set user segments for targeted rollouts
   */
  function setUserSegments(segments: string[]) {
    context.value.userSegments = segments
    saveContextToStorage()
    log.info(`Set user segments: ${segments.join(', ')}`)
  }

  /**
   * Get current context
   */
  function getContext(): FeatureFlagContext {
    return context.value
  }

  /**
   * Get all enabled flags
   */
  function getEnabledFlags(): string[] {
    return Object.keys(flags.value).filter((key) => isEnabled(key))
  }

  /**
   * Get flags by tag
   */
  function getFlagsByTag(tag: string): FeatureFlag[] {
    return Object.values(flags.value).filter((flag) => flag.tags?.includes(tag))
  }

  return {
    // State
    flags: readonly(flags),
    overrides: readonly(overrides),
    context: readonly(context),

    // Methods
    initialize,
    isEnabled,
    getFlag,
    getAllFlags,
    getEvaluation,
    setOverride,
    clearOverride,
    clearAllOverrides,
    setUserId,
    setUserSegments,
    getContext,
    getEnabledFlags,
    getFlagsByTag,
  }
}
