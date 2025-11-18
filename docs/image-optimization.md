# Image Optimization Guide

This guide explains how to use optimized images in PWA Claude for better performance.

## Automatic Format Selection

The app automatically serves the best image format based on browser support:

1. **AVIF** - Newest format, best compression (~50% smaller than JPEG)
   - Supported: Chrome 85+, Edge 85+, Firefox 93+, Safari 16+

2. **WebP** - Modern format, good compression (~30% smaller than JPEG)
   - Supported: Chrome 23+, Edge 18+, Firefox 65+, Safari 14+

3. **JPEG** - Fallback for older browsers

## Using the ImageOptimized Component

### Basic Usage

```vue
<template>
  <ImageOptimized
    src="/images/product.jpg"
    alt="Product photo"
    width="800"
    height="600"
  />
</template>
```

### Lazy Loading (Default)

Images are lazy-loaded by default for better performance:

```vue
<ImageOptimized
  src="/images/below-fold.jpg"
  alt="Below the fold"
  loading="lazy"
/>
```

### Eager Loading for Above-the-Fold Images

```vue
<ImageOptimized
  src="/images/hero.jpg"
  alt="Hero image"
  loading="eager"
  :preload="true"
  fetch-priority="high"
/>
```

### Responsive Images with srcset

```vue
<ImageOptimized
  src="/images/responsive.jpg"
  alt="Responsive image"
  :responsive-widths="[320, 640, 960, 1280, 1920]"
  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
/>
```

### Art Direction with Picture Element

```vue
<ImageOptimized
  src="/images/product.jpg"
  alt="Product"
  :use-picture="true"
  :picture-sizes="[
    { media: '(min-width: 1024px)', width: 1200 },
    { media: '(min-width: 768px)', width: 800 },
    { media: '(max-width: 767px)', width: 400 }
  ]"
/>
```

## Using the Image Optimization API

### Check Browser Support

```vue
<script setup>
const { $imageOptimization } = useNuxtApp()

console.log('Supports AVIF:', $imageOptimization.supportsAvif.value)
console.log('Supports WebP:', $imageOptimization.supportsWebP.value)
</script>
```

### Get Optimal Format

```typescript
const format = $imageOptimization.getOptimalFormat()
// Returns: 'avif', 'webp', or 'jpeg'
```

### Generate Responsive srcset

```typescript
const srcset = $imageOptimization.getResponsiveSrcSet(
  '/images/photo.jpg',
  [320, 640, 960, 1280]
)
// Returns: "/images/photo.jpg?w=320&f=avif 320w, /images/photo.jpg?w=640&f=avif 640w, ..."
```

### Preload Critical Images

```typescript
onMounted(() => {
  $imageOptimization.preloadImage('/images/hero.jpg', {
    fetchpriority: 'high'
  })
})
```

## Configuration

Enable/disable formats in `.env`:

```bash
# Enable AVIF (recommended for modern browsers)
IMAGEAVIF=true

# Enable WebP (recommended for wide compatibility)
IMAGEWEBP=true
```

## Best Practices

### 1. Use Appropriate Sizes

Serve images at the size they'll be displayed:

```vue
<!-- ❌ Bad: Serving 4000px image for 400px display -->
<img src="/images/huge.jpg" width="400" />

<!-- ✅ Good: Serving appropriate size -->
<ImageOptimized
  src="/images/optimized.jpg"
  :responsive-widths="[400, 800]"
  sizes="400px"
/>
```

### 2. Lazy Load Below-the-Fold

Only eager load images above the fold:

```vue
<!-- Above the fold -->
<ImageOptimized src="/hero.jpg" loading="eager" :preload="true" />

<!-- Below the fold -->
<ImageOptimized src="/details.jpg" loading="lazy" />
```

### 3. Provide Dimensions

Always specify width and height to prevent layout shift:

```vue
<ImageOptimized
  src="/image.jpg"
  width="800"
  height="600"
  alt="Description"
/>
```

### 4. Use Descriptive Alt Text

```vue
<!-- ❌ Bad -->
<ImageOptimized src="/product.jpg" alt="image" />

<!-- ✅ Good -->
<ImageOptimized src="/product.jpg" alt="Blue cotton t-shirt with round neck" />
```

### 5. Optimize Source Images

Before uploading:
- Resize to maximum needed dimensions
- Compress with tools like ImageOptim or Squoosh
- Remove EXIF data for privacy

## Performance Impact

### File Size Comparison

For a typical product photo (1200x800):

| Format | Size | Savings |
|--------|------|---------|
| JPEG   | 150 KB | Baseline |
| WebP   | 105 KB | 30% smaller |
| AVIF   | 75 KB | 50% smaller |

### Loading Performance

With modern formats:
- **Faster downloads**: 30-50% reduction in transfer time
- **Better Core Web Vitals**: Improved LCP scores
- **Lower bandwidth**: Less data usage for mobile users

## Troubleshooting

### Images Not Loading

Check browser console for errors. Common issues:

1. **CORS errors**: Ensure image server allows cross-origin requests
2. **Path errors**: Verify image paths are correct
3. **Format support**: Check browser support

### Fallback Not Working

The component automatically falls back to JPEG if modern formats fail:

```vue
<ImageOptimized
  src="/image.jpg"
  alt="Will fallback to JPEG on error"
  @error="handleError"
/>
```

### Testing Different Formats

Force specific format for testing:

```vue
<img src="/image.jpg?f=avif" alt="Force AVIF" />
<img src="/image.jpg?f=webp" alt="Force WebP" />
<img src="/image.jpg?f=jpeg" alt="Force JPEG" />
```

## Tools & Resources

### Testing Tools

- [Squoosh](https://squoosh.app/) - Compare image formats
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Network tab shows format served
- [WebPageTest](https://www.webpagetest.org/) - Test loading performance

### Compression Tools

- [ImageOptim](https://imageoptim.com/) - Mac app for optimization
- [TinyPNG](https://tinypng.com/) - Online PNG/JPEG compressor
- [Squoosh](https://squoosh.app/) - Browser-based converter

### Further Reading

- [web.dev: Image Optimization](https://web.dev/fast/#optimize-your-images)
- [AVIF Format Guide](https://web.dev/compress-images-avif/)
- [WebP Format Guide](https://developers.google.com/speed/webp)

---

**Last Updated:** 2025-11-18
**Maintained By:** Performance Team
