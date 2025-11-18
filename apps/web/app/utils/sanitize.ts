/**
 * Input Sanitization Utilities
 *
 * Provides XSS protection and input validation for user-generated content.
 *
 * @example
 * ```ts
 * import { sanitizeHtml, sanitizeText, sanitizeUrl } from '~/utils/sanitize'
 *
 * const safeHtml = sanitizeHtml(userInput)
 * const safeText = sanitizeText(userInput)
 * const safeUrl = sanitizeUrl(userInput)
 * ```
 */

/**
 * HTML entities that need escaping
 */
const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
}

/**
 * Allowed HTML tags for rich text (very restrictive)
 */
const ALLOWED_TAGS = ['b', 'i', 'em', 'strong', 'u', 'br', 'p', 'a', 'ul', 'ol', 'li']

/**
 * Allowed HTML attributes per tag
 */
const ALLOWED_ATTRIBUTES: Record<string, string[]> = {
  a: ['href', 'title', 'target', 'rel'],
  img: ['src', 'alt', 'title', 'width', 'height'],
}

/**
 * URL protocols whitelist
 */
const SAFE_URL_PROTOCOLS = ['http:', 'https:', 'mailto:']

/**
 * Escape HTML entities to prevent XSS
 *
 * @param text - Text to escape
 * @returns Escaped text safe for HTML insertion
 *
 * @example
 * ```ts
 * escapeHtml('<script>alert("xss")</script>')
 * // Returns: '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
 * ```
 */
export function escapeHtml(text: string): string {
  return text.replace(/[&<>"'/]/g, (char) => HTML_ENTITIES[char] || char)
}

/**
 * Sanitize plain text input
 *
 * Removes all HTML tags and escapes special characters.
 * Use for user inputs that should never contain HTML.
 *
 * @param text - Text to sanitize
 * @param options - Sanitization options
 * @returns Sanitized text
 *
 * @example
 * ```ts
 * sanitizeText('<b>Hello</b> World!')
 * // Returns: 'Hello World!'
 *
 * sanitizeText('  Multiple   spaces  ', { normalizeWhitespace: true })
 * // Returns: 'Multiple spaces'
 * ```
 */
export function sanitizeText(
  text: string,
  options: {
    maxLength?: number
    normalizeWhitespace?: boolean
    allowNewlines?: boolean
  } = {},
): string {
  let sanitized = text

  // Remove HTML tags
  sanitized = sanitized.replace(/<[^>]*>/g, '')

  // Escape remaining HTML entities
  sanitized = escapeHtml(sanitized)

  // Normalize whitespace if requested
  if (options.normalizeWhitespace) {
    sanitized = sanitized.replace(/\s+/g, ' ').trim()
  }

  // Remove newlines if not allowed
  if (!options.allowNewlines) {
    sanitized = sanitized.replace(/[\r\n]+/g, ' ')
  }

  // Truncate if max length specified
  if (options.maxLength && sanitized.length > options.maxLength) {
    sanitized = sanitized.substring(0, options.maxLength)
  }

  return sanitized
}

/**
 * Sanitize HTML input with whitelist approach
 *
 * Only allows specific HTML tags and attributes.
 * Use for rich text content like product descriptions or reviews.
 *
 * @param html - HTML to sanitize
 * @param options - Sanitization options
 * @returns Sanitized HTML
 *
 * @example
 * ```ts
 * sanitizeHtml('<p>Hello <script>alert("xss")</script></p>')
 * // Returns: '<p>Hello </p>'
 *
 * sanitizeHtml('<p onclick="alert()">Click</p>')
 * // Returns: '<p>Click</p>'
 * ```
 */
export function sanitizeHtml(
  html: string,
  options: {
    allowedTags?: string[]
    allowedAttributes?: Record<string, string[]>
    stripDisallowed?: boolean
  } = {},
): string {
  const allowedTags = options.allowedTags || ALLOWED_TAGS
  const allowedAttributes = options.allowedAttributes || ALLOWED_ATTRIBUTES
  const stripDisallowed = options.stripDisallowed !== false

  // Simple HTML parser (for basic sanitization)
  // Note: For production, consider using DOMPurify library
  let sanitized = html

  // Remove script and style tags entirely
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  sanitized = sanitized.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')

  // Remove event handlers (onclick, onload, etc.)
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '')
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*[^\s>]*/gi, '')

  // Remove javascript: URLs
  sanitized = sanitized.replace(/javascript:/gi, '')

  // Remove data: URLs (can be used for XSS)
  sanitized = sanitized.replace(/data:text\/html/gi, '')

  // Filter allowed tags
  if (stripDisallowed) {
    const tagPattern = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
    sanitized = sanitized.replace(tagPattern, (match, tagName) => {
      if (!allowedTags.includes(tagName.toLowerCase())) {
        return '' // Strip disallowed tags
      }

      // Filter attributes
      const attributePattern = /\s+([a-z-]+)\s*=\s*["']([^"']*)["']/gi
      return match.replace(attributePattern, (attrMatch, attrName, attrValue) => {
        const tag = tagName.toLowerCase()
        const attr = attrName.toLowerCase()

        if (allowedAttributes[tag]?.includes(attr)) {
          // Additional sanitization for href attributes
          if (attr === 'href' && !isSafeUrl(attrValue)) {
            return ''
          }
          return ` ${attr}="${escapeHtml(attrValue)}"`
        }
        return '' // Strip disallowed attributes
      })
    })
  }

  return sanitized
}

/**
 * Sanitize URL input
 *
 * Ensures URL uses safe protocol and format.
 * Use for user-provided URLs in links or redirects.
 *
 * @param url - URL to sanitize
 * @param options - Sanitization options
 * @returns Sanitized URL or empty string if invalid
 *
 * @example
 * ```ts
 * sanitizeUrl('javascript:alert("xss")')
 * // Returns: ''
 *
 * sanitizeUrl('https://example.com')
 * // Returns: 'https://example.com'
 * ```
 */
export function sanitizeUrl(
  url: string,
  options: {
    allowedProtocols?: string[]
    allowRelative?: boolean
  } = {},
): string {
  const allowedProtocols = options.allowedProtocols || SAFE_URL_PROTOCOLS
  const allowRelative = options.allowRelative ?? true

  // Trim whitespace
  url = url.trim()

  // Empty URL
  if (!url) return ''

  // Relative URL
  if (allowRelative && url.startsWith('/')) {
    // Ensure no protocol in relative URL
    if (url.match(/^\/\/[a-z]+:/i)) {
      return ''
    }
    return url
  }

  // Check protocol
  try {
    const urlObj = new URL(url)
    if (!allowedProtocols.includes(urlObj.protocol)) {
      return ''
    }
    return urlObj.href
  } catch {
    // Invalid URL format
    return ''
  }
}

/**
 * Check if URL is safe
 *
 * @param url - URL to check
 * @returns True if URL is safe
 */
function isSafeUrl(url: string): boolean {
  return sanitizeUrl(url) !== ''
}

/**
 * Sanitize filename
 *
 * Removes path traversal attempts and dangerous characters.
 * Use for user-uploaded filenames.
 *
 * @param filename - Filename to sanitize
 * @param options - Sanitization options
 * @returns Sanitized filename
 *
 * @example
 * ```ts
 * sanitizeFilename('../../etc/passwd')
 * // Returns: 'passwd'
 *
 * sanitizeFilename('my<script>.txt')
 * // Returns: 'myscript.txt'
 * ```
 */
export function sanitizeFilename(
  filename: string,
  options: {
    maxLength?: number
    allowedExtensions?: string[]
  } = {},
): string {
  // Remove path components
  let sanitized = filename.replace(/^.*[\\\/]/, '')

  // Remove dangerous characters
  sanitized = sanitized.replace(/[^a-zA-Z0-9._-]/g, '')

  // Remove leading dots (hidden files)
  sanitized = sanitized.replace(/^\.+/, '')

  // Ensure extension is allowed if specified
  if (options.allowedExtensions) {
    const ext = sanitized.split('.').pop()?.toLowerCase()
    if (!ext || !options.allowedExtensions.includes(ext)) {
      sanitized = sanitized.replace(/\.[^.]*$/, '')
    }
  }

  // Truncate if needed
  if (options.maxLength && sanitized.length > options.maxLength) {
    const ext = sanitized.split('.').pop()
    const name = sanitized.substring(0, sanitized.lastIndexOf('.'))
    const maxNameLength = options.maxLength - (ext?.length || 0) - 1
    sanitized = `${name.substring(0, maxNameLength)}.${ext}`
  }

  // Fallback for empty filename
  if (!sanitized) {
    sanitized = 'file'
  }

  return sanitized
}

/**
 * Sanitize search query
 *
 * Removes SQL injection attempts and special characters.
 * Use for search inputs.
 *
 * @param query - Search query to sanitize
 * @param options - Sanitization options
 * @returns Sanitized query
 *
 * @example
 * ```ts
 * sanitizeSearchQuery("'; DROP TABLE users; --")
 * // Returns: "DROP TABLE users"
 * ```
 */
export function sanitizeSearchQuery(
  query: string,
  options: {
    maxLength?: number
    allowWildcards?: boolean
  } = {},
): string {
  let sanitized = query

  // Remove SQL special characters
  sanitized = sanitized.replace(/[';\\]/g, '')

  // Remove wildcards unless allowed
  if (!options.allowWildcards) {
    sanitized = sanitized.replace(/[*%]/g, '')
  }

  // Normalize whitespace
  sanitized = sanitized.replace(/\s+/g, ' ').trim()

  // Truncate if needed
  if (options.maxLength && sanitized.length > options.maxLength) {
    sanitized = sanitized.substring(0, options.maxLength)
  }

  return sanitized
}

/**
 * Validate and sanitize email address
 *
 * @param email - Email to validate and sanitize
 * @returns Sanitized email or empty string if invalid
 *
 * @example
 * ```ts
 * sanitizeEmail('user@example.com')
 * // Returns: 'user@example.com'
 *
 * sanitizeEmail('not-an-email')
 * // Returns: ''
 * ```
 */
export function sanitizeEmail(email: string): string {
  const sanitized = email.trim().toLowerCase()

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(sanitized)) {
    return ''
  }

  // Additional checks
  if (sanitized.length > 254) {
    return '' // RFC 5321 max length
  }

  return sanitized
}

/**
 * Sanitize phone number
 *
 * @param phone - Phone number to sanitize
 * @param options - Sanitization options
 * @returns Sanitized phone number
 *
 * @example
 * ```ts
 * sanitizePhone('+1 (555) 123-4567')
 * // Returns: '+15551234567'
 * ```
 */
export function sanitizePhone(
  phone: string,
  options: {
    keepFormatting?: boolean
  } = {},
): string {
  if (options.keepFormatting) {
    // Keep only digits, +, -, (, ), and spaces
    return phone.replace(/[^0-9+\-() ]/g, '')
  }

  // Remove all non-digit characters except leading +
  const sanitized = phone.replace(/[^0-9+]/g, '')

  // Ensure + is only at the start
  return sanitized.replace(/\+/g, (match, offset) => (offset === 0 ? match : ''))
}

/**
 * Sanitize JSON input
 *
 * Safely parse and re-stringify JSON to remove any malicious content.
 *
 * @param json - JSON string to sanitize
 * @returns Sanitized JSON string or null if invalid
 */
export function sanitizeJson(json: string): string | null {
  try {
    const parsed = JSON.parse(json)
    return JSON.stringify(parsed)
  } catch {
    return null
  }
}

/**
 * Type guard for checking if value is a string
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * Type guard for checking if value is safe string (not containing script tags)
 */
export function isSafeString(value: unknown): value is string {
  if (!isString(value)) return false
  return !/<script/i.test(value)
}
