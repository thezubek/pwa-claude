# Core Web Vitals Monitoring

This application automatically tracks Core Web Vitals performance metrics using the [web-vitals](https://github.com/GoogleChrome/web-vitals) library.

## What are Core Web Vitals?

Core Web Vitals are a set of performance metrics that measure real-world user experience:

- **LCP (Largest Contentful Paint)**: Loading performance - measures when the largest content element becomes visible
- **FID (First Input Delay)**: Interactivity - measures time from first user interaction to browser response
- **CLS (Cumulative Layout Shift)**: Visual stability - measures unexpected layout shifts
- **INP (Interaction to Next Paint)**: Responsiveness - measures latency of all user interactions
- **FCP (First Contentful Paint)**: Loading - measures when first content is painted
- **TTFB (Time to First Byte)**: Server response time - measures time until first byte is received

## Performance Thresholds

Metrics are rated as "good", "needs-improvement", or "poor" based on these thresholds:

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP | < 2.5s | 2.5s - 4.0s | > 4.0s |
| FID | < 100ms | 100ms - 300ms | > 300ms |
| CLS | < 0.1 | 0.1 - 0.25 | > 0.25 |
| INP | < 200ms | 200ms - 500ms | > 500ms |
| FCP | < 1.8s | 1.8s - 3.0s | > 3.0s |
| TTFB | < 800ms | 800ms - 1800ms | > 1800ms |

## Automatic Tracking

Web Vitals tracking starts automatically when the app loads via the `04.web-vitals.ts` plugin.

Metrics are:
- Logged to console in development mode
- Sent to Google Analytics 4 (if gtag is available)
- Available for custom analytics endpoints

## Manual Usage

You can also use the `useWebVitals` composable directly in your components:

### Basic Usage

```vue
<script setup lang="ts">
const { metrics, getReport, startTracking } = useWebVitals()

onMounted(() => {
  startTracking({
    reportToAnalytics: true,
    logToConsole: true
  })
})

// Access current metrics
watchEffect(() => {
  console.log('LCP:', metrics.value.LCP)
  console.log('FID:', metrics.value.FID)
  console.log('CLS:', metrics.value.CLS)
})
</script>
```

### Get Performance Report

```typescript
const { getReport } = useWebVitals()

// Get summary report
const report = getReport()
console.log('Overall score:', report.summary.score) // 0-100
console.log('Good metrics:', report.summary.good)
console.log('Poor metrics:', report.summary.poor)
console.log('All metrics:', report.metrics)
```

### Custom Analytics Endpoint

Send metrics to your own analytics service:

```typescript
startTracking({
  reportToAnalytics: true,
  analyticsEndpoint: '/api/analytics/web-vitals',
  onMetric: (metric) => {
    console.log(`${metric.name}: ${metric.value}`)
  }
})
```

The endpoint receives a POST request with this payload:

```json
{
  "metric": "LCP",
  "value": 1234.5,
  "rating": "good",
  "delta": 100.2,
  "id": "v3-1234567890",
  "page": "/products",
  "timestamp": 1234567890123,
  "userAgent": "Mozilla/5.0...",
  "connection": "4g"
}
```

### Custom Callback

Process metrics with a custom callback:

```typescript
startTracking({
  onMetric: (metric) => {
    // Send to custom analytics
    if (metric.rating === 'poor') {
      sendAlert(`Poor ${metric.name}: ${metric.value}`)
    }

    // Track in state management
    store.updateMetric(metric.name, metric.value)
  }
})
```

## Configuration

### Environment Variables

Control Web Vitals tracking via environment variables in `.env`:

```bash
# Enable debug logging (shows metrics in console)
NUXT_PUBLIC_DEBUG=true

# Log level (set to 'debug' to see all Web Vitals logs)
LOG_LEVEL=debug
```

### Runtime Configuration

Configure tracking behavior at runtime:

```typescript
const { startTracking } = useWebVitals()

startTracking({
  // Send to Google Analytics (default: true)
  reportToAnalytics: true,

  // Log to console in development (default: true in dev mode)
  logToConsole: process.env.NODE_ENV === 'development',

  // Custom analytics endpoint
  analyticsEndpoint: '/api/analytics',

  // Custom callback for each metric
  onMetric: (metric) => {
    console.log(metric)
  }
})
```

## Integration with Google Analytics 4

If Google Analytics 4 is installed (gtag.js), metrics are automatically sent as events:

```javascript
gtag('event', 'LCP', {
  event_category: 'Web Vitals',
  event_label: 'v3-1234567890',
  value: 1234, // Rounded value
  metric_rating: 'good',
  metric_delta: 100,
  non_interaction: true
})
```

## Monitoring in Production

### View Metrics in Console

In development, Web Vitals are logged to console:

```
✅ LCP: 1234.50 (good)
⚠️ FID: 150.00 (needs-improvement)
✅ CLS: 0.05 (good)
```

### Create Performance Dashboard

Build a performance monitoring dashboard:

```vue
<template>
  <div class="dashboard">
    <h2>Performance Score: {{ report.summary.score }}/100</h2>

    <div class="metrics">
      <MetricCard
        v-for="(metric, name) in report.metrics"
        :key="name"
        :name="name"
        :value="metric.value"
        :rating="metric.rating"
      />
    </div>

    <div class="summary">
      <p>✅ Good: {{ report.summary.good }}</p>
      <p>⚠️ Needs Improvement: {{ report.summary.needsImprovement }}</p>
      <p>❌ Poor: {{ report.summary.poor }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getReport } = useWebVitals()
const report = computed(() => getReport())
</script>
```

## Improving Web Vitals

### Optimize LCP (Largest Contentful Paint)

- Use the `ImageOptimized` component for hero images
- Enable image preloading for above-the-fold images:
  ```vue
  <ImageOptimized
    src="/hero.jpg"
    alt="Hero"
    :preload="true"
    fetch-priority="high"
  />
  ```
- Reduce server response time (TTFB)
- Remove render-blocking resources

### Optimize FID/INP (Interactivity)

- Code split large JavaScript bundles
- Use lazy hydration for non-critical components:
  ```vue
  <LazyHydrate when-visible>
    <HeavyComponent />
  </LazyHydrate>
  ```
- Defer non-critical JavaScript
- Use web workers for heavy computations

### Optimize CLS (Cumulative Layout Shift)

- Always include width/height on images:
  ```vue
  <ImageOptimized
    src="/product.jpg"
    alt="Product"
    width="800"
    height="600"
  />
  ```
- Reserve space for dynamic content with CSS
- Avoid inserting content above existing content
- Use CSS transforms instead of layout-shifting properties

## Troubleshooting

### Metrics not appearing in console

1. Check that debug mode is enabled:
   ```bash
   NUXT_PUBLIC_DEBUG=true
   LOG_LEVEL=debug
   ```

2. Verify web-vitals package is installed:
   ```bash
   npm list web-vitals
   ```

3. Check browser console for errors

### Metrics not sent to Google Analytics

1. Verify gtag.js is loaded:
   ```javascript
   console.log(typeof gtag) // Should be 'function'
   ```

2. Check that `reportToAnalytics` is enabled:
   ```typescript
   startTracking({ reportToAnalytics: true })
   ```

3. Verify GA4 is configured in your app

### Poor metric values

1. Run Lighthouse audit to identify issues:
   ```bash
   npm install -g lighthouse
   lighthouse https://your-app.com
   ```

2. Use Chrome DevTools Performance panel

3. Check the bundle analyzer for large bundles:
   ```bash
   npm run build:analyze
   ```

4. Review image optimization settings in `.env`:
   ```bash
   IMAGEAVIF=true
   IMAGEWEBP=true
   ```

## Best Practices

1. **Monitor in Production**: Track real user metrics, not just lab tests
2. **Set Performance Budgets**: Define acceptable thresholds and alert on violations
3. **Regular Audits**: Run weekly/monthly performance reviews
4. **A/B Test Optimizations**: Measure impact of performance improvements
5. **Track Trends**: Monitor metrics over time to catch regressions
6. **Segment by Device**: Analyze mobile vs desktop performance separately

## Resources

- [Web Vitals Documentation](https://web.dev/vitals/)
- [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report)
- [Lighthouse Performance Scoring](https://web.dev/performance-scoring/)
- [web-vitals Library](https://github.com/GoogleChrome/web-vitals)

## API Reference

See the auto-generated documentation at `/docs/reference/composables/useWebVitals.html` for detailed API information.
