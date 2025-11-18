/**
 * Image Optimization Plugin
 *
 * Configures image optimization with modern formats (WebP, AVIF)
 * and automatic fallbacks for older browsers.
 */

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const { isEnabled } = useFeatureFlags()

  // Check browser support for modern image formats
  const supportsAvif = ref(false)
  const supportsWebP = ref(false)

  if (process.client) {
    // Check AVIF support
    const avifImage = new Image()
    avifImage.onload = avifImage.onerror = function () {
      supportsAvif.value = avifImage.height === 2
    }
    avifImage.src =
      'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A='

    // Check WebP support
    const webpImage = new Image()
    webpImage.onload = webpImage.onerror = function () {
      supportsWebP.value = webpImage.height === 2
    }
    webpImage.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }

  /**
   * Get optimal image format based on browser support and enabled formats
   */
  function getOptimalImageFormat(): 'avif' | 'webp' | 'jpeg' {
    // Check both config and feature flags
    const avifEnabled =
      (config.public.imageAvif !== false) && isEnabled('image-avif')
    const webpEnabled =
      (config.public.imageWebP !== false) && isEnabled('image-webp')

    if (avifEnabled && supportsAvif.value) {
      return 'avif'
    }
    if (webpEnabled && supportsWebP.value) {
      return 'webp'
    }
    return 'jpeg'
  }

  /**
   * Get srcset with multiple formats for responsive images
   */
  function getResponsiveSrcSet(
    src: string,
    widths: number[] = [320, 640, 960, 1280, 1920],
  ): string {
    const format = getOptimalImageFormat()
    return widths.map((width) => `${src}?w=${width}&f=${format} ${width}w`).join(', ')
  }

  /**
   * Get picture element sources for art direction
   */
  function getPictureSources(src: string, sizes?: Array<{ media: string; width: number }>) {
    const sources: Array<{ srcset: string; type: string; media?: string }> = []

    if (!sizes) {
      sizes = [
        { media: '(min-width: 1280px)', width: 1920 },
        { media: '(min-width: 768px)', width: 1280 },
        { media: '(min-width: 640px)', width: 960 },
        { media: '(max-width: 639px)', width: 640 },
      ]
    }

    // Check both config and feature flags
    const avifEnabled =
      (config.public.imageAvif !== false) && isEnabled('image-avif')
    const webpEnabled =
      (config.public.imageWebP !== false) && isEnabled('image-webp')

    for (const size of sizes) {
      // AVIF source
      if (avifEnabled && supportsAvif.value) {
        sources.push({
          srcset: `${src}?w=${size.width}&f=avif`,
          type: 'image/avif',
          media: size.media,
        })
      }

      // WebP source
      if (webpEnabled && supportsWebP.value) {
        sources.push({
          srcset: `${src}?w=${size.width}&f=webp`,
          type: 'image/webp',
          media: size.media,
        })
      }
    }

    return sources
  }

  /**
   * Preload critical images with modern formats
   */
  function preloadImage(src: string, options: { as?: string; fetchpriority?: 'high' | 'low' } = {}) {
    const format = getOptimalImageFormat()
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = options.as || 'image'
    link.href = `${src}?f=${format}`
    if (options.fetchpriority) {
      link.setAttribute('fetchpriority', options.fetchpriority)
    }
    document.head.appendChild(link)
  }

  return {
    provide: {
      imageOptimization: {
        supportsAvif: readonly(supportsAvif),
        supportsWebP: readonly(supportsWebP),
        getOptimalFormat: getOptimalImageFormat,
        getResponsiveSrcSet,
        getPictureSources,
        preloadImage,
      },
    },
  }
})

// TypeScript augmentation
declare module '#app' {
  interface NuxtApp {
    $imageOptimization: {
      supportsAvif: Readonly<Ref<boolean>>
      supportsWebP: Readonly<Ref<boolean>>
      getOptimalFormat: () => 'avif' | 'webp' | 'jpeg'
      getResponsiveSrcSet: (src: string, widths?: number[]) => string
      getPictureSources: (
        src: string,
        sizes?: Array<{ media: string; width: number }>,
      ) => Array<{ srcset: string; type: string; media?: string }>
      preloadImage: (src: string, options?: { as?: string; fetchpriority?: 'high' | 'low' }) => void
    }
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $imageOptimization: {
      supportsAvif: Readonly<Ref<boolean>>
      supportsWebP: Readonly<Ref<boolean>>
      getOptimalFormat: () => 'avif' | 'webp' | 'jpeg'
      getResponsiveSrcSet: (src: string, widths?: number[]) => string
      getPictureSources: (
        src: string,
        sizes?: Array<{ media: string; width: number }>,
      ) => Array<{ srcset: string; type: string; media?: string }>
      preloadImage: (src: string, options?: { as?: string; fetchpriority?: 'high' | 'low' }) => void
    }
  }
}
