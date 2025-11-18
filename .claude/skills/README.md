# PlentyONE Shop PWA - Claude Skills

This directory contains specialized Claude skills for developing and improving the PlentyONE Shop PWA built with Nuxt.js 4.

## Available Skills

### 1. **create-component**
Creates new Vue 3 components following the project's established patterns.

**Use when you need to:**
- Create UI components (buttons, cards, modals, etc.)
- Build feature-based components (product, cart, checkout)
- Generate page blocks for the CMS system
- Create settings panels

**What it generates:**
- `.vue` component file with proper structure
- `types.ts` with TypeScript interfaces
- `__tests__/` directory with test files
- Proper integration with TailwindCSS and Storefront UI

### 2. **create-composable**
Creates Vue 3 composables for reusable business logic.

**Use when you need to:**
- Create API integration composables
- Build state management for features
- Generate utility composables
- Create form handling logic

**What it generates:**
- Composable directory with proper structure
- Main composable file (`useFeatureName.ts`)
- Types definition (`types.ts`)
- Index file for re-exports
- Unit test files

### 3. **manage-theming**
Manages the shop's visual theming including colors, fonts, and branding.

**Use when you need to:**
- Change brand colors (primary, secondary, header)
- Update the color palette
- Configure custom fonts
- Update PWA theme colors
- Generate color shades (50-950)

**What it manages:**
- Environment variables for theme
- TailwindCSS color configuration
- CSS custom properties
- PWA manifest theme
- Font configuration

### 4. **create-page-block**
Creates editable page blocks for the CMS-like content management system.

**Use when you need to:**
- Create content blocks (banners, galleries, text)
- Build product/commerce blocks
- Generate interactive blocks (forms, filters)
- Create information blocks

**What it generates:**
- Block component with edit/preview modes
- Block types and settings
- Integration with block manager
- Editor interface for content management

### 5. **add-translation**
Adds and manages translations across all 8 supported languages.

**Use when you need to:**
- Add new translation keys
- Update existing translations
- Create translation groups for new features
- Ensure consistency across languages

**Supported languages:**
- English (en) - default
- German (de)
- French (fr)
- Hungarian (hu)
- Swedish (sv)
- Spanish (es)
- Croatian (hr)
- Latvian (lv)

**What it updates:**
- All 8 language files in `/apps/web/app/lang/`
- Translation key structure
- i18n configuration

### 6. **create-settings-panel**
Creates configuration panels for the shop's editor settings system.

**Use when you need to:**
- Create settings UI for shop configuration
- Build admin/editor panels
- Generate category/product/general settings
- Create settings with validation

**Settings categories:**
- Branding & Design
- Category Settings
- Checkout Configuration
- General Settings
- Product/Item Settings
- Search Configuration
- SEO Settings

**What it generates:**
- Settings component with form UI
- Settings types and validation
- Integration with settings drawer
- Persistence logic

### 7. **create-api-integration**
Creates API integrations using the Alokai SDK and PlentyONE backend.

**Use when you need to:**
- Integrate new API endpoints
- Create data fetching composables
- Implement CRUD operations
- Handle API responses and errors

**What it generates:**
- API composable with state management
- TypeScript types for requests/responses
- Error handling logic
- Loading states
- Caching strategies (optional)

## How to Use Skills

Skills can be invoked by Claude during development. They provide context-aware guidance and code generation following the project's established patterns.

Simply describe what you want to create, and Claude will use the appropriate skill:

**Examples:**
- "Create a ProductCompare component" → uses `create-component`
- "Add translations for the wishlist feature" → uses `add-translation`
- "Change the primary color to blue" → uses `manage-theming`
- "Create a testimonials block for the homepage" → uses `create-page-block`
- "Create a composable for newsletter subscriptions" → uses `create-composable`
- "Create settings for product grid display" → uses `create-settings-panel`
- "Integrate the product recommendations API" → uses `create-api-integration`

## Project Overview

### Technology Stack

**Core:**
- Nuxt.js 4.1.3 (Vue 3, SSR, File-based routing)
- TypeScript 5.9.3
- Turborepo (Monorepo structure)

**UI/Styling:**
- TailwindCSS
- Storefront UI v2
- Vuetify (Material Design)
- SCSS/Sass

**E-commerce:**
- Alokai (Vue Storefront) SDK
- PlentyONE Shop API
- PlentyONE backend integration

**Features:**
- PWA support (@vite-pwa/nuxt)
- i18n (8 languages)
- Image optimization
- SEO (sitemaps, meta tags, structured data)
- Form validation (vee-validate + Yup)
- Payment integrations (PayPal, Mollie, Apple Pay, Google Pay)

**Testing:**
- Vitest (unit tests)
- Cypress (E2E tests)
- Vue Test Utils

### Project Structure

```
pwa-claude/
├── apps/
│   ├── web/              # Nuxt.js frontend
│   │   └── app/
│   │       ├── components/    # 343 Vue components
│   │       ├── composables/   # 101 composables
│   │       ├── pages/         # 36 page files
│   │       ├── layouts/       # 6 layouts
│   │       ├── plugins/       # 6 plugins
│   │       ├── lang/          # 8 language files
│   │       └── ...
│   └── server/           # Alokai middleware
└── packages/
    └── shop-cli/         # Code generation CLI
```

### Key Patterns

1. **Component Organization:**
   - Feature-based grouping
   - UI components in `/components/ui/`
   - Blocks in `/components/blocks/`
   - Settings in `/components/settings/`

2. **Composable Pattern:**
   - Directory-based structure
   - `index.ts` for re-exports
   - `types.ts` for TypeScript
   - Auto-imported by Nuxt

3. **Page Routing:**
   - File-based routing
   - Dynamic routes with `[param]`
   - Layouts for different page types

4. **Theming:**
   - CSS custom properties
   - TailwindCSS configuration
   - Dynamic color palettes

5. **i18n:**
   - Nested translation keys
   - Multi-language support
   - Dynamic placeholders

## Additional Resources

### Documentation
- **PlentyONE Docs:** https://pwa-docs.plentyone.com/
- **Nuxt.js 3:** https://nuxt.com/
- **TailwindCSS:** https://tailwindcss.com/
- **Storefront UI:** https://docs.storefrontui.io/v2/
- **Alokai:** https://docs.vuestorefront.io/

### Project Files
- **README:** `/README.md`
- **Technical Guide:** `/GUIDE.md`
- **Package Info:** `/package.json`
- **Nuxt Config:** `/apps/web/nuxt.config.ts`

### CLI Tools
```bash
# Generate component using PlentyONE CLI
npx plentyshop generate component

# Generate composable using PlentyONE CLI
npx plentyshop generate composable
```

## Notes

- These skills complement the built-in PlentyONE Shop CLI
- Skills provide AI-assisted, context-aware code generation
- All generated code follows the project's established conventions
- TypeScript is used throughout for type safety
- Components and composables include test files
- Accessibility and SEO are considered in all components
- Mobile-first responsive design is standard

## Contributing

When creating new skills:
1. Follow the existing skill structure
2. Include clear "When to use" section
3. Provide comprehensive examples
4. Document integration points
5. Include best practices
6. Reference related files and resources
