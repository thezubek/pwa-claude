<template>
  <div class="flex flex-col bg-white rounded-lg min-w-64 w-64" data-testid="product-card-aura">
    <!-- Image Container with individual hover effect -->
    <div class="relative overflow-hidden rounded-lg aspect-[3/4]">
      <NuxtLink :to="productPath" class="block h-full w-full">
        <NuxtImg
          :src="imageUrl"
          :alt="imageAlt"
          :title="imageAlt"
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
            {{ productName }}
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
import { productGetters, productImageGetters } from '@plentymarkets/shop-api';
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

const NuxtLink = resolveComponent('NuxtLink');
const { product } = toRefs(props);
const localePath = useLocalePath();
const { format } = usePriceFormatter();
const { addToCart } = useCart();
const { openQuickCheckout } = useQuickCheckout();
const { price } = useProductPrice(product.value);

const productName = computed(() => productGetters.getName(product.value) ?? '');

const productPath = computed(() => {
  const basePath = `/${productGetters.getUrlPath(product.value)}_${productGetters.getItemId(product.value)}`;
  const variationId = productGetters.getVariationId(product.value);
  const shouldAppendVariation = variationId && productGetters.getSalableVariationCount(product.value) === 1;
  return localePath(shouldAppendVariation ? `${basePath}_${variationId}` : basePath);
});

const cover = computed(() => productGetters.getCoverImage(product.value));
const firstImage = computed(() => productImageGetters.getFirstImage(product.value));
const { addModernImageExtension } = useModernImage();

const imageUrl = computed(() => addModernImageExtension(cover.value));
const imageAlt = computed(() => productImageGetters.getImageAlternate(firstImage.value) || productName.value || '');

const formattedPrice = computed(() => format(price));

const handleAddToCart = async () => {
  const productId = Number(productGetters.getId(product.value));
  await addToCart({ productId, quantity: 1 });
  openQuickCheckout(product.value, 1);
};
</script>
