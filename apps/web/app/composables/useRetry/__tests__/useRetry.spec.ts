import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useRetry } from '../useRetry'

describe('useRetry', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  describe('retry', () => {
    it('should succeed on first attempt', async () => {
      const { retry } = useRetry()
      const fn = vi.fn().mockResolvedValue('success')

      const promise = retry(fn, { maxAttempts: 3, backoffMs: 100 })
      await vi.runAllTimersAsync()
      const result = await promise

      expect(result.success).toBe(true)
      expect(result.data).toBe('success')
      expect(result.attempts).toBe(1)
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('should retry on failure and eventually succeed', async () => {
      const { retry } = useRetry()
      const fn = vi
        .fn()
        .mockRejectedValueOnce(new Error('Network error'))
        .mockRejectedValueOnce(new Error('Network error'))
        .mockResolvedValue('success')

      const promise = retry(fn, { maxAttempts: 3, backoffMs: 100, jitter: false })
      await vi.runAllTimersAsync()
      const result = await promise

      expect(result.success).toBe(true)
      expect(result.data).toBe('success')
      expect(result.attempts).toBe(3)
      expect(fn).toHaveBeenCalledTimes(3)
    })

    it('should fail after max attempts', async () => {
      const { retry } = useRetry()
      const error = new Error('Network error')
      const fn = vi.fn().mockRejectedValue(error)

      const promise = retry(fn, { maxAttempts: 3, backoffMs: 100 })
      await vi.runAllTimersAsync()
      const result = await promise

      expect(result.success).toBe(false)
      expect(result.error).toBe(error)
      expect(result.attempts).toBe(3)
      expect(fn).toHaveBeenCalledTimes(3)
    })

    it('should use exponential backoff', async () => {
      const { retry } = useRetry()
      const fn = vi.fn().mockRejectedValue(new Error('Network error'))
      const delays: number[] = []

      // Mock setTimeout to capture delays
      const originalSetTimeout = global.setTimeout
      global.setTimeout = vi.fn((callback: () => void, ms?: number) => {
        if (ms) delays.push(ms)
        return originalSetTimeout(callback, 0)
      }) as any

      const promise = retry(fn, {
        maxAttempts: 4,
        backoffMs: 100,
        backoffMultiplier: 2,
        jitter: false,
      })
      await vi.runAllTimersAsync()
      await promise

      // Verify exponential backoff: 100ms, 200ms, 400ms
      expect(delays[0]).toBe(100)
      expect(delays[1]).toBe(200)
      expect(delays[2]).toBe(400)

      global.setTimeout = originalSetTimeout
    })

    it('should respect maxBackoffMs', async () => {
      const { retry } = useRetry()
      const fn = vi.fn().mockRejectedValue(new Error('Network error'))
      const delays: number[] = []

      const originalSetTimeout = global.setTimeout
      global.setTimeout = vi.fn((callback: () => void, ms?: number) => {
        if (ms) delays.push(ms)
        return originalSetTimeout(callback, 0)
      }) as any

      const promise = retry(fn, {
        maxAttempts: 5,
        backoffMs: 1000,
        backoffMultiplier: 2,
        maxBackoffMs: 3000,
        jitter: false,
      })
      await vi.runAllTimersAsync()
      await promise

      // Verify capped backoff: 1000ms, 2000ms, 3000ms (capped), 3000ms (capped)
      expect(delays[0]).toBe(1000)
      expect(delays[1]).toBe(2000)
      expect(delays[2]).toBe(3000)
      expect(delays[3]).toBe(3000)

      global.setTimeout = originalSetTimeout
    })

    it('should stop retrying if shouldRetry returns false', async () => {
      const { retry } = useRetry()
      const error = new Error('Not retryable')
      const fn = vi.fn().mockRejectedValue(error)

      const promise = retry(fn, {
        maxAttempts: 5,
        backoffMs: 100,
        shouldRetry: () => false,
      })
      await vi.runAllTimersAsync()
      const result = await promise

      expect(result.success).toBe(false)
      expect(fn).toHaveBeenCalledTimes(1) // Only initial attempt
    })

    it('should call onRetry callback', async () => {
      const { retry } = useRetry()
      const fn = vi.fn().mockRejectedValue(new Error('Network error'))
      const onRetry = vi.fn()

      const promise = retry(fn, {
        maxAttempts: 3,
        backoffMs: 100,
        onRetry,
      })
      await vi.runAllTimersAsync()
      await promise

      expect(onRetry).toHaveBeenCalledTimes(2) // Called on retries, not initial attempt
      expect(onRetry).toHaveBeenNthCalledWith(1, 1, expect.any(Error))
      expect(onRetry).toHaveBeenNthCalledWith(2, 2, expect.any(Error))
    })
  })

  describe('retryUntil', () => {
    it('should succeed when predicate is satisfied', async () => {
      const { retryUntil } = useRetry()
      const fn = vi
        .fn()
        .mockResolvedValueOnce({ status: 'pending' })
        .mockResolvedValueOnce({ status: 'pending' })
        .mockResolvedValue({ status: 'complete' })

      const promise = retryUntil(
        fn,
        (data) => data.status === 'complete',
        { maxAttempts: 5, backoffMs: 100, jitter: false },
      )
      await vi.runAllTimersAsync()
      const result = await promise

      expect(result.success).toBe(true)
      expect(result.data).toEqual({ status: 'complete' })
      expect(result.attempts).toBe(3)
      expect(fn).toHaveBeenCalledTimes(3)
    })

    it('should fail when predicate is never satisfied', async () => {
      const { retryUntil } = useRetry()
      const fn = vi.fn().mockResolvedValue({ status: 'pending' })

      const promise = retryUntil(
        fn,
        (data) => data.status === 'complete',
        { maxAttempts: 3, backoffMs: 100 },
      )
      await vi.runAllTimersAsync()
      const result = await promise

      expect(result.success).toBe(false)
      expect(result.data).toEqual({ status: 'pending' })
      expect(result.attempts).toBe(3)
      expect(fn).toHaveBeenCalledTimes(3)
    })

    it('should handle errors with retryUntil', async () => {
      const { retryUntil } = useRetry()
      const fn = vi
        .fn()
        .mockRejectedValueOnce(new Error('Network error'))
        .mockResolvedValue({ status: 'complete' })

      const promise = retryUntil(
        fn,
        (data) => data.status === 'complete',
        { maxAttempts: 3, backoffMs: 100, jitter: false },
      )
      await vi.runAllTimersAsync()
      const result = await promise

      expect(result.success).toBe(true)
      expect(result.data).toEqual({ status: 'complete' })
      expect(result.attempts).toBe(2)
    })
  })

  describe('calculateBackoff', () => {
    it('should calculate exponential backoff correctly', () => {
      const { calculateBackoff } = useRetry()

      expect(calculateBackoff(1, 100, 2, 10000, false)).toBe(100)
      expect(calculateBackoff(2, 100, 2, 10000, false)).toBe(200)
      expect(calculateBackoff(3, 100, 2, 10000, false)).toBe(400)
      expect(calculateBackoff(4, 100, 2, 10000, false)).toBe(800)
    })

    it('should respect max backoff', () => {
      const { calculateBackoff } = useRetry()

      expect(calculateBackoff(10, 100, 2, 1000, false)).toBe(1000)
    })

    it('should add jitter when enabled', () => {
      const { calculateBackoff } = useRetry()

      const delay1 = calculateBackoff(1, 100, 2, 10000, true)
      const delay2 = calculateBackoff(1, 100, 2, 10000, true)

      // Jittered delays should be >= base delay
      expect(delay1).toBeGreaterThanOrEqual(100)
      expect(delay2).toBeGreaterThanOrEqual(100)

      // And <= base delay + 50% jitter
      expect(delay1).toBeLessThanOrEqual(150)
      expect(delay2).toBeLessThanOrEqual(150)
    })
  })
})
