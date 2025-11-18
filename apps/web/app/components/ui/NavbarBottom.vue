<template>
  <nav class="w-full fixed bottom-0 left-0 flex flex-row items-stretch md:hidden shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-t border-aura-border bg-white" data-testid="navbar-bottom">
    <UiButton
      v-for="{ label, icon, link } in items"
      :key="label"
      variant="tertiary"
      :class="[
        '!p-1 !pt-3 flex flex-col h-full w-full rounded-none bg-white text-aura-text-primary hover:text-aura-primary hover:bg-aura-background-dark active:text-aura-primary active:bg-aura-background-darker !text-xs !font-body transition-all duration-200',
        { 'text-aura-primary bg-aura-background-dark font-semibold': route.path === link },
      ]"
      size="sm"
      :tag="link ? NuxtLink : undefined"
      :to="link || undefined"
      @click="label === t('products') && open()"
    >
      <template #prefix>
        <div class="relative">
          <component :is="icon" />
          <SfBadge
            v-if="label === t('cart')"
            :content="cartItemsCount"
            :max="99"
            class="translate-x-[5px] translate-y-[-3px] bg-aura-primary !text-white flex justify-center items-center text-xs min-w-[18px] min-h-[18px] font-bold"
          />
          <SfBadge
            v-if="label === t('wishlist')"
            :content="wishlistItemIds.length"
            :max="99"
            class="translate-x-[5px] translate-y-[-3px] bg-aura-accent !text-white flex justify-center items-center text-xs min-w-[18px] min-h-[18px] font-bold"
            data-testid="wishlist-badge"
          />
        </div>
      </template>
      {{ label }}
    </UiButton>
  </nav>
</template>

<script setup lang="ts">
import { SfBadge, SfIconShoppingCart, SfIconHome, SfIconMenu, SfIconPerson, SfIconFavorite } from '@storefront-ui/vue';
import { useCustomer } from '~/composables/useCustomer';

const localePath = useLocalePath();
const route = useRoute();
const { t } = useI18n();
const { wishlistItemIds } = useWishlist();
const { data: cart } = useCart();
const { isAuthorized } = useCustomer();
const { open } = useMegaMenu();

const items = computed(() => [
  {
    label: t('home'),
    icon: SfIconHome,
    link: localePath(paths.home),
  },
  {
    label: t('products'),
    icon: SfIconMenu,
    link: '',
  },
  {
    label: t('wishlist'),
    icon: SfIconFavorite,
    link: localePath(paths.wishlist),
  },
  {
    label: t('cart'),
    icon: SfIconShoppingCart,
    link: localePath(paths.cart),
  },
  {
    label: isAuthorized.value ? t('account.navBottomHeadingAccount') : t('account.navBottomHeadingLogin'),
    icon: SfIconPerson,
    link: isAuthorized.value ? localePath(paths.account) : localePath(paths.authLogin),
  },
]);

const cartItemsCount = computed(() => cart.value?.items?.reduce((price, { quantity }) => price + quantity, 0) ?? 0);
const NuxtLink = resolveComponent('NuxtLink');
</script>
