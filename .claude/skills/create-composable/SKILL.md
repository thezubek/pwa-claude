# Create Composable Skill

This skill helps you create new Vue composables following the PlentyONE Shop project conventions.

## What this skill does

- Generates Vue 3 composables with proper TypeScript types
- Follows the directory-based organizational pattern
- Creates test files with proper structure
- Ensures consistent naming conventions
- Integrates with existing composables and API layer

## When to use this skill

Use this skill when you need to:
- Create reusable business logic as a composable
- Build state management for a feature
- Create API integration composables
- Generate utility composables for common tasks

## How to use

When invoked, this skill will:

1. **Ask for composable details:**
   - Composable name (e.g., `useProductWishlist`)
   - Purpose and functionality
   - State variables needed
   - Methods to expose
   - Dependencies on other composables

2. **Generate the composable structure:**
   - Create folder: `/apps/web/app/composables/useFeatureName/`
   - Main file: `useFeatureName.ts`
   - Types file: `types.ts`
   - Index file: `index.ts` (re-export pattern)
   - Test file: `__tests__/useFeatureName.spec.ts`

3. **Follow established patterns:**
   - Use Vue's Composition API
   - Return reactive state and methods
   - Use TypeScript interfaces
   - Include proper error handling
   - Follow naming conventions

## Composable Structure Template

### Directory Structure:
```
composables/useFeatureName/
├── index.ts                    # Re-export
├── useFeatureName.ts          # Main implementation
├── types.ts                   # TypeScript interfaces
└── __tests__/
    └── useFeatureName.spec.ts # Unit tests
```

### Main Implementation (`useFeatureName.ts`):
```typescript
import { ref, computed } from 'vue';
import type { FeatureState, FeatureOptions } from './types';

export const useFeatureName = (options?: FeatureOptions) => {
  // State
  const state = ref<FeatureState>({
    data: null,
    loading: false,
    error: null,
  });

  // Computed
  const hasData = computed(() => state.value.data !== null);

  // Methods
  const fetchData = async () => {
    state.value.loading = true;
    try {
      // Implementation
    } catch (error) {
      state.value.error = error;
    } finally {
      state.value.loading = false;
    }
  };

  return {
    // State
    ...toRefs(state),
    // Computed
    hasData,
    // Methods
    fetchData,
  };
};
```

### Types File (`types.ts`):
```typescript
export interface FeatureState {
  data: DataType | null;
  loading: boolean;
  error: Error | null;
}

export interface FeatureOptions {
  autoFetch?: boolean;
  // other options
}

export interface DataType {
  // data structure
}
```

### Index File (`index.ts`):
```typescript
export * from './useFeatureName';
export * from './types';
```

### Test File (`__tests__/useFeatureName.spec.ts`):
```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { useFeatureName } from '../useFeatureName';

describe('useFeatureName', () => {
  it('should initialize with default state', () => {
    const { data, loading, error } = useFeatureName();

    expect(data.value).toBeNull();
    expect(loading.value).toBe(false);
    expect(error.value).toBeNull();
  });

  it('should fetch data successfully', async () => {
    const { fetchData, data, loading } = useFeatureName();

    await fetchData();

    expect(loading.value).toBe(false);
    expect(data.value).toBeDefined();
  });
});
```

## Key Conventions

1. **Naming:**
   - Composables: Always start with `use` (e.g., `useProductReviews`)
   - Folder name matches composable name
   - Files: camelCase
   - Interfaces: PascalCase with descriptive suffix

2. **Return Pattern:**
   - Always return an object
   - Use `toRefs()` for reactive state when appropriate
   - Group related properties
   - Document complex returns with JSDoc

3. **State Management:**
   - Use `ref()` for single values
   - Use `reactive()` for objects
   - Use `computed()` for derived state
   - Use `readonly()` to protect internal state

4. **API Integration:**
   - Use the SDK from `@plentymarkets/shop-api`
   - Handle loading and error states
   - Provide both async and sync methods when appropriate
   - Cache API responses when beneficial

## Composable Categories

### 1. API/Data Composables
Examples: `useProduct`, `useCart`, `useCustomer`
- Fetch and manage data from API
- Handle loading/error states
- Cache and update data

### 2. UI State Composables
Examples: `useDrawerState`, `useModal`, `useNotification`
- Manage component state
- Handle UI interactions
- Provide helper methods

### 3. Form Composables
Examples: `useAddressForm`, `useRegisterForm`
- Form state management
- Validation logic
- Submit handlers

### 4. Utility Composables
Examples: `usePriceFormatter`, `useLocalization`, `useBrowserNavigation`
- Provide utility functions
- Format data
- Handle browser APIs

### 5. Business Logic Composables
Examples: `useCheckout`, `useQuickCheckout`, `useOrderAgain`
- Complex business workflows
- Multi-step processes
- Coordinate multiple composables

## Integration Points

- **Other Composables:** Import and use related composables
- **SDK/API:** Use `@plentymarkets/shop-api` for data fetching
- **Router:** Use `useRouter()` for navigation
- **i18n:** Use `useI18n()` for translations
- **Nuxt:** Use Nuxt auto-imports and runtime config

## Best Practices

1. **Single Responsibility:** Each composable should have one clear purpose
2. **Reusability:** Design for reuse across components
3. **Composition:** Compose larger composables from smaller ones
4. **Type Safety:** Always include TypeScript types
5. **Error Handling:** Handle errors gracefully with proper error states
6. **Testing:** Write unit tests for all composables
7. **Documentation:** Include JSDoc comments for complex logic
8. **Performance:** Use `computed()` for expensive calculations, memoize when needed

## Examples

### Example 1: Create a Data Composable
```
User: Create a useProductCompare composable for comparing products
Skill: Creates `/apps/web/app/composables/useProductCompare/` with:
  - useProductCompare.ts (manages comparison list, add/remove products)
  - types.ts (CompareState, CompareProduct interfaces)
  - index.ts (re-exports)
  - __tests__/useProductCompare.spec.ts
```

### Example 2: Create a UI State Composable
```
User: Create a useNotification composable for toast messages
Skill: Creates `/apps/web/app/composables/useNotification/` with:
  - useNotification.ts (queue, show, hide methods)
  - types.ts (Notification interface)
  - index.ts
  - __tests__/useNotification.spec.ts
```

### Example 3: Create a Business Logic Composable
```
User: Create a useSubscription composable for newsletter subscriptions
Skill: Creates `/apps/web/app/composables/useSubscription/` with:
  - useSubscription.ts (subscribe, unsubscribe, confirm methods)
  - types.ts (SubscriptionState interface)
  - index.ts
  - __tests__/useSubscription.spec.ts
```

## Advanced Patterns

### Composable Composition:
```typescript
export const useCheckout = () => {
  const { cart } = useCart();
  const { customer } = useCustomer();
  const { shippingMethods } = useCartShippingMethods();
  const { paymentMethods } = usePaymentMethods();

  // Combine and orchestrate
  return {
    cart,
    customer,
    shippingMethods,
    paymentMethods,
    placeOrder,
  };
};
```

### Provide/Inject Pattern:
```typescript
export const useFeatureProvider = () => {
  const state = reactive({ ... });
  provide('feature', state);
  return state;
};

export const useFeatureConsumer = () => {
  const state = inject<FeatureState>('feature');
  if (!state) throw new Error('Provider not found');
  return state;
};
```

## Related Files

- Composable generation CLI: `/packages/shop-cli/`
- Composable templates: `/packages/shop-cli/templates/composable/`
- Existing composables: `/apps/web/app/composables/`
- Defaults: `/apps/web/app/composables/defaults.ts`

## Notes

- Composables are auto-imported by Nuxt - no need to import them manually in components
- The project uses the directory-based pattern for better organization
- Always check existing composables to avoid duplication
- Consider creating sub-composables for complex features (see `useAddressV2` pattern)
- This skill complements the PlentyONE Shop CLI (`npx plentyshop generate composable`)
