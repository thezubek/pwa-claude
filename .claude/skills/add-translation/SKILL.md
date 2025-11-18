# Add Translation Skill

This skill helps you add and manage translations for the multi-language PlentyONE Shop PWA.

## What this skill does

- Adds translations to all 8 supported languages
- Maintains consistent translation keys across language files
- Follows the established i18n structure
- Ensures proper TypeScript typing
- Integrates with Nuxt i18n module

## When to use this skill

Use this skill when you need to:
- Add new translation keys for features
- Update existing translations
- Add translations for new components
- Create translation groups for new modules
- Ensure consistency across all language files

## Supported Languages

The app supports **8 languages**:

1. **English (en)** - Default/fallback language
2. **German (de)**
3. **French (fr)**
4. **Hungarian (hu)**
5. **Swedish (sv)**
6. **Spanish (es)**
7. **Croatian (hr)**
8. **Latvian (lv)**

## Language Files Location

All translation files are in `/apps/web/app/lang/`:

```
lang/
├── en.ts    # English (base/fallback)
├── de.ts    # German
├── fr.ts    # French
├── hu.ts    # Hungarian
├── sv.ts    # Swedish
├── es.ts    # Spanish
├── hr.ts    # Croatian
└── lv.ts    # Latvian
```

## Translation File Structure

Each language file exports a default object with nested keys:

```typescript
export default {
  // Top-level categories
  category: {
    title: 'Categories',
    emptyState: 'No categories found',
  },

  product: {
    addToCart: 'Add to Cart',
    price: 'Price',
    availability: 'Availability',
  },

  cart: {
    title: 'Shopping Cart',
    empty: 'Your cart is empty',
    checkout: 'Proceed to Checkout',
  },

  // Nested structures
  account: {
    menu: {
      overview: 'Overview',
      orders: 'My Orders',
      addresses: 'Addresses',
    },
    profile: {
      title: 'Personal Data',
      // ...
    }
  },

  // Dynamic translations
  validation: {
    required: '{field} is required',
    email: 'Please enter a valid email',
    minLength: '{field} must be at least {min} characters',
  }
};
```

## How to use

When invoked, this skill will:

1. **Ask for translation details:**
   - Translation key path (e.g., `product.addToWishlist`)
   - English text (required - base translation)
   - Context and usage information
   - Whether it has dynamic placeholders

2. **Add to English (en.ts):**
   - Add the key with English text
   - Ensure proper nesting

3. **Add to other languages:**
   - Copy to all 8 language files
   - Mark for professional translation if needed
   - Use English as fallback initially

4. **Update TypeScript types:**
   - Ensure type safety via i18n config

## Translation Key Naming Conventions

### 1. Use Descriptive, Hierarchical Keys:
```typescript
// Good
product.actions.addToCart
product.actions.addToWishlist
cart.summary.total

// Avoid
addToCart  // Too generic
product.add  // Unclear
```

### 2. Group by Feature/Domain:
```typescript
{
  product: { /* product-related */ },
  cart: { /* cart-related */ },
  checkout: { /* checkout-related */ },
  account: { /* account-related */ },
}
```

### 3. Use Consistent Naming:
```typescript
// Actions
actions.add
actions.edit
actions.delete
actions.save
actions.cancel

// Labels
label.firstName
label.lastName
label.email

// Messages
message.success
message.error
message.warning

// Validation
validation.required
validation.email
validation.minLength
```

## Dynamic Translations (Placeholders)

Use curly braces for dynamic values:

```typescript
// Translation file
{
  greeting: 'Hello, {name}!',
  itemCount: 'You have {count} items',
  priceRange: 'From {min} to {max}',
}

// Usage in component
{{ $t('greeting', { name: customerName }) }}
{{ $t('itemCount', { count: cart.items.length }) }}
{{ $t('priceRange', { min: '$10', max: '$100' }) }}
```

### Pluralization:

```typescript
// Translation file
{
  itemCount: 'no items | 1 item | {count} items',
}

// Usage
{{ $tc('itemCount', cart.items.length, { count: cart.items.length }) }}
```

## Usage in Components

### 1. In Templates (Composition API):
```vue
<template>
  <h1>{{ $t('product.title') }}</h1>
  <button>{{ $t('product.addToCart') }}</button>
  <p>{{ $t('greeting', { name: userName }) }}</p>
</template>
```

### 2. In Script Setup:
```vue
<script setup lang="ts">
const { t } = useI18n();

const title = t('product.title');
const message = t('greeting', { name: 'John' });
</script>
```

### 3. In Composables:
```typescript
export const useProduct = () => {
  const { t } = useI18n();

  const addToCartLabel = computed(() => t('product.addToCart'));

  return {
    addToCartLabel,
  };
};
```

## i18n Configuration

The i18n config is in `/apps/web/app/configuration/i18n.config.ts`:

```typescript
export const nuxtI18nOptions = {
  defaultLocale: 'en',
  locales: [
    { code: 'en', name: 'English', file: 'en.ts' },
    { code: 'de', name: 'Deutsch', file: 'de.ts' },
    { code: 'fr', name: 'Français', file: 'fr.ts' },
    { code: 'hu', name: 'Magyar', file: 'hu.ts' },
    { code: 'sv', name: 'Svenska', file: 'sv.ts' },
    { code: 'es', name: 'Español', file: 'es.ts' },
    { code: 'hr', name: 'Hrvatski', file: 'hr.ts' },
    { code: 'lv', name: 'Latviešu', file: 'lv.ts' },
  ],
  lazy: false,
  langDir: 'lang/',
  strategy: 'prefix_except_default',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'plenty-locale',
    redirectOn: 'root',
  },
};
```

## Translation Workflow

### Step 1: Add to English (en.ts)
```typescript
// lang/en.ts
export default {
  product: {
    addToWishlist: 'Add to Wishlist',
    removeFromWishlist: 'Remove from Wishlist',
  }
}
```

### Step 2: Add to German (de.ts)
```typescript
// lang/de.ts
export default {
  product: {
    addToWishlist: 'Zur Wunschliste hinzufügen',
    removeFromWishlist: 'Von Wunschliste entfernen',
  }
}
```

### Step 3: Add to Other Languages
For languages you don't speak fluently:

**Option A: Use English as temporary fallback:**
```typescript
// lang/fr.ts
export default {
  product: {
    addToWishlist: 'Add to Wishlist', // TODO: Translate to French
    removeFromWishlist: 'Remove from Wishlist', // TODO: Translate
  }
}
```

**Option B: Use machine translation (mark for review):**
```typescript
// lang/fr.ts
export default {
  product: {
    addToWishlist: 'Ajouter à la liste de souhaits', // Machine translated - needs review
    removeFromWishlist: 'Retirer de la liste de souhaits', // Machine translated
  }
}
```

### Step 4: Professional Translation
For production, use professional translators for:
- Marketing copy
- Legal text
- Important user-facing messages

## Common Translation Categories

The app uses these top-level categories:

1. **category** - Category/navigation related
2. **product** - Product-related translations
3. **cart** - Shopping cart
4. **checkout** - Checkout process
5. **account** - User account
6. **auth** - Login/registration
7. **validation** - Form validation messages
8. **error** - Error messages
9. **success** - Success messages
10. **common** - Common UI elements (buttons, labels, etc.)
11. **footer** - Footer content
12. **cookieBar** - Cookie consent
13. **newsletter** - Newsletter signup
14. **search** - Search functionality
15. **wishlist** - Wishlist feature
16. **review** - Product reviews
17. **order** - Orders and order history

## Examples

### Example 1: Add Product Comparison Translations
```
User: Add translations for product comparison feature
Skill:
  1. Adds to en.ts:
     product.comparison.title: 'Product Comparison'
     product.comparison.add: 'Add to Compare'
     product.comparison.remove: 'Remove from Compare'
     product.comparison.empty: 'No products to compare'

  2. Adds German translations to de.ts
  3. Adds to other 6 language files (marked for translation)
  4. Confirms all files updated
```

### Example 2: Add Validation Messages
```
User: Add validation for phone number field
Skill:
  1. Adds to en.ts:
     validation.phoneNumber: 'Please enter a valid phone number'
     validation.phoneNumberFormat: 'Phone number must be in format: {format}'

  2. Adds to all language files
  3. Shows usage example:
     {{ $t('validation.phoneNumber') }}
```

### Example 3: Add Account Feature Translations
```
User: Add translations for order returns feature
Skill:
  1. Creates nested structure in en.ts:
     account.returns.title: 'Returns'
     account.returns.create: 'Create Return'
     account.returns.reason: 'Return Reason'
     account.returns.success: 'Return request submitted'

  2. Adds to all language files
  3. Groups logically under 'account.returns'
```

## Translation Best Practices

1. **Consistency:**
   - Use the same translations for repeated concepts
   - Maintain consistent terminology
   - Use a glossary for domain terms

2. **Context:**
   - Provide context comments for ambiguous terms
   - Group related translations together
   - Use descriptive key names

3. **Placeholders:**
   - Use descriptive placeholder names
   - Document what values can be inserted
   - Format numbers/dates appropriately per locale

4. **Pluralization:**
   - Use Nuxt i18n pluralization syntax
   - Handle zero, one, and many cases
   - Consider language-specific plural rules

5. **Formatting:**
   - Use locale-specific date formats
   - Use locale-specific number formats
   - Use locale-specific currency formats

6. **Testing:**
   - Test all languages visually
   - Check for text overflow in layouts
   - Verify RTL languages if supported

## Locale-Specific Formatting

### Dates:
```typescript
// Use Nuxt i18n date formatting
{{ $d(new Date(), 'short') }}
{{ $d(orderDate, 'long') }}
```

### Numbers:
```typescript
// Use Nuxt i18n number formatting
{{ $n(price, 'currency') }}
{{ $n(quantity, 'decimal') }}
```

### Currency:
```typescript
// Use usePriceFormatter composable
const { formatPrice } = usePriceFormatter();
const formatted = formatPrice(price);
```

## Environment-Based Active Languages

Configure active languages via environment:

```properties
# .env
LANGUAGELIST=en,de,fr  # Only these languages will be active
```

This is useful for:
- Staging environments (fewer languages)
- Regional deployments (subset of languages)
- Development (testing with fewer languages)

## Related Files

- Language files: `/apps/web/app/lang/`
- i18n config: `/apps/web/app/configuration/i18n.config.ts`
- Nuxt config: `/apps/web/nuxt.config.ts` (active languages)
- Localization composable: `/apps/web/app/composables/useLocalization/`
- Translation utilities: `/apps/web/app/composables/useTranslations/`

## Translation Helpers

### useLocalization Composable:
```typescript
const { locale, setLocale, availableLocales } = useLocalization();

// Current locale
console.log(locale.value); // 'en'

// Change locale
setLocale('de');

// Available locales
console.log(availableLocales.value); // ['en', 'de', 'fr', ...]
```

### Language Switcher:
The app includes a language selector component that uses these translations.

## Dynamic Translation Loading

The app supports fetching translations from backend:

```typescript
// nuxt.config.ts
runtimeConfig: {
  public: {
    fetchDynamicTranslations: false, // Enable to fetch from backend
  }
}
```

This allows:
- CMS-managed translations
- A/B testing different copy
- Personalized translations

## Notes

- English (en) is the default/fallback language
- Missing translations fall back to English
- Translation keys are case-sensitive
- Use flat or nested structures consistently
- Consider extracting long text to external files for legal pages
- Machine translations should always be reviewed by native speakers
- The `useTranslations` composable provides translation helpers
- Test layout with longest translation (usually German) to avoid overflow
- Keep translations in sync across all language files
- Use translation management tools for large projects (e.g., Lokalise, Crowdin)
