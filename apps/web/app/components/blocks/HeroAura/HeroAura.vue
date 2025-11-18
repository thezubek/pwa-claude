<template>
  <div
    class="relative flex flex-col items-center justify-center rounded-xl min-h-[60vh] max-h-[800px] px-4 py-16 text-center bg-cover bg-center"
    :style="backgroundStyle"
    data-testid="hero-aura"
  >
    <div class="flex flex-col gap-4 max-w-2xl z-10">
      <h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-headline text-white">
        {{ headline }}
      </h1>
      <p v-if="subheadline" class="font-body text-base sm:text-lg font-normal leading-normal text-white">
        {{ subheadline }}
      </p>
    </div>

    <UiButton
      v-if="ctaText && ctaLink"
      :tag="NuxtLink"
      :to="ctaLink"
      variant="aura-primary"
      size="base"
      class="mt-6 z-10"
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

const NuxtLink = resolveComponent('NuxtLink');

const backgroundStyle = computed(() => {
  const overlayStart = `rgba(0, 0, 0, ${props.overlayOpacity - 0.3})`;
  const overlayEnd = `rgba(0, 0, 0, ${props.overlayOpacity})`;
  return {
    backgroundImage: `linear-gradient(${overlayStart}, ${overlayEnd}), url(${props.bgImage})`,
  };
});
</script>
