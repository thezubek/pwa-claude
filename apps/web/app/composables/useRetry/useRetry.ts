import { logger } from '~/utils/logger'
import type { RetryConfig, RetryResult } from './types'

/**
 * Composable for retry logic with exponential backoff
 *
 * @example
 * ```ts
 * const { retry } = useRetry()
 *
 * const result = await retry(
 *   async () => await fetchData(),
 *   { maxAttempts: 3, backoffMs: 1000 }
 * )
 *
 * if (result.success) {
 *   console.log(result.data)
 * } else {
 *   console.error(result.error)
 * }
 * ```
 */
export function useRetry() {
  const log = logger.namespace('useRetry')

  /**
   * Default retry configuration
   */
  const defaultConfig: RetryConfig = {
    maxAttempts: 3,
    backoffMs: 1000,
    maxBackoffMs: 30000,
    backoffMultiplier: 2,
    jitter: true,
    shouldRetry: (error: unknown) => {
      // Retry on network errors and 5xx server errors
      if (error instanceof Error) {
        return (
          error.message.includes('network') ||
          error.message.includes('timeout') ||
          error.message.includes('fetch')
        )
      }
      return true
    },
    onRetry: (attempt: number, error: unknown) => {
      log.warn(`Retry attempt ${attempt}`, error)
    },
  }

  /**
   * Calculate backoff delay with exponential backoff and optional jitter
   */
  const calculateBackoff = (
    attempt: number,
    baseMs: number,
    multiplier: number,
    maxMs: number,
    useJitter: boolean,
  ): number => {
    const exponentialDelay = baseMs * Math.pow(multiplier, attempt - 1)
    const cappedDelay = Math.min(exponentialDelay, maxMs)

    if (useJitter) {
      // Add random jitter (0-100% of delay) to prevent thundering herd
      const jitterAmount = Math.random() * cappedDelay
      return Math.floor(cappedDelay + jitterAmount * 0.5)
    }

    return Math.floor(cappedDelay)
  }

  /**
   * Sleep for specified milliseconds
   */
  const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  /**
   * Retry an async function with exponential backoff
   */
  async function retry<T>(
    fn: () => Promise<T>,
    config?: Partial<RetryConfig>,
  ): Promise<RetryResult<T>> {
    const options: RetryConfig = { ...defaultConfig, ...config }
    let lastError: unknown

    for (let attempt = 1; attempt <= options.maxAttempts; attempt++) {
      try {
        const data = await fn()
        return {
          success: true,
          data,
          attempts: attempt,
        }
      } catch (error) {
        lastError = error

        // Check if we should retry this error
        if (!options.shouldRetry(error)) {
          log.debug(`Error not retryable, stopping after attempt ${attempt}`)
          break
        }

        // If this was the last attempt, don't wait
        if (attempt === options.maxAttempts) {
          log.debug(`Max attempts (${options.maxAttempts}) reached`)
          break
        }

        // Calculate backoff delay
        const delayMs = calculateBackoff(
          attempt,
          options.backoffMs,
          options.backoffMultiplier,
          options.maxBackoffMs,
          options.jitter,
        )

        // Call retry callback if provided
        options.onRetry?.(attempt, error)

        // Wait before next attempt
        log.debug(`Waiting ${delayMs}ms before attempt ${attempt + 1}`)
        await sleep(delayMs)
      }
    }

    // All attempts failed
    return {
      success: false,
      error: lastError,
      attempts: options.maxAttempts,
    }
  }

  /**
   * Retry with custom predicate - useful for polling
   */
  async function retryUntil<T>(
    fn: () => Promise<T>,
    predicate: (data: T) => boolean,
    config?: Partial<RetryConfig>,
  ): Promise<RetryResult<T>> {
    const options: RetryConfig = { ...defaultConfig, ...config }
    let lastData: T | undefined
    let lastError: unknown

    for (let attempt = 1; attempt <= options.maxAttempts; attempt++) {
      try {
        const data = await fn()
        lastData = data

        // Check if predicate is satisfied
        if (predicate(data)) {
          return {
            success: true,
            data,
            attempts: attempt,
          }
        }

        // If this was the last attempt, return failure
        if (attempt === options.maxAttempts) {
          log.debug(`Max attempts (${options.maxAttempts}) reached, predicate not satisfied`)
          break
        }

        // Calculate backoff delay
        const delayMs = calculateBackoff(
          attempt,
          options.backoffMs,
          options.backoffMultiplier,
          options.maxBackoffMs,
          options.jitter,
        )

        log.debug(`Predicate not satisfied, waiting ${delayMs}ms before attempt ${attempt + 1}`)
        await sleep(delayMs)
      } catch (error) {
        lastError = error

        // Check if we should retry this error
        if (!options.shouldRetry(error)) {
          log.debug(`Error not retryable, stopping after attempt ${attempt}`)
          break
        }

        // If this was the last attempt, don't wait
        if (attempt === options.maxAttempts) {
          log.debug(`Max attempts (${options.maxAttempts}) reached`)
          break
        }

        // Calculate backoff delay
        const delayMs = calculateBackoff(
          attempt,
          options.backoffMs,
          options.backoffMultiplier,
          options.maxBackoffMs,
          options.jitter,
        )

        options.onRetry?.(attempt, error)
        await sleep(delayMs)
      }
    }

    // All attempts failed or predicate never satisfied
    return {
      success: false,
      error: lastError || new Error('Predicate not satisfied'),
      data: lastData,
      attempts: options.maxAttempts,
    }
  }

  return {
    retry,
    retryUntil,
    calculateBackoff,
  }
}
