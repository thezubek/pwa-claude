import { logger } from '~/utils/logger'

/**
 * Composable for accessing the application logger
 *
 * @example
 * ```vue
 * <script setup>
 * const { logError, logWarn, logInfo, logDebug } = useLogger('MyComponent')
 *
 * logDebug('Component mounted')
 * logError('Failed to load data', error)
 * </script>
 * ```
 */
export function useLogger(namespace?: string) {
  const log = namespace ? logger.namespace(namespace) : logger

  return {
    logger: log,
    logDebug: log.debug.bind(log),
    logInfo: log.info.bind(log),
    logWarn: log.warn.bind(log),
    logError: log.error.bind(log),
  }
}
