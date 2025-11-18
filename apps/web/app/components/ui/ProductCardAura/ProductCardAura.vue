<template>
  <div class="flex flex-col bg-white rounded-lg min-w-64 w-64" data-testid="product-card-aura">
    <!-- Image Container with individual hover effect -->
    <div class="relative overflow-hidden rounded-lg aspect-[3/4]">
      <NuxtLink :to="productPath" class="block h-full w-full">
        <NuxtImg
          :src="imageUrl"
          :alt="product.name"
          :title="product.name"
          :loading="lazy ? 'lazy' : 'eager'"
          :fetchpriority="priority ? 'high' : 'auto'"
          :width="256"
          :height="342"
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          data-testid="product-image"
        />
      </NuxtLink>
    </div>

    <!-- Product Info -->
    <div class="flex flex-col flex-1 justify-between p-2 pt-4 gap-3">
      <div>
        <NuxtLink :to="productPath" class="no-underline">
          <p class="font-body text-base font-medium leading-normal text-aura-text-dark hover:text-aura-primary transition-colors">
            {{ product.name }}
          </p>
        </NuxtLink>
        <p class="font-body text-sm font-normal leading-normal text-aura-text-muted mt-1">
          {{ formattedPrice }}
        </p>
      </div>

      <UiButton variant="aura-secondary" size="sm" class="w-full" @click="handleAddToCart">
        <span class="truncate">Add to Bag</span>
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@plentymarkets/shop-api';

interface Props {
  product: Product;
  lazy?: boolean;
  priority?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  lazy: true,
  priority: false,
});

const { product } = toRefs(props);
const { getProductItemUrl } = useProductUrl(product);
const { formatCurrency } = useFormatCurrency();

const productPath = computed(() => getProductItemUrl());

const imageUrl = computed(() => {
  const images = product.value?.images?.all;
  if (images && images.length > 0) {
    return images[0].url;
  }
  return '/placeholder-product.jpg'; // fallback image
});

const formattedPrice = computed(() => {
  const price = product.value?.prices?.default?.price?.value || 0;
  return formatCurrency(price);
});

const handleAddToCart = () => {
  // Add to cart functionality - to be implemented
  console.log('Add to cart:', product.value.name);
};
</script>
