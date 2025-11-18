<template>
  <NuxtLink
    :to="categoryPath"
    class="relative block overflow-hidden rounded-xl aspect-[4/5] group"
    data-testid="category-card-aura"
  >
    <!-- Background Image with Individual Hover -->
    <div
      class="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30" />

    <!-- Title -->
    <div class="absolute inset-0 flex items-center justify-center p-4">
      <h3 class="font-display text-2xl font-bold text-white tracking-tight text-center">
        {{ category.name }}
      </h3>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Category } from '@plentymarkets/shop-api';

interface Props {
  category: Category;
}

const props = defineProps<Props>();
const { category } = toRefs(props);

const categoryPath = computed(() => {
  // Generate category URL path
  return `/category/${category.value.id}`;
});

const imageUrl = computed(() => {
  // Get category image from details or use fallback
  const image = category.value?.details?.[0]?.imagePath;
  if (image) {
    return image;
  }
  return '/placeholder-category.jpg'; // fallback image
});
</script>
