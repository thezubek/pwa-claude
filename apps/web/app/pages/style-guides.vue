<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
        {{ t('styleGuides.title') }}
      </h1>

      <p class="text-lg text-gray-600 mb-10">
        {{ t('styleGuides.subtitle') }}
      </p>

      <!-- Style Guide Categories -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <!-- Occasion Based -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors cursor-pointer"
             @click="navigateTo(localePath('/style-guides/office'))">
          <div class="text-4xl mb-4">💼</div>
          <h2 class="font-bold text-xl mb-3">{{ t('styleGuides.office.title') }}</h2>
          <p class="text-gray-600 mb-4">{{ t('styleGuides.office.description') }}</p>
          <span class="text-primary-500 font-medium">{{ t('styleGuides.explore') }} →</span>
        </div>

        <!-- Casual -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors cursor-pointer"
             @click="navigateTo(localePath('/style-guides/casual'))">
          <div class="text-4xl mb-4">👕</div>
          <h2 class="font-bold text-xl mb-3">{{ t('styleGuides.casual.title') }}</h2>
          <p class="text-gray-600 mb-4">{{ t('styleGuides.casual.description') }}</p>
          <span class="text-primary-500 font-medium">{{ t('styleGuides.explore') }} →</span>
        </div>

        <!-- Evening -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors cursor-pointer"
             @click="navigateTo(localePath('/style-guides/evening'))">
          <div class="text-4xl mb-4">🌙</div>
          <h2 class="font-bold text-xl mb-3">{{ t('styleGuides.evening.title') }}</h2>
          <p class="text-gray-600 mb-4">{{ t('styleGuides.evening.description') }}</p>
          <span class="text-primary-500 font-medium">{{ t('styleGuides.explore') }} →</span>
        </div>

        <!-- Seasonal -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors cursor-pointer"
             @click="navigateTo(localePath('/style-guides/seasonal'))">
          <div class="text-4xl mb-4">🍂</div>
          <h2 class="font-bold text-xl mb-3">{{ t('styleGuides.seasonal.title') }}</h2>
          <p class="text-gray-600 mb-4">{{ t('styleGuides.seasonal.description') }}</p>
          <span class="text-primary-500 font-medium">{{ t('styleGuides.explore') }} →</span>
        </div>

        <!-- Color Coordination -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors cursor-pointer"
             @click="navigateTo(localePath('/style-guides/colors'))">
          <div class="text-4xl mb-4">🎨</div>
          <h2 class="font-bold text-xl mb-3">{{ t('styleGuides.colors.title') }}</h2>
          <p class="text-gray-600 mb-4">{{ t('styleGuides.colors.description') }}</p>
          <span class="text-primary-500 font-medium">{{ t('styleGuides.explore') }} →</span>
        </div>

        <!-- Capsule Wardrobe -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors cursor-pointer"
             @click="navigateTo(localePath('/style-guides/capsule-wardrobe'))">
          <div class="text-4xl mb-4">👔</div>
          <h2 class="font-bold text-xl mb-3">{{ t('styleGuides.capsule.title') }}</h2>
          <p class="text-gray-600 mb-4">{{ t('styleGuides.capsule.description') }}</p>
          <span class="text-primary-500 font-medium">{{ t('styleGuides.explore') }} →</span>
        </div>
      </div>

      <!-- Featured Styling Tips -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
          {{ t('styleGuides.quickTips.title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-primary-50 rounded-lg p-6">
            <h3 class="font-bold text-lg mb-3">{{ t('styleGuides.quickTips.tip1.title') }}</h3>
            <p class="text-gray-700">{{ t('styleGuides.quickTips.tip1.description') }}</p>
          </div>
          <div class="bg-primary-50 rounded-lg p-6">
            <h3 class="font-bold text-lg mb-3">{{ t('styleGuides.quickTips.tip2.title') }}</h3>
            <p class="text-gray-700">{{ t('styleGuides.quickTips.tip2.description') }}</p>
          </div>
          <div class="bg-primary-50 rounded-lg p-6">
            <h3 class="font-bold text-lg mb-3">{{ t('styleGuides.quickTips.tip3.title') }}</h3>
            <p class="text-gray-700">{{ t('styleGuides.quickTips.tip3.description') }}</p>
          </div>
          <div class="bg-primary-50 rounded-lg p-6">
            <h3 class="font-bold text-lg mb-3">{{ t('styleGuides.quickTips.tip4.title') }}</h3>
            <p class="text-gray-700">{{ t('styleGuides.quickTips.tip4.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-primary-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('styleGuides.cta.title') }}</h3>
        <p class="mb-6 text-gray-600">{{ t('styleGuides.cta.description') }}</p>
        <SfButton :tag="NuxtLink" :to="localePath('/')" size="lg">
          {{ t('styleGuides.cta.button') }}
        </SfButton>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';

definePageMeta({
  layout: false,
  pageType: 'static',
});

const { t } = useI18n();
const localePath = useLocalePath();
const { getRobots, setRobotForStaticPage } = useRobots();
const { setPageMeta } = usePageMeta();
const NuxtLink = resolveComponent('NuxtLink');

const icon = 'page';
setPageMeta(t('styleGuides.title'), icon);

await getRobots();
setRobotForStaticPage('StyleGuides');
</script>
