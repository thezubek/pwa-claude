<template>
  <NuxtLayout name="checkout" :back-label-desktop="t('back')" :back-label-mobile="t('back')" :heading="t('myCart')">
    <div v-if="!cartIsEmpty" class="md:grid md:grid-cols-12 md:gap-x-6" data-testid="cart-page-content">
      <div class="col-span-7 mb-2 md:mb-0">
        <div v-for="(cartItem, index) in cart?.items" :key="cartItem.id">
          <UiCartProductCard :cart-item="cartItem" :class="{ 'border-t': index === 0 }" />
        </div>
        <Coupon v-if="viewport.isLessThan('lg')" class="mb-2" />
      </div>
      <div class="relative col-span-5 md:sticky md:top-10 h-fit" :class="{ 'pointer-events-none opacity-50': loading }">
        <SfLoaderCircular v-if="loading" class="absolute top-[130px] right-0 left-0 m-auto z-[999]" size="2xl" />
        <OrderSummary :cart="cart">
          <Coupon v-if="viewport.isGreaterOrEquals('lg')" class="mb-5" />
          <UiButton
            data-testid="checkout-button"
            :tag="NuxtLink"
            :to="goToCheckout()"
            variant="aura-primary"
            size="lg"
            class="w-full mb-4 md:mb-0"
          >
            {{ t('goToCheckout') }}
          </UiButton>
          <client-only>
            <PayPalExpressButton :disabled="loading" location="cartPage" class="mt-4" type="CartPreview" />
            <PayPalPayLaterBanner
              placement="cart"
              location="cartPage"
              :amount="cartGetters.getTotal(cartGetters.getTotals(cart))"
            />
          </client-only>
        </OrderSummary>
      </div>
    </div>
    <div v-else class="flex items-center justify-center flex-col pt-24 pb-32 px-4" data-testid="cart-page-content">
      <div class="max-w-md text-center">
        <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-aura-background-dark flex items-center justify-center">
          <SfIconShoppingCart class="text-aura-text-secondary" style="font-size: 4rem;" />
        </div>
        <h2 class="aura-heading-3 text-aura-text-primary mb-4">{{ t('emptyCart') }}</h2>
        <p class="aura-body text-aura-text-secondary mb-8">
          {{ t('emptyCart.description', 'Looks like you haven\'t added anything to your cart yet. Start shopping to fill it up!') }}
        </p>
        <UiButton
          variant="aura-primary"
          size="lg"
          :tag="NuxtLink"
          :to="localePath(paths.home)"
          class="mx-auto"
        >
          {{ t('continueShopping', 'Continue Shopping') }}
        </UiButton>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SfLoaderCircular, SfIconShoppingCart } from '@storefront-ui/vue';
import { cartGetters } from '@plentymarkets/shop-api';
const { setPageMeta } = usePageMeta();

definePageMeta({ pageType: 'static' });

const NuxtLink = resolveComponent('NuxtLink');
const { t } = useI18n();
const viewport = useViewport();
const localePath = useLocalePath();
const { isAuthorized } = useCustomer();
const { data: cart, cartIsEmpty, loading } = useCart();
const goToCheckout = () => (isAuthorized.value ? localePath(paths.checkout) : localePath(paths.guestLogin));

const icon = 'page';
setPageMeta(t('cart'), icon);
</script>
