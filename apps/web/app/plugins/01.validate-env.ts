import { logger } from '~/utils/logger'

/**
 * Environment variable validation plugin
 *
 * Validates required environment variables on app startup
 * and provides helpful error messages if any are missing.
 */

interface EnvVarDefinition {
  name: string
  required: boolean
  description: string
  defaultValue?: string
  validator?: (value: string) => boolean
  errorMessage?: string
}

const ENV_VARS: EnvVarDefinition[] = [
  {
    name: 'API_ENDPOINT',
    required: true,
    description: 'PlentyONE API endpoint URL',
    validator: (value) => value.startsWith('http://') || value.startsWith('https://'),
    errorMessage: 'API_ENDPOINT must be a valid HTTP(S) URL',
  },
  {
    name: 'API_SECURITY_TOKEN',
    required: true,
    description: 'PlentyONE API security token',
    validator: (value) => value.length > 10,
    errorMessage: 'API_SECURITY_TOKEN must be at least 10 characters',
  },
  {
    name: 'NUXT_PUBLIC_ALOKAI_MIDDLEWARE_API_URL',
    required: false,
    description: 'Alokai middleware API URL',
    defaultValue: 'http://localhost:4000',
  },
  {
    name: 'NODE_ENV',
    required: false,
    description: 'Node environment (development, production, test)',
    defaultValue: 'development',
    validator: (value) => ['development', 'production', 'test'].includes(value),
    errorMessage: 'NODE_ENV must be one of: development, production, test',
  },
]

export default defineNuxtPlugin(() => {
  const log = logger.namespace('env-validation')
  const config = useRuntimeConfig()
  const errors: string[] = []
  const warnings: string[] = []

  log.info('Validating environment variables...')

  // Validate each environment variable
  for (const envVar of ENV_VARS) {
    let value: string | undefined

    // Try to get value from runtime config first, then from process.env
    try {
      if (envVar.name.startsWith('NUXT_PUBLIC_')) {
        const publicKey = envVar.name.replace('NUXT_PUBLIC_', '').toLowerCase()
        value = (config.public as any)[publicKey]
      } else {
        value = (config as any)[envVar.name.toLowerCase()]
      }
    } catch {
      // Fallback to process.env
      value = process.env[envVar.name]
    }

    // Check if required variable is missing
    if (envVar.required && !value) {
      errors.push(
        `❌ Missing required environment variable: ${envVar.name}\n   Description: ${envVar.description}\n   ${envVar.errorMessage || ''}`,
      )
      continue
    }

    // Use default value if not set
    if (!value && envVar.defaultValue) {
      value = envVar.defaultValue
      log.debug(`Using default value for ${envVar.name}: ${envVar.defaultValue}`)
    }

    // Validate value if validator is provided
    if (value && envVar.validator && !envVar.validator(value)) {
      errors.push(
        `❌ Invalid value for ${envVar.name}: ${value}\n   ${envVar.errorMessage || `Failed validation for ${envVar.description}`}`,
      )
    }

    // Check for optional variables in production
    if (!envVar.required && !value && process.env.NODE_ENV === 'production') {
      warnings.push(
        `⚠️  Optional environment variable not set: ${envVar.name}\n   Description: ${envVar.description}`,
      )
    }
  }

  // Log warnings
  if (warnings.length > 0) {
    log.warn('Environment validation warnings:')
    warnings.forEach((warning) => log.warn(warning))
  }

  // Fail fast if there are errors
  if (errors.length > 0) {
    const errorMessage = [
      '',
      '╔════════════════════════════════════════════════════════════════╗',
      '║         ENVIRONMENT VARIABLE VALIDATION FAILED                ║',
      '╚════════════════════════════════════════════════════════════════╝',
      '',
      'The following environment variable errors were found:',
      '',
      ...errors,
      '',
      '📝 To fix this:',
      '   1. Copy .env.example to .env in apps/web/',
      '   2. Fill in all required values',
      '   3. Restart the application',
      '',
      'See apps/web/.env.example for all required variables.',
      '',
    ].join('\n')

    // Log error with proper formatting
    log.error(errorMessage)

    // Throw error to stop app initialization
    throw new Error('Environment validation failed. Check console for details.')
  }

  log.info('✅ Environment validation passed')

  // Provide runtime helper for accessing validated env vars
  return {
    provide: {
      env: {
        apiEndpoint: config.public.apiEndpoint || process.env.API_ENDPOINT,
        apiSecurityToken: config.apiSecurityToken || process.env.API_SECURITY_TOKEN,
        middlewareUrl:
          config.public.middlewareUrl || process.env.NUXT_PUBLIC_ALOKAI_MIDDLEWARE_API_URL,
        isProduction: process.env.NODE_ENV === 'production',
        isDevelopment: process.env.NODE_ENV === 'development',
      },
    },
  }
})

// TypeScript augmentation for $env
declare module '#app' {
  interface NuxtApp {
    $env: {
      apiEndpoint: string
      apiSecurityToken: string
      middlewareUrl: string
      isProduction: boolean
      isDevelopment: boolean
    }
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $env: {
      apiEndpoint: string
      apiSecurityToken: string
      middlewareUrl: string
      isProduction: boolean
      isDevelopment: boolean
    }
  }
}
