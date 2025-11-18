<template>
  <picture v-if="usePicture">
    <source
      v-for="(source, index) in sources"
      :key="index"
      :srcset="source.srcset"
      :type="source.type"
      :media="source.media"
    />
    <img
      :src="fallbackSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :decoding="decoding"
      :class="imgClass"
      @load="handleLoad"
      @error="handleError"
    />
  </picture>
  <img
    v-else
    :src="optimizedSrc"
    :srcset="srcset"
    :sizes="sizes"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    :decoding="decoding"
    :class="imgClass"
    @load="handleLoad"
    @error="handleError"
  />
</template>

<script setup lang="ts">
/**
 * Optimized Image Component
 *
 * Automatically serves modern image formats (AVIF, WebP) with fallbacks.
 *
 * @example
 * ```vue
 * <ImageOptimized
 *   src="/images/product.jpg"
 *   alt="Product image"
 *   width="800"
 *   height="600"
 *   loading="lazy"
 * />
 * ```
 */

interface Props {
  /** Image source URL */
  src: string
  /** Alt text for accessibility */
  alt: string
  /** Image width */
  width?: number | string
  /** Image height */
  height?: number | string
  /** Loading strategy: lazy, eager, or auto */
  loading?: 'lazy' | 'eager' | 'auto'
  /** Decoding hint: async, sync, or auto */
  decoding?: 'async' | 'sync' | 'auto'
  /** Sizes attribute for responsive images */
  sizes?: string
  /** Use picture element for art direction */
  usePicture?: boolean
  /** Custom image sizes for picture element */
  pictureSizes?: Array<{ media: string; width: number }>
  /** Responsive widths for srcset */
  responsiveWidths?: number[]
  /** CSS class for img element */
  imgClass?: string
  /** Preload this image (for LCP images) */
  preload?: boolean
  /** Priority for preloading */
  fetchPriority?: 'high' | 'low'
}

const props = withDefaults(defineProps<Props>(), {
  loading: 'lazy',
  decoding: 'async',
  usePicture: false,
  imgClass: '',
  preload: false,
})

const emit = defineEmits<{
  load: [event: Event]
  error: [event: Event]
}>()

const { $imageOptimization } = useNuxtApp()

// Get optimized src and srcset
const optimizedSrc = computed(() => {
  const format = $imageOptimization.getOptimalFormat()
  return `${props.src}?f=${format}`
})

const srcset = computed(() => {
  if (props.usePicture) return undefined
  return $imageOptimization.getResponsiveSrcSet(props.src, props.responsiveWidths)
})

const sources = computed(() => {
  if (!props.usePicture) return []
  return $imageOptimization.getPictureSources(props.src, props.pictureSizes)
})

const fallbackSrc = computed(() => {
  return `${props.src}?f=jpeg`
})

// Preload if requested
onMounted(() => {
  if (props.preload) {
    $imageOptimization.preloadImage(props.src, {
      fetchpriority: props.fetchPriority,
    })
  }
})

function handleLoad(event: Event) {
  emit('load', event)
}

function handleError(event: Event) {
  emit('error', event)
  // Fallback to JPEG on error
  const img = event.target as HTMLImageElement
  if (!img.src.includes('f=jpeg')) {
    img.src = fallbackSrc.value
  }
}
</script>
