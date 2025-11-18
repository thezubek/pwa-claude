<template>
  <div
    class="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl min-h-[400px]"
    :style="backgroundStyle"
    data-testid="editorial-card-aura"
  >
    <div class="flex w-full flex-col md:flex-row items-start md:items-end justify-between gap-4 p-8 z-10">
      <div class="flex max-w-lg flex-1 flex-col gap-2">
        <h3 class="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight font-display">
          {{ title }}
        </h3>
        <p v-if="description" class="text-white text-base font-medium leading-normal font-body">
          {{ description }}
        </p>
      </div>

      <UiButton
        v-if="ctaText && ctaLink"
        :tag="NuxtLink"
        :to="ctaLink"
        variant="aura-secondary"
        size="base"
        class="bg-white text-aura-text-dark hover:bg-opacity-90"
      >
        <span class="truncate">{{ ctaText }}</span>
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  bgImage: string;
  overlayOpacity?: number;
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
  ctaText: '',
  ctaLink: '',
  overlayOpacity: 0.5,
});

const backgroundStyle = computed(() => {
  const overlayEnd = `rgba(0, 0, 0, ${props.overlayOpacity})`;
  return {
    backgroundImage: `linear-gradient(0deg, ${overlayEnd} 0%, rgba(0, 0, 0, 0) 100%), url(${props.bgImage})`,
  };
});
</script>
