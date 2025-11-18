# ADR-004: Composables Over Store for State Management

**Date:** 2024-Q2
**Status:** Accepted
**Deciders:** Frontend Team, Architecture Team
**Tags:** state-management, vue, composition-api, architecture

## Context

PWA Claude needs to manage various types of application state:

- **User State**: Authentication status, user profile, preferences
- **Cart State**: Shopping cart items, totals, applied discounts
- **UI State**: Modals, filters, search queries, mobile menu state
- **Product State**: Currently viewed products, categories, filters
- **Checkout State**: Shipping address, payment method, order review

Traditional Vue applications used Vuex (Vue 2) or Pinia (Vue 3) for centralized state management. With Vue 3's Composition API and Nuxt 3's `useState`, we needed to decide on our state management approach:

**Requirements:**
- Type-safe state access
- SSR compatibility (state hydration)
- Minimal boilerplate
- Good developer experience
- Easy to test
- Performance (no unnecessary reactivity)
- Clear separation of concerns

The team had experience with Vuex but wanted to explore if Vue 3's Composition API could simplify our state management.

## Decision

We chose to use **Vue 3 Composables with Nuxt's `useState`** instead of a centralized store (Vuex/Pinia).

**Pattern:**
```typescript
// composables/useAuth.ts
export const useAuth = () => {
  const user = useState<User | null>('auth:user', () => null)
  const isAuthenticated = computed(() => !!user.value)

  const login = async (credentials: Credentials) => {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: credentials
    })
    user.value = response.user
  }

  const logout = () => {
    user.value = null
  }

  return {
    user: readonly(user),
    isAuthenticated,
    login,
    logout
  }
}
```

**Key Principles:**
1. Each composable manages its own state domain
2. Use `useState` for SSR-safe reactive state
3. Export computed values and methods, not raw state
4. Use `readonly()` to prevent external mutations
5. Keep composables focused and single-purpose

## Alternatives Considered

### Option 1: Pinia (Official Vue Store)

**Pros:**
- Official Vue state management solution
- Excellent TypeScript support
- Modular store design (better than Vuex)
- DevTools integration
- Vuex-like patterns for team familiarity
- Testing utilities
- Plugin ecosystem

**Cons:**
- Additional dependency (~10kb)
- More boilerplate (defineStore, actions, getters)
- Learning curve for store patterns
- Centralized state can become a bottleneck
- Over-engineering for simpler state needs
- Yet another API surface to learn

**Why rejected:**
- Composables provide same functionality with less code
- Nuxt 3's `useState` handles SSR hydration natively
- Team preferred Composition API patterns
- Pinia felt like unnecessary abstraction for our use cases
- Can always migrate to Pinia later if needed

### Option 2: Vuex

**Pros:**
- Battle-tested in production
- Team has extensive experience
- Rich ecosystem and documentation
- Strong conventions and patterns
- Time-travel debugging

**Cons:**
- Verbose boilerplate (mutations, actions, getters)
- Not designed for Vue 3 Composition API
- TypeScript support is clunky
- Centralized store creates coupling
- Deprecated in favor of Pinia
- Mutation tracking adds overhead

**Why rejected:**
- Deprecated and not recommended for new Vue 3 projects
- Poor TypeScript integration
- Too much boilerplate for our needs
- Not idiomatic for Composition API

### Option 3: External State Libraries (Zustand, Valtio, Jotai)

**Pros:**
- Modern, minimal APIs
- Excellent TypeScript support
- Framework-agnostic
- Innovative patterns (atoms, signals)
- Small bundle sizes

**Cons:**
- Not Vue-native (designed for React)
- Doesn't leverage Vue's reactivity
- No SSR helpers for Nuxt
- Team unfamiliar with these libraries
- Potential integration issues with Vue
- Less community support in Vue ecosystem

**Why rejected:**
- Not designed for Vue's reactivity system
- Nuxt already provides `useState` for SSR
- Team wants Vue-native solutions
- Would need to learn external API

### Option 4: Provide/Inject Pattern

**Pros:**
- Built into Vue 3
- Good for component tree state
- No external dependencies
- Type-safe with TypeScript
- Composition API native

**Cons:**
- Only works within component tree
- No SSR state serialization
- Difficult to use in composables
- Not ideal for global state
- Testing requires component context
- Can't be used outside components

**Why rejected:**
- Doesn't solve SSR state hydration
- Limited to component hierarchy
- Nuxt's `useState` is better for global state
- Composables + `useState` covers all use cases

## Consequences

### Positive

- **Less Boilerplate**: 50-70% less code compared to Pinia/Vuex stores
- **Better TypeScript**: Full type inference without manual type annotations
- **Intuitive API**: Composables feel natural with Composition API
- **SSR Just Works**: `useState` handles hydration automatically
- **Easy Testing**: Pure functions easy to unit test
- **Flexibility**: Can mix patterns (local state, useState, props) as needed
- **No Store Ceremony**: No need to register stores, define mutations, etc.
- **Tree-shakable**: Only import composables you use
- **Clear Ownership**: Each composable owns its state domain
- **Performance**: Fine-grained reactivity, no unnecessary store subscriptions
- **Learning Curve**: Team already knows Composition API

### Negative

- **No DevTools**: Missing Vuex/Pinia time-travel debugging
- **Less Structure**: No enforced patterns, teams must establish conventions
- **State Duplication**: Easy to accidentally create duplicate state
- **No Middleware**: Can't intercept state changes like Vuex plugins
- **Global State**: Multiple `useState` calls with same key can cause issues
- **Discoverability**: Harder to see all application state in one place
- **No Plugins**: Can't use Pinia plugins for persistence, etc.
- **Convention Required**: Team must agree on composable patterns

### Neutral

- **Migration Path**: Can add Pinia later if needed without major refactor
- **Documentation**: Need to document composable patterns for team
- **State Organization**: Must decide where composables live
- **Testing Strategy**: Different from store-based testing

## Implementation

### Current Status

- ✅ Core composables implemented: `useAuth`, `useCart`, `useCheckout`, `useUser`
- ✅ UI state composables: `useModal`, `useSearch`, `useFilters`
- ✅ SSR state hydration working correctly
- ✅ TypeScript types for all composables
- ✅ Testing utilities for composables
- ✅ Documentation and examples

### Composable Organization

```
composables/
├── core/              # Core business logic
│   ├── useAuth.ts
│   ├── useCart.ts
│   ├── useCheckout.ts
│   └── useUser.ts
├── ui/                # UI state
│   ├── useModal.ts
│   ├── useSearch.ts
│   └── useFilters.ts
└── data/              # Data fetching
    ├── useProduct.ts
    ├── useCategory.ts
    └── useOrder.ts
```

### Example: Shopping Cart Composable

```typescript
// composables/core/useCart.ts
import type { Cart, CartItem } from '~/types'

export const useCart = () => {
  // SSR-safe state using Nuxt's useState
  const cart = useState<Cart>('cart', () => ({
    items: [],
    total: 0,
    itemCount: 0
  }))

  // Computed values
  const isEmpty = computed(() => cart.value.items.length === 0)
  const subtotal = computed(() =>
    cart.value.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  // Actions
  const addToCart = async (productId: string, quantity: number = 1) => {
    const existingItem = cart.value.items.find(item => item.productId === productId)

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      const product = await $fetch(`/api/products/${productId}`)
      cart.value.items.push({
        productId,
        name: product.name,
        price: product.price,
        quantity
      })
    }

    recalculateCart()
  }

  const removeFromCart = (productId: string) => {
    cart.value.items = cart.value.items.filter(item => item.productId !== productId)
    recalculateCart()
  }

  const updateQuantity = (productId: string, quantity: number) => {
    const item = cart.value.items.find(item => item.productId === productId)
    if (item) {
      item.quantity = quantity
      recalculateCart()
    }
  }

  const clearCart = () => {
    cart.value.items = []
    cart.value.total = 0
    cart.value.itemCount = 0
  }

  // Private helper
  const recalculateCart = () => {
    cart.value.itemCount = cart.value.items.reduce((sum, item) => sum + item.quantity, 0)
    cart.value.total = subtotal.value
  }

  return {
    // State (readonly to prevent external mutations)
    cart: readonly(cart),
    isEmpty,
    subtotal,

    // Actions
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
}
```

### Testing Pattern

```typescript
// composables/core/useCart.test.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { useCart } from './useCart'

describe('useCart', () => {
  beforeEach(() => {
    // Reset state between tests
    useState('cart', () => ({ items: [], total: 0, itemCount: 0 }))
  })

  it('adds item to cart', async () => {
    const { addToCart, cart } = useCart()
    await addToCart('product-1', 2)

    expect(cart.value.items).toHaveLength(1)
    expect(cart.value.items[0].quantity).toBe(2)
  })

  it('increments quantity for existing item', async () => {
    const { addToCart, cart } = useCart()
    await addToCart('product-1', 1)
    await addToCart('product-1', 2)

    expect(cart.value.items).toHaveLength(1)
    expect(cart.value.items[0].quantity).toBe(3)
  })
})
```

### Patterns and Conventions

**1. State Keys**: Use namespaced keys to avoid collisions
```typescript
useState('cart', () => defaultCart)        // ✅ Good
useState('c', () => defaultCart)           // ❌ Too generic
```

**2. Readonly Exports**: Prevent external mutations
```typescript
return {
  cart: readonly(cart),  // ✅ Can't mutate outside composable
  cart: cart             // ❌ Can be mutated anywhere
}
```

**3. Single Responsibility**: One composable per domain
```typescript
useAuth()     // ✅ Handles only authentication
useApp()      // ❌ Too broad, split into smaller composables
```

**4. Computed Values**: Derive state, don't duplicate
```typescript
const isEmpty = computed(() => items.value.length === 0)  // ✅ Derived
const isEmpty = ref(true)                                 // ❌ Duplicated
```

## Related Decisions

- [ADR-001: Nuxt 3 Framework](adr-001-nuxt-framework-choice.md) - Provides `useState` for SSR
- [ADR-003: Alokai SDK](adr-003-alokai-sdk.md) - Alokai's composables inspired this pattern
- [ADR-005: TypeScript Strict Mode](adr-005-typescript-strict-mode.md) - Composables get full type inference

## Notes

### Team Feedback

> "Composables feel so much more natural than Vuex mutations and actions. The code is cleaner and easier to understand." - Frontend Developer

> "I was skeptical at first, but the lack of boilerplate has significantly improved our development speed. We can add new state domains in minutes, not hours." - Senior Engineer

> "Testing is so much easier. No more mocking store modules - just test pure functions." - QA Engineer

> "I do miss the Vue DevTools time-travel debugging, but the tradeoff is worth it for the improved DX." - Tech Lead

### Metrics

**Code Comparison (Shopping Cart):**
- Pinia Store: ~150 lines (store + types + setup)
- Composable: ~90 lines (just the composable)
- **Reduction**: 40% less code

**Development Velocity:**
- Average time to add new state domain:
  - Pinia: ~2-3 hours (store + actions + tests)
  - Composables: ~1 hour (composable + tests)

**Bundle Size:**
- Pinia: +10kb
- Composables: 0kb (using built-in Vue reactivity)

### Best Practices

1. **Use `useState` for global state**: Ensures SSR hydration works
2. **Export readonly refs**: Prevent accidental mutations
3. **Keep composables focused**: Single responsibility principle
4. **Use TypeScript**: Full type inference catches bugs
5. **Document composable APIs**: Clear JSDoc comments
6. **Test thoroughly**: Unit test all state mutations
7. **Namespace state keys**: Avoid collision with `'domain:key'` pattern

### Known Limitations

- **No DevTools**: Can't see state in Vue DevTools like Pinia
- **Manual Persistence**: Need custom logic for localStorage sync
- **No Plugins**: Can't use middleware/plugins like Pinia
- **State Reset**: Must manually reset state between tests

### Future Considerations

- Evaluate Pinia if DevTools become critical
- Build custom DevTools plugin for composable state inspection
- Consider state persistence utility for localStorage sync
- Monitor Vue ecosystem for new state management patterns

### Migration Path to Pinia (if needed)

If complexity grows and we need Pinia:
1. Composables can be converted to Pinia stores incrementally
2. Public API can remain similar (getter → computed, method → action)
3. Tests remain mostly the same
4. No component changes needed (composable calls stay the same)

---

**Last Reviewed:** 2025-11-18
**Reviewers:** Frontend Team, Architecture Team
