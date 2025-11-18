# TikTok Shop Integration Research for PlentyOne Backend

## Executive Summary

This document outlines the research findings and recommendations for integrating TikTok Shop with the PlentyOne backend system. TikTok Shop has over 1.4 billion active users globally, making it a valuable marketplace integration for e-commerce operations.

## Table of Contents

1. [TikTok Shop API Overview](#tiktok-shop-api-overview)
2. [Authentication & Credentials](#authentication--credentials)
3. [Available API Capabilities](#available-api-capabilities)
4. [Integration Approaches](#integration-approaches)
5. [Recommended Architecture](#recommended-architecture)
6. [Implementation Plan](#implementation-plan)
7. [Rate Limits & Best Practices](#rate-limits--best-practices)
8. [Testing Strategy](#testing-strategy)

---

## TikTok Shop API Overview

### What is TikTok Shop Open API?

TikTok Shop Open API allows developers to extend TikTok Shop's e-commerce capabilities to external systems. It provides programmatic access to:

- Product catalog management
- Order processing and fulfillment
- Inventory synchronization
- Customer data management
- Shipping and returns handling

### API Version

- **Current Version**: 202309 (and later)
- **Base URLs**:
  - US: `https://services.us.tiktokshop.com`
  - Other regions: `https://services.tiktokshop.com`
  - Research API: `https://open.tiktokapis.com/v2/research/tts/`

### Official Documentation

- **Partner Center**: https://partner.tiktokshop.com
- **Developer Portal**: https://developers.tiktok.com
- **Postman Collection**: Available at TikTok Shop Open Platform

---

## Authentication & Credentials

### Prerequisites

1. **TikTok Shop Seller Account**: Must be an approved TikTok Shop seller
2. **TikTok Shop Partner Account**: Register at https://partner.tiktokshop.com/account/sign-up
3. **Developer Registration**: Complete developer onboarding as an APP developer

### Creating an OAuth App

#### Step 1: Access App Creation
1. Log in to TikTok Shop Partner Center
2. Navigate to "App & Service" in the left menu
3. Click "Create App"

#### Step 2: Choose App Type
- **Public App**: For general marketplace integrations (recommended)
- **Custom App**: For specific seller use cases

#### Step 3: Configure App Settings
Required settings:
- **App Name**: Your application name
- **Redirect URL**: OAuth callback URL (e.g., `https://yourbackend.com/api/tiktok/callback`)
- **Enable API**: Must be enabled
- **Webhook URL** (optional): For real-time event notifications

#### Step 4: Retrieve Credentials
After creation, you'll receive:
- **App Key**: Public identifier for your application
- **App Secret**: Secret key for authentication
- **Service ID**: Application service identifier

#### Step 5: Enable Required APIs
Navigate to "Basic Info" → "Manage API" and enable:
- ✅ Shop Authorized Information
- ✅ Product Basic
- ✅ Order Information
- ✅ Inventory Management
- ✅ Shipping Information
- ✅ Returns & Refunds

**Note**: Error code 105005 occurs if required API permissions aren't enabled in the app dashboard.

### OAuth 2.0 Flow

#### 1. Authorization Request

```
GET https://services.us.tiktokshop.com/open/authorize?service_id=<SERVICE_ID>
```

Query parameters:
- `service_id`: Your application's Service ID
- `state`: Random string for CSRF protection

#### 2. User Authorization
- User logs in to TikTok Shop
- Approves requested scopes
- Redirected to callback URL with authorization code

#### 3. Token Exchange

Exchange authorization code for access token:

```javascript
POST /api/token
{
  "app_key": "YOUR_APP_KEY",
  "app_secret": "YOUR_APP_SECRET",
  "auth_code": "AUTHORIZATION_CODE",
  "grant_type": "authorized_code"
}
```

Response:
```json
{
  "access_token": "act.example_token",
  "refresh_token": "rft.example_token",
  "access_token_expire_in": 86400,
  "refresh_token_expire_in": 7776000
}
```

#### 4. Get Authorized Shops

```javascript
GET /api/shop/get_authorized_shop
Authorization: Bearer <ACCESS_TOKEN>
```

Response includes:
- `shop_id`: Shop identifier
- `shop_cipher`: Shop-specific encryption key
- `shop_name`: Store name
- `region`: Geographic region (US, UK, etc.)

### Token Management

- **Access Token Expiry**: 24 hours
- **Refresh Token Expiry**: 90 days
- **Refresh Process**: Use refresh token to obtain new access token without user consent
- **Storage**: Securely store tokens in encrypted database or secret manager

---

## Available API Capabilities

### 1. Product Management

**Endpoints:**
- `GET /api/products/search` - Search/list products
- `POST /api/products` - Create new product
- `PUT /api/products/{product_id}` - Update product
- `DELETE /api/products/{product_id}` - Delete product
- `POST /api/products/upload_image` - Upload product images

**Capabilities:**
- Create and manage product listings
- Update product details, variants, images, pricing
- Manage inventory levels
- Handle product categorization

**Data Synced:**
- Product title and description
- SKU and barcode
- Price and sale price
- Stock quantity
- Product images (up to 9 images)
- Variants (size, color, etc.)
- Product status (active/inactive)

### 2. Order Management

**Endpoints:**
- `GET /api/orders/search` - Search/list orders
- `GET /api/orders/{order_id}` - Get order details
- `POST /api/orders/{order_id}/confirm` - Confirm order
- `POST /api/orders/{order_id}/ship` - Ship order
- `POST /api/orders/{order_id}/cancel` - Cancel order

**Order Statuses:**
- `100` - Unpaid
- `111` - Awaiting shipment
- `112` - Awaiting collection
- `114` - Partially shipped
- `121` - In transit
- `122` - Delivered
- `130` - Completed
- `140` - Canceled

**Capabilities:**
- Retrieve order details and status
- Update order fulfillment status
- Manage order cancellations
- Process returns and refunds
- Sync tracking information

### 3. Inventory Management

**Endpoints:**
- `POST /api/products/stock/update` - Update stock levels
- `GET /api/products/stock` - Get current stock

**Capabilities:**
- Real-time inventory synchronization
- Prevent overselling
- Multi-location inventory support

### 4. Shipping Management

**Endpoints:**
- `GET /api/logistics/shipping_providers` - Get available carriers
- `POST /api/logistics/ship_order` - Ship order with tracking
- `POST /api/logistics/tracking` - Update tracking information

**Capabilities:**
- Manage shipping methods
- Update tracking numbers
- Handle shipping status updates
- Support multiple carriers

### 5. Returns & Refunds

**Endpoints:**
- `GET /api/returns/search` - List return requests
- `POST /api/returns/{return_id}/approve` - Approve return
- `POST /api/returns/{return_id}/reject` - Reject return
- `POST /api/refunds` - Process refund

### 6. Customer Management

**Endpoints:**
- `GET /api/customers/{customer_id}` - Get customer details
- `GET /api/customers/orders` - Get customer order history

**Capabilities:**
- Access customer information
- View purchase history
- Manage customer communications

---

## Integration Approaches

### Option 1: Direct API Integration (Recommended)

**Pros:**
- Full control over integration logic
- No additional costs
- Custom business logic implementation
- Better error handling and logging
- Direct data synchronization

**Cons:**
- Requires development effort
- Need to maintain OAuth flow
- Handle rate limiting logic
- Implement webhook processing

**Best for:**
- Custom workflows
- Complex business requirements
- Full control over data flow
- PlentyOne backend integration

### Option 2: Node.js SDK

**Available Package:** `@nisyaban/tiktok-shop-client`

**Pros:**
- Pre-built authentication handling
- Request signing automated
- Easier implementation
- Community support

**Cons:**
- Third-party dependency
- May lag behind API updates
- Limited customization

### Option 3: Third-Party Integration Platforms

**Providers:**
- API2Cart
- Channable
- Patchworks
- Pipe17

**Pros:**
- Quick setup
- Multi-marketplace support
- Managed updates

**Cons:**
- Monthly fees
- Less flexibility
- Data passes through third party
- Limited customization

---

## Recommended Architecture

### Integration Architecture for PlentyOne Backend

Based on the existing PlentyOne architecture (Node.js + Express + Alokai Middleware), here's the recommended approach:

```
┌─────────────────────────────────────────────────────────────┐
│                     PlentyOne Backend                        │
│                  (Node.js + Express + Alokai)                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ├─ Existing Integrations
                              │  ├─ PlentyMarkets
                              │  ├─ PayPal
                              │  └─ Mollie
                              │
                              └─ New Integration
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    v                         v
        ┌─────────────────────┐   ┌─────────────────────┐
        │  TikTok Shop API    │   │  Webhook Handler    │
        │   Integration       │   │   (Real-time)       │
        └─────────────────────┘   └─────────────────────┘
                │                         │
                │                         │
        ┌───────┴───────┐         ┌───────┴───────┐
        │               │         │               │
        v               v         v               v
    Products        Orders    Order Events    Product Events
    Inventory      Shipping   Inventory       Status Changes
```

### File Structure

```
apps/server/
├── src/
│   ├── integrations/
│   │   └── tiktok-shop/
│   │       ├── index.ts                 # Main integration export
│   │       ├── client.ts                # TikTok Shop API client
│   │       ├── auth.ts                  # OAuth flow handler
│   │       ├── webhooks.ts              # Webhook processing
│   │       ├── services/
│   │       │   ├── products.service.ts  # Product sync logic
│   │       │   ├── orders.service.ts    # Order management
│   │       │   ├── inventory.service.ts # Inventory sync
│   │       │   └── shipping.service.ts  # Shipping updates
│   │       ├── mappers/
│   │       │   ├── product.mapper.ts    # PlentyOne ↔ TikTok mapping
│   │       │   ├── order.mapper.ts      # Order data mapping
│   │       │   └── inventory.mapper.ts  # Inventory mapping
│   │       ├── types.ts                 # TypeScript definitions
│   │       └── constants.ts             # API constants
│   │
│   └── routes/
│       └── tiktok/
│           ├── auth.ts                  # /api/tiktok/auth/*
│           ├── products.ts              # /api/tiktok/products/*
│           ├── orders.ts                # /api/tiktok/orders/*
│           ├── webhooks.ts              # /api/tiktok/webhooks
│           └── sync.ts                  # /api/tiktok/sync/*
│
├── middleware.config.ts                 # Register TikTok integration
└── .env                                 # Environment variables
```

### Database Schema

#### TikTok Shop Configuration

```typescript
interface TikTokShopConfig {
  id: string;
  app_key: string;
  app_secret: string;          // Encrypted
  service_id: string;
  access_token: string;         // Encrypted
  refresh_token: string;        // Encrypted
  token_expires_at: Date;
  shop_id: string;
  shop_cipher: string;          // Encrypted
  shop_name: string;
  region: string;               // US, UK, etc.
  webhook_url: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
```

#### Product Mapping

```typescript
interface ProductMapping {
  id: string;
  plentyone_product_id: string;
  tiktok_product_id: string;
  tiktok_sku: string;
  last_synced_at: Date;
  sync_status: 'synced' | 'pending' | 'error';
  sync_error?: string;
}
```

#### Order Mapping

```typescript
interface OrderMapping {
  id: string;
  plentyone_order_id: string;
  tiktok_order_id: string;
  tiktok_order_status: number;
  last_synced_at: Date;
  sync_status: 'synced' | 'pending' | 'error';
  sync_error?: string;
}
```

### Environment Variables

```env
# TikTok Shop Configuration
TIKTOK_SHOP_APP_KEY=your_app_key
TIKTOK_SHOP_APP_SECRET=your_app_secret
TIKTOK_SHOP_SERVICE_ID=your_service_id
TIKTOK_SHOP_REGION=US
TIKTOK_SHOP_WEBHOOK_SECRET=your_webhook_secret

# OAuth Redirect
TIKTOK_SHOP_REDIRECT_URI=https://yourbackend.com/api/tiktok/callback

# Sync Settings
TIKTOK_SHOP_SYNC_INTERVAL=300000  # 5 minutes in ms
TIKTOK_SHOP_ENABLE_WEBHOOKS=true
```

---

## Implementation Plan

### Phase 1: Authentication & Setup (Week 1)

**Tasks:**
1. Register TikTok Shop Partner account
2. Create OAuth app in Partner Center
3. Enable required API permissions
4. Set up database tables for configuration and mappings
5. Implement OAuth 2.0 flow
   - Authorization endpoint
   - Callback handler
   - Token exchange
   - Token refresh logic
6. Create TikTok Shop API client wrapper
7. Test authentication in sandbox

**Deliverables:**
- Working OAuth flow
- Secure token storage
- API client with authentication

### Phase 2: Product Integration (Week 2)

**Tasks:**
1. Implement product data mapper (PlentyOne ↔ TikTok)
2. Create product sync service
   - List products from PlentyOne
   - Create/update products in TikTok Shop
   - Handle product variants
   - Upload product images
3. Build product sync API endpoints
4. Implement error handling and logging
5. Create manual sync trigger
6. Test with sample products

**Deliverables:**
- Product synchronization functionality
- Bidirectional product updates
- Error handling and retry logic

### Phase 3: Order Integration (Week 3)

**Tasks:**
1. Implement order data mapper
2. Create order sync service
   - Fetch new orders from TikTok Shop
   - Create orders in PlentyOne
   - Update order status
   - Handle cancellations
3. Build order fulfillment workflow
   - Order confirmation
   - Shipping updates
   - Tracking number sync
4. Implement order sync API endpoints
5. Test order flow end-to-end

**Deliverables:**
- Order synchronization
- Fulfillment workflow
- Status updates

### Phase 4: Inventory Synchronization (Week 4)

**Tasks:**
1. Implement inventory mapper
2. Create inventory sync service
   - Real-time stock updates
   - Low stock alerts
   - Multi-location support
3. Build inventory sync endpoints
4. Implement scheduled sync jobs
5. Test inventory accuracy

**Deliverables:**
- Real-time inventory sync
- Scheduled batch updates
- Stock level accuracy

### Phase 5: Webhooks & Real-time Events (Week 5)

**Tasks:**
1. Set up webhook endpoint
2. Implement webhook signature verification
3. Create event handlers for:
   - New orders
   - Order updates
   - Product updates
   - Inventory changes
4. Build webhook retry logic
5. Test webhook delivery

**Deliverables:**
- Real-time event processing
- Webhook security
- Event-driven updates

### Phase 6: Testing & Optimization (Week 6)

**Tasks:**
1. Comprehensive testing in sandbox
2. Load testing for rate limits
3. Error scenario testing
4. Performance optimization
5. Documentation
6. Staging environment deployment

**Deliverables:**
- Test results and reports
- Performance benchmarks
- Integration documentation

### Phase 7: Production Launch (Week 7)

**Tasks:**
1. Production credentials setup
2. Gradual rollout
3. Monitoring and alerts
4. Support documentation
5. Training materials

**Deliverables:**
- Production integration
- Monitoring dashboards
- Support documentation

---

## Rate Limits & Best Practices

### Rate Limits

- **Requests**: 50 API requests per second per store
- **Calculation**: Based on 1-minute sliding window
- **Throttling**: HTTP 429 status with `rate_limit_exceeded` error code
- **Multi-store**: Each connected store has its own separate limit

### Best Practices

#### 1. Request Management
```javascript
// Implement exponential backoff for rate limit errors
async function makeRequestWithRetry(apiCall, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await apiCall();
    } catch (error) {
      if (error.code === 'rate_limit_exceeded' && i < maxRetries - 1) {
        const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
}
```

#### 2. Batch Operations
- Use batch endpoints when available
- Group product updates
- Schedule large syncs during off-peak hours

#### 3. Caching
- Cache product data locally
- Reduce redundant API calls
- Use ETags for conditional requests

#### 4. Webhook Priority
- Prefer webhooks over polling for real-time updates
- Use webhooks for order and inventory changes
- Fall back to polling only when necessary

#### 5. Error Handling
```javascript
// Comprehensive error handling
try {
  const result = await tiktokClient.products.create(productData);
} catch (error) {
  switch (error.code) {
    case 'rate_limit_exceeded':
      // Retry with backoff
      break;
    case 'invalid_access_token':
      // Refresh token
      break;
    case 'product_already_exists':
      // Update instead of create
      break;
    default:
      // Log and alert
      logger.error('TikTok Shop API error', { error, productData });
  }
}
```

#### 6. Data Validation
- Validate data before sending to TikTok Shop
- Check required fields
- Ensure correct data formats
- Handle character limits

#### 7. Logging & Monitoring
- Log all API requests and responses
- Monitor success/failure rates
- Track synchronization metrics
- Alert on repeated failures

#### 8. Security
- Encrypt tokens at rest
- Use environment variables for credentials
- Validate webhook signatures
- Implement HTTPS for all endpoints
- Never expose App Secret in frontend code

---

## Testing Strategy

### 1. Sandbox Environment

TikTok Shop provides a sandbox environment for safe testing:

**Benefits:**
- Test API calls without affecting live data
- Simulate order flows
- Test webhook events
- Validate product uploads
- Test error scenarios

**Access:**
- Available through TikTok Shop Partner Center
- Separate credentials from production
- Mock data for testing

### 2. Test Scenarios

#### Authentication Tests
- ✅ Successful OAuth flow
- ✅ Token refresh
- ✅ Expired token handling
- ✅ Invalid credentials
- ✅ Revoked access

#### Product Tests
- ✅ Create single product
- ✅ Create product with variants
- ✅ Update existing product
- ✅ Delete product
- ✅ Upload images
- ✅ Handle invalid data
- ✅ Duplicate product handling

#### Order Tests
- ✅ Fetch new orders
- ✅ Order status updates
- ✅ Shipping confirmation
- ✅ Order cancellation
- ✅ Return processing
- ✅ Refund handling

#### Inventory Tests
- ✅ Stock level updates
- ✅ Low stock scenarios
- ✅ Out of stock handling
- ✅ Multi-location sync

#### Webhook Tests
- ✅ Webhook signature verification
- ✅ Event processing
- ✅ Retry logic
- ✅ Malformed payload handling

#### Performance Tests
- ✅ Rate limit handling
- ✅ Large product catalogs
- ✅ High order volume
- ✅ Concurrent requests

### 3. Testing Tools

```javascript
// Example test using Jest
describe('TikTok Shop Product Integration', () => {
  let tiktokClient;

  beforeAll(() => {
    tiktokClient = new TikTokShopClient({
      appKey: process.env.TIKTOK_SHOP_TEST_APP_KEY,
      appSecret: process.env.TIKTOK_SHOP_TEST_APP_SECRET,
      accessToken: process.env.TIKTOK_SHOP_TEST_ACCESS_TOKEN,
    });
  });

  test('should create a product successfully', async () => {
    const productData = {
      title: 'Test Product',
      description: 'Test Description',
      price: 29.99,
      stock: 100,
    };

    const result = await tiktokClient.products.create(productData);

    expect(result.code).toBe(0);
    expect(result.data.product_id).toBeDefined();
  });

  test('should handle rate limiting', async () => {
    // Make 51 requests to trigger rate limit
    const requests = Array(51).fill().map(() =>
      tiktokClient.products.list()
    );

    await expect(Promise.all(requests)).rejects.toThrow('rate_limit_exceeded');
  });
});
```

---

## Code Examples

### 1. TikTok Shop API Client

```typescript
// apps/server/src/integrations/tiktok-shop/client.ts
import crypto from 'crypto';
import axios, { AxiosInstance } from 'axios';

interface TikTokShopConfig {
  appKey: string;
  appSecret: string;
  accessToken: string;
  shopId?: string;
  shopCipher?: string;
  region?: 'US' | 'UK' | 'ID' | 'MY' | 'PH' | 'SG' | 'TH' | 'VN';
}

export class TikTokShopClient {
  private config: TikTokShopConfig;
  private httpClient: AxiosInstance;
  private baseUrl: string;

  constructor(config: TikTokShopConfig) {
    this.config = config;
    this.baseUrl = config.region === 'US'
      ? 'https://open-api.tiktokglobalshop.com'
      : 'https://open-api.tiktokglobalshop.com'; // Adjust for regions

    this.httpClient = axios.create({
      baseURL: this.baseUrl,
      timeout: 30000,
    });
  }

  /**
   * Generate signature for API request
   */
  private generateSignature(path: string, params: Record<string, any>, timestamp: number): string {
    const { appKey, appSecret } = this.config;

    // Sort parameters
    const sortedParams = Object.keys(params)
      .sort()
      .reduce((acc, key) => {
        acc[key] = params[key];
        return acc;
      }, {} as Record<string, any>);

    // Create sign string
    const paramStr = Object.entries(sortedParams)
      .map(([key, value]) => `${key}${value}`)
      .join('');

    const signStr = `${appKey}${path}${timestamp}${paramStr}${appSecret}`;

    // Generate HMAC-SHA256
    return crypto
      .createHmac('sha256', appSecret)
      .update(signStr)
      .digest('hex');
  }

  /**
   * Make authenticated API request
   */
  async request<T>(method: string, path: string, params: Record<string, any> = {}): Promise<T> {
    const timestamp = Math.floor(Date.now() / 1000);
    const signature = this.generateSignature(path, params, timestamp);

    const headers = {
      'Content-Type': 'application/json',
      'x-tts-access-token': this.config.accessToken,
    };

    const queryParams = {
      app_key: this.config.appKey,
      timestamp: timestamp.toString(),
      sign: signature,
      ...params,
    };

    try {
      const response = await this.httpClient.request({
        method,
        url: path,
        headers,
        [method === 'GET' ? 'params' : 'data']: queryParams,
      });

      if (response.data.code !== 0) {
        throw new Error(`TikTok Shop API Error: ${response.data.message}`);
      }

      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 429) {
          throw new Error('rate_limit_exceeded');
        }
        if (error.response?.status === 401) {
          throw new Error('invalid_access_token');
        }
      }
      throw error;
    }
  }

  /**
   * Products API
   */
  products = {
    list: (params: { page_size?: number; page_number?: number }) =>
      this.request('GET', '/api/products/search', params),

    get: (productId: string) =>
      this.request('GET', `/api/products/${productId}`, {}),

    create: (productData: any) =>
      this.request('POST', '/api/products', productData),

    update: (productId: string, productData: any) =>
      this.request('PUT', `/api/products/${productId}`, productData),

    delete: (productId: string) =>
      this.request('DELETE', `/api/products/${productId}`, {}),

    updateStock: (productId: string, skus: Array<{ id: string; stock: number }>) =>
      this.request('POST', '/api/products/stock/update', { product_id: productId, skus }),
  };

  /**
   * Orders API
   */
  orders = {
    list: (params: { order_status?: number; page_size?: number; page_number?: number }) =>
      this.request('GET', '/api/orders/search', params),

    get: (orderId: string) =>
      this.request('GET', `/api/orders/${orderId}`, {}),

    confirm: (orderId: string) =>
      this.request('POST', `/api/orders/${orderId}/confirm`, {}),

    ship: (orderId: string, shippingData: any) =>
      this.request('POST', `/api/orders/${orderId}/ship`, shippingData),

    cancel: (orderId: string, cancelReason: string) =>
      this.request('POST', `/api/orders/${orderId}/cancel`, { cancel_reason: cancelReason }),
  };

  /**
   * Shop API
   */
  shop = {
    getAuthorizedShops: () =>
      this.request('GET', '/api/shop/get_authorized_shop', {}),
  };
}
```

### 2. OAuth Flow Implementation

```typescript
// apps/server/src/integrations/tiktok-shop/auth.ts
import { TikTokShopClient } from './client';
import crypto from 'crypto';

export class TikTokShopAuth {
  private appKey: string;
  private appSecret: string;
  private serviceId: string;
  private redirectUri: string;
  private region: string;

  constructor(config: {
    appKey: string;
    appSecret: string;
    serviceId: string;
    redirectUri: string;
    region?: string;
  }) {
    this.appKey = config.appKey;
    this.appSecret = config.appSecret;
    this.serviceId = config.serviceId;
    this.redirectUri = config.redirectUri;
    this.region = config.region || 'US';
  }

  /**
   * Generate authorization URL
   */
  getAuthorizationUrl(state?: string): string {
    const baseUrl = this.region === 'US'
      ? 'https://services.us.tiktokshop.com/open/authorize'
      : 'https://services.tiktokshop.com/open/authorize';

    const authState = state || crypto.randomBytes(16).toString('hex');

    return `${baseUrl}?service_id=${this.serviceId}&state=${authState}`;
  }

  /**
   * Exchange authorization code for access token
   */
  async getAccessToken(authCode: string): Promise<{
    access_token: string;
    refresh_token: string;
    access_token_expire_in: number;
    refresh_token_expire_in: number;
  }> {
    const baseUrl = this.region === 'US'
      ? 'https://open-api.tiktokglobalshop.com'
      : 'https://open-api.tiktokglobalshop.com';

    const response = await fetch(`${baseUrl}/api/token/get`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        app_key: this.appKey,
        app_secret: this.appSecret,
        auth_code: authCode,
        grant_type: 'authorized_code',
      }),
    });

    const data = await response.json();

    if (data.code !== 0) {
      throw new Error(`Token exchange failed: ${data.message}`);
    }

    return data.data;
  }

  /**
   * Refresh access token
   */
  async refreshAccessToken(refreshToken: string): Promise<{
    access_token: string;
    refresh_token: string;
    access_token_expire_in: number;
    refresh_token_expire_in: number;
  }> {
    const baseUrl = this.region === 'US'
      ? 'https://open-api.tiktokglobalshop.com'
      : 'https://open-api.tiktokglobalshop.com';

    const response = await fetch(`${baseUrl}/api/token/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        app_key: this.appKey,
        app_secret: this.appSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      }),
    });

    const data = await response.json();

    if (data.code !== 0) {
      throw new Error(`Token refresh failed: ${data.message}`);
    }

    return data.data;
  }

  /**
   * Get authorized shops
   */
  async getAuthorizedShops(accessToken: string): Promise<Array<{
    shop_id: string;
    shop_cipher: string;
    shop_name: string;
    region: string;
  }>> {
    const client = new TikTokShopClient({
      appKey: this.appKey,
      appSecret: this.appSecret,
      accessToken: accessToken,
      region: this.region as any,
    });

    const shops = await client.shop.getAuthorizedShops();
    return shops;
  }
}
```

### 3. Webhook Handler

```typescript
// apps/server/src/integrations/tiktok-shop/webhooks.ts
import crypto from 'crypto';
import { Request, Response } from 'express';

export class TikTokShopWebhooks {
  private appSecret: string;

  constructor(appSecret: string) {
    this.appSecret = appSecret;
  }

  /**
   * Verify webhook signature
   */
  verifySignature(req: Request): boolean {
    const signature = req.headers['x-tts-signature'] as string;
    const timestamp = req.headers['x-tts-timestamp'] as string;

    if (!signature || !timestamp) {
      return false;
    }

    const body = JSON.stringify(req.body);
    const signString = `${timestamp}${body}`;

    const expectedSignature = crypto
      .createHmac('sha256', this.appSecret)
      .update(signString)
      .digest('hex');

    return signature === expectedSignature;
  }

  /**
   * Handle webhook events
   */
  async handleWebhook(req: Request, res: Response): Promise<void> {
    // Verify signature
    if (!this.verifySignature(req)) {
      res.status(401).json({ error: 'Invalid signature' });
      return;
    }

    const event = req.body;

    try {
      switch (event.type) {
        case 'ORDER_STATUS_CHANGE':
          await this.handleOrderStatusChange(event.data);
          break;

        case 'PRODUCT_UPDATE':
          await this.handleProductUpdate(event.data);
          break;

        case 'INVENTORY_UPDATE':
          await this.handleInventoryUpdate(event.data);
          break;

        case 'RETURN_REQUEST':
          await this.handleReturnRequest(event.data);
          break;

        default:
          console.log(`Unknown event type: ${event.type}`);
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Webhook processing error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  private async handleOrderStatusChange(data: any): Promise<void> {
    // Implement order status change logic
    console.log('Order status changed:', data);
    // Update order in PlentyOne system
  }

  private async handleProductUpdate(data: any): Promise<void> {
    // Implement product update logic
    console.log('Product updated:', data);
    // Sync product changes to PlentyOne
  }

  private async handleInventoryUpdate(data: any): Promise<void> {
    // Implement inventory update logic
    console.log('Inventory updated:', data);
    // Sync inventory to PlentyOne
  }

  private async handleReturnRequest(data: any): Promise<void> {
    // Implement return request logic
    console.log('Return request received:', data);
    // Process return in PlentyOne
  }
}
```

### 4. Product Sync Service

```typescript
// apps/server/src/integrations/tiktok-shop/services/products.service.ts
import { TikTokShopClient } from '../client';

export class TikTokProductService {
  private client: TikTokShopClient;

  constructor(client: TikTokShopClient) {
    this.client = client;
  }

  /**
   * Sync product from PlentyOne to TikTok Shop
   */
  async syncProductToTikTok(plentyOneProduct: any): Promise<string> {
    // Map PlentyOne product to TikTok format
    const tiktokProduct = this.mapProductToTikTok(plentyOneProduct);

    try {
      // Check if product already exists
      const existingProduct = await this.findExistingProduct(plentyOneProduct.sku);

      if (existingProduct) {
        // Update existing product
        await this.client.products.update(existingProduct.id, tiktokProduct);
        return existingProduct.id;
      } else {
        // Create new product
        const result = await this.client.products.create(tiktokProduct);
        return result.product_id;
      }
    } catch (error) {
      console.error('Product sync error:', error);
      throw error;
    }
  }

  /**
   * Map PlentyOne product to TikTok Shop format
   */
  private mapProductToTikTok(plentyOneProduct: any): any {
    return {
      title: plentyOneProduct.name,
      description: plentyOneProduct.description,
      category_id: this.mapCategory(plentyOneProduct.category),
      brand_id: plentyOneProduct.brand_id,
      main_images: plentyOneProduct.images.map((img: any) => ({
        url: img.url,
      })),
      skus: plentyOneProduct.variants.map((variant: any) => ({
        seller_sku: variant.sku,
        price: {
          amount: variant.price.toString(),
          currency: 'USD',
        },
        stock_infos: [{
          available_stock: variant.stock,
        }],
        sales_attributes: variant.attributes,
      })),
      package_dimensions: {
        length: plentyOneProduct.dimensions.length,
        width: plentyOneProduct.dimensions.width,
        height: plentyOneProduct.dimensions.height,
        unit: 'CENTIMETER',
      },
      package_weight: {
        value: plentyOneProduct.weight,
        unit: 'KILOGRAM',
      },
    };
  }

  /**
   * Find existing product by SKU
   */
  private async findExistingProduct(sku: string): Promise<any | null> {
    try {
      const products = await this.client.products.list({
        page_size: 100,
        page_number: 1,
      });

      return products.products.find((p: any) =>
        p.skus.some((s: any) => s.seller_sku === sku)
      ) || null;
    } catch (error) {
      console.error('Error finding product:', error);
      return null;
    }
  }

  /**
   * Map PlentyOne category to TikTok category
   */
  private mapCategory(plentyOneCategory: string): string {
    // Implement category mapping logic
    // This would require maintaining a mapping table
    return '12345'; // Example category ID
  }
}
```

---

## Next Steps

### Immediate Actions

1. **Register TikTok Shop Account**
   - Sign up at https://partner.tiktokshop.com/account/sign-up
   - Complete seller onboarding
   - Register as developer

2. **Create OAuth Application**
   - Navigate to App & Service in Partner Center
   - Create new Public App
   - Configure redirect URL
   - Enable required API permissions

3. **Set Up Development Environment**
   - Create database tables for TikTok Shop configuration
   - Set up environment variables
   - Configure middleware.config.ts

4. **Proof of Concept**
   - Implement basic OAuth flow
   - Test authentication in sandbox
   - Create sample product sync
   - Verify API connectivity

### Questions to Resolve

1. **Business Requirements**
   - Which products should be synced to TikTok Shop?
   - Should all orders be automatically created in PlentyOne?
   - How should inventory conflicts be handled?
   - What is the desired sync frequency?

2. **Technical Decisions**
   - Direct API integration or use Node.js SDK?
   - Real-time webhooks or scheduled polling?
   - Database choice for mappings (PostgreSQL, MongoDB, etc.)?
   - Error notification method (email, Slack, dashboard)?

3. **Operational Considerations**
   - Who will manage TikTok Shop listings?
   - How will order fulfillment be handled?
   - What are the SLAs for order processing?
   - Customer support responsibilities?

---

## Resources

### Official Documentation
- TikTok Shop Partner Center: https://partner.tiktokshop.com
- TikTok Developers Portal: https://developers.tiktok.com
- OAuth Documentation: https://developers.tiktok.com/doc/oauth-user-access-token-management

### Development Tools
- Postman Collection: https://www.postman.com/tiktok-shop-open
- GitHub PHP SDK: https://github.com/EcomPHP/tiktokshop-php
- NPM Package: `@nisyaban/tiktok-shop-client`

### Third-Party Integrations
- API2Cart: https://api2cart.com/api-technology/tiktok-api/
- Channable: https://www.channable.com/integrations/tiktok-shop
- Patchworks: Contact for TikTok Shop integration

### Support
- TikTok Shop Seller Support: Available in Partner Center
- Developer Community: TikTok Developer Forums
- Technical Support: Submit tickets through Partner Center

---

## Conclusion

Integrating TikTok Shop with your PlentyOne backend is a strategic opportunity to tap into TikTok's 1.4 billion active users. The TikTok Shop Open API provides comprehensive capabilities for product management, order processing, and inventory synchronization.

**Recommended Approach:**
- Direct API integration for maximum control and flexibility
- Leverage existing PlentyOne architecture (Node.js + Express + Alokai)
- Implement OAuth 2.0 authentication with secure token management
- Use webhooks for real-time order and inventory updates
- Start with sandbox testing before production deployment

**Estimated Timeline:** 6-7 weeks for full implementation
**Development Effort:** 1-2 full-stack developers
**Ongoing Maintenance:** Moderate (API updates, monitoring, support)

The integration will enable automatic product listing synchronization, real-time order management, and inventory updates between PlentyOne and TikTok Shop, streamlining your multi-channel e-commerce operations.

---

**Document Version:** 1.0
**Last Updated:** 2025-11-18
**Prepared For:** PlentyOne Backend Integration
**Contact:** [Your Contact Information]
