<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('collarStyles.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ t('collarStyles.subtitle') }}
        </p>
      </div>

      <!-- Women's Collars -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
          {{ t('collarStyles.women.title') }}
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Classic Point Collar -->
          <div class="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-400">{{ t('collarStyles.women.classic.image') }}</span>
            </div>
            <h3 class="font-bold text-xl mb-3">{{ t('collarStyles.women.classic.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('collarStyles.women.classic.description') }}</p>
            <div class="space-y-2 text-sm">
              <p><span class="font-semibold">{{ t('collarStyles.bestFor') }}:</span> {{ t('collarStyles.women.classic.bestFor') }}</p>
              <p><span class="font-semibold">{{ t('collarStyles.faceShape') }}:</span> {{ t('collarStyles.women.classic.faceShape') }}</p>
            </div>
          </div>

          <!-- Peter Pan Collar -->
          <div class="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-400">{{ t('collarStyles.women.peterPan.image') }}</span>
            </div>
            <h3 class="font-bold text-xl mb-3">{{ t('collarStyles.women.peterPan.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('collarStyles.women.peterPan.description') }}</p>
            <div class="space-y-2 text-sm">
              <p><span class="font-semibold">{{ t('collarStyles.bestFor') }}:</span> {{ t('collarStyles.women.peterPan.bestFor') }}</p>
              <p><span class="font-semibold">{{ t('collarStyles.faceShape') }}:</span> {{ t('collarStyles.women.peterPan.faceShape') }}</p>
            </div>
          </div>

          <!-- Bow Tie Collar -->
          <div class="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-400">{{ t('collarStyles.women.bowTie.image') }}</span>
            </div>
            <h3 class="font-bold text-xl mb-3">{{ t('collarStyles.women.bowTie.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('collarStyles.women.bowTie.description') }}</p>
            <div class="space-y-2 text-sm">
              <p><span class="font-semibold">{{ t('collarStyles.bestFor') }}:</span> {{ t('collarStyles.women.bowTie.bestFor') }}</p>
              <p><span class="font-semibold">{{ t('collarStyles.faceShape') }}:</span> {{ t('collarStyles.women.bowTie.faceShape') }}</p>
            </div>
          </div>

          <!-- Mandarin Collar -->
          <div class="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-400">{{ t('collarStyles.women.mandarin.image') }}</span>
            </div>
            <h3 class="font-bold text-xl mb-3">{{ t('collarStyles.women.mandarin.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('collarStyles.women.mandarin.description') }}</p>
            <div class="space-y-2 text-sm">
              <p><span class="font-semibold">{{ t('collarStyles.bestFor') }}:</span> {{ t('collarStyles.women.mandarin.bestFor') }}</p>
              <p><span class="font-semibold">{{ t('collarStyles.faceShape') }}:</span> {{ t('collarStyles.women.mandarin.faceShape') }}</p>
            </div>
          </div>

          <!-- V-Neck Collar -->
          <div class="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-400">{{ t('collarStyles.women.vNeck.image') }}</span>
            </div>
            <h3 class="font-bold text-xl mb-3">{{ t('collarStyles.women.vNeck.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('collarStyles.women.vNeck.description') }}</p>
            <div class="space-y-2 text-sm">
              <p><span class="font-semibold">{{ t('collarStyles.bestFor') }}:</span> {{ t('collarStyles.women.vNeck.bestFor') }}</p>
              <p><span class="font-semibold">{{ t('collarStyles.faceShape') }}:</span> {{ t('collarStyles.women.vNeck.faceShape') }}</p>
            </div>
          </div>

          <!-- Pussy Bow -->
          <div class="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-400">{{ t('collarStyles.women.pussyBow.image') }}</span>
            </div>
            <h3 class="font-bold text-xl mb-3">{{ t('collarStyles.women.pussyBow.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('collarStyles.women.pussyBow.description') }}</p>
            <div class="space-y-2 text-sm">
              <p><span class="font-semibold">{{ t('collarStyles.bestFor') }}:</span> {{ t('collarStyles.women.pussyBow.bestFor') }}</p>
              <p><span class="font-semibold">{{ t('collarStyles.faceShape') }}:</span> {{ t('collarStyles.women.pussyBow.faceShape') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Men's Collars -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
          {{ t('collarStyles.men.title') }}
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Point Collar -->
          <div class="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-400">{{ t('collarStyles.men.point.image') }}</span>
            </div>
            <h3 class="font-bold text-xl mb-3">{{ t('collarStyles.men.point.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('collarStyles.men.point.description') }}</p>
            <div class="space-y-2 text-sm">
              <p><span class="font-semibold">{{ t('collarStyles.bestFor') }}:</span> {{ t('collarStyles.men.point.bestFor') }}</p>
              <p><span class="font-semibold">{{ t('collarStyles.occasion') }}:</span> {{ t('collarStyles.men.point.occasion') }}</p>
            </div>
          </div>

          <!-- Spread Collar -->
          <div class="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-400">{{ t('collarStyles.men.spread.image') }}</span>
            </div>
            <h3 class="font-bold text-xl mb-3">{{ t('collarStyles.men.spread.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('collarStyles.men.spread.description') }}</p>
            <div class="space-y-2 text-sm">
              <p><span class="font-semibold">{{ t('collarStyles.bestFor') }}:</span> {{ t('collarStyles.men.spread.bestFor') }}</p>
              <p><span class="font-semibold">{{ t('collarStyles.occasion') }}:</span> {{ t('collarStyles.men.spread.occasion') }}</p>
            </div>
          </div>

          <!-- Button-Down Collar -->
          <div class="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-400">{{ t('collarStyles.men.buttonDown.image') }}</span>
            </div>
            <h3 class="font-bold text-xl mb-3">{{ t('collarStyles.men.buttonDown.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('collarStyles.men.buttonDown.description') }}</p>
            <div class="space-y-2 text-sm">
              <p><span class="font-semibold">{{ t('collarStyles.bestFor') }}:</span> {{ t('collarStyles.men.buttonDown.bestFor') }}</p>
              <p><span class="font-semibold">{{ t('collarStyles.occasion') }}:</span> {{ t('collarStyles.men.buttonDown.occasion') }}</p>
            </div>
          </div>

          <!-- Cutaway Collar -->
          <div class="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-400">{{ t('collarStyles.men.cutaway.image') }}</span>
            </div>
            <h3 class="font-bold text-xl mb-3">{{ t('collarStyles.men.cutaway.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('collarStyles.men.cutaway.description') }}</p>
            <div class="space-y-2 text-sm">
              <p><span class="font-semibold">{{ t('collarStyles.bestFor') }}:</span> {{ t('collarStyles.men.cutaway.bestFor') }}</p>
              <p><span class="font-semibold">{{ t('collarStyles.occasion') }}:</span> {{ t('collarStyles.men.cutaway.occasion') }}</p>
            </div>
          </div>

          <!-- Club Collar -->
          <div class="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-400">{{ t('collarStyles.men.club.image') }}</span>
            </div>
            <h3 class="font-bold text-xl mb-3">{{ t('collarStyles.men.club.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('collarStyles.men.club.description') }}</p>
            <div class="space-y-2 text-sm">
              <p><span class="font-semibold">{{ t('collarStyles.bestFor') }}:</span> {{ t('collarStyles.men.club.bestFor') }}</p>
              <p><span class="font-semibold">{{ t('collarStyles.occasion') }}:</span> {{ t('collarStyles.men.club.occasion') }}</p>
            </div>
          </div>

          <!-- Band Collar -->
          <div class="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-400">{{ t('collarStyles.men.band.image') }}</span>
            </div>
            <h3 class="font-bold text-xl mb-3">{{ t('collarStyles.men.band.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('collarStyles.men.band.description') }}</p>
            <div class="space-y-2 text-sm">
              <p><span class="font-semibold">{{ t('collarStyles.bestFor') }}:</span> {{ t('collarStyles.men.band.bestFor') }}</p>
              <p><span class="font-semibold">{{ t('collarStyles.occasion') }}:</span> {{ t('collarStyles.men.band.occasion') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Face Shape Guide -->
      <section class="mb-16 bg-primary-50 rounded-lg p-8">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('collarStyles.faceShapeGuide.title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold mb-2">{{ t('collarStyles.faceShapeGuide.round.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('collarStyles.faceShapeGuide.round.description') }}</p>
          </div>
          <div>
            <h4 class="font-semibold mb-2">{{ t('collarStyles.faceShapeGuide.oval.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('collarStyles.faceShapeGuide.oval.description') }}</p>
          </div>
          <div>
            <h4 class="font-semibold mb-2">{{ t('collarStyles.faceShapeGuide.square.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('collarStyles.faceShapeGuide.square.description') }}</p>
          </div>
          <div>
            <h4 class="font-semibold mb-2">{{ t('collarStyles.faceShapeGuide.heart.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('collarStyles.faceShapeGuide.heart.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-primary-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('collarStyles.cta.title') }}</h3>
        <p class="mb-6 text-gray-600">{{ t('collarStyles.cta.description') }}</p>
        <SfButton :tag="NuxtLink" :to="localePath('/')" size="lg">
          {{ t('collarStyles.cta.button') }}
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
setPageMeta(t('collarStyles.title'), icon);

await getRobots();
setRobotForStaticPage('CollarStyles');
</script>
