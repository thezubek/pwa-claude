<template>
  <div
    class="relative flex flex-col items-center justify-center rounded-xl min-h-[60vh] max-h-[800px] px-4 py-16 md:py-24 text-center bg-cover bg-center"
    :style="backgroundStyle"
    data-testid="hero-aura"
  >
    <div class="flex flex-col gap-4 md:gap-6 max-w-3xl z-10">
      <h1 class="aura-heading-1 text-white">
        {{ headline }}
      </h1>
      <p v-if="subheadline" class="aura-body-lg text-white/90 max-w-2xl mx-auto">
        {{ subheadline }}
      </p>
    </div>

    <UiButton
      v-if="ctaText && ctaLink"
      :tag="NuxtLink"
      :to="ctaLink"
      variant="aura-primary"
      size="lg"
      class="mt-8 z-10 px-8"
    >
      <span class="truncate">{{ ctaText }}</span>
    </UiButton>
  </div>
</template>

<script setup lang="ts">
interface Props {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
  bgImage: string;
  overlayOpacity?: number;
}

const props = withDefaults(defineProps<Props>(), {
  subheadline: '',
  ctaText: '',
  ctaLink: '',
  overlayOpacity: 0.5,
});

const backgroundStyle = computed(() => {
  const overlayStart = `rgba(0, 0, 0, ${props.overlayOpacity - 0.3})`;
  const overlayEnd = `rgba(0, 0, 0, ${props.overlayOpacity})`;
  return {
    backgroundImage: `linear-gradient(${overlayStart}, ${overlayEnd}), url(${props.bgImage})`,
  };
});
</script>
