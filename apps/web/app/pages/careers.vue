<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('careers.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ t('careers.subtitle') }}
        </p>
      </div>

      <!-- Why Work Here -->
      <section class="mb-16">
        <div class="bg-primary-50 rounded-lg p-8 md:p-12">
          <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
            {{ t('careers.whyWorkHere.title') }}
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <span class="text-primary-500 text-2xl">✓</span>
                  <div>
                    <h3 class="font-semibold mb-1">{{ t('careers.whyWorkHere.benefit1.title') }}</h3>
                    <p class="text-gray-600 text-sm">{{ t('careers.whyWorkHere.benefit1.description') }}</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-primary-500 text-2xl">✓</span>
                  <div>
                    <h3 class="font-semibold mb-1">{{ t('careers.whyWorkHere.benefit2.title') }}</h3>
                    <p class="text-gray-600 text-sm">{{ t('careers.whyWorkHere.benefit2.description') }}</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-primary-500 text-2xl">✓</span>
                  <div>
                    <h3 class="font-semibold mb-1">{{ t('careers.whyWorkHere.benefit3.title') }}</h3>
                    <p class="text-gray-600 text-sm">{{ t('careers.whyWorkHere.benefit3.description') }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <span class="text-primary-500 text-2xl">✓</span>
                  <div>
                    <h3 class="font-semibold mb-1">{{ t('careers.whyWorkHere.benefit4.title') }}</h3>
                    <p class="text-gray-600 text-sm">{{ t('careers.whyWorkHere.benefit4.description') }}</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-primary-500 text-2xl">✓</span>
                  <div>
                    <h3 class="font-semibold mb-1">{{ t('careers.whyWorkHere.benefit5.title') }}</h3>
                    <p class="text-gray-600 text-sm">{{ t('careers.whyWorkHere.benefit5.description') }}</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-primary-500 text-2xl">✓</span>
                  <div>
                    <h3 class="font-semibold mb-1">{{ t('careers.whyWorkHere.benefit6.title') }}</h3>
                    <p class="text-gray-600 text-sm">{{ t('careers.whyWorkHere.benefit6.description') }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Values -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8 text-center">
          {{ t('careers.values.title') }}
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🌱</div>
            <h3 class="font-bold text-xl mb-3">{{ t('careers.values.sustainability.title') }}</h3>
            <p class="text-gray-600">{{ t('careers.values.sustainability.description') }}</p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">💎</div>
            <h3 class="font-bold text-xl mb-3">{{ t('careers.values.quality.title') }}</h3>
            <p class="text-gray-600">{{ t('careers.values.quality.description') }}</p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🤝</div>
            <h3 class="font-bold text-xl mb-3">{{ t('careers.values.collaboration.title') }}</h3>
            <p class="text-gray-600">{{ t('careers.values.collaboration.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Open Positions -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
          {{ t('careers.openPositions.title') }}
        </h2>
        <div class="space-y-6">
          <!-- Position 1 -->
          <div class="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div class="flex-1">
                <h3 class="font-bold text-xl mb-2">{{ t('careers.openPositions.position1.title') }}</h3>
                <p class="text-gray-600 mb-3">{{ t('careers.openPositions.position1.description') }}</p>
                <div class="flex flex-wrap gap-3">
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{{ t('careers.openPositions.position1.type') }}</span>
                  <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{{ t('careers.openPositions.position1.location') }}</span>
                </div>
              </div>
              <div>
                <SfButton size="lg">{{ t('careers.openPositions.applyButton') }}</SfButton>
              </div>
            </div>
          </div>

          <!-- Position 2 -->
          <div class="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div class="flex-1">
                <h3 class="font-bold text-xl mb-2">{{ t('careers.openPositions.position2.title') }}</h3>
                <p class="text-gray-600 mb-3">{{ t('careers.openPositions.position2.description') }}</p>
                <div class="flex flex-wrap gap-3">
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{{ t('careers.openPositions.position2.type') }}</span>
                  <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{{ t('careers.openPositions.position2.location') }}</span>
                </div>
              </div>
              <div>
                <SfButton size="lg">{{ t('careers.openPositions.applyButton') }}</SfButton>
              </div>
            </div>
          </div>

          <!-- Position 3 -->
          <div class="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div class="flex-1">
                <h3 class="font-bold text-xl mb-2">{{ t('careers.openPositions.position3.title') }}</h3>
                <p class="text-gray-600 mb-3">{{ t('careers.openPositions.position3.description') }}</p>
                <div class="flex flex-wrap gap-3">
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{{ t('careers.openPositions.position3.type') }}</span>
                  <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{{ t('careers.openPositions.position3.location') }}</span>
                </div>
              </div>
              <div>
                <SfButton size="lg">{{ t('careers.openPositions.applyButton') }}</SfButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Application Process -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
          {{ t('careers.process.title') }}
        </h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-primary-500">1</span>
            </div>
            <h4 class="font-semibold mb-2">{{ t('careers.process.step1.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('careers.process.step1.description') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-primary-500">2</span>
            </div>
            <h4 class="font-semibold mb-2">{{ t('careers.process.step2.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('careers.process.step2.description') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-primary-500">3</span>
            </div>
            <h4 class="font-semibold mb-2">{{ t('careers.process.step3.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('careers.process.step3.description') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-primary-500">4</span>
            </div>
            <h4 class="font-semibold mb-2">{{ t('careers.process.step4.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('careers.process.step4.description') }}</p>
          </div>
        </div>
      </section>

      <!-- No Open Positions CTA -->
      <section class="bg-primary-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('careers.noPosition.title') }}</h3>
        <p class="mb-6 text-gray-600">{{ t('careers.noPosition.description') }}</p>
        <SfButton :tag="NuxtLink" :to="localePath('/contact')" size="lg">
          {{ t('careers.noPosition.button') }}
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
setPageMeta(t('careers.title'), icon);

await getRobots();
setRobotForStaticPage('Careers');
</script>
