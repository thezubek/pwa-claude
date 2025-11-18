/**
 * Configuration for retry behavior
 */
export interface RetryConfig {
  /**
   * Maximum number of retry attempts (including initial attempt)
   * @default 3
   */
  maxAttempts: number

  /**
   * Initial backoff delay in milliseconds
   * @default 1000
   */
  backoffMs: number

  /**
   * Maximum backoff delay in milliseconds
   * @default 30000
   */
  maxBackoffMs: number

  /**
   * Backoff multiplier for exponential backoff
   * @default 2
   */
  backoffMultiplier: number

  /**
   * Add jitter to backoff to prevent thundering herd
   * @default true
   */
  jitter: boolean

  /**
   * Predicate to determine if error should be retried
   * @default Retries network and timeout errors
   */
  shouldRetry: (error: unknown) => boolean

  /**
   * Callback called on each retry attempt
   */
  onRetry?: (attempt: number, error: unknown) => void
}

/**
 * Result of a retry operation
 */
export type RetryResult<T> =
  | {
      success: true
      data: T
      attempts: number
    }
  | {
      success: false
      error: unknown
      data?: T
      attempts: number
    }
