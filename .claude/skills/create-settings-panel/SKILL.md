# Create Settings Panel Skill

This skill helps you create configuration panels for the PlentyONE Shop editor settings system.

## What this skill does

- Creates settings UI panels for the shop configuration
- Generates settings components with proper structure
- Integrates with the settings drawer system
- Creates settings groups and categories
- Follows the established settings patterns

## When to use this skill

Use this skill when you need to:
- Create a new settings panel for shop configuration
- Add configuration options for features
- Build admin/editor settings UI
- Create category, product, or general settings
- Generate settings with validation and persistence

## Settings System Overview

The app has a comprehensive settings system located in `/apps/web/app/components/settings/`:

### Settings Categories:

1. **branding-and-design/** - Visual branding settings
2. **category/** - Category page settings
3. **checkout/** - Checkout process configuration
4. **general/** - General shop settings
5. **item/** - Product/item settings
6. **search/** - Search configuration
7. **seo/** - SEO and meta settings

Each category contains multiple setting components.

## Settings Structure

### Directory Organization:
```
components/settings/
├── branding-and-design/
│   ├── FontSettings.vue
│   ├── ColorSettings.vue
│   └── LogoSettings.vue
├── category/
│   ├── SortingSettings.vue
│   └── FilterSettings.vue
├── general/
│   ├── CustomerManagement.vue
│   └── SecuritySettings.vue
├── checkout/
│   └── PaymentSettings.vue
├── item/
│   └── ItemBundles.vue
├── search/
│   └── SearchSettings.vue
└── seo/
    ├── RobotsSettings.vue
    └── MetaTagSettings.vue
```

## Settings Component Template

```vue
<template>
  <div class="settings-panel">
    <!-- Settings Header -->
    <div class="settings-header">
      <h3 class="text-lg font-semibold">
        {{ $t('settings.featureName.title') }}
      </h3>
      <p class="text-sm text-gray-600">
        {{ $t('settings.featureName.description') }}
      </p>
    </div>

    <!-- Settings Form -->
    <div class="settings-form space-y-4">
      <!-- Form fields -->
      <div class="form-group">
        <label class="form-label">
          {{ $t('settings.featureName.fieldLabel') }}
        </label>
        <input
          v-model="localSettings.fieldName"
          type="text"
          class="form-input"
          @change="handleChange"
        />
        <p class="form-hint">
          {{ $t('settings.featureName.fieldHint') }}
        </p>
      </div>

      <!-- Toggle/Switch -->
      <div class="form-group">
        <label class="flex items-center space-x-2">
          <input
            v-model="localSettings.enabled"
            type="checkbox"
            class="form-checkbox"
            @change="handleChange"
          />
          <span>{{ $t('settings.featureName.enableLabel') }}</span>
        </label>
      </div>

      <!-- Select/Dropdown -->
      <div class="form-group">
        <label class="form-label">
          {{ $t('settings.featureName.selectLabel') }}
        </label>
        <select
          v-model="localSettings.option"
          class="form-select"
          @change="handleChange"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>

      <!-- Color Picker -->
      <div class="form-group">
        <label class="form-label">
          {{ $t('settings.featureName.colorLabel') }}
        </label>
        <input
          v-model="localSettings.color"
          type="color"
          class="form-color"
          @change="handleChange"
        />
      </div>
    </div>

    <!-- Settings Actions -->
    <div class="settings-actions mt-6 flex justify-end space-x-2">
      <button
        class="btn btn-secondary"
        @click="resetSettings"
      >
        {{ $t('common.reset') }}
      </button>
      <button
        class="btn btn-primary"
        :disabled="!hasChanges"
        @click="saveSettings"
      >
        {{ $t('common.save') }}
      </button>
    </div>

    <!-- Preview (if applicable) -->
    <div v-if="showPreview" class="settings-preview mt-6">
      <h4>{{ $t('settings.preview') }}</h4>
      <div class="preview-content">
        <!-- Preview of settings changes -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FeatureSettings } from './types';

interface Props {
  initialSettings?: FeatureSettings;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  save: [settings: FeatureSettings];
  change: [settings: FeatureSettings];
}>();

// Local state
const localSettings = ref<FeatureSettings>({
  ...props.initialSettings,
});

const originalSettings = ref<FeatureSettings>({
  ...props.initialSettings,
});

// Computed
const hasChanges = computed(() => {
  return JSON.stringify(localSettings.value) !== JSON.stringify(originalSettings.value);
});

// Methods
const handleChange = () => {
  emit('change', localSettings.value);
};

const saveSettings = async () => {
  try {
    // Validate settings
    if (!validateSettings(localSettings.value)) {
      // Show error
      return;
    }

    // Save to backend/store
    emit('save', localSettings.value);

    // Update original settings
    originalSettings.value = { ...localSettings.value };

    // Show success message
  } catch (error) {
    // Handle error
  }
};

const resetSettings = () => {
  localSettings.value = { ...originalSettings.value };
};

const validateSettings = (settings: FeatureSettings): boolean => {
  // Validation logic
  return true;
};
</script>
```

## Settings Types Definition

```typescript
// types.ts
export interface FeatureSettings {
  enabled: boolean;
  fieldName: string;
  option: 'option1' | 'option2';
  color: string;
  // ... other settings
}

export interface SettingField {
  key: string;
  label: string;
  type: 'text' | 'number' | 'boolean' | 'select' | 'color' | 'file';
  default?: any;
  validation?: {
    required?: boolean;
    min?: number;
    max?: number;
    pattern?: RegExp;
  };
  options?: Array<{
    value: string;
    label: string;
  }>;
}

export interface SettingsGroup {
  id: string;
  title: string;
  description?: string;
  fields: SettingField[];
}
```

## Settings Integration

### 1. Settings Drawer
Settings are accessed via the `SiteConfigurationDrawer`:

```vue
<!-- SiteConfigurationDrawer.vue -->
<template>
  <Drawer v-model="isOpen">
    <div class="settings-categories">
      <button @click="selectCategory('branding')">
        Branding & Design
      </button>
      <button @click="selectCategory('category')">
        Category Settings
      </button>
      <!-- ... more categories -->
    </div>

    <div class="settings-content">
      <component :is="currentSettingsComponent" />
    </div>
  </Drawer>
</template>
```

### 2. Settings Toolbar
The `SettingsToolbar` provides quick access:

```vue
<SettingsToolbar>
  <button @click="openSettings('general')">
    <SfIconSettings />
  </button>
</SettingsToolbar>
```

### 3. Settings Groups
Use `SettingsGroup` component for organization:

```vue
<SettingsGroup
  :title="$t('settings.branding.title')"
  :description="$t('settings.branding.description')"
>
  <ColorSettings />
  <FontSettings />
  <LogoSettings />
</SettingsGroup>
```

## Common Setting Types

### 1. Toggle/Boolean Settings:
```vue
<div class="setting-item">
  <label class="flex items-center justify-between">
    <span>{{ label }}</span>
    <input
      v-model="value"
      type="checkbox"
      class="toggle"
    />
  </label>
</div>
```

### 2. Text Input Settings:
```vue
<div class="setting-item">
  <label>{{ label }}</label>
  <input
    v-model="value"
    type="text"
    :placeholder="placeholder"
    class="form-input"
  />
</div>
```

### 3. Number Input Settings:
```vue
<div class="setting-item">
  <label>{{ label }}</label>
  <input
    v-model.number="value"
    type="number"
    :min="min"
    :max="max"
    class="form-input"
  />
</div>
```

### 4. Select/Dropdown Settings:
```vue
<div class="setting-item">
  <label>{{ label }}</label>
  <select v-model="value" class="form-select">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</div>
```

### 5. Color Picker Settings:
```vue
<div class="setting-item">
  <label>{{ label }}</label>
  <div class="flex items-center space-x-2">
    <input
      v-model="value"
      type="color"
      class="form-color"
    />
    <input
      v-model="value"
      type="text"
      pattern="^#[0-9A-Fa-f]{6}$"
      class="form-input w-24"
    />
  </div>
</div>
```

### 6. Image Upload Settings:
```vue
<div class="setting-item">
  <label>{{ label }}</label>
  <ImagePicker
    v-model="value"
    :max-size="maxSize"
    :accept="accept"
  />
</div>
```

### 7. Rich Text Settings:
```vue
<div class="setting-item">
  <label>{{ label }}</label>
  <LanguageEditor
    v-model="value"
    :languages="availableLanguages"
  />
</div>
```

## Settings Persistence

### 1. Using Composable:
```typescript
const { settings, updateSettings, resetSettings } = useSiteSettings();

// Get current settings
const currentSettings = settings.value;

// Update settings
await updateSettings({
  category: 'branding',
  settings: newSettings,
});

// Reset to defaults
await resetSettings('branding');
```

### 2. Using Site Configuration:
```typescript
const { configuration, updateConfiguration } = useSiteConfiguration();

// Update configuration
await updateConfiguration({
  primaryColor: '#ff0000',
  font: 'Inter',
});
```

## Settings Validation

```typescript
import { object, string, boolean, number } from 'yup';

const settingsSchema = object({
  enabled: boolean().required(),
  title: string().required().min(3).max(100),
  count: number().min(1).max(100),
  color: string().matches(/^#[0-9A-Fa-f]{6}$/),
});

const validateSettings = async (settings: any) => {
  try {
    await settingsSchema.validate(settings);
    return { valid: true };
  } catch (error) {
    return { valid: false, error };
  }
};
```

## Environment-Based Settings

Settings can be configured via environment variables:

```properties
# .env
NUXT_PUBLIC_SHOW_CUSTOMER_WISH_COMPONENT=true
NUXT_PUBLIC_SHOW_CUSTOMER_REFERENCE_COMPONENT=true
NUXT_PUBLIC_BUNDLE_ITEM_DISPLAY=2
NUXT_PUBLIC_DEFAULT_CUSTOMER_CLASS_ID=0
```

Access in runtime config:
```typescript
const config = useRuntimeConfig();
const showCustomerWish = config.public.showCustomerWishComponent;
```

## Settings Examples

### Example 1: Color Theme Settings
```
User: Create color theme settings panel
Skill: Creates:
  - ColorThemeSettings.vue in settings/branding-and-design/
  - Fields: Primary color, Secondary color, Header color
  - Color picker inputs with preview
  - Save to configuration
  - Live preview of color changes
```

### Example 2: Product Display Settings
```
User: Create product grid settings
Skill: Creates:
  - ProductGridSettings.vue in settings/item/
  - Fields: Items per page, Grid columns, Card style
  - Dropdown for card style options
  - Number inputs for pagination
  - Preview of grid layout
```

### Example 3: SEO Settings
```
User: Create meta tags settings panel
Skill: Creates:
  - MetaTagSettings.vue in settings/seo/
  - Fields: Meta title, description, keywords
  - Character counters
  - Preview of meta tags
  - Language-specific inputs
```

## Settings UI Components

The app includes reusable settings UI components:

### SettingsGroup:
```vue
<SettingsGroup :title="title" :description="description">
  <!-- Settings content -->
</SettingsGroup>
```

### SettingsToolbar:
```vue
<SettingsToolbar>
  <!-- Toolbar actions -->
</SettingsToolbar>
```

### Form Components:
- `ImagePicker` - Image upload with preview
- `ImageUpload` - Simple image upload
- `LanguageEditor` - Multi-language text input
- `TelephoneInput` - Phone number input
- `Dropdown` - Custom dropdown

## Settings Access Control

Settings can be restricted based on environment or user role:

```typescript
// nuxt.config.ts
runtimeConfig: {
  public: {
    enableCategoryEditing: process.env.NODE_ENV === 'development',
    enableAllEditorSettings: process.env.ENABLE_ALL_EDITOR_SETTINGS === '1',
  }
}

// In component
const config = useRuntimeConfig();
const canEdit = config.public.enableCategoryEditing;
```

## Best Practices

1. **Organization:**
   - Group related settings together
   - Use clear, descriptive labels
   - Provide helpful descriptions/hints

2. **Validation:**
   - Validate all user input
   - Show clear error messages
   - Prevent invalid states

3. **UX:**
   - Show loading states during save
   - Confirm before discarding changes
   - Provide undo/reset functionality
   - Show success/error notifications

4. **Performance:**
   - Debounce auto-save if implemented
   - Lazy load settings panels
   - Cache settings data

5. **Accessibility:**
   - Use proper labels
   - Ensure keyboard navigation
   - Provide ARIA attributes
   - Test with screen readers

6. **i18n:**
   - Translate all labels and hints
   - Support multi-language content fields
   - Use LanguageEditor for translatable fields

## Related Files

- Settings components: `/apps/web/app/components/settings/`
- Settings drawer: `/apps/web/app/components/SiteConfigurationDrawer.vue`
- Settings toolbar: `/apps/web/app/components/SettingsToolbar.vue`
- Settings composable: `/apps/web/app/composables/useSiteSettings/`
- Configuration composable: `/apps/web/app/composables/useSiteConfiguration/`
- Settings imports: `/apps/web/app/utils/settings-groups-imports.ts`
- Editor settings: `/apps/web/app/utils/editorSettings.ts`

## Notes

- Settings are organized by category/domain
- Settings can be environment-specific
- The drawer system allows hierarchical navigation
- Settings should persist to backend (via composables)
- Consider creating setting presets for common configurations
- Test settings changes in both development and production modes
- Settings may have different access levels (admin, editor, viewer)
- Use the `useEditor` composable for editor mode detection
- Settings can trigger rebuilds or require app restarts (document this)
- Consider versioning settings for migration support
