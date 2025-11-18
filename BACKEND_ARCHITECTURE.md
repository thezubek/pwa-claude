# PlentyOne Backend Structure - Detailed Analysis

## 1. Backend Technology Stack

### Core Technologies
- **Runtime:** Node.js (v20+)
- **Language:** TypeScript 5.9.3
- **Framework:** Express.js (via Alokai/Vue Storefront Middleware v5.4.1)
- **Architecture:** Monorepo using Turbo
- **Port:** 8181 (default middleware server)

### Key Dependencies
```
@vue-storefront/middleware: 5.4.1     # Middleware framework
@plentymarkets/shop-api: ^0.142.1     # PlentyMarkets API integration
@plentymarkets/shop-core: ^1.13.4     # Core shop functionality
cors: ^2.8.5                          # CORS handling
dotenv: ^16.6.1                       # Environment configuration
```

## 2. Project Structure

### Monorepo Layout
```
pwa-claude/
├── apps/
│   ├── server/                # Alokai Middleware Server
│   │   ├── src/
│   │   │   └── index.ts       # Server entry point
│   │   ├── middleware.config.ts # Integration configuration
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── web/                    # Nuxt 4 Frontend Application
│       ├── app/
│       │   ├── composables/    # 100+ API composables
│       │   ├── pages/
│       │   ├── components/
│       │   ├── plugins/
│       │   ├── server/         # Nuxt server routes
│       │   ├── configuration/  # App configs
│       │   └── utils/
│       ├── nuxt.config.ts
│       ├── .env.example
│       └── package.json
├── packages/
│   └── shop-cli/              # Code generation CLI
└── turbo.json                 # Turborepo config
```

## 3. Backend Server (Alokai Middleware)

### Server Entry Point: `/apps/server/src/index.ts`
```typescript
- Creates Express server via createServer()
- Integrations loaded from middleware.config.ts
- CORS enabled with configurable origin
- File upload support (50MB max, 13.3MB per file)
- Running on port 8181
```

### Configuration: `/apps/server/middleware.config.ts`
```typescript
Integration: plentysystems
  Location: @plentymarkets/shop-api/server
  API Configuration:
    - api.url: Pulled from API_ENDPOINT env var
    - api.securityToken: Pulled from API_SECURITY_TOKEN env var
  Custom error handler: Preserves original API responses
```

## 4. Existing Integrations & Third-Party Services

### Primary Integration: PlentyMarkets
- **Package:** @plentymarkets/shop-api
- **Type:** Headless commerce backend
- **Authentication:** Security token-based (API_SECURITY_TOKEN)
- **Endpoint:** Configurable via API_ENDPOINT environment variable
- **Purpose:** Complete e-commerce operations (products, orders, customers, payments)

### Payment Integrations
1. **PayPal** (@paypal/paypal-js)
   - Smart payment buttons
   - Funding sources (Pay Later, Credit Cards)
   - Order creation and approval flow
   - Fraud detection with fraudId

2. **Mollie** (@plentymarkets/shop-module-mollie)
   - Payment processing
   - Multiple payment methods

### Analytics Integration
- **Google Analytics** (@plentymarkets/shop-module-gtag)
  - Event tracking for e-commerce events
  - Frontend event emission system

### Shipping Integration
- **DHL** (via PayPal and native support)
  - Packstation finder
  - Address validation

### Other Integrations
- Cloudflare Turnstile (CAPTCHA)
- Nuxt i18n (multi-language support)
- Nuxt Security (security headers)

## 5. API Architecture & Endpoints

### SDK Access Pattern
All API calls go through the unified SDK:
```typescript
useSdk().plentysystems.methodName(params)
```

### Available API Operations
The SDK (plentysystems namespace) provides these major operation groups:

#### Cart Operations
- `doAddCartItem(params)` - Add single item
- `doAddCartItems(params)` - Add multiple items
- `setCartItemQuantity(params)` - Update quantity
- `deleteCartItem(params)` - Remove item
- `deleteCart()` - Clear cart

#### Product Operations
- `getProduct(params)` - Fetch product details
- `getFacet(payload)` - Get product filters/facets
- `getProducts(params)` - List products with filters

#### Order Operations
- `doMakeOrder(params)` - Create/submit order
- `doMakeOrderReturn(data)` - Create return request
- `getCustomerOrder(orderId)` - Fetch order details
- `getCustomerOrders(params)` - List customer orders
- `doOrderAgain(orderId)` - Recreate order from history

#### Customer Operations
- `getCustomer()` - Fetch current customer profile
- `doLogin(credentials)` - Customer login
- `doLogout()` - Customer logout
- `doRegisterCustomer(data)` - Customer registration
- `doUpdateCustomer(data)` - Update profile

#### Address Operations
- `getCustomerAddresses()` - List customer addresses
- `doAddAddress(data)` - Create new address
- `doDeleteAddress(addressId)` - Delete address
- `doUpdateAddress(data)` - Update address
- `doSetDefaultAddress(data)` - Set primary address

#### Coupon & Checkout
- `doAddCoupon(params)` - Apply coupon code
- `deleteCoupon(params)` - Remove coupon
- `getShippingMethods()` - Available shipping options
- `setShippingMethod(params)` - Select shipping

#### Payment Methods
- `getPaymentMethods()` - List available methods
- `getPayPalSettings()` - PayPal configuration
- `doCreatePayPalOrder(params)` - Init PayPal
- `getPayPalOrder(orderId)` - Fetch PayPal order
- `doHandlePayPalAddress(params)` - Process address
- `getGooglePaySettings()` - Google Pay config
- `doHandleApplePayValidation(params)` - Apple Pay

#### Session & Configuration
- `getSession()` - Current session/cart data
- `getCountries()` - Available countries
- `getActiveShippingCountries()` - Shipping destinations
- `getCategoryTree()` - Category hierarchy
- `getLegalInformation()` - Legal pages
- `getPageContent(pageId)` - CMS pages

#### Customer Returns
- `getCustomerReturns()` - List returns
- `getReturnReasons()` - Return reason codes

### Response Format
```typescript
{
  data: T,           // Response payload
  events?: {         // Backend events
    [eventName]: {}
  }
}
```

## 6. Configuration & Environment Variables

### Required Environment Variables
```env
# Backend API Configuration
API_ENDPOINT=https://your-plentymarkets-api.com
API_SECURITY_TOKEN=your-security-token

# Application Settings
DEFAULTLANGUAGE=en
LANGUAGELIST=en,de

# Optional Security
CLOUDFLARETURNSTILEAPISITEKEY=0x4AAAAAAANx3aXDh7UR35x0

# Feature Flags
VALIDATE_RETURN_REASONS=1
ENABLE_QUICK_CHECKOUT_TIMER=1
USE_TAGS_ON_CATEGORY_PAGE=0

# Logging
LOG_LEVEL=info

# Image Format Support
IMAGEWEBP=false
IMAGEAVIF=false

# Password Requirements
PASSWORD_MIN_LENGTH=8
PASSWORD_MAX_LENGTH=64
```

### Runtime Config (in nuxt.config.ts)
```typescript
runtimeConfig.public: {
  domain: API_URL
  apiEndpoint: API_ENDPOINT
  isDev: NODE_ENV === 'development'
}
```

## 7. Middleware & Server Configuration

### Middleware Features
- **CORS:** Configurable origin (default: http://localhost:3000)
- **Body Parser:** 50MB limit for file uploads
- **File Upload:** 
  - Max file size: 14,155,776 bytes (13.3 MB)
  - Max files: 5
- **IPv6 Support:** Via USE_IPV6 environment variable
- **Error Handling:** Custom handler preserves original API errors

### Request Flow
```
Client Request
     ↓
Frontend (Nuxt App)
     ↓
useSdk().plentysystems.methodName()
     ↓
Alokai Middleware Server (port 8181)
     ↓
@plentymarkets/shop-api
     ↓
PlentyMarkets Backend API
     ↓
Response → Middleware → Frontend → Client
```

## 8. Integration Patterns

### 1. Standard API Integration Pattern (Composables)
```typescript
// Example from useCart.ts
const addToCart = async (params: DoAddItemParams) => {
  state.value.loading = true;
  try {
    const { data } = await useSdk().plentysystems.doAddCartItem(params);
    state.value.data = data;
    emit('frontend:addToCart', { item, cart: data });
    return !!data;
  } catch (error) {
    useHandleError(error as ApiError);
    return false;
  } finally {
    state.value.loading = false;
  }
};
```

### 2. Payment Integration Pattern (PayPal Example)
```typescript
// Config loading
const loadConfig = async () => {
  const { data } = await useSdk().plentysystems.getPayPalSettings();
  state.value.config = data;
};

// Order creation
const createTransaction = async (params) => {
  const { data } = await useSdk().plentysystems.doCreatePayPalOrder(params);
  state.value.order = data;
};
```

### 3. Event Emission Pattern
The SDK supports backend events that can be listened to:
```typescript
// Events emitted from API operations
if (data?.apiEvents) {
  Object.entries(data.apiEvents).forEach(([event, data]) => {
    emit(`backend:${event}`, data);
  });
}
```

## 9. Data Models & Types

### Key Types from @plentymarkets/shop-api
- `Product` - Product information
- `Cart` - Shopping cart
- `CartItem` - Individual cart items
- `Order` - Customer order
- `Customer` - Customer profile
- `Address` - Delivery/billing address
- `PayPalSettings` - Payment configuration
- `ApiError` - Standardized error format
- `PlentyEvents` - Backend event objects

## 10. Security Features

### Authentication
- **Method:** Security token-based API authentication
- **Token:** API_SECURITY_TOKEN environment variable
- **CSRF Protection:** useCsrfToken() composable
- **CORS:** Restricted to configured origins

### Additional Security
- Cloudflare Turnstile CAPTCHA integration
- Content Security Policy (nuxt-security module)
- Password validation rules (8-64 characters)
- Secure cookie handling

## 11. Where to Add New Integrations

### For Backend (Server-side)
1. **Location:** `/apps/server/middleware.config.ts`
2. **Pattern:** Add new integration object with location and configuration
3. **Example Structure:**
```typescript
integrations: {
  tiktok: {
    location: '@your-package/tiktok-integration',
    configuration: {
      apiKey: process.env.TIKTOK_API_KEY,
      secretKey: process.env.TIKTOK_SECRET_KEY,
    },
    errorHandler: (error, req, res) => { /* custom handling */ }
  }
}
```

### For Frontend (Client-side)
1. **Location:** `/apps/web/app/composables/useYourIntegration/`
2. **Pattern:** Create composable that calls SDK methods or custom API endpoints
3. **Structure:**
```typescript
export const useYourIntegration = () => {
  // Access via useSdk().yourIntegration if properly registered
  // Or make direct HTTP calls to backend via Nuxt $fetch
};
```

### For Custom Server Routes
1. **Location:** `/apps/web/server/routes/`
2. **Pattern:** Nuxt nitro routes for custom backend logic
3. **Type:** Server-only API endpoints

## 12. API Documentation References

- **Alokai/Vue Storefront:** https://docs.vuestorefront.io/v2/
- **PlentyMarkets API Docs:** https://pwa-docs.plentyone.com/
- **Middleware Configuration:** https://docs.vuestorefront.io/v2/architecture/server-middleware.html
- **SDK Documentation:** https://docs.vuestorefront.io/sdk/

## Summary

The PlentyOne backend is built on a modern, modular middleware architecture using Vue Storefront (Alokai). It provides:

1. **Centralized Integration Layer:** All external services connect through a single middleware server
2. **Composable Architecture:** 100+ composables for different business domains
3. **Type Safety:** Full TypeScript support across the stack
4. **Extensibility:** Easy to add new integrations by extending the middleware configuration
5. **Event-Driven:** SDK supports event emission for reactive data updates
6. **Security-First:** Token-based auth, CORS, CSRF protection, CSP headers

The architecture is well-suited for adding new marketplace integrations like TikTok Shop, as it provides a clean abstraction layer where new integrations can be plugged into the middleware without modifying the frontend code.

