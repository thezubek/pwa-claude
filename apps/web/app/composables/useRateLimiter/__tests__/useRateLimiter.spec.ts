import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useRateLimiter } from '../useRateLimiter'

describe('useRateLimiter', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('checkLimit', () => {
    it('should allow requests within rate limit', () => {
      const { checkLimit } = useRateLimiter('test-endpoint')

      const result = checkLimit('test-key', 1, {
        maxTokens: 5,
        refillRate: 1,
        refillInterval: 1000,
      })

      expect(result.allowed).toBe(true)
      expect(result.remaining).toBe(4)
    })

    it('should block requests exceeding rate limit', () => {
      const { checkLimit } = useRateLimiter()

      // Use up all tokens
      for (let i = 0; i < 10; i++) {
        checkLimit('test-key', 1, { maxTokens: 10 })
      }

      // This should be rate limited
      const result = checkLimit('test-key', 1, { maxTokens: 10 })

      expect(result.allowed).toBe(false)
      expect(result.retryAfter).toBeGreaterThan(0)
    })

    it('should refill tokens over time', () => {
      const { checkLimit } = useRateLimiter()

      // Use all tokens
      for (let i = 0; i < 5; i++) {
        checkLimit('test-key', 1, {
          maxTokens: 5,
          refillRate: 1,
          refillInterval: 1000,
        })
      }

      // Should be rate limited
      expect(checkLimit('test-key', 1).allowed).toBe(false)

      // Advance time to refill 2 tokens
      vi.advanceTimersByTime(2000)

      // Should now allow 2 requests
      expect(checkLimit('test-key', 1).allowed).toBe(true)
      expect(checkLimit('test-key', 1).allowed).toBe(true)
      expect(checkLimit('test-key', 1).allowed).toBe(false)
    })

    it('should support different endpoints independently', () => {
      const { checkLimit } = useRateLimiter()

      // Consume tokens for endpoint A
      for (let i = 0; i < 5; i++) {
        checkLimit('endpoint-a', 1, { maxTokens: 5 })
      }

      // Endpoint A should be rate limited
      expect(checkLimit('endpoint-a', 1).allowed).toBe(false)

      // Endpoint B should still work
      expect(checkLimit('endpoint-b', 1, { maxTokens: 5 }).allowed).toBe(true)
    })

    it('should handle different cost values', () => {
      const { checkLimit } = useRateLimiter()

      // Consume 3 tokens at once
      const result = checkLimit('test-key', 3, { maxTokens: 10 })

      expect(result.allowed).toBe(true)
      expect(result.remaining).toBe(7)
    })
  })

  describe('throttle', () => {
    it('should execute function if within rate limit', async () => {
      const { throttle } = useRateLimiter()
      const mockFn = vi.fn().mockResolvedValue('success')

      const promise = throttle(mockFn, {
        key: 'test-key',
        config: { maxTokens: 5 },
      })
      await vi.runAllTimersAsync()
      const result = await promise

      expect(result.success).toBe(true)
      expect(result.data).toBe('success')
      expect(mockFn).toHaveBeenCalledTimes(1)
    })

    it('should block function if rate limited', async () => {
      const { throttle } = useRateLimiter()
      const mockFn = vi.fn().mockResolvedValue('success')

      // Use up all tokens
      for (let i = 0; i < 5; i++) {
        await throttle(mockFn, {
          key: 'test-key',
          config: { maxTokens: 5 },
        })
      }

      // This should be rate limited
      const promise = throttle(mockFn, {
        key: 'test-key',
        config: { maxTokens: 5 },
      })
      await vi.runAllTimersAsync()
      const result = await promise

      expect(result.success).toBe(false)
      expect(result.error?.message).toContain('Rate limit exceeded')
      expect(result.retryAfter).toBeGreaterThan(0)
    })

    it('should call onRateLimit callback when rate limited', async () => {
      const { throttle } = useRateLimiter()
      const mockFn = vi.fn().mockResolvedValue('success')
      const onRateLimit = vi.fn()

      // Use up all tokens
      for (let i = 0; i < 3; i++) {
        await throttle(mockFn, {
          key: 'test-key',
          config: { maxTokens: 3 },
        })
      }

      // This should trigger onRateLimit
      await throttle(mockFn, {
        key: 'test-key',
        config: { maxTokens: 3 },
        onRateLimit,
      })

      expect(onRateLimit).toHaveBeenCalled()
      expect(onRateLimit).toHaveBeenCalledWith(expect.any(Number))
    })

    it('should handle function errors', async () => {
      const { throttle } = useRateLimiter()
      const error = new Error('Function failed')
      const mockFn = vi.fn().mockRejectedValue(error)

      const promise = throttle(mockFn, {
        key: 'test-key',
        config: { maxTokens: 5 },
      })
      await vi.runAllTimersAsync()
      const result = await promise

      expect(result.success).toBe(false)
      expect(result.error).toBe(error)
    })
  })

  describe('debounce', () => {
    it('should delay function execution', () => {
      const { debounce } = useRateLimiter()
      const mockFn = vi.fn()

      const debouncedFn = debounce(mockFn, 1000)

      debouncedFn('arg1')
      expect(mockFn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(1000)
      expect(mockFn).toHaveBeenCalledWith('arg1')
    })

    it('should reset timer on multiple calls', () => {
      const { debounce } = useRateLimiter()
      const mockFn = vi.fn()

      const debouncedFn = debounce(mockFn, 1000)

      debouncedFn('call1')
      vi.advanceTimersByTime(500)

      debouncedFn('call2') // Reset timer
      vi.advanceTimersByTime(500)

      expect(mockFn).not.toHaveBeenCalled()

      vi.advanceTimersByTime(500) // Total 1000ms from last call
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith('call2')
    })
  })

  describe('getStatus', () => {
    it('should return current token status', () => {
      const { checkLimit, getStatus } = useRateLimiter()

      checkLimit('test-key', 3, { maxTokens: 10 })

      const status = getStatus('test-key')

      expect(status.tokens).toBe(7)
      expect(status.maxTokens).toBe(10)
      expect(status.percentage).toBe(70)
    })
  })

  describe('reset', () => {
    it('should reset tokens to max', () => {
      const { checkLimit, reset, getStatus } = useRateLimiter()

      // Use some tokens
      checkLimit('test-key', 5, { maxTokens: 10 })

      expect(getStatus('test-key').tokens).toBe(5)

      // Reset
      reset('test-key')

      expect(getStatus('test-key').tokens).toBe(10)
    })
  })

  describe('clearAll', () => {
    it('should clear all rate limiters', () => {
      const { checkLimit, clearAll, getStatus } = useRateLimiter()

      checkLimit('key1', 1, { maxTokens: 5 })
      checkLimit('key2', 1, { maxTokens: 5 })

      clearAll()

      expect(getStatus('key1').tokens).toBe(0)
      expect(getStatus('key2').tokens).toBe(0)
    })
  })
})
