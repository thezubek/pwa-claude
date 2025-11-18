/**
 * Web Vitals Plugin
 *
 * Automatically starts tracking Core Web Vitals on app mount.
 * Metrics are sent to Google Analytics (if available) and logged
 * to console in development mode.
 *
 * To customize tracking, use the useWebVitals composable directly
 * in your components or pages.
 */

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  // Only track on client-side
  if (process.client) {
    const { startTracking } = useWebVitals()

    // Start tracking with default configuration
    // This will be executed once the app is mounted
    onMounted(() => {
      startTracking({
        reportToAnalytics: true,
        logToConsole: config.public.debug === true,
      })
    })
  }
})
