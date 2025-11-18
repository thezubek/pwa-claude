# Manage Theming Skill

This skill helps you customize and manage the theme colors, fonts, and visual styling for the PlentyONE Shop PWA.

## What this skill does

- Manages dynamic color themes with CSS variables
- Updates TailwindCSS configuration
- Modifies primary, secondary, and header colors
- Configures custom fonts
- Generates color palettes with shades (50-950)
- Updates PWA manifest theme colors

## When to use this skill

Use this skill when you need to:
- Change the shop's brand colors
- Update the color scheme (primary, secondary, header)
- Configure custom web fonts
- Generate a complete color palette from a base color
- Update the PWA theme color
- Customize the visual brand identity

## How to use

When invoked, this skill will:

1. **Ask for theme details:**
   - Primary color (HEX, RGB, or color name)
   - Secondary color (optional)
   - Header background color (optional)
   - Custom font family (optional)
   - Icon color (optional)

2. **Generate color palettes:**
   - Create 11 shades (50, 100, 200...950) for each color
   - Use the `@plentymarkets/tailwind-colors` package
   - Generate CSS custom properties

3. **Update configuration files:**
   - Environment variables (`.env`)
   - TailwindCSS config (`/apps/web/app/configuration/tailwind.config.ts`)
   - PWA manifest (via `nuxt.config.ts`)
   - Color palette plugin (`/apps/web/app/plugins/04.generate-color-palette.server.ts`)

4. **Preserve existing settings:**
   - Don't override unspecified colors
   - Maintain font configurations
   - Keep other theme settings intact

## Theme Configuration Locations

### 1. Environment Variables (`.env`)
```properties
NUXT_PUBLIC_PRIMARY_COLOR=#062633
NUXT_PUBLIC_SECONDARY_COLOR=#31687d
NUXT_PUBLIC_HEADER_BACKGROUND_COLOR=#062633
NUXT_PUBLIC_ICON_COLOR=#ffffff
NUXT_PUBLIC_FONT=Red Hat Text
```

### 2. TailwindCSS Config (`tailwind.config.ts`)
```typescript
colors: {
  primary: {
    '50': 'rgb(var(--colors-2-primary-50) / <alpha-value>)',
    '100': 'rgb(var(--colors-2-primary-100) / <alpha-value>)',
    // ... 200-900
    '950': 'rgb(var(--colors-2-primary-950) / <alpha-value>)',
  },
  secondary: {
    // Same pattern
  },
  header: {
    // Same pattern
  },
}
```

### 3. PWA Manifest (in `nuxt.config.ts`)
```typescript
pwa: {
  manifest: {
    theme_color: process.env.NUXT_PUBLIC_PRIMARY_COLOR || '#062633',
  }
}
```

### 4. Color Palette Plugin
Location: `/apps/web/app/plugins/04.generate-color-palette.server.ts`
- Generates CSS custom properties at runtime
- Uses `@plentymarkets/tailwind-colors` package
- Creates shades for primary, secondary, and header colors

## Color Palette Generation

The skill uses the `@plentymarkets/tailwind-colors` package to generate color palettes:

```typescript
import { colorPalettesFromColors } from '@plentymarkets/tailwind-colors';

const palettes = colorPalettesFromColors({
  primary: '#062633',
  secondary: '#31687d',
  header: '#062633'
});

// Generates:
// primary-50: #f0f7f9
// primary-100: #e1eff3
// ...
// primary-950: #031319
```

## CSS Custom Properties

Generated CSS variables follow this pattern:

```css
:root {
  --colors-2-primary-50: 240, 247, 249;
  --colors-2-primary-100: 225, 239, 243;
  --colors-2-primary-200: 210, 231, 237;
  /* ... */
  --colors-2-primary-950: 3, 19, 25;

  --colors-2-secondary-50: ...;
  --colors-2-secondary-100: ...;

  --colors-2-header-50: ...;
  --colors-2-header-100: ...;
}
```

These are then used in Tailwind:
```typescript
'50': 'rgb(var(--colors-2-primary-50) / <alpha-value>)'
```

## Font Configuration

### Setting Custom Fonts

1. **Update environment variable:**
```properties
NUXT_PUBLIC_FONT=Red Hat Text
```

2. **Nuxt Fonts Module:**
The app uses `@nuxt/fonts` which automatically handles font loading from Google Fonts.

3. **TailwindCSS Config:**
```typescript
fontFamily: {
  body: [`${fontFamilyText}`, ...defaultTheme.fontFamily.sans],
  editor: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
}
```

4. **Font Configuration (nuxt.config.ts):**
```typescript
fonts: {
  defaults: {
    weights: [300, 400, 500, 700],
  },
  assets: {
    prefix: '/_nuxt-plenty/fonts/',
  },
}
```

## Usage Examples

### Example 1: Change Primary Brand Color
```
User: Change the primary color to a deep blue (#1e3a8a)
Skill:
  1. Updates NUXT_PUBLIC_PRIMARY_COLOR in .env
  2. Generates blue palette (50-950 shades)
  3. Updates PWA manifest theme_color
  4. Confirms changes
```

### Example 2: Complete Brand Refresh
```
User: Rebrand with primary=#8b5cf6 (purple), secondary=#ec4899 (pink), font=Inter
Skill:
  1. Updates all color environment variables
  2. Generates purple and pink palettes
  3. Updates font to Inter
  4. Updates header color
  5. Regenerates PWA manifest
```

### Example 3: Dark Theme Header
```
User: Make the header dark (#1f2937) while keeping other colors
Skill:
  1. Updates NUXT_PUBLIC_HEADER_BACKGROUND_COLOR
  2. Generates dark gray palette for header
  3. Updates NUXT_PUBLIC_ICON_COLOR to white for contrast
  4. Preserves primary and secondary colors
```

## Theme Testing Checklist

After applying theme changes:

1. **Visual Inspection:**
   - [ ] Header displays correct background color
   - [ ] Buttons use primary color
   - [ ] Links use primary color
   - [ ] Hover states work correctly
   - [ ] Icons are visible (check contrast)

2. **Component Testing:**
   - [ ] Product cards
   - [ ] Category navigation
   - [ ] Cart and checkout
   - [ ] Forms and buttons
   - [ ] Footer

3. **Responsive Testing:**
   - [ ] Mobile view
   - [ ] Tablet view
   - [ ] Desktop view

4. **Accessibility:**
   - [ ] Color contrast meets WCAG AA standards (4.5:1 for normal text)
   - [ ] Interactive elements are clearly visible
   - [ ] Focus states are visible

5. **PWA:**
   - [ ] Manifest theme color matches
   - [ ] App icon background works with theme
   - [ ] Splash screen looks good

## Key Files to Update

1. **Environment Config:**
   - `/apps/web/.env` - Primary configuration

2. **Build Config:**
   - `/apps/web/nuxt.config.ts` - PWA manifest, runtime config
   - `/apps/web/app/configuration/tailwind.config.ts` - Tailwind theme

3. **Plugins:**
   - `/apps/web/app/plugins/04.generate-color-palette.server.ts` - CSS variables generation

4. **Runtime:**
   - CSS variables are injected at runtime via the plugin

## Color Utilities

### Available Tailwind Classes (after theme update):

**Primary Colors:**
- `text-primary-500`, `bg-primary-500`, `border-primary-500`
- All shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

**Secondary Colors:**
- `text-secondary-500`, `bg-secondary-500`, `border-secondary-500`
- All shades: 50-950

**Header Colors:**
- `text-header-500`, `bg-header-500`, `border-header-500`
- All shades: 50-950

**Usage in Components:**
```vue
<template>
  <button class="bg-primary-500 hover:bg-primary-600 text-white">
    Click me
  </button>
</template>
```

## Advanced Theming

### Custom Color Palette

If you need a custom palette (not generated), update the Tailwind config directly:

```typescript
colors: {
  brand: {
    '50': '#fef2f2',
    '100': '#fee2e2',
    // ... custom values
    '950': '#450a0a',
  }
}
```

### CSS Variables for Runtime Theming

The app uses CSS variables to allow runtime theme changes without rebuilding:

```typescript
// Plugin generates:
document.documentElement.style.setProperty('--colors-2-primary-500', '6, 38, 51');

// Tailwind uses:
'500': 'rgb(var(--colors-2-primary-500) / <alpha-value>)'
```

This allows dynamic theming based on user preferences or backend configuration.

## Related Files

- Color utilities: `@plentymarkets/tailwind-colors` package
- TailwindCSS docs: https://tailwindcss.com/docs/customizing-colors
- Nuxt fonts: https://fonts.nuxt.com/
- Storefront UI theming: https://docs.storefrontui.io/v2/customization/colors.html

## Notes

- Color changes require rebuilding the app (`npm run build`)
- CSS variable changes are applied at runtime via the plugin
- The app supports environment-based theming (different colors per environment)
- Always test theme changes in both light backgrounds and dark components
- Consider creating a theme preview page for rapid testing
- The `@plentymarkets/tailwind-colors` package ensures WCAG-compliant color palettes
