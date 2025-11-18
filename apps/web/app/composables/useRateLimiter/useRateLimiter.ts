import { logger } from '~/utils/logger'
import type { RateLimiterConfig, RateLimitResult } from './types'

/**
 * Composable for client-side API rate limiting
 *
 * Implements token bucket algorithm to prevent API abuse.
 *
 * @example
 * ```ts
 * const { throttle, checkLimit } = useRateLimiter('api-endpoint')
 *
 * // Throttle API call
 * const result = await throttle(async () => {
 *   return await $fetch('/api/products')
 * })
 *
 * if (!result.allowed) {
 *   console.log(`Rate limited. Retry after ${result.retryAfter}ms`)
 * }
 * ```
 */
export function useRateLimiter(endpoint?: string) {
  const log = logger.namespace('useRateLimiter')

  /**
   * Token buckets per endpoint
   */
  const buckets = useState<Record<string, TokenBucket>>('rate-limit-buckets', () => ({}))

  /**
   * Default rate limiter configuration
   */
  const defaultConfig: RateLimiterConfig = {
    maxTokens: 10,
    refillRate: 1,
    refillInterval: 1000,
    burstSize: 5,
  }

  /**
   * Get or create token bucket for endpoint
   */
  function getBucket(key: string, config: Partial<RateLimiterConfig> = {}): TokenBucket {
    if (!buckets.value[key]) {
      const finalConfig = { ...defaultConfig, ...config }
      buckets.value[key] = createTokenBucket(finalConfig)
    }
    return buckets.value[key]
  }

  /**
   * Check if request is allowed under rate limit
   */
  function checkLimit(
    key: string = endpoint || 'default',
    cost: number = 1,
    config?: Partial<RateLimiterConfig>,
  ): RateLimitResult {
    const bucket = getBucket(key, config)
    return bucket.tryConsume(cost)
  }

  /**
   * Throttle an async function with rate limiting
   */
  async function throttle<T>(
    fn: () => Promise<T>,
    options: {
      key?: string
      cost?: number
      config?: Partial<RateLimiterConfig>
      onRateLimit?: (retryAfter: number) => void
    } = {},
  ): Promise<{ success: boolean; data?: T; error?: Error; retryAfter?: number }> {
    const key = options.key || endpoint || 'default'
    const cost = options.cost || 1

    const limit = checkLimit(key, cost, options.config)

    if (!limit.allowed) {
      log.warn(`Rate limit exceeded for ${key}. Retry after ${limit.retryAfter}ms`)

      // Call callback if provided
      options.onRateLimit?.(limit.retryAfter)

      return {
        success: false,
        error: new Error(`Rate limit exceeded. Retry after ${limit.retryAfter}ms`),
        retryAfter: limit.retryAfter,
      }
    }

    try {
      const data = await fn()
      return { success: true, data }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error : new Error('Unknown error'),
      }
    }
  }

  /**
   * Debounce a function (different from throttle - waits for silence)
   */
  function debounce<T extends (...args: any[]) => any>(
    fn: T,
    delay: number,
  ): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    return (...args: Parameters<T>) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        fn(...args)
        timeoutId = null
      }, delay)
    }
  }

  /**
   * Get current status of rate limiter
   */
  function getStatus(key: string = endpoint || 'default'): {
    tokens: number
    maxTokens: number
    percentage: number
  } {
    const bucket = buckets.value[key]
    if (!bucket) {
      return { tokens: 0, maxTokens: 0, percentage: 0 }
    }

    return {
      tokens: bucket.tokens,
      maxTokens: bucket.maxTokens,
      percentage: (bucket.tokens / bucket.maxTokens) * 100,
    }
  }

  /**
   * Reset rate limiter for specific endpoint
   */
  function reset(key: string = endpoint || 'default'): void {
    if (buckets.value[key]) {
      buckets.value[key].tokens = buckets.value[key].maxTokens
      log.debug(`Reset rate limiter for ${key}`)
    }
  }

  /**
   * Clear all rate limiters
   */
  function clearAll(): void {
    buckets.value = {}
    log.debug('Cleared all rate limiters')
  }

  return {
    throttle,
    checkLimit,
    debounce,
    getStatus,
    reset,
    clearAll,
  }
}

/**
 * Token bucket implementation
 */
interface TokenBucket {
  tokens: number
  maxTokens: number
  refillRate: number
  refillInterval: number
  lastRefill: number
  tryConsume: (cost: number) => RateLimitResult
}

/**
 * Create a token bucket for rate limiting
 */
function createTokenBucket(config: RateLimiterConfig): TokenBucket {
  const bucket: TokenBucket = {
    tokens: config.maxTokens,
    maxTokens: config.maxTokens,
    refillRate: config.refillRate,
    refillInterval: config.refillInterval,
    lastRefill: Date.now(),

    tryConsume(cost: number): RateLimitResult {
      // Refill tokens based on time elapsed
      const now = Date.now()
      const elapsed = now - this.lastRefill
      const refillCount = Math.floor(elapsed / this.refillInterval) * this.refillRate

      if (refillCount > 0) {
        this.tokens = Math.min(this.maxTokens, this.tokens + refillCount)
        this.lastRefill = now
      }

      // Check if we have enough tokens
      if (this.tokens >= cost) {
        this.tokens -= cost
        return {
          allowed: true,
          remaining: this.tokens,
          resetAt: this.lastRefill + this.refillInterval,
        }
      }

      // Calculate retry after time
      const tokensNeeded = cost - this.tokens
      const timeToRefill = Math.ceil((tokensNeeded / this.refillRate) * this.refillInterval)

      return {
        allowed: false,
        remaining: this.tokens,
        retryAfter: timeToRefill,
        resetAt: this.lastRefill + this.refillInterval,
      }
    },
  }

  return bucket
}
