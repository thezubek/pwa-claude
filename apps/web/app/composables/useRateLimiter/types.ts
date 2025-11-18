/**
 * Rate limiter configuration
 */
export interface RateLimiterConfig {
  /**
   * Maximum number of tokens in the bucket
   * @default 10
   */
  maxTokens: number

  /**
   * Number of tokens to refill per interval
   * @default 1
   */
  refillRate: number

  /**
   * Interval in milliseconds for token refill
   * @default 1000 (1 second)
   */
  refillInterval: number

  /**
   * Maximum burst size (tokens consumed in one go)
   * @default 5
   */
  burstSize: number
}

/**
 * Result of rate limit check
 */
export interface RateLimitResult {
  /**
   * Whether the request is allowed
   */
  allowed: boolean

  /**
   * Number of tokens remaining
   */
  remaining: number

  /**
   * Time in milliseconds to wait before retrying
   */
  retryAfter?: number

  /**
   * Timestamp when tokens will be refilled
   */
  resetAt: number
}
