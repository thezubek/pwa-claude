/**
 * Extended API Error Types
 *
 * Extends the base ApiError from @plentymarkets/shop-api with proper type definitions
 * for error events and response data.
 */

import type { ApiError as BaseApiError } from '@plentymarkets/shop-api'

/**
 * Basket data structure returned in error events
 */
export interface BasketErrorData {
  basket: {
    basketAmount: number
    currency: string
    itemQuantity: number
    items: Array<{
      id: number
      variationId: number
      quantity: number
      price: number
      [key: string]: unknown
    }>
    [key: string]: unknown
  }
  [key: string]: unknown
}

/**
 * Error events that can be returned from the API
 */
export interface ApiErrorEvents {
  /**
   * Event triggered after basket/cart changes
   */
  AfterBasketChanged?: BasketErrorData

  /**
   * Event triggered after checkout validation
   */
  AfterCheckoutValidation?: {
    errors: Array<{
      code: string
      message: string
      field?: string
    }>
    [key: string]: unknown
  }

  /**
   * Event triggered on payment errors
   */
  PaymentError?: {
    code: string
    message: string
    provider?: string
    [key: string]: unknown
  }

  /**
   * Generic event data
   */
  [key: string]: unknown
}

/**
 * Extended API Error with properly typed events
 */
export interface ExtendedApiError extends BaseApiError {
  /**
   * Events returned with the error response
   */
  events?: ApiErrorEvents

  /**
   * HTTP status code
   */
  statusCode?: number

  /**
   * Error code from API
   */
  code?: string

  /**
   * Detailed error message
   */
  message: string

  /**
   * Original error response data
   */
  response?: {
    data?: unknown
    status?: number
    statusText?: string
    headers?: Record<string, string>
  }

  /**
   * Stack trace (development only)
   */
  stack?: string
}

/**
 * Type guard to check if error is an ExtendedApiError
 */
export function isExtendedApiError(error: unknown): error is ExtendedApiError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as ExtendedApiError).message === 'string'
  )
}

/**
 * Type guard to check if error has basket event data
 */
export function hasBasketEvent(error: ExtendedApiError): error is ExtendedApiError & {
  events: { AfterBasketChanged: BasketErrorData }
} {
  return !!(error.events?.AfterBasketChanged?.basket)
}

/**
 * Type guard to check if error has validation errors
 */
export function hasValidationErrors(error: ExtendedApiError): error is ExtendedApiError & {
  events: { AfterCheckoutValidation: { errors: Array<{ code: string; message: string }> } }
} {
  return !!(error.events?.AfterCheckoutValidation?.errors)
}

/**
 * Type guard to check if error is a payment error
 */
export function isPaymentError(error: ExtendedApiError): error is ExtendedApiError & {
  events: { PaymentError: { code: string; message: string } }
} {
  return !!error.events?.PaymentError
}

/**
 * Extract basket data from error if available
 */
export function getBasketFromError(error: ExtendedApiError): BasketErrorData['basket'] | null {
  if (hasBasketEvent(error)) {
    return error.events.AfterBasketChanged.basket
  }
  return null
}

/**
 * Extract validation errors from error if available
 */
export function getValidationErrors(
  error: ExtendedApiError,
): Array<{ code: string; message: string; field?: string }> | null {
  if (hasValidationErrors(error)) {
    return error.events.AfterCheckoutValidation.errors
  }
  return null
}

/**
 * Format error for display to user
 */
export function formatApiError(error: ExtendedApiError): string {
  // Check for specific error types
  if (isPaymentError(error)) {
    return error.events.PaymentError.message || 'Payment processing failed'
  }

  if (hasValidationErrors(error)) {
    const errors = error.events.AfterCheckoutValidation.errors
    return errors.map((e) => e.message).join(', ')
  }

  // Return generic message
  return error.message || 'An error occurred'
}
