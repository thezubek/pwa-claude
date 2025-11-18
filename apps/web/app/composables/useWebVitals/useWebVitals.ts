import { onCLS, onFID, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals'
import { logger } from '~/utils/logger'
import type { WebVitalsMetrics, WebVitalsConfig, WebVitalsReport } from './types'

/**
 * Composable for tracking Core Web Vitals
 *
 * Monitors and reports performance metrics (LCP, FID, CLS, etc.)
 * to analytics and logging services.
 *
 * @example
 * ```ts
 * const { startTracking, metrics, getReport } = useWebVitals()
 *
 * // Start tracking (usually in app.vue or plugin)
 * onMounted(() => {
 *   startTracking({
 *     reportToAnalytics: true,
 *     logToConsole: true
 *   })
 * })
 *
 * // Get current metrics
 * console.log(metrics.value)
 * ```
 */
export function useWebVitals() {
  const log = logger.namespace('WebVitals')
  const metrics = useState<WebVitalsMetrics>('web-vitals-metrics', () => ({}))
  const isTracking = useState('web-vitals-tracking', () => false)

  /**
   * Check if metric is within "good" threshold
   */
  function isGoodMetric(name: string, value: number): boolean {
    const thresholds = {
      LCP: 2500, // Good: < 2.5s
      FID: 100, // Good: < 100ms
      CLS: 0.1, // Good: < 0.1
      INP: 200, // Good: < 200ms
      FCP: 1800, // Good: < 1.8s
      TTFB: 800, // Good: < 800ms
    }

    return value < (thresholds[name as keyof typeof thresholds] || Infinity)
  }

  /**
   * Get rating for a metric value
   */
  function getMetricRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds = {
      LCP: { good: 2500, poor: 4000 },
      FID: { good: 100, poor: 300 },
      CLS: { good: 0.1, poor: 0.25 },
      INP: { good: 200, poor: 500 },
      FCP: { good: 1800, poor: 3000 },
      TTFB: { good: 800, poor: 1800 },
    }

    const threshold = thresholds[name as keyof typeof thresholds]
    if (!threshold) return 'good'

    if (value <= threshold.good) return 'good'
    if (value <= threshold.poor) return 'needs-improvement'
    return 'poor'
  }

  /**
   * Handle metric callback
   */
  function handleMetric(metric: Metric, config: WebVitalsConfig) {
    const { name, value, rating, delta, id } = metric

    // Store metric
    metrics.value[name] = {
      value,
      rating: getMetricRating(name, value),
      delta,
      id,
      timestamp: Date.now(),
    }

    // Log to console in development
    if (config.logToConsole && process.env.NODE_ENV === 'development') {
      const isGood = isGoodMetric(name, value)
      const emoji = isGood ? '✅' : '⚠️'
      log.info(`${emoji} ${name}: ${value.toFixed(2)} (${rating})`)
    }

    // Send to analytics
    if (config.reportToAnalytics) {
      sendToAnalytics(metric, config)
    }

    // Custom callback
    config.onMetric?.(metric)
  }

  /**
   * Send metric to analytics service
   */
  function sendToAnalytics(metric: Metric, config: WebVitalsConfig) {
    const { name, value, rating, delta, id } = metric

    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: id,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        metric_rating: rating,
        metric_delta: Math.round(delta),
        non_interaction: true,
      })
    }

    // Custom analytics endpoint
    if (config.analyticsEndpoint) {
      const url = new URL(window.location.href)
      fetch(config.analyticsEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          metric: name,
          value,
          rating,
          delta,
          id,
          page: url.pathname,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          connection: (navigator as any).connection?.effectiveType,
        }),
        keepalive: true,
      }).catch((err) => log.error('Failed to send analytics', err))
    }
  }

  /**
   * Start tracking Core Web Vitals
   */
  function startTracking(config: Partial<WebVitalsConfig> = {}) {
    if (isTracking.value || typeof window === 'undefined') return

    const finalConfig: WebVitalsConfig = {
      reportToAnalytics: true,
      logToConsole: process.env.NODE_ENV === 'development',
      ...config,
    }

    log.info('Starting Core Web Vitals tracking')

    // Track each metric
    onLCP((metric) => handleMetric(metric, finalConfig))
    onFID((metric) => handleMetric(metric, finalConfig))
    onCLS((metric) => handleMetric(metric, finalConfig))
    onINP((metric) => handleMetric(metric, finalConfig))
    onFCP((metric) => handleMetric(metric, finalConfig))
    onTTFB((metric) => handleMetric(metric, finalConfig))

    isTracking.value = true
  }

  /**
   * Get formatted report of all metrics
   */
  function getReport(): WebVitalsReport {
    const metricValues = Object.values(metrics.value)
    const total = metricValues.length

    if (total === 0) {
      return {
        metrics: metrics.value,
        summary: { total: 0, good: 0, needsImprovement: 0, poor: 0, score: 0 },
      }
    }

    const good = metricValues.filter((m) => m.rating === 'good').length
    const needsImprovement = metricValues.filter((m) => m.rating === 'needs-improvement').length
    const poor = metricValues.filter((m) => m.rating === 'poor').length

    // Calculate overall score (0-100)
    const score = Math.round((good / total) * 100)

    return {
      metrics: metrics.value,
      summary: {
        total,
        good,
        needsImprovement,
        poor,
        score,
      },
    }
  }

  /**
   * Reset all metrics
   */
  function reset() {
    metrics.value = {}
  }

  return {
    startTracking,
    metrics: readonly(metrics),
    isTracking: readonly(isTracking),
    getReport,
    reset,
  }
}
