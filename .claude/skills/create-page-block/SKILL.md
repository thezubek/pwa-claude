# Create Page Block Skill

This skill helps you create editable page blocks for the CMS-like system in the PlentyONE Shop PWA.

## What this skill does

- Creates editable page blocks for the content management system
- Generates block components with proper structure
- Integrates with the block rendering system
- Creates block settings and configuration interfaces
- Follows the established block patterns

## When to use this skill

Use this skill when you need to:
- Create a new content block for editors (e.g., Banner, Gallery, Testimonials)
- Build custom layout blocks
- Create feature blocks (e.g., Newsletter, Reviews, Product Grid)
- Generate blocks with editable properties

## How to use

When invoked, this skill will:

1. **Ask for block details:**
   - Block name (e.g., "Testimonials", "BannerCarousel")
   - Block purpose and functionality
   - Editable properties (text, images, colors, etc.)
   - Layout options
   - Default content

2. **Generate block files:**
   - Block component in `/apps/web/app/components/blocks/`
   - Block types definition
   - Block settings (if complex)
   - Integration with block manager

3. **Set up block registration:**
   - Register in block rendering system
   - Configure in `useBlockManager`
   - Add to block imports

4. **Create editor interface:**
   - Editable fields
   - Preview mode
   - Settings drawer (if needed)

## Block Structure

### Directory Structure:
```
components/blocks/BlockName/
├── BlockName.vue              # Main block component
├── types.ts                   # Block data interfaces
├── settings.vue               # Block settings UI (optional)
└── __tests__/
    └── BlockName.spec.ts      # Unit tests
```

### Block Component Template:

```vue
<template>
  <div class="block-name" :class="blockClasses">
    <!-- Preview/Edit mode indicator -->
    <div v-if="isEditMode" class="edit-indicator">
      Edit Mode
    </div>

    <!-- Block content -->
    <div class="block-content">
      <!-- Editable content here -->
      <h2 v-if="content.title">{{ content.title }}</h2>
      <div v-if="content.description" v-html="content.description" />
    </div>

    <!-- Block actions (edit, delete, etc.) -->
    <div v-if="isEditMode" class="block-actions">
      <button @click="openSettings">Edit</button>
      <button @click="deleteBlock">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlockNameContent } from './types';

interface Props {
  content: BlockNameContent;
  isEditMode?: boolean;
}

const props = defineProps<Props>();

const blockClasses = computed(() => ({
  'edit-mode': props.isEditMode,
  // ... other classes
}));

const openSettings = () => {
  // Open settings drawer
};

const deleteBlock = () => {
  // Delete block logic
};
</script>
```

### Block Types Definition:

```typescript
// types.ts
export interface BlockNameContent {
  title?: string;
  description?: string;
  images?: Array<{
    url: string;
    alt: string;
  }>;
  layout?: 'grid' | 'carousel' | 'masonry';
  backgroundColor?: string;
  textColor?: string;
  // ... other properties
}

export interface BlockNameSettings {
  columns?: number;
  spacing?: 'small' | 'medium' | 'large';
  // ... other settings
}
```

## Existing Block Patterns

The app has several types of blocks to reference:

### 1. Content Blocks
- **Image** - Single image display
- **ImageGallery** - Multiple images with lightbox
- **BannerCarousel** - Rotating banners
- **TextCard** - Text content with styling
- **ItemText** - Rich text editor content

### 2. Product/Commerce Blocks
- **ItemGrid** - Product grid display
- **ProductRecommendedProducts** - Recommended items
- **PriceCard** - Pricing display

### 3. Interactive Blocks
- **NewsletterSubscribe** - Newsletter signup form
- **CustomerReview** - Review display
- **Sort**, **SortFilter**, **PerPageFilter** - Catalog controls

### 4. Information Blocks
- **CategoryData** - Category information
- **Footer** - Footer content
- **ProductLegalInformation** - Legal info
- **TechnicalData** - Technical specifications

## Block Registration

### 1. Block Imports
Update `/apps/web/app/utils/blocks-imports.ts`:

```typescript
export const blockComponents = {
  BannerCarousel: defineAsyncComponent(() => import('~/components/blocks/BannerCarousel.vue')),
  ItemGrid: defineAsyncComponent(() => import('~/components/blocks/ItemGrid.vue')),
  // Add your new block:
  BlockName: defineAsyncComponent(() => import('~/components/blocks/BlockName/BlockName.vue')),
};
```

### 2. Block Manager Integration
The `useBlockManager` composable handles block rendering:

```typescript
// Usage in EditablePage or similar
const { renderBlock } = useBlockManager();

// Block data from API/CMS
const blocks = [
  {
    type: 'BlockName',
    content: {
      title: 'Example',
      // ... block content
    }
  }
];
```

### 3. Module Rendering
Blocks are rendered via `ModuleComponentRendering.vue`:

```vue
<ModuleComponentRendering
  v-for="block in blocks"
  :key="block.id"
  :component-name="block.type"
  :content="block.content"
  :is-edit-mode="isEditMode"
/>
```

## Editable Properties

### Common Editable Types:

1. **Text Fields:**
```typescript
{
  title: string;
  subtitle?: string;
  description?: string;
}
```

2. **Images:**
```typescript
{
  images: Array<{
    url: string;
    alt: string;
    title?: string;
  }>;
}
```

3. **Colors:**
```typescript
{
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}
```

4. **Layout:**
```typescript
{
  layout?: 'grid' | 'list' | 'carousel';
  columns?: number;
  spacing?: 'small' | 'medium' | 'large';
}
```

5. **Content Arrays:**
```typescript
{
  items: Array<{
    id: string;
    title: string;
    content: string;
    image?: string;
  }>;
}
```

## Block Settings UI

For complex blocks, create a settings panel:

```vue
<!-- settings.vue -->
<template>
  <div class="block-settings">
    <h3>Block Settings</h3>

    <div class="setting-group">
      <label>Title</label>
      <input v-model="localContent.title" type="text" />
    </div>

    <div class="setting-group">
      <label>Layout</label>
      <select v-model="localContent.layout">
        <option value="grid">Grid</option>
        <option value="carousel">Carousel</option>
      </select>
    </div>

    <div class="setting-actions">
      <button @click="saveSettings">Save</button>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlockNameContent } from './types';

interface Props {
  content: BlockNameContent;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  save: [content: BlockNameContent];
  cancel: [];
}>();

const localContent = ref<BlockNameContent>({ ...props.content });

const saveSettings = () => {
  emit('save', localContent.value);
};

const cancel = () => {
  emit('cancel');
};
</script>
```

## Grid and Layout System

The app uses a custom grid system for blocks:

### Grid Splits (from `useGridSplits`):
```typescript
// 12-column grid system
const gridClass = computed(() => {
  const columns = props.content.columns || 3;
  return `col-span-${12 / columns}`;
});
```

### Responsive Grid:
```vue
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Block items -->
</div>
```

### Grid Template Areas:
```typescript
// TailwindCSS config supports grid areas
gridTemplateAreas: {
  'product-page': ['left-top right', 'left-bottom right'],
}
```

## Examples

### Example 1: Testimonials Block
```
User: Create a Testimonials block for customer quotes
Skill: Creates:
  - TestimonialsBlock.vue with carousel of testimonials
  - types.ts with Testimonial interface
  - Editable properties: testimonials array, layout, colors
  - Settings for managing testimonials
  - Integration with block system
```

### Example 2: CTA (Call-to-Action) Block
```
User: Create a CTA block with heading, text, and button
Skill: Creates:
  - CTABlock.vue with centered content
  - types.ts with CTAContent interface
  - Editable: heading, text, button label, button link, background
  - Integration with block rendering
```

### Example 3: Stats/Numbers Block
```
User: Create a Stats block to show key metrics
Skill: Creates:
  - StatsBlock.vue with grid of statistics
  - types.ts with Stat interface
  - Editable: array of stats (number, label, icon)
  - Settings for columns and styling
```

## Block Best Practices

1. **Default Content:**
   - Always provide sensible defaults
   - Include placeholder content for preview

2. **Responsive Design:**
   - Use mobile-first approach
   - Test on all breakpoints
   - Use Tailwind responsive utilities

3. **Performance:**
   - Lazy load images
   - Use `defineAsyncComponent` for large blocks
   - Optimize re-renders

4. **Accessibility:**
   - Semantic HTML
   - ARIA labels where needed
   - Keyboard navigation
   - Color contrast

5. **Edit Mode:**
   - Show clear edit indicators
   - Prevent actions in preview mode
   - Provide inline editing when possible

6. **Styling:**
   - Use Tailwind utilities
   - Respect theme colors
   - Allow customization via settings
   - Support block size setting (s, m, l, xl)

## Block Size System

The app supports block sizing:

```typescript
// From nuxt.config.ts
blockSize: process.env.NUXT_PUBLIC_BLOCK_SIZE || 'm'

// In component:
const blockSpacing = computed(() => {
  switch (props.size) {
    case 's': return 'py-4 px-2';
    case 'm': return 'py-8 px-4';
    case 'l': return 'py-12 px-6';
    case 'xl': return 'py-16 px-8';
  }
});
```

## Integration with EditablePage

Blocks are rendered in `EditablePage.vue`:

```vue
<EditablePage :page-id="pageId">
  <!-- Blocks are rendered here -->
</EditablePage>
```

The `useEditablePage` composable handles:
- Fetching block data
- Rendering blocks
- Edit mode state
- Block CRUD operations

## Related Files

- Block components: `/apps/web/app/components/blocks/`
- Block imports: `/apps/web/app/utils/blocks-imports.ts`
- Block manager: `/apps/web/app/composables/useBlockManager/`
- Module rendering: `/apps/web/app/components/ModuleComponentRendering.vue`
- Editable page: `/apps/web/app/components/EditablePage.vue`
- Block helpers: `/apps/web/app/composables/useBlockContentHelper/`

## Notes

- Blocks are dynamically imported for code splitting
- The CMS system allows editors to add, remove, and reorder blocks
- Blocks can be nested (blocks within blocks) in advanced cases
- Consider creating block presets (templates) for common configurations
- Use `useGridSplits` for consistent grid layouts across blocks
- Test blocks in both edit and preview modes
- Blocks should be framework-agnostic in their data structure (for future CMS integrations)
