<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('wardrobeEssentials.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ t('wardrobeEssentials.subtitle') }}
        </p>
      </div>

      <!-- For Women -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
          {{ t('wardrobeEssentials.women.title') }}
        </h2>

        <!-- The Foundation -->
        <div class="mb-12">
          <h3 class="font-bold text-2xl mb-6">{{ t('wardrobeEssentials.women.foundation.title') }}</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
              <h4 class="font-bold text-lg mb-3">{{ t('wardrobeEssentials.women.foundation.item1.title') }}</h4>
              <p class="text-gray-600 mb-4">{{ t('wardrobeEssentials.women.foundation.item1.description') }}</p>
              <p class="text-sm font-semibold text-primary-500">{{ t('wardrobeEssentials.whyEssential') }}</p>
              <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.women.foundation.item1.why') }}</p>
            </div>
            <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
              <h4 class="font-bold text-lg mb-3">{{ t('wardrobeEssentials.women.foundation.item2.title') }}</h4>
              <p class="text-gray-600 mb-4">{{ t('wardrobeEssentials.women.foundation.item2.description') }}</p>
              <p class="text-sm font-semibold text-primary-500">{{ t('wardrobeEssentials.whyEssential') }}</p>
              <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.women.foundation.item2.why') }}</p>
            </div>
            <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
              <h4 class="font-bold text-lg mb-3">{{ t('wardrobeEssentials.women.foundation.item3.title') }}</h4>
              <p class="text-gray-600 mb-4">{{ t('wardrobeEssentials.women.foundation.item3.description') }}</p>
              <p class="text-sm font-semibold text-primary-500">{{ t('wardrobeEssentials.whyEssential') }}</p>
              <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.women.foundation.item3.why') }}</p>
            </div>
          </div>
        </div>

        <!-- Work Essentials -->
        <div class="mb-12">
          <h3 class="font-bold text-2xl mb-6">{{ t('wardrobeEssentials.women.work.title') }}</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 rounded-lg p-6">
              <h4 class="font-bold mb-2">{{ t('wardrobeEssentials.women.work.item1.title') }}</h4>
              <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.women.work.item1.description') }}</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-6">
              <h4 class="font-bold mb-2">{{ t('wardrobeEssentials.women.work.item2.title') }}</h4>
              <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.women.work.item2.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Casual Essentials -->
        <div class="mb-12">
          <h3 class="font-bold text-2xl mb-6">{{ t('wardrobeEssentials.women.casual.title') }}</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 rounded-lg p-6">
              <h4 class="font-bold mb-2">{{ t('wardrobeEssentials.women.casual.item1.title') }}</h4>
              <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.women.casual.item1.description') }}</p>
            </div>
            <div class="bg-green-50 rounded-lg p-6">
              <h4 class="font-bold mb-2">{{ t('wardrobeEssentials.women.casual.item2.title') }}</h4>
              <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.women.casual.item2.description') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- For Men -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
          {{ t('wardrobeEssentials.men.title') }}
        </h2>

        <!-- The Foundation -->
        <div class="mb-12">
          <h3 class="font-bold text-2xl mb-6">{{ t('wardrobeEssentials.men.foundation.title') }}</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
              <h4 class="font-bold text-lg mb-3">{{ t('wardrobeEssentials.men.foundation.item1.title') }}</h4>
              <p class="text-gray-600 mb-4">{{ t('wardrobeEssentials.men.foundation.item1.description') }}</p>
              <p class="text-sm font-semibold text-primary-500">{{ t('wardrobeEssentials.whyEssential') }}</p>
              <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.men.foundation.item1.why') }}</p>
            </div>
            <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
              <h4 class="font-bold text-lg mb-3">{{ t('wardrobeEssentials.men.foundation.item2.title') }}</h4>
              <p class="text-gray-600 mb-4">{{ t('wardrobeEssentials.men.foundation.item2.description') }}</p>
              <p class="text-sm font-semibold text-primary-500">{{ t('wardrobeEssentials.whyEssential') }}</p>
              <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.men.foundation.item2.why') }}</p>
            </div>
            <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
              <h4 class="font-bold text-lg mb-3">{{ t('wardrobeEssentials.men.foundation.item3.title') }}</h4>
              <p class="text-gray-600 mb-4">{{ t('wardrobeEssentials.men.foundation.item3.description') }}</p>
              <p class="text-sm font-semibold text-primary-500">{{ t('wardrobeEssentials.whyEssential') }}</p>
              <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.men.foundation.item3.why') }}</p>
            </div>
          </div>
        </div>

        <!-- Professional Essentials -->
        <div class="mb-12">
          <h3 class="font-bold text-2xl mb-6">{{ t('wardrobeEssentials.men.professional.title') }}</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 rounded-lg p-6">
              <h4 class="font-bold mb-2">{{ t('wardrobeEssentials.men.professional.item1.title') }}</h4>
              <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.men.professional.item1.description') }}</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-6">
              <h4 class="font-bold mb-2">{{ t('wardrobeEssentials.men.professional.item2.title') }}</h4>
              <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.men.professional.item2.description') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Building Your Wardrobe -->
      <section class="mb-16 bg-primary-50 rounded-lg p-8">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('wardrobeEssentials.howToBuild.title') }}
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div>
            <h4 class="font-semibold mb-2">{{ t('wardrobeEssentials.howToBuild.step1.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.howToBuild.step1.description') }}</p>
          </div>
          <div>
            <h4 class="font-semibold mb-2">{{ t('wardrobeEssentials.howToBuild.step2.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.howToBuild.step2.description') }}</p>
          </div>
          <div>
            <h4 class="font-semibold mb-2">{{ t('wardrobeEssentials.howToBuild.step3.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('wardrobeEssentials.howToBuild.step3.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-primary-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('wardrobeEssentials.cta.title') }}</h3>
        <p class="mb-6 text-gray-600">{{ t('wardrobeEssentials.cta.description') }}</p>
        <SfButton :tag="NuxtLink" :to="localePath('/')" size="lg">
          {{ t('wardrobeEssentials.cta.button') }}
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
setPageMeta(t('wardrobeEssentials.title'), icon);

await getRobots();
setRobotForStaticPage('WardrobeEssentials');
</script>
