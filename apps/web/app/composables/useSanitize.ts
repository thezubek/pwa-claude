import {
  sanitizeText,
  sanitizeHtml,
  sanitizeUrl,
  sanitizeFilename,
  sanitizeSearchQuery,
  sanitizeEmail,
  sanitizePhone,
  escapeHtml,
} from '~/utils/sanitize'

/**
 * Composable for input sanitization
 *
 * Provides reactive sanitization utilities for Vue components.
 *
 * @example
 * ```vue
 * <script setup>
 * const { sanitize } = useSanitize()
 *
 * const userInput = ref('')
 * const safeInput = computed(() => sanitize.text(userInput.value))
 * </script>
 * ```
 */
export function useSanitize() {
  return {
    sanitize: {
      /**
       * Sanitize plain text (removes HTML, escapes special chars)
       */
      text: sanitizeText,

      /**
       * Sanitize HTML (allows safe tags only)
       */
      html: sanitizeHtml,

      /**
       * Sanitize URL (validates protocol)
       */
      url: sanitizeUrl,

      /**
       * Sanitize filename (removes path traversal)
       */
      filename: sanitizeFilename,

      /**
       * Sanitize search query (removes SQL injection attempts)
       */
      search: sanitizeSearchQuery,

      /**
       * Sanitize email address
       */
      email: sanitizeEmail,

      /**
       * Sanitize phone number
       */
      phone: sanitizePhone,

      /**
       * Escape HTML entities
       */
      escape: escapeHtml,
    },

    /**
     * Reactive sanitization for v-model
     *
     * @example
     * ```vue
     * <script setup>
     * const { createSanitizedModel } = useSanitize()
     * const userInput = ref('')
     * const sanitizedInput = createSanitizedModel(userInput, 'text')
     * </script>
     *
     * <template>
     *   <input v-model="sanitizedInput" />
     * </template>
     * ```
     */
    createSanitizedModel: <T extends string>(
      source: Ref<T>,
      type: 'text' | 'html' | 'search' | 'email' = 'text',
    ) => {
      return computed({
        get: () => source.value,
        set: (value: T) => {
          let sanitized: string
          switch (type) {
            case 'html':
              sanitized = sanitizeHtml(value)
              break
            case 'search':
              sanitized = sanitizeSearchQuery(value)
              break
            case 'email':
              sanitized = sanitizeEmail(value)
              break
            case 'text':
            default:
              sanitized = sanitizeText(value)
              break
          }
          source.value = sanitized as T
        },
      })
    },
  }
}
