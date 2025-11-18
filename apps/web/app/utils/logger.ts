/**
 * Application Logger
 *
 * Centralized logging utility with environment-aware output.
 * Prevents debug logs from appearing in production builds.
 *
 * @example
 * ```ts
 * import { logger } from '~/utils/logger'
 *
 * logger.debug('Debug information', { data })
 * logger.info('User action performed')
 * logger.warn('Potential issue detected')
 * logger.error('Error occurred', error)
 * ```
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LoggerConfig {
  enabled: boolean
  minLevel: LogLevel
  includeTimestamp: boolean
  includeStackTrace: boolean
}

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
}

class Logger {
  private config: LoggerConfig

  constructor() {
    const isDevelopment = process.env.NODE_ENV === 'development'
    const debugMode = process.env.NUXT_PUBLIC_DEBUG === 'true'

    this.config = {
      enabled: isDevelopment || debugMode,
      minLevel: isDevelopment ? 'debug' : 'warn',
      includeTimestamp: isDevelopment,
      includeStackTrace: false,
    }
  }

  /**
   * Check if logging is enabled for the given level
   */
  private shouldLog(level: LogLevel): boolean {
    if (!this.config.enabled && level !== 'error') {
      return false
    }
    return LOG_LEVELS[level] >= LOG_LEVELS[this.config.minLevel]
  }

  /**
   * Format the log message with optional timestamp
   */
  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = this.config.includeTimestamp ? `[${new Date().toISOString()}]` : ''
    const levelTag = `[${level.toUpperCase()}]`
    return `${timestamp} ${levelTag} ${message}`.trim()
  }

  /**
   * Log debug information (development only)
   */
  debug(message: string, ...args: unknown[]): void {
    if (!this.shouldLog('debug')) return

    const formatted = this.formatMessage('debug', message)
    // eslint-disable-next-line no-console
    console.debug(formatted, ...args)
  }

  /**
   * Log informational messages
   */
  info(message: string, ...args: unknown[]): void {
    if (!this.shouldLog('info')) return

    const formatted = this.formatMessage('info', message)
    // eslint-disable-next-line no-console
    console.info(formatted, ...args)
  }

  /**
   * Log warning messages
   */
  warn(message: string, ...args: unknown[]): void {
    if (!this.shouldLog('warn')) return

    const formatted = this.formatMessage('warn', message)
    // eslint-disable-next-line no-console
    console.warn(formatted, ...args)
  }

  /**
   * Log error messages (always logged)
   */
  error(message: string, ...args: unknown[]): void {
    const formatted = this.formatMessage('error', message)

    // Always log errors, even in production
    // eslint-disable-next-line no-console
    console.error(formatted, ...args)

    // In production, send to error tracking service
    if (process.env.NODE_ENV === 'production') {
      this.sendToErrorTracker(message, args)
    }
  }

  /**
   * Send errors to external error tracking service (Sentry, etc.)
   */
  private sendToErrorTracker(message: string, args: unknown[]): void {
    // TODO: Integrate with Sentry or other error tracking service
    // Example:
    // if (window.Sentry) {
    //   window.Sentry.captureMessage(message, {
    //     level: 'error',
    //     extra: args,
    //   })
    // }
  }

  /**
   * Create a namespaced logger for a specific module
   */
  namespace(name: string): NamespacedLogger {
    return new NamespacedLogger(name, this)
  }

  /**
   * Enable debug mode at runtime
   */
  enableDebug(): void {
    this.config.enabled = true
    this.config.minLevel = 'debug'
    this.info('Debug mode enabled')
  }

  /**
   * Disable debug mode at runtime
   */
  disableDebug(): void {
    this.config.enabled = false
    this.config.minLevel = 'warn'
  }
}

/**
 * Namespaced logger for better log organization
 */
class NamespacedLogger {
  constructor(
    private namespace: string,
    private parent: Logger,
  ) {}

  private formatMessage(message: string): string {
    return `[${this.namespace}] ${message}`
  }

  debug(message: string, ...args: unknown[]): void {
    this.parent.debug(this.formatMessage(message), ...args)
  }

  info(message: string, ...args: unknown[]): void {
    this.parent.info(this.formatMessage(message), ...args)
  }

  warn(message: string, ...args: unknown[]): void {
    this.parent.warn(this.formatMessage(message), ...args)
  }

  error(message: string, ...args: unknown[]): void {
    this.parent.error(this.formatMessage(message), ...args)
  }
}

// Export singleton instance
export const logger = new Logger()

// Export for testing
export { Logger, NamespacedLogger }

// Make logger available globally in development
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  ;(window as any).__logger = logger
}
