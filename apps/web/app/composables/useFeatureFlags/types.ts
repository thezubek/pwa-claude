/**
 * Feature flag configuration types
 */

/**
 * Feature flag definition
 */
export interface FeatureFlag {
  /** Unique key for the feature */
  key: string
  /** Human-readable name */
  name: string
  /** Description of what this flag controls */
  description: string
  /** Whether the feature is enabled */
  enabled: boolean
  /** Rollout percentage (0-100) for A/B testing */
  rolloutPercentage?: number
  /** Environments where this flag is available */
  environments?: ('development' | 'staging' | 'production')[]
  /** User segments that can see this feature */
  segments?: string[]
  /** Expiry date (ISO string) - auto-disable after this date */
  expiresAt?: string
  /** Tags for categorization */
  tags?: string[]
}

/**
 * Feature flags configuration
 */
export interface FeatureFlagsConfig {
  /** All feature flags */
  flags: Record<string, FeatureFlag>
  /** Override flags (e.g., from localStorage or admin panel) */
  overrides?: Record<string, boolean>
  /** User ID for consistent A/B testing */
  userId?: string
  /** User segments for targeted rollouts */
  userSegments?: string[]
}

/**
 * Feature flag evaluation context
 */
export interface FeatureFlagContext {
  /** Current environment */
  environment: 'development' | 'staging' | 'production'
  /** User ID for consistent hashing */
  userId?: string
  /** User segments */
  userSegments?: string[]
  /** Custom attributes for evaluation */
  attributes?: Record<string, any>
}

/**
 * Feature flag evaluation result
 */
export interface FeatureFlagResult {
  /** Whether the feature is enabled */
  enabled: boolean
  /** Reason for the decision */
  reason: 'default' | 'override' | 'rollout' | 'environment' | 'segment' | 'expired'
  /** The flag definition */
  flag?: FeatureFlag
}
