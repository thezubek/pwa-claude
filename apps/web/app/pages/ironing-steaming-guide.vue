<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('ironingSteaming.title') }}
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          {{ t('ironingSteaming.subtitle') }}
        </p>
      </div>

      <!-- Iron vs Steam -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('ironingSteaming.comparison.title') }}</h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Ironing -->
          <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
            <div class="text-center mb-6">
              <div class="text-6xl mb-3">🔥</div>
              <h3 class="font-bold text-2xl">{{ t('ironingSteaming.comparison.ironing.title') }}</h3>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-green-700 mb-2">✓ {{ t('ironingSteaming.best For') }}:</h4>
                <ul class="text-sm space-y-1">
                  <li>• {{ t('ironingSteaming.comparison.ironing.best1') }}</li>
                  <li>• {{ t('ironingSteaming.comparison.ironing.best2') }}</li>
                  <li>• {{ t('ironingSteaming.comparison.ironing.best3') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-blue-700 mb-2">{{ t('ironingSteaming.pros') }}:</h4>
                <ul class="text-sm space-y-1">
                  <li>• {{ t('ironingSteaming.comparison.ironing.pro1') }}</li>
                  <li>• {{ t('ironingSteaming.comparison.ironing.pro2') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-red-700 mb-2">{{ t('ironingSteaming.cons') }}:</h4>
                <ul class="text-sm space-y-1">
                  <li>• {{ t('ironingSteaming.comparison.ironing.con1') }}</li>
                  <li>• {{ t('ironingSteaming.comparison.ironing.con2') }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Steaming -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
            <div class="text-center mb-6">
              <div class="text-6xl mb-3">💨</div>
              <h3 class="font-bold text-2xl">{{ t('ironingSteaming.comparison.steaming.title') }}</h3>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-green-700 mb-2">✓ {{ t('ironingSteaming.bestFor') }}:</h4>
                <ul class="text-sm space-y-1">
                  <li>• {{ t('ironingSteaming.comparison.steaming.best1') }}</li>
                  <li>• {{ t('ironingSteaming.comparison.steaming.best2') }}</li>
                  <li>• {{ t('ironingSteaming.comparison.steaming.best3') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-blue-700 mb-2">{{ t('ironingSteaming.pros') }}:</h4>
                <ul class="text-sm space-y-1">
                  <li>• {{ t('ironingSteaming.comparison.steaming.pro1') }}</li>
                  <li>• {{ t('ironingSteaming.comparison.steaming.pro2') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-red-700 mb-2">{{ t('ironingSteaming.cons') }}:</h4>
                <ul class="text-sm space-y-1">
                  <li>• {{ t('ironingSteaming.comparison.steaming.con1') }}</li>
                  <li>• {{ t('ironingSteaming.comparison.steaming.con2') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Ironing Guide -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('ironingSteaming.ironingGuide.title') }}</h2>

        <!-- Temperature Settings -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-8 mb-8">
          <h3 class="font-bold text-xl mb-6">{{ t('ironingSteaming.ironingGuide.temperature.title') }}</h3>
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span class="text-2xl">•</span>
              </div>
              <h4 class="font-semibold mb-2">{{ t('ironingSteaming.ironingGuide.temperature.cool.title') }}</h4>
              <p class="text-sm text-gray-600">{{ t('ironingSteaming.ironingGuide.temperature.cool.fabrics') }}</p>
            </div>

            <div class="text-center">
              <div class="bg-yellow-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span class="text-2xl">••</span>
              </div>
              <h4 class="font-semibold mb-2">{{ t('ironingSteaming.ironingGuide.temperature.warm.title') }}</h4>
              <p class="text-sm text-gray-600">{{ t('ironingSteaming.ironingGuide.temperature.warm.fabrics') }}</p>
            </div>

            <div class="text-center">
              <div class="bg-orange-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span class="text-2xl">•••</span>
              </div>
              <h4 class="font-semibold mb-2">{{ t('ironingSteaming.ironingGuide.temperature.hot.title') }}</h4>
              <p class="text-sm text-gray-600">{{ t('ironingSteaming.ironingGuide.temperature.hot.fabrics') }}</p>
            </div>

            <div class="text-center">
              <div class="bg-red-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span class="text-2xl">🚫</span>
              </div>
              <h4 class="font-semibold mb-2">{{ t('ironingSteaming.ironingGuide.temperature.noIron.title') }}</h4>
              <p class="text-sm text-gray-600">{{ t('ironingSteaming.ironingGuide.temperature.noIron.fabrics') }}</p>
            </div>
          </div>
        </div>

        <!-- Step by Step -->
        <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
          <h3 class="font-bold text-xl mb-6">{{ t('ironingSteaming.ironingGuide.stepByStep.title') }}</h3>
          <div class="space-y-4">
            <div class="flex gap-4">
              <div class="bg-primary-100 rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center text-primary-700 font-bold">
                1
              </div>
              <div>
                <h4 class="font-semibold mb-1">{{ t('ironingSteaming.ironingGuide.stepByStep.step1.title') }}</h4>
                <p class="text-sm text-gray-700">{{ t('ironingSteaming.ironingGuide.stepByStep.step1.description') }}</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="bg-primary-100 rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center text-primary-700 font-bold">
                2
              </div>
              <div>
                <h4 class="font-semibold mb-1">{{ t('ironingSteaming.ironingGuide.stepByStep.step2.title') }}</h4>
                <p class="text-sm text-gray-700">{{ t('ironingSteaming.ironingGuide.stepByStep.step2.description') }}</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="bg-primary-100 rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center text-primary-700 font-bold">
                3
              </div>
              <div>
                <h4 class="font-semibold mb-1">{{ t('ironingSteaming.ironingGuide.stepByStep.step3.title') }}</h4>
                <p class="text-sm text-gray-700">{{ t('ironingSteaming.ironingGuide.stepByStep.step3.description') }}</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="bg-primary-100 rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center text-primary-700 font-bold">
                4
              </div>
              <div>
                <h4 class="font-semibold mb-1">{{ t('ironingSteaming.ironingGuide.stepByStep.step4.title') }}</h4>
                <p class="text-sm text-gray-700">{{ t('ironingSteaming.ironingGuide.stepByStep.step4.description') }}</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="bg-primary-100 rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center text-primary-700 font-bold">
                5
              </div>
              <div>
                <h4 class="font-semibold mb-1">{{ t('ironingSteaming.ironingGuide.stepByStep.step5.title') }}</h4>
                <p class="text-sm text-gray-700">{{ t('ironingSteaming.ironingGuide.stepByStep.step5.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Steaming Guide -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('ironingSteaming.steamingGuide.title') }}</h2>

        <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
          <h3 class="font-bold text-xl mb-6">{{ t('ironingSteaming.steamingGuide.howTo.title') }}</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="font-semibold mb-4">{{ t('ironingSteaming.steamingGuide.howTo.hanging.title') }}</h4>
              <ol class="space-y-2 text-sm">
                <li>1. {{ t('ironingSteaming.steamingGuide.howTo.hanging.step1') }}</li>
                <li>2. {{ t('ironingSteaming.steamingGuide.howTo.hanging.step2') }}</li>
                <li>3. {{ t('ironingSteaming.steamingGuide.howTo.hanging.step3') }}</li>
                <li>4. {{ t('ironingSteaming.steamingGuide.howTo.hanging.step4') }}</li>
                <li>5. {{ t('ironingSteaming.steamingGuide.howTo.hanging.step5') }}</li>
              </ol>
            </div>

            <div>
              <h4 class="font-semibold mb-4">{{ t('ironingSteaming.steamingGuide.howTo.tips.title') }}</h4>
              <ul class="space-y-2 text-sm">
                <li>• {{ t('ironingSteaming.steamingGuide.howTo.tips.tip1') }}</li>
                <li>• {{ t('ironingSteaming.steamingGuide.howTo.tips.tip2') }}</li>
                <li>• {{ t('ironingSteaming.steamingGuide.howTo.tips.tip3') }}</li>
                <li>• {{ t('ironingSteaming.steamingGuide.howTo.tips.tip4') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Pro Tips -->
      <section class="mb-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('ironingSteaming.proTips.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6">
            <div class="text-3xl mb-3">💧</div>
            <h3 class="font-bold mb-2">{{ t('ironingSteaming.proTips.tip1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('ironingSteaming.proTips.tip1.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-3xl mb-3">🔄</div>
            <h3 class="font-bold mb-2">{{ t('ironingSteaming.proTips.tip2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('ironingSteaming.proTips.tip2.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-3xl mb-3">🧊</div>
            <h3 class="font-bold mb-2">{{ t('ironingSteaming.proTips.tip3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('ironingSteaming.proTips.tip3.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-3xl mb-3">🚿</div>
            <h3 class="font-bold mb-2">{{ t('ironingSteaming.proTips.tip4.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('ironingSteaming.proTips.tip4.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-3xl mb-3">🎯</div>
            <h3 class="font-bold mb-2">{{ t('ironingSteaming.proTips.tip5.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('ironingSteaming.proTips.tip5.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-3xl mb-3">⏰</div>
            <h3 class="font-bold mb-2">{{ t('ironingSteaming.proTips.tip6.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('ironingSteaming.proTips.tip6.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-primary-700 text-white rounded-xl p-12 text-center">
        <h2 class="font-bold text-3xl mb-4">{{ t('ironingSteaming.cta.title') }}</h2>
        <p class="text-lg mb-6 opacity-90">{{ t('ironingSteaming.cta.description') }}</p>
        <SfButton size="lg" class="bg-white text-primary-700 hover:bg-gray-100">
          {{ t('ironingSteaming.cta.button') }}
        </SfButton>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  pageType: 'static',
});

const { t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: 'Ironing & Steaming Guide - Get Crisp, Professional Results | HEVENTON',
  description: 'Master ironing and steaming techniques for perfect shirts and blouses. Learn temperature settings, step-by-step methods, and pro tips.',
  ogTitle: 'Ironing & Steaming Guide - Professional Care Techniques | HEVENTON',
  ogDescription: 'Complete guide to ironing and steaming shirts and blouses. Temperature settings, techniques, and expert tips for crisp results.',
  ogImage: '/images/ironing-steaming-og.jpg',
});
</script>
