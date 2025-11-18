# Create Component Skill

This skill helps you create new Vue components following the PlentyONE Shop project conventions and patterns.

## What this skill does

- Generates Vue 3 components with proper TypeScript types
- Follows the established component organization patterns
- Creates test files with proper structure
- Ensures consistent naming conventions
- Integrates with TailwindCSS and Storefront UI

## When to use this skill

Use this skill when you need to:
- Create a new UI component in the `/components/ui/` directory
- Build a new feature-based component (e.g., Address, Product, Cart components)
- Create a new page block for the CMS system
- Generate components with proper TypeScript interfaces

## How to use

When invoked, this skill will:

1. **Ask for component details:**
   - Component name (PascalCase)
   - Component type (UI/Feature/Block/Settings)
   - Component description
   - Props and emits needed
   - Whether to use Storefront UI components

2. **Determine the correct location:**
   - `/apps/web/app/components/ui/` - Generic reusable UI components
   - `/apps/web/app/components/` - Feature-based components
   - `/apps/web/app/components/blocks/` - Editable page blocks
   - `/apps/web/app/components/settings/` - Settings UI components

3. **Generate the component files:**
   - Main `.vue` file with proper structure
   - `types.ts` file with TypeScript interfaces (if needed)
   - Test file in `__tests__/` directory

4. **Follow established patterns:**
   - Use `<script setup lang="ts">` syntax
   - Import and use Storefront UI components when appropriate
   - Apply TailwindCSS classes for styling
   - Include proper accessibility attributes
   - Follow the project's naming conventions

## Component Structure Template

### Vue File Structure:
```vue
<template>
  <div>
    <!-- Component markup -->
  </div>
</template>

<script setup lang="ts">
import type { ComponentProps } from './types';

const props = defineProps<ComponentProps>();
const emit = defineEmits<{
  eventName: [payload: string];
}>();

// Component logic
</script>
```

### TypeScript Types:
```typescript
export interface ComponentProps {
  // Props interface
}

export interface ComponentEmits {
  // Emits interface
}
```

### Test Structure:
```typescript
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ComponentName from '../ComponentName.vue';

describe('ComponentName', () => {
  it('renders correctly', () => {
    const wrapper = mount(ComponentName, {
      props: {
        // test props
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
```

## Key Conventions

1. **Naming:**
   - Component files: PascalCase (e.g., `ProductCard.vue`)
   - Component folders: PascalCase (e.g., `ProductCard/`)
   - Props: camelCase
   - Events: kebab-case in templates, camelCase in TypeScript

2. **Imports:**
   - Storefront UI: `import { SfButton, SfIconChevronRight } from '@storefront-ui/vue';`
   - Composables: Auto-imported from `/composables`
   - Utils: Auto-imported from `/utils`

3. **Styling:**
   - Use TailwindCSS utility classes
   - Follow mobile-first responsive design
   - Use CSS variables for theme colors: `primary-*`, `secondary-*`, `header-*`
   - Leverage Storefront UI's typography system

4. **Accessibility:**
   - Include ARIA labels where needed
   - Ensure keyboard navigation
   - Use semantic HTML elements

## Examples

### Example 1: Create a UI Component
```
User: Create a new Notification component for displaying toast messages
Skill: Creates `/apps/web/app/components/ui/Notification/` with:
  - Notification.vue (with props for type, message, duration)
  - types.ts (NotificationProps interface)
  - __tests__/Notification.spec.ts
```

### Example 2: Create a Feature Component
```
User: Create a ProductCompare component for comparing products
Skill: Creates `/apps/web/app/components/ProductCompare/` with:
  - ProductCompare.vue (with product comparison logic)
  - types.ts (CompareProduct interface)
  - __tests__/ProductCompare.spec.ts
```

### Example 3: Create a Page Block
```
User: Create a Testimonials block for the CMS
Skill: Creates `/apps/web/app/components/blocks/Testimonials/` with:
  - Testimonials.vue (editable CMS block)
  - types.ts (TestimonialsBlock interface)
  - __tests__/Testimonials.spec.ts
```

## Integration Points

- **Composables:** Components can use any of the 100+ composables via auto-import
- **Storefront UI:** Leverage existing UI components for consistency
- **i18n:** Use `$t()` or `useI18n()` for translations
- **Router:** Use `useRouter()` and `NuxtLink` for navigation
- **State:** Use composables for state management (e.g., `useCart()`, `useCustomer()`)

## Code Quality

Generated components should:
- Pass ESLint checks (use project's ESLint config)
- Follow Vue 3 Composition API best practices
- Include proper TypeScript typing
- Be accessible (WCAG compliant)
- Have test coverage for key functionality
- Use modern Vue features (script setup, defineProps, defineEmits)

## Related Files

- Component generation CLI: `/packages/shop-cli/` (alternative tool)
- Component templates: `/packages/shop-cli/templates/component/`
- Existing components: `/apps/web/app/components/`
- Storefront UI docs: https://docs.storefrontui.io/v2/vue/

## Notes

- This project uses the PlentyONE Shop CLI (`npx plentyshop generate component`) as an alternative
- The skill complements the CLI by providing AI-assisted component creation with context awareness
- Always check existing components for similar patterns before creating new ones
- Consider reusing existing UI components when possible
