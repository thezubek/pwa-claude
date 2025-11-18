import type { Metric } from 'web-vitals'

/**
 * Rating for a Core Web Vitals metric
 */
export type MetricRating = 'good' | 'needs-improvement' | 'poor'

/**
 * Stored metric data
 */
export interface StoredMetric {
  /** Metric value */
  value: number
  /** Performance rating */
  rating: MetricRating
  /** Delta since last measurement */
  delta: number
  /** Unique metric ID */
  id: string
  /** Timestamp of measurement */
  timestamp: number
}

/**
 * Collection of all Web Vitals metrics
 */
export interface WebVitalsMetrics {
  LCP?: StoredMetric
  FID?: StoredMetric
  CLS?: StoredMetric
  INP?: StoredMetric
  FCP?: StoredMetric
  TTFB?: StoredMetric
  [key: string]: StoredMetric | undefined
}

/**
 * Configuration for Web Vitals tracking
 */
export interface WebVitalsConfig {
  /** Send metrics to analytics (default: true) */
  reportToAnalytics?: boolean
  /** Log metrics to console in development (default: true in dev) */
  logToConsole?: boolean
  /** Custom analytics endpoint URL */
  analyticsEndpoint?: string
  /** Custom callback for each metric */
  onMetric?: (metric: Metric) => void
}

/**
 * Web Vitals report summary
 */
export interface WebVitalsReport {
  /** All collected metrics */
  metrics: WebVitalsMetrics
  /** Summary statistics */
  summary: {
    /** Total number of metrics collected */
    total: number
    /** Number of metrics rated as 'good' */
    good: number
    /** Number of metrics rated as 'needs-improvement' */
    needsImprovement: number
    /** Number of metrics rated as 'poor' */
    poor: number
    /** Overall performance score (0-100) */
    score: number
  }
}
