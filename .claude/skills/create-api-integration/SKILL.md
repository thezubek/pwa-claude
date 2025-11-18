# Create API Integration Skill

This skill helps you create API integrations for the PlentyONE Shop PWA using the Alokai SDK.

## What this skill does

- Creates API endpoint integrations using the Alokai SDK
- Generates composables for API data management
- Implements proper error handling and loading states
- Follows the established API integration patterns
- Integrates with the PlentyONE backend

## When to use this skill

Use this skill when you need to:
- Create a new API endpoint integration
- Build composables that fetch data from the backend
- Implement CRUD operations for resources
- Create API methods with proper typing
- Handle API responses and errors

## API Architecture Overview

The app uses a **two-layer architecture**:

### 1. Server/Middleware Layer
Location: `/apps/server/`
- Alokai middleware server
- API connector for PlentyONE backend
- Handles authentication, session management
- Transforms backend responses to unified data models

### 2. Client/Web Layer
Location: `/apps/web/`
- Nuxt.js frontend
- Uses `@plentymarkets/shop-api` SDK
- Composables for state management
- Components consume composables

## SDK Integration

The app uses the PlentyONE Shop API SDK:

```typescript
import { sdk } from '@plentymarkets/shop-api';

// SDK is auto-configured via shop-core module
// Available globally in composables and components
```

### SDK Structure:
```typescript
sdk.plentymarkets.{resource}.{method}

// Examples:
sdk.plentymarkets.getProduct({ productId: '123' })
sdk.plentymarkets.addToCart({ variationId: 456, quantity: 1 })
sdk.plentymarkets.getCustomer()
sdk.plentymarkets.updateAddress({ addressId: 789, data: {...} })
```

## Creating an API Integration

### Step 1: Define the API Method (if needed)

If adding a new backend endpoint, first add it to the middleware:

```typescript
// apps/server/src/index.ts or relevant file
export const apiMethods = {
  getCustomResource: async (context, params) => {
    const response = await context.api.get('/custom-resource', params);
    return response.data;
  },

  createCustomResource: async (context, params) => {
    const response = await context.api.post('/custom-resource', params);
    return response.data;
  },
};
```

### Step 2: Create a Composable

Create a composable to manage the API interaction:

```typescript
// apps/web/app/composables/useCustomResource/useCustomResource.ts
import { ref, computed } from 'vue';
import type { CustomResource, CustomResourceParams } from './types';

export const useCustomResource = () => {
  // State
  const data = ref<CustomResource | null>(null);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  // Computed
  const hasData = computed(() => data.value !== null);
  const hasError = computed(() => error.value !== null);

  // Methods
  const fetchCustomResource = async (params: CustomResourceParams) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await sdk.plentymarkets.getCustomResource(params);
      data.value = response;
      return response;
    } catch (err) {
      error.value = err as Error;
      console.error('Failed to fetch custom resource:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const createCustomResource = async (params: CustomResourceParams) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await sdk.plentymarkets.createCustomResource(params);
      data.value = response;
      return response;
    } catch (err) {
      error.value = err as Error;
      console.error('Failed to create custom resource:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const reset = () => {
    data.value = null;
    loading.value = false;
    error.value = null;
  };

  return {
    // State
    data: readonly(data),
    loading: readonly(loading),
    error: readonly(error),

    // Computed
    hasData,
    hasError,

    // Methods
    fetchCustomResource,
    createCustomResource,
    reset,
  };
};
```

### Step 3: Define Types

```typescript
// apps/web/app/composables/useCustomResource/types.ts
export interface CustomResource {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomResourceParams {
  id?: number;
  name?: string;
  limit?: number;
  offset?: number;
}

export interface CustomResourceCreateParams {
  name: string;
  description: string;
}

export interface CustomResourceUpdateParams {
  id: number;
  name?: string;
  description?: string;
}
```

### Step 4: Create Index File

```typescript
// apps/web/app/composables/useCustomResource/index.ts
export * from './useCustomResource';
export * from './types';
```

### Step 5: Use in Component

```vue
<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading">Loading...</div>

    <!-- Error State -->
    <div v-if="hasError" class="error">
      {{ error?.message }}
    </div>

    <!-- Data Display -->
    <div v-if="hasData">
      <h2>{{ data?.name }}</h2>
      <p>{{ data?.description }}</p>
    </div>

    <!-- Actions -->
    <button @click="loadResource" :disabled="loading">
      Load Resource
    </button>
  </div>
</template>

<script setup lang="ts">
const {
  data,
  loading,
  error,
  hasData,
  hasError,
  fetchCustomResource
} = useCustomResource();

const loadResource = async () => {
  await fetchCustomResource({ id: 123 });
};

onMounted(() => {
  loadResource();
});
</script>
```

## API Integration Patterns

### 1. Simple GET Request:
```typescript
export const useProduct = () => {
  const product = ref(null);
  const loading = ref(false);

  const getProduct = async (productId: string) => {
    loading.value = true;
    try {
      const response = await sdk.plentymarkets.getProduct({ productId });
      product.value = response;
    } finally {
      loading.value = false;
    }
  };

  return { product, loading, getProduct };
};
```

### 2. List with Pagination:
```typescript
export const useProducts = () => {
  const products = ref([]);
  const total = ref(0);
  const loading = ref(false);

  const fetchProducts = async (params: {
    page?: number;
    limit?: number;
    categoryId?: string;
  }) => {
    loading.value = true;
    try {
      const response = await sdk.plentymarkets.getProducts({
        page: params.page || 1,
        limit: params.limit || 20,
        categoryId: params.categoryId,
      });
      products.value = response.items;
      total.value = response.total;
    } finally {
      loading.value = false;
    }
  };

  return { products, total, loading, fetchProducts };
};
```

### 3. POST/Create Operation:
```typescript
export const useAddToCart = () => {
  const loading = ref(false);
  const error = ref(null);

  const addToCart = async (variationId: number, quantity: number) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await sdk.plentymarkets.addToCart({
        variationId,
        quantity,
      });

      // Update cart state
      const { refreshCart } = useCart();
      await refreshCart();

      return response;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return { addToCart, loading, error };
};
```

### 4. PUT/Update Operation:
```typescript
export const useUpdateAddress = () => {
  const loading = ref(false);

  const updateAddress = async (addressId: number, data: AddressData) => {
    loading.value = true;
    try {
      const response = await sdk.plentymarkets.updateAddress({
        addressId,
        data,
      });

      // Refresh address list
      const { fetchAddresses } = useAddresses();
      await fetchAddresses();

      return response;
    } finally {
      loading.value = false;
    }
  };

  return { updateAddress, loading };
};
```

### 5. DELETE Operation:
```typescript
export const useDeleteAddress = () => {
  const loading = ref(false);

  const deleteAddress = async (addressId: number) => {
    loading.value = true;
    try {
      await sdk.plentymarkets.deleteAddress({ addressId });

      // Refresh address list
      const { fetchAddresses } = useAddresses();
      await fetchAddresses();
    } finally {
      loading.value = false;
    }
  };

  return { deleteAddress, loading };
};
```

## Error Handling

### Global Error Handler:
```typescript
export const useApiError = () => {
  const handleError = (error: any) => {
    // Log error
    console.error('API Error:', error);

    // Check error type
    if (error.response) {
      // HTTP error
      const status = error.response.status;
      const message = error.response.data?.message || 'An error occurred';

      switch (status) {
        case 401:
          // Unauthorized - redirect to login
          navigateTo('/login');
          break;
        case 404:
          // Not found
          showNotification({ type: 'error', message: 'Resource not found' });
          break;
        case 500:
          // Server error
          showNotification({ type: 'error', message: 'Server error' });
          break;
        default:
          showNotification({ type: 'error', message });
      }
    } else if (error.request) {
      // Network error
      showNotification({ type: 'error', message: 'Network error' });
    } else {
      // Other error
      showNotification({ type: 'error', message: error.message });
    }
  };

  return { handleError };
};
```

### Using Error Handler:
```typescript
const { handleError } = useApiError();

try {
  await fetchData();
} catch (error) {
  handleError(error);
}
```

## Caching Strategies

### 1. Simple Cache:
```typescript
export const useProductCache = () => {
  const cache = ref<Map<string, Product>>(new Map());

  const getProduct = async (productId: string) => {
    // Check cache
    if (cache.value.has(productId)) {
      return cache.value.get(productId);
    }

    // Fetch from API
    const product = await sdk.plentymarkets.getProduct({ productId });

    // Store in cache
    cache.value.set(productId, product);

    return product;
  };

  return { getProduct };
};
```

### 2. Time-based Cache:
```typescript
interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

export const useCachedFetch = <T>(
  fetchFn: () => Promise<T>,
  ttl: number = 60000 // 1 minute
) => {
  const cache = ref<CacheEntry<T> | null>(null);
  const loading = ref(false);

  const fetch = async (force = false) => {
    const now = Date.now();

    // Return cached data if valid
    if (
      !force &&
      cache.value &&
      now - cache.value.timestamp < ttl
    ) {
      return cache.value.data;
    }

    // Fetch fresh data
    loading.value = true;
    try {
      const data = await fetchFn();
      cache.value = { data, timestamp: now };
      return data;
    } finally {
      loading.value = false;
    }
  };

  return { fetch, loading };
};
```

## Authentication & Session

### Accessing Current Customer:
```typescript
const { customer, isLoggedIn } = useCustomer();

if (isLoggedIn.value) {
  console.log('Customer:', customer.value);
}
```

### CSRF Token:
```typescript
const { csrfToken, fetchCsrfToken } = useCsrfToken();

// Token is automatically included in requests
// Refresh if needed:
await fetchCsrfToken();
```

### Session Management:
```typescript
const { session, refreshSession } = useFetchSession();

// Refresh session
await refreshSession();
```

## Real-world Examples

### Example 1: Product Search
```typescript
export const useProductSearch = () => {
  const results = ref([]);
  const loading = ref(false);
  const total = ref(0);

  const search = async (query: string, page = 1, limit = 20) => {
    loading.value = true;
    try {
      const response = await sdk.plentymarkets.searchProducts({
        query,
        page,
        limit,
      });

      results.value = response.items;
      total.value = response.total;

      return response;
    } finally {
      loading.value = false;
    }
  };

  return { results, total, loading, search };
};
```

### Example 2: Wishlist Management
```typescript
export const useWishlist = () => {
  const items = ref([]);
  const loading = ref(false);

  const fetchWishlist = async () => {
    loading.value = true;
    try {
      const response = await sdk.plentymarkets.getWishlist();
      items.value = response.items;
    } finally {
      loading.value = false;
    }
  };

  const addToWishlist = async (variationId: number) => {
    loading.value = true;
    try {
      await sdk.plentymarkets.addToWishlist({ variationId });
      await fetchWishlist(); // Refresh
    } finally {
      loading.value = false;
    }
  };

  const removeFromWishlist = async (variationId: number) => {
    loading.value = true;
    try {
      await sdk.plentymarkets.removeFromWishlist({ variationId });
      await fetchWishlist(); // Refresh
    } finally {
      loading.value = false;
    }
  };

  return {
    items,
    loading,
    fetchWishlist,
    addToWishlist,
    removeFromWishlist,
  };
};
```

### Example 3: Order Placement
```typescript
export const useMakeOrder = () => {
  const loading = ref(false);
  const error = ref(null);

  const placeOrder = async (orderData: OrderData) => {
    loading.value = true;
    error.value = null;

    try {
      // Validate cart
      const { cart } = useCart();
      if (!cart.value?.items.length) {
        throw new Error('Cart is empty');
      }

      // Create order
      const response = await sdk.plentymarkets.createOrder(orderData);

      // Clear cart
      const { clearCart } = useCart();
      await clearCart();

      // Navigate to confirmation
      navigateTo(`/confirmation/${response.orderId}/${response.accessKey}`);

      return response;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return { placeOrder, loading, error };
};
```

## Best Practices

1. **Error Handling:**
   - Always handle errors gracefully
   - Provide user-friendly error messages
   - Log errors for debugging
   - Use try/catch/finally

2. **Loading States:**
   - Always show loading indicators
   - Disable actions during loading
   - Prevent duplicate requests

3. **Type Safety:**
   - Define TypeScript interfaces for all API responses
   - Use proper typing for parameters
   - Leverage IDE autocomplete

4. **State Management:**
   - Use readonly() for exposed state
   - Provide reset methods
   - Keep related state together

5. **Composition:**
   - Compose complex composables from smaller ones
   - Reuse common patterns
   - Extract reusable logic

6. **Performance:**
   - Cache when appropriate
   - Debounce rapid requests
   - Use pagination for lists
   - Lazy load data

7. **Security:**
   - Never expose sensitive data
   - Validate all inputs
   - Use CSRF tokens
   - Handle authentication properly

## Related Files

- SDK: `@plentymarkets/shop-api` package
- Middleware: `/apps/server/`
- Composables: `/apps/web/app/composables/`
- Shop Core module: `@plentymarkets/shop-core`
- API configuration: `/apps/web/nuxt.config.ts` (shopCore.apiUrl)

## Notes

- The SDK is pre-configured via the `@plentymarkets/shop-core` Nuxt module
- API URL is configured in `.env` (API_ENDPOINT or API_URL)
- Middleware runs on port 8181 by default (http://localhost:8181)
- All API methods are typed for TypeScript support
- The SDK handles authentication cookies automatically
- Session data is managed server-side via Alokai middleware
- Consider using `useFetch` or `useAsyncData` for SSR-compatible data fetching
- The app uses Unified Data Model (UDM) for consistent data structures
- API methods follow REST conventions (GET, POST, PUT, DELETE)
- Always test API integrations with both success and error scenarios
