# PlentyONE Backend Editor - Comprehensive Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Editor Interface Overview](#editor-interface-overview)
4. [Working with Blocks](#working-with-blocks)
5. [Available Block Types](#available-block-types)
6. [Editing Block Properties](#editing-block-properties)
7. [Page Layout Management](#page-layout-management)
8. [Site Settings](#site-settings)
9. [Multi-Language Support](#multi-language-support)
10. [Saving and Publishing Changes](#saving-and-publishing-changes)
11. [Best Practices](#best-practices)
12. [Technical Reference](#technical-reference)
13. [Troubleshooting](#troubleshooting)

---

## Introduction

The **PlentyONE Backend Editor** is a powerful drag-and-drop page builder integrated into your PWA (Progressive Web Application) that allows you to create, edit, and customize page layouts without writing code. Built on the Alokai framework, it provides a visual interface for managing content across your e-commerce platform.

### What You Can Do

- **Create and edit pages** - Homepage, content pages, category pages, and product pages
- **Manage content blocks** - Add, edit, remove, and reorder content blocks
- **Customize appearance** - Configure colors, fonts, images, and layouts
- **Support multiple languages** - Manage content in German and English
- **Configure site settings** - Control branding, SEO, checkout, and more

---

## Getting Started

### Accessing the Editor

1. **Navigate to your PlentyONE backend** - Log into your plentymarkets backend system
2. **Open the PWA section** - Navigate to the PWA configuration area
3. **Enable Edit Mode** - Click the "Edit" or "Enable Editing" button to activate the editor
4. **Start editing** - You'll see editing controls appear on your page

### Editor Modes

The editor operates in two modes:

- **Preview Mode** - View pages as customers see them (default)
- **Edit Mode** - Access editing controls and modify content

Toggle between modes using the edit button in the toolbar.

---

## Editor Interface Overview

### Main Components

```
┌─────────────────────────────────────────┐
│           Toolbar (Top Bar)              │
│  [Preview/Edit] [Save] [Settings]       │
├─────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────┐    │
│  │  Block 1 (Banner)              │    │
│  │  [Edit] [Delete] [Move]        │    │
│  └────────────────────────────────┘    │
│                                          │
│  [+ Add Block]                          │
│                                          │
│  ┌────────────────────────────────┐    │
│  │  Block 2 (Product Grid)        │    │
│  │  [Edit] [Delete] [Move]        │    │
│  └────────────────────────────────┘    │
│                                          │
│  [+ Add Block]                          │
│                                          │
└─────────────────────────────────────────┘
```

### Toolbar Controls

- **Edit/Preview Toggle** - Switch between editing and preview modes
- **Save Button** - Save all changes to the backend
- **Settings** - Access global site settings
- **Language Selector** - Switch between supported languages

### Block Controls

Each block displays control buttons when in edit mode:

- **Edit** (✏️) - Open block configuration form
- **Delete** (🗑️) - Remove the block
- **Move** (☰) - Drag handle for repositioning
- **Add Block** (+) - Insert new block above/below

---

## Working with Blocks

### Adding a New Block

1. Click the **[+ Add Block]** button at the desired position
2. Select a **block type** from the block list (Banner, Image, Product Grid, etc.)
3. Choose a **pre-configured template** (optional) or start from scratch
4. Configure the block properties in the form that appears
5. Click **Save** to add the block to your page

### Editing an Existing Block

1. Click the **Edit** button (✏️) on the block
2. Modify the properties in the configuration form
3. Click **Save** to apply changes
4. Changes appear immediately in edit mode

### Deleting a Block

1. Click the **Delete** button (🗑️) on the block
2. Confirm deletion if prompted
3. The block is removed from the page (not saved until you click Save in toolbar)

### Reordering Blocks

1. In edit mode, click and hold the **Move** handle (☰) on a block
2. Drag the block up or down to the desired position
3. Release to drop the block in the new location
4. The footer block (if present) always remains at the bottom

### Nested Blocks (MultiGrid)

Some blocks like **MultiGrid** can contain other blocks:

1. Add a **MultiGrid** block to create columns
2. Choose a layout (e.g., 6-6 for two equal columns, 4-4-4 for three columns)
3. Click **[+ Add Block]** inside each column to add nested content
4. Nested blocks can be edited, deleted, and reordered independently

**Maximum Nesting Depth:** 5 levels

---

## Available Block Types

### Content Blocks

#### 1. Banner
**Purpose:** Display promotional images with text and call-to-action buttons

**Configurable Properties:**
- **Images** - Responsive images for different screen sizes (mobile, tablet, desktop, widescreen)
- **Text Content**
  - Pretitle (small text above main title)
  - Title (main heading)
  - Subtitle (secondary heading)
  - Description (HTML-supported rich text)
- **Styling**
  - Text color
  - Background color
  - Text alignment (left, center, right)
  - Text justification (flex-start, center, flex-end)
  - Image brightness overlay
- **Button**
  - Button label
  - Button link/URL
  - Button variant (primary, secondary, tertiary)

**Best For:** Hero sections, promotional banners, campaign announcements

---

#### 2. Carousel (Banner Slider)
**Purpose:** Display multiple banners in a rotating carousel

**Configurable Properties:**
- **Slides** - Add multiple banner slides (each with full banner properties)
- **Carousel Settings**
  - Auto-play interval
  - Transition speed
  - Navigation arrows
  - Pagination dots

**Best For:** Homepage hero sections, multiple promotions, image galleries

---

#### 3. Image
**Purpose:** Display a single image with optional link

**Configurable Properties:**
- **Image URL** - Link to the image file
- **Alt Text** - Accessibility description
- **Link** - Optional destination URL when clicked
- **Responsive Settings** - Different images for different breakpoints

**Best For:** Standalone images, clickable graphics, visual separators

---

#### 4. Image Gallery
**Purpose:** Display multiple images in a grid layout

**Configurable Properties:**
- **Images** - Collection of images with URLs and alt text
- **Grid Layout** - Number of columns (2, 3, 4, 6)
- **Spacing** - Gap between images
- **Lightbox** - Enable/disable full-screen image viewing

**Best For:** Product showcases, lookbooks, portfolio displays

---

#### 5. ItemGrid (Product Grid)
**Purpose:** Display products in a grid layout

**Configurable Properties:**
- **Product Selection**
  - Manual product IDs
  - Category-based filtering
  - Automatic recommendations
- **Layout**
  - Columns per row
  - Number of rows
  - Spacing
- **Display Options**
  - Show/hide price
  - Show/hide ratings
  - Show/hide add-to-cart button
  - Image aspect ratio

**Best For:** Product listings, featured products, category pages

---

#### 6. ProductRecommendedProducts
**Purpose:** Display AI-powered product recommendations

**Configurable Properties:**
- **Recommendation Type**
  - Similar products
  - Frequently bought together
  - Recently viewed
  - Trending products
- **Layout Settings** - Same as ItemGrid
- **Lazy Loading** - Enable performance optimization

**Best For:** Product detail pages, cross-selling, upselling

---

#### 7. ItemText
**Purpose:** Display product descriptions and text content

**Configurable Properties:**
- **Text Content** - Rich HTML editor for product descriptions
- **Typography**
  - Font family
  - Font size
  - Line height
  - Text color
- **Formatting** - Bold, italic, lists, links

**Best For:** Product descriptions, feature lists, specifications

---

#### 8. TechnicalData
**Purpose:** Display product specifications in a structured table

**Configurable Properties:**
- **Data Rows** - Key-value pairs (e.g., "Weight: 500g")
- **Table Styling**
  - Border style
  - Background color
  - Header styling
- **Grouping** - Organize specifications into categories

**Best For:** Technical specifications, product attributes, comparison tables

---

#### 9. CustomerReview
**Purpose:** Display customer reviews and ratings

**Configurable Properties:**
- **Review Source** - Fetch from plentymarkets review system
- **Display Options**
  - Number of reviews to show
  - Show/hide reviewer names
  - Show/hide review dates
  - Rating display style
- **Filtering** - Filter by star rating

**Best For:** Product pages, testimonial sections, social proof

---

#### 10. NewsletterSubscribe
**Purpose:** Email signup form for newsletters

**Configurable Properties:**
- **Form Fields**
  - Email (required)
  - First name (optional)
  - Last name (optional)
  - Privacy policy checkbox
- **Styling**
  - Button color
  - Input field style
  - Layout (inline, stacked)
- **Integration** - plentymarkets newsletter system

**Best For:** Footer sections, sidebar widgets, popup forms

---

#### 11. CategoryData
**Purpose:** Display category information and metadata

**Configurable Properties:**
- **Category Selection** - Choose category ID
- **Display Elements**
  - Category name
  - Category description
  - Category image
  - Subcategory links
- **Layout** - Grid or list view

**Best For:** Category landing pages, navigation menus

---

#### 12. PriceCard
**Purpose:** Display pricing tiers or service packages

**Configurable Properties:**
- **Pricing Tiers** - Add multiple plans
- **Per Tier**
  - Plan name
  - Price amount
  - Currency
  - Billing period
  - Feature list
  - Call-to-action button
- **Styling**
  - Highlight recommended plan
  - Color scheme
  - Card layout

**Best For:** Subscription pages, service pricing, membership tiers

---

#### 13. ProductLegalInformation
**Purpose:** Display legal information for products

**Configurable Properties:**
- **Legal Text Types**
  - Shipping information
  - Return policy
  - Warranty information
  - Compliance notices
- **Formatting** - Rich text editor

**Best For:** Product pages, compliance requirements

---

### Structure Blocks

#### 14. MultiGrid
**Purpose:** Create multi-column layouts for organizing content

**Configurable Properties:**
- **Column Layouts**
  - 6-6 (2 equal columns)
  - 4-4-4 (3 equal columns)
  - 3-3-3-3 (4 equal columns)
  - 8-4 (wide left, narrow right)
  - 4-8 (narrow left, wide right)
  - Custom grid (specify column widths)
- **Spacing**
  - Gap between columns
  - Padding within columns
- **Responsive Behavior** - Stack on mobile

**Best For:** Complex layouts, side-by-side content, feature grids

**Note:** You can add blocks inside each column to create nested structures.

---

#### 15. Footer
**Purpose:** Special auto-managed footer section

**Configurable Properties:**
- **Footer Links** - Navigation links
- **Contact Information** - Address, phone, email
- **Social Media** - Icon links to social profiles
- **Copyright** - Copyright text
- **Payment Icons** - Accepted payment methods

**Best For:** Site footer (automatically appears at bottom)

**Note:** The footer block always positions itself at the bottom of the page, regardless of drag order.

---

### Design System Blocks (AURA)

#### 16. HeroAura
**Purpose:** Modern hero section using AURA design system

**Configurable Properties:**
- **Layout Variant** - Different hero styles
- **Content** - Title, description, CTA buttons
- **Media** - Image or video background
- **Overlay** - Color overlay settings

**Best For:** Modern homepages, landing pages

---

#### 17. HeaderAura
**Purpose:** Site header using AURA design system

**Configurable Properties:**
- **Navigation** - Menu items and links
- **Logo** - Brand logo image
- **Style** - Sticky, transparent, solid backgrounds

**Best For:** Site-wide navigation

---

#### 18. EditorialCardAura
**Purpose:** Content card using AURA design system

**Configurable Properties:**
- **Card Content** - Image, title, description
- **Link** - Destination URL
- **Style** - Card variant (elevated, outlined, filled)

**Best For:** Blog posts, featured content, link cards

---

## Editing Block Properties

### Opening the Block Editor

When you click **Edit** on a block, a configuration form appears with block-specific properties.

### Common Property Types

#### Text Fields
- **Single Line** - For titles, labels, URLs
- **Multi-Line** - For descriptions, longer text
- **Rich Text Editor** - HTML-supported formatting with toolbar

#### Image Selectors
- **Upload Image** - Upload from your computer
- **Media Library** - Select from existing images
- **URL Input** - Enter direct image URL
- **Responsive Images** - Set different images for different screen sizes

#### Color Pickers
- **Hex Code** - Enter color hex codes (#FF0000)
- **Color Palette** - Select from predefined brand colors
- **Transparency** - RGBA with opacity control

#### Layout Options
- **Dropdown Menus** - Select from predefined options
- **Radio Buttons** - Choose one option
- **Checkboxes** - Enable/disable features
- **Number Inputs** - Specify exact values (columns, spacing, etc.)

#### Link Configuration
- **URL Field** - Enter destination URL
- **Link Text** - Button or link label
- **Open in New Tab** - Checkbox for external links
- **Link Type** - Internal page, external URL, category, product

### Saving Block Changes

1. Configure all desired properties in the form
2. Click **Save** or **Apply** button in the form
3. The form closes and changes appear in edit mode
4. **Important:** Changes are not saved to the backend until you click **Save** in the main toolbar

---

## Page Layout Management

### Page Types

The editor supports different page types, each with specific purposes:

#### 1. Homepage
- **Purpose:** Main landing page
- **Typical Blocks:** Hero banner, product grids, promotional banners, newsletter
- **Template:** Usually has pre-configured layout

#### 2. Category Pages
- **Purpose:** Product category listings
- **Typical Blocks:** Category data, item grids, filters, sorting
- **Dynamic Content:** Products load based on category selection

#### 3. Product Pages
- **Purpose:** Individual product details
- **Typical Blocks:** Product images, descriptions, technical data, reviews, recommendations
- **Dynamic Content:** Product-specific information

#### 4. Content Pages
- **Purpose:** Static informational pages (About Us, Contact, FAQ)
- **Typical Blocks:** Text, images, forms, custom HTML
- **Full Flexibility:** No restrictions on block types

### Templates

Templates are pre-configured page layouts that you can use as starting points.

#### Using Templates

1. Navigate to the page you want to edit
2. Click **Load Template** (if available)
3. Select a template from the list
4. The page loads with pre-configured blocks
5. Customize blocks to your needs

#### Language-Specific Templates

Templates exist for each supported language:
- **English templates** - Pre-configured with English content
- **German templates** - Pre-configured with German content

Switching language loads the appropriate template.

### Responsive Design

All blocks automatically adapt to different screen sizes:

- **Mobile** - < 768px
- **Tablet** - 768px - 1024px
- **Desktop** - 1024px - 1920px
- **Widescreen** - > 1920px

Configure responsive images and layouts in block properties.

---

## Site Settings

Beyond page content, the editor provides access to global site settings.

### Accessing Site Settings

1. Click **Settings** in the main toolbar
2. Navigate through settings categories
3. Modify desired settings
4. Click **Save** to apply changes

### Settings Categories

#### 1. Branding & Design
**Controls visual identity**

- **Logo** - Upload and configure logo (header, footer, email)
- **Colors**
  - Primary color
  - Secondary color
  - Accent color
  - Text colors
  - Background colors
- **Typography**
  - Heading fonts (H1-H6)
  - Body font
  - Font sizes
  - Line heights
- **Theme**
  - Light/dark mode
  - Custom CSS

#### 2. General Settings
**Site-wide configurations**

- **Customer Management**
  - Registration settings
  - Login options
  - Guest checkout
- **Contact Forms**
  - Form fields
  - Email recipients
  - Validation rules
- **Performance**
  - Lazy loading
  - Image optimization
  - Caching settings

#### 3. Item Settings (Product Settings)
**Product display configurations**

- **Product Display**
  - Image size
  - Thumbnail count
  - Zoom functionality
- **Price Display**
  - Show/hide tax
  - Currency format
  - Discount display
- **Bundles**
  - Bundle pricing
  - Component visibility

#### 4. Category Settings
**Category page configurations**

- **Sorting Options**
  - Default sort order
  - Available sort options (price, name, rating, date)
- **Filtering**
  - Filter types (price range, attributes, availability)
  - Filter layout (sidebar, top bar)
- **Display Modes**
  - Grid view
  - List view
  - Items per page

#### 5. Checkout Settings
**Purchase flow configurations**

- **Payment Methods**
  - Enable/disable payment providers
  - Payment method sorting
  - Payment icons
- **Delivery Options**
  - Shipping methods
  - Delivery time estimates
  - Shipping cost display
- **Form Customization**
  - Required fields
  - Optional fields
  - Field validation

#### 6. SEO Settings
**Search engine optimization**

- **Meta Data**
  - Default meta title template
  - Default meta description template
  - Meta keywords
- **Robots.txt**
  - Crawl rules
  - Sitemap location
- **Search Engines**
  - Google Analytics
  - Google Tag Manager
  - Facebook Pixel
- **Social Media**
  - Open Graph tags
  - Twitter Cards
  - Default social share images

### Unsaved Changes Warning

When you modify settings, a "dirty state" is tracked:
- **Indicator** - Visual indicator shows unsaved changes
- **Warning** - Navigating away prompts confirmation
- **Auto-save** - Some systems may auto-save; check your configuration

---

## Multi-Language Support

The editor fully supports managing content in multiple languages.

### Supported Languages

Currently supported:
- **English** (en)
- **German** (de)

### Switching Languages

1. Use the **language selector** in the toolbar
2. Select your desired language
3. The interface and content update to that language
4. Edit content in the selected language

### Language-Specific Content

Each block stores content separately for each language:

```javascript
{
  title: {
    en: "Welcome to Our Store",
    de: "Willkommen in unserem Shop"
  }
}
```

When editing:
- **Change language** in the toolbar
- **Edit block** - Form shows content for selected language
- **Save changes** - Only affects the current language
- **Repeat** for other languages

### Translation Workflow

**Best Practice:**
1. Complete all content in your primary language
2. Switch to secondary language
3. Translate each block's content
4. Save changes for each language
5. Preview in both languages before publishing

### UI Translation

The editor interface itself (buttons, labels, tooltips) automatically translates based on selected language. Translation files are located in:
- `/apps/web/app/lang/en/*.json`
- `/apps/web/app/lang/de/*.json`

---

## Saving and Publishing Changes

### Save Process

#### 1. Making Changes
- Add, edit, delete, or reorder blocks
- Modify site settings
- Changes appear immediately in edit mode

#### 2. Unsaved Changes Indicator
- **Toolbar indicator** - Shows when changes are pending
- **Block-level indicator** - Individual blocks may show unsaved status
- **Warning on navigate** - Browser warns if you try to leave with unsaved changes

#### 3. Saving Changes
1. Click the **Save** button in the main toolbar
2. The system saves:
   - All modified blocks
   - Block order
   - Site settings (if changed)
3. A **success notification** appears
4. The unsaved changes indicator disappears

#### 4. Save Confirmation
- **Success** - Green notification: "Changes saved successfully"
- **Error** - Red notification with error message

### What Gets Saved

When you click Save, the following data is persisted to the PlentyONE backend:

- **Block Structure** - All blocks and their nested hierarchy
- **Block Properties** - All configured content and settings
- **Block Order** - Sequence of blocks on the page
- **Site Settings** - Any modified global settings
- **Language-Specific Content** - Content for the active language

### Publishing Workflow

**Note:** In most PlentyONE setups:
- **Saved changes are live immediately** - Changes go to production when saved
- **No separate publish step** - Unlike some CMS platforms
- **Test carefully** - Preview changes in edit mode before saving

**Staging Environment (if available):**
- Some setups may have staging/production environments
- Consult your plentymarkets documentation
- Configure environment in middleware settings

### Reverting Changes

#### Before Saving
- **Edit mode** - Simply reload the page to discard all unsaved changes
- **Individual blocks** - Close the edit form without saving

#### After Saving
- **No built-in undo** - Saved changes persist
- **Manual restoration** - Re-edit blocks to previous state
- **Backup recommendation** - Keep screenshots or notes of important layouts

---

## Best Practices

### Content Management

#### 1. Plan Your Layout First
- **Sketch the design** - Plan block arrangement before building
- **Consider mobile** - Think mobile-first for responsive design
- **Logical flow** - Arrange content in a logical reading order

#### 2. Use Templates
- **Start with templates** - Leverage pre-configured layouts
- **Customize gradually** - Make incremental changes
- **Create consistency** - Use similar structures across pages

#### 3. Optimize Images
- **Compress images** - Use optimized file formats (WebP, JPEG)
- **Responsive images** - Provide different sizes for different screens
- **Alt text** - Always add descriptive alt text for accessibility
- **Lazy loading** - Enable for below-the-fold images

#### 4. Write Clear Content
- **Concise titles** - Keep headlines short and impactful
- **Scannable text** - Use short paragraphs, bullet points
- **Call-to-action** - Clear, action-oriented button labels
- **Consistent tone** - Maintain brand voice across all content

### Performance Optimization

#### 1. Lazy Loading
- **Enable for heavy blocks** - Product grids, image galleries, recommendations
- **Configuration** - Available in block settings or global settings
- **Benefit** - Faster initial page load

#### 2. Limit Block Count
- **Reasonable number** - Aim for 5-10 blocks per page
- **Combine related content** - Use MultiGrid instead of multiple separate blocks
- **Performance** - Fewer blocks = faster rendering

#### 3. Minimize Nesting
- **Max depth 5** - Avoid deeply nested MultiGrid structures
- **Flatten when possible** - Simpler structures load faster
- **Test performance** - Check page speed after adding nested blocks

### Workflow Efficiency

#### 1. Save Frequently
- **Regular saves** - Save after major changes
- **Avoid data loss** - Protects against browser crashes
- **Incremental updates** - Easier to track what changed

#### 2. Preview Before Saving
- **Switch to preview** - Always check preview mode before saving
- **Test interactions** - Click buttons, links to verify functionality
- **Check mobile** - Use browser dev tools to test responsive design

#### 3. Multi-Language Workflow
- **Primary language first** - Complete primary language fully
- **Translate systematically** - Go page by page for secondary languages
- **Consistency** - Use same structure across languages

#### 4. Documentation
- **Screenshot layouts** - Keep visual records of important pages
- **Note customizations** - Document any special configurations
- **Share knowledge** - Train team members on editor usage

### SEO Best Practices

#### 1. Structured Content
- **Heading hierarchy** - Use H1 for page title, H2 for sections, H3 for subsections
- **Semantic blocks** - Choose appropriate block types for content
- **Descriptive links** - Use meaningful link text, not "click here"

#### 2. Meta Data
- **Unique titles** - Each page should have unique meta title
- **Compelling descriptions** - Write engaging meta descriptions
- **Optimize settings** - Configure SEO settings appropriately

#### 3. Image SEO
- **File names** - Use descriptive file names (product-blue-shirt.jpg)
- **Alt text** - Descriptive, keyword-appropriate alt text
- **Image size** - Optimize file sizes for faster loading

---

## Technical Reference

### Architecture Overview

```
┌──────────────────────────────────────────┐
│     PlentyONE Backend API                │
│     (Data Storage)                       │
└─────────────┬────────────────────────────┘
              │
              │ HTTPS
              ▼
┌──────────────────────────────────────────┐
│   Alokai Middleware Server               │
│   (Express.js - Port 4000)               │
│   - SDK Methods                          │
│   - API Routing                          │
└─────────────┬────────────────────────────┘
              │
              │ HTTP/SDK
              ▼
┌──────────────────────────────────────────┐
│   Vue/Nuxt Frontend (Port 3000)          │
│   - Composables (useBlockManager, etc)  │
│   - Components (EditablePage, etc)      │
│   - UI Layer                             │
└──────────────────────────────────────────┘
```

### Key API Endpoints

| SDK Method | HTTP Method | Purpose | Request Payload |
|------------|-------------|---------|-----------------|
| `getBlocks()` | GET | Fetch page blocks | `{ categoryId?, pageType?, lang? }` |
| `doSaveBlocks()` | POST | Save modified blocks | `{ blocks: [], pageType?, categoryId?, lang? }` |
| `getCategoryTemplate()` | GET | Fetch category template | `{ categoryId, lang }` |

### Data Flow

#### Loading a Page (Read Operation)

```
1. User navigates to page
   ↓
2. useCategoryTemplate.getBlocks() called
   ↓
3. SDK request: /plentysystems/getBlocks
   ↓
4. Middleware forwards to PlentyONE API
   ↓
5. Backend returns block data (JSON)
   ↓
6. Data stored in Vue reactive state
   ↓
7. EditablePage.vue renders blocks
   ↓
8. PageBlock.vue renders each block component
   ↓
9. Page displays to user
```

#### Saving Changes (Write Operation)

```
1. User clicks Save in toolbar
   ↓
2. useToolbar.save() orchestrates save
   ↓
3. useCategoryTemplate.saveBlocks() called
   ↓
4. Collects current block state from useBlockManager
   ↓
5. SDK request: /plentysystems/doSaveBlocks
   ↓
6. Middleware forwards to PlentyONE API
   ↓
7. Backend persists blocks to database
   ↓
8. Success response returned
   ↓
9. Clean data snapshot updated
   ↓
10. Notification displayed to user
```

### File Locations

#### Core Components
- **EditablePage.vue** - `/apps/web/app/components/EditablePage/EditablePage.vue`
- **PageBlock.vue** - `/apps/web/app/components/PageBlock/PageBlock.vue`

#### Composables (State Management)
- **useBlockManager.ts** - `/apps/web/app/composables/useBlockManager/useBlockManager.ts`
- **useCategoryTemplate.ts** - `/apps/web/app/composables/useCategoryTemplate/useCategoryTemplate.ts`
- **useEditor.ts** - `/apps/web/app/composables/useEditor/useEditor.ts`
- **useToolbar.ts** - `/apps/web/app/composables/useToolbar/useToolbar.ts`
- **useSiteSettings.ts** - `/apps/web/app/composables/useSiteSettings/useSiteSettings.ts`

#### Block Form Components
Located in: `/apps/web/app/components/blocks/`
- `BannerForm.vue`
- `CarouselForm.vue`
- `ImageGalleryForm.vue`
- `ItemGridForm.vue`
- `ProductRecommendedProductsForm.vue`
- And more...

#### Configuration Files
- **Block Templates** - `/apps/web/public/_nuxt-plenty/editor/blocksLists.json`
- **Font Configuration** - `/apps/web/public/_nuxt-plenty/editor/fonts.json`
- **Middleware Config** - `/apps/server/middleware.config.ts`
- **Translation Files** - `/apps/web/app/lang/{en|de}/*.json`

#### Documentation
- **Lazy Loading Docs** - `/docs/lazy-loading-blocks.md`

### Block Data Structure

Example block JSON structure:

```json
{
  "uuid": "block-abc-123",
  "type": "banner",
  "position": 0,
  "props": {
    "image": {
      "mobile": "/images/banner-mobile.jpg",
      "tablet": "/images/banner-tablet.jpg",
      "desktop": "/images/banner-desktop.jpg"
    },
    "pretitle": {
      "en": "New Arrival",
      "de": "Neuheit"
    },
    "title": {
      "en": "Summer Collection 2024",
      "de": "Sommerkollektion 2024"
    },
    "description": {
      "en": "<p>Discover our latest styles</p>",
      "de": "<p>Entdecken Sie unsere neuesten Styles</p>"
    },
    "textColor": "#FFFFFF",
    "backgroundColor": "#000000",
    "textAlign": "center",
    "button": {
      "label": {
        "en": "Shop Now",
        "de": "Jetzt Einkaufen"
      },
      "link": "/category/summer-collection",
      "variant": "primary"
    }
  },
  "children": []
}
```

### Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Vue.js | 3.x | Frontend framework |
| Nuxt | 3.x | Meta-framework for Vue |
| TypeScript | 5.x | Type safety |
| TailwindCSS | 3.x | Utility-first CSS |
| Storefront UI | v2 | Component library |
| vue3-draggable | Latest | Drag-and-drop functionality |
| Alokai SDK | Latest | Backend communication |
| Express.js | 4.x | Middleware server |

### Performance Features

#### 1. Lazy Loading
- **Intersection Observer API** - Detects when blocks enter viewport
- **Dynamic imports** - Components loaded on-demand
- **Configurable** - Enable per-block or globally

#### 2. State Management
- **Vue Composition API** - Reactive state management
- **Dirty tracking** - Only save changed data
- **Optimistic updates** - UI updates before server confirmation

#### 3. Caching
- **Client-side cache** - Blocks cached in memory during session
- **Server-side cache** - Middleware may cache API responses
- **Cache invalidation** - Cleared on save operations

---

## Troubleshooting

### Common Issues and Solutions

#### Issue: Changes Not Saving

**Symptoms:**
- Click Save, but changes don't persist
- Error notification appears
- Changes revert after page reload

**Solutions:**
1. **Check network connection** - Ensure stable internet
2. **Check browser console** - Look for error messages (F12 → Console tab)
3. **Verify permissions** - Ensure you have edit permissions in plentymarkets backend
4. **Try again** - Temporary server issues may resolve on retry
5. **Check backend status** - Verify PlentyONE API is operational
6. **Clear cache** - Clear browser cache and reload

#### Issue: Blocks Not Displaying

**Symptoms:**
- Blocks appear in editor but not in preview
- Blank spaces where blocks should be
- Console errors about missing components

**Solutions:**
1. **Check block type** - Ensure block type is supported
2. **Verify block data** - Ensure all required properties are configured
3. **Check lazy loading** - Some blocks lazy-load; scroll to trigger
4. **Browser console** - Look for JavaScript errors
5. **Reload page** - Clear component cache

#### Issue: Drag and Drop Not Working

**Symptoms:**
- Can't reorder blocks
- Drag handle doesn't respond
- Blocks snap back to original position

**Solutions:**
1. **Enable edit mode** - Ensure you're in edit mode, not preview
2. **Check nested depth** - Maximum nesting depth is 5 levels
3. **Footer block** - Footer always stays at bottom (can't reorder)
4. **Browser compatibility** - Ensure modern browser (Chrome, Firefox, Safari, Edge)
5. **Disable browser extensions** - Ad blockers may interfere

#### Issue: Images Not Loading

**Symptoms:**
- Broken image icons
- Alt text displays instead of images
- Images work in editor but not in preview

**Solutions:**
1. **Check image URLs** - Ensure URLs are accessible and correct
2. **HTTPS requirement** - Ensure images use HTTPS, not HTTP
3. **CORS issues** - Images must be from allowed domains
4. **File size** - Very large images may timeout; optimize images
5. **CDN configuration** - Check CDN/media server settings

#### Issue: Language Switching Not Working

**Symptoms:**
- Content doesn't change when switching languages
- Interface remains in one language
- Missing translations

**Solutions:**
1. **Configure both languages** - Ensure content exists for both languages
2. **Check translation files** - Verify translation files are loaded
3. **Clear cache** - Browser or server cache may be stale
4. **Reload page** - Force reload after language switch

#### Issue: Performance Problems

**Symptoms:**
- Slow page loading
- Laggy drag and drop
- Browser freezing when editing

**Solutions:**
1. **Reduce block count** - Limit to 5-10 blocks per page
2. **Enable lazy loading** - Turn on lazy loading for heavy blocks
3. **Optimize images** - Compress and resize images
4. **Simplify nesting** - Reduce deeply nested structures
5. **Close other tabs** - Free up browser memory
6. **Update browser** - Use latest browser version

#### Issue: Forms Not Saving

**Symptoms:**
- Edit block form doesn't save
- Form closes without applying changes
- Properties revert to previous values

**Solutions:**
1. **Click Save button** - Ensure you click Save in the form, not just close
2. **Required fields** - Fill all required fields (marked with *)
3. **Validation errors** - Check for error messages in form
4. **Invalid data** - Ensure URLs, colors, numbers are in correct format
5. **Browser console** - Check for JavaScript errors

### Getting Help

#### Check Documentation
- Review this guide for answers
- Check `/docs/lazy-loading-blocks.md` for performance optimization
- Review official plentymarkets documentation

#### Contact Support
- **PlentyONE Support** - Contact plentymarkets support team
- **Technical Issues** - Provide browser console errors, screenshots
- **Feature Requests** - Submit through plentymarkets partner portal

#### Community Resources
- **plentymarkets Forum** - Search for similar issues
- **Developer Community** - Ask questions in developer channels

---

## Appendix

### Keyboard Shortcuts

(Availability depends on implementation)

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + S` | Save changes |
| `Ctrl/Cmd + E` | Toggle edit mode |
| `Ctrl/Cmd + Z` | Undo (if available) |
| `Esc` | Close active form/modal |

### Browser Compatibility

**Fully Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Limited Support:**
- Internet Explorer (not supported)
- Older mobile browsers

**Recommended:** Use latest version of Chrome or Firefox for best experience.

### Configuration Constants

Key configuration values (from codebase):

```typescript
// Maximum block nesting depth
const MAX_DEPTH = 5;

// Available grid layouts
const GRID_LAYOUTS = ['6-6', '4-4-4', '3-3-3-3', '8-4', '4-8'];

// Supported languages
const SUPPORTED_LANGUAGES = ['en', 'de'];

// Lazy loading threshold
const LAZY_LOAD_THRESHOLD = 0.1; // 10% visible triggers load
```

### Glossary

- **Block** - A modular content component (banner, image, product grid, etc.)
- **Composable** - Vue 3 Composition API function for state management
- **UUID** - Unique identifier for each block
- **Alokai** - Framework for building headless e-commerce frontends
- **PlentyONE** - plentymarkets' PWA platform
- **Middleware** - Server layer between frontend and backend
- **Template** - Pre-configured page layout
- **Lazy Loading** - Deferring load of below-the-fold content
- **Responsive** - Design that adapts to different screen sizes
- **MultiGrid** - Layout block for creating column structures
- **AURA** - plentymarkets design system

---

## Conclusion

The PlentyONE Backend Editor is a powerful tool for managing your e-commerce content without coding. By following this guide, you should be able to:

✅ Navigate the editor interface confidently
✅ Add, edit, and organize content blocks
✅ Configure block properties effectively
✅ Manage multi-language content
✅ Apply site-wide settings
✅ Save and publish changes
✅ Troubleshoot common issues

**Remember:**
- **Save frequently** to avoid losing work
- **Preview before publishing** to catch errors
- **Optimize for performance** with lazy loading and image compression
- **Test on multiple devices** to ensure responsive design
- **Keep content consistent** across languages and pages

For additional support, consult the plentymarkets documentation or contact their support team.

Happy editing! 🚀
