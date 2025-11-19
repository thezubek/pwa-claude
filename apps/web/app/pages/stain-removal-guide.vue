<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('stainRemoval.title') }}
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          {{ t('stainRemoval.subtitle') }}
        </p>
      </div>

      <!-- Golden Rules -->
      <section class="mb-20 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center">{{ t('stainRemoval.goldenRules.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6">
            <div class="text-4xl mb-3">⚡</div>
            <h3 class="font-bold mb-2">{{ t('stainRemoval.goldenRules.rule1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('stainRemoval.goldenRules.rule1.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-4xl mb-3">🚫</div>
            <h3 class="font-bold mb-2">{{ t('stainRemoval.goldenRules.rule2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('stainRemoval.goldenRules.rule2.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-4xl mb-3">❄️</div>
            <h3 class="font-bold mb-2">{{ t('stainRemoval.goldenRules.rule3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('stainRemoval.goldenRules.rule3.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Common Stains -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('stainRemoval.commonStains.title') }}</h2>

        <div class="space-y-6">
          <!-- Coffee/Tea -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex items-start gap-4">
              <div class="text-5xl">☕</div>
              <div class="flex-1">
                <h3 class="font-bold text-xl mb-3">{{ t('stainRemoval.commonStains.coffee.title') }}</h3>
                <div class="bg-gray-50 rounded-lg p-4 mb-3">
                  <h4 class="font-semibold mb-2">{{ t('stainRemoval.immediateAction') }}:</h4>
                  <ol class="text-sm space-y-1">
                    <li>1. {{ t('stainRemoval.commonStains.coffee.step1') }}</li>
                    <li>2. {{ t('stainRemoval.commonStains.coffee.step2') }}</li>
                    <li>3. {{ t('stainRemoval.commonStains.coffee.step3') }}</li>
                  </ol>
                </div>
                <p class="text-sm text-gray-600"><strong>{{ t('stainRemoval.homeSolution') }}:</strong> {{ t('stainRemoval.commonStains.coffee.solution') }}</p>
              </div>
            </div>
          </div>

          <!-- Red Wine -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex items-start gap-4">
              <div class="text-5xl">🍷</div>
              <div class="flex-1">
                <h3 class="font-bold text-xl mb-3">{{ t('stainRemoval.commonStains.wine.title') }}</h3>
                <div class="bg-gray-50 rounded-lg p-4 mb-3">
                  <h4 class="font-semibold mb-2">{{ t('stainRemoval.immediateAction') }}:</h4>
                  <ol class="text-sm space-y-1">
                    <li>1. {{ t('stainRemoval.commonStains.wine.step1') }}</li>
                    <li>2. {{ t('stainRemoval.commonStains.wine.step2') }}</li>
                    <li>3. {{ t('stainRemoval.commonStains.wine.step3') }}</li>
                  </ol>
                </div>
                <p class="text-sm text-gray-600"><strong>{{ t('stainRemoval.homeSolution') }}:</strong> {{ t('stainRemoval.commonStains.wine.solution') }}</p>
              </div>
            </div>
          </div>

          <!-- Oil/Grease -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex items-start gap-4">
              <div class="text-5xl">🍕</div>
              <div class="flex-1">
                <h3 class="font-bold text-xl mb-3">{{ t('stainRemoval.commonStains.oil.title') }}</h3>
                <div class="bg-gray-50 rounded-lg p-4 mb-3">
                  <h4 class="font-semibold mb-2">{{ t('stainRemoval.immediateAction') }}:</h4>
                  <ol class="text-sm space-y-1">
                    <li>1. {{ t('stainRemoval.commonStains.oil.step1') }}</li>
                    <li>2. {{ t('stainRemoval.commonStains.oil.step2') }}</li>
                    <li>3. {{ t('stainRemoval.commonStains.oil.step3') }}</li>
                  </ol>
                </div>
                <p class="text-sm text-gray-600"><strong>{{ t('stainRemoval.homeSolution') }}:</strong> {{ t('stainRemoval.commonStains.oil.solution') }}</p>
              </div>
            </div>
          </div>

          <!-- Ink -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex items-start gap-4">
              <div class="text-5xl">🖊️</div>
              <div class="flex-1">
                <h3 class="font-bold text-xl mb-3">{{ t('stainRemoval.commonStains.ink.title') }}</h3>
                <div class="bg-gray-50 rounded-lg p-4 mb-3">
                  <h4 class="font-semibold mb-2">{{ t('stainRemoval.immediateAction') }}:</h4>
                  <ol class="text-sm space-y-1">
                    <li>1. {{ t('stainRemoval.commonStains.ink.step1') }}</li>
                    <li>2. {{ t('stainRemoval.commonStains.ink.step2') }}</li>
                    <li>3. {{ t('stainRemoval.commonStains.ink.step3') }}</li>
                  </ol>
                </div>
                <p class="text-sm text-gray-600"><strong>{{ t('stainRemoval.homeSolution') }}:</strong> {{ t('stainRemoval.commonStains.ink.solution') }}</p>
              </div>
            </div>
          </div>

          <!-- Sweat/Deodorant -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex items-start gap-4">
              <div class="text-5xl">💧</div>
              <div class="flex-1">
                <h3 class="font-bold text-xl mb-3">{{ t('stainRemoval.commonStains.sweat.title') }}</h3>
                <div class="bg-gray-50 rounded-lg p-4 mb-3">
                  <h4 class="font-semibold mb-2">{{ t('stainRemoval.immediateAction') }}:</h4>
                  <ol class="text-sm space-y-1">
                    <li>1. {{ t('stainRemoval.commonStains.sweat.step1') }}</li>
                    <li>2. {{ t('stainRemoval.commonStains.sweat.step2') }}</li>
                    <li>3. {{ t('stainRemoval.commonStains.sweat.step3') }}</li>
                  </ol>
                </div>
                <p class="text-sm text-gray-600"><strong>{{ t('stainRemoval.homeSolution') }}:</strong> {{ t('stainRemoval.commonStains.sweat.solution') }}</p>
              </div>
            </div>
          </div>

          <!-- Blood -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex items-start gap-4">
              <div class="text-5xl">🩹</div>
              <div class="flex-1">
                <h3 class="font-bold text-xl mb-3">{{ t('stainRemoval.commonStains.blood.title') }}</h3>
                <div class="bg-gray-50 rounded-lg p-4 mb-3">
                  <h4 class="font-semibold mb-2">{{ t('stainRemoval.immediateAction') }}:</h4>
                  <ol class="text-sm space-y-1">
                    <li>1. {{ t('stainRemoval.commonStains.blood.step1') }}</li>
                    <li>2. {{ t('stainRemoval.commonStains.blood.step2') }}</li>
                    <li>3. {{ t('stainRemoval.commonStains.blood.step3') }}</li>
                  </ol>
                </div>
                <p class="text-sm text-gray-600"><strong>{{ t('stainRemoval.homeSolution') }}:</strong> {{ t('stainRemoval.commonStains.blood.solution') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Emergency Kit -->
      <section class="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center">{{ t('stainRemoval.emergencyKit.title') }}</h2>
        <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">{{ t('stainRemoval.emergencyKit.description') }}</p>

        <div class="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div class="bg-white rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">🧼</div>
            <h4 class="font-semibold text-sm">{{ t('stainRemoval.emergencyKit.item1') }}</h4>
          </div>

          <div class="bg-white rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">🧻</div>
            <h4 class="font-semibold text-sm">{{ t('stainRemoval.emergencyKit.item2') }}</h4>
          </div>

          <div class="bg-white rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">✏️</div>
            <h4 class="font-semibold text-sm">{{ t('stainRemoval.emergencyKit.item3') }}</h4>
          </div>

          <div class="bg-white rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">💧</div>
            <h4 class="font-semibold text-sm">{{ t('stainRemoval.emergencyKit.item4') }}</h4>
          </div>

          <div class="bg-white rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">🧴</div>
            <h4 class="font-semibold text-sm">{{ t('stainRemoval.emergencyKit.item5') }}</h4>
          </div>
        </div>
      </section>

      <!-- What NOT to Do -->
      <section class="mb-16">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('stainRemoval.doNot.title') }}</h2>
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('stainRemoval.doNot.mistake1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('stainRemoval.doNot.mistake1.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('stainRemoval.doNot.mistake2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('stainRemoval.doNot.mistake2.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('stainRemoval.doNot.mistake3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('stainRemoval.doNot.mistake3.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('stainRemoval.doNot.mistake4.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('stainRemoval.doNot.mistake4.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-primary-700 text-white rounded-xl p-12 text-center">
        <h2 class="font-bold text-3xl mb-4">{{ t('stainRemoval.cta.title') }}</h2>
        <p class="text-lg mb-6 opacity-90">{{ t('stainRemoval.cta.description') }}</p>
        <SfButton size="lg" class="bg-white text-primary-700 hover:bg-gray-100">
          {{ t('stainRemoval.cta.button') }}
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
  title: 'Stain Removal Guide - Save Your Favorite Shirts | HEVENTON',
  description: 'Emergency stain removal guide for shirts and blouses. Learn how to remove coffee, wine, oil, ink, and more with household items.',
  ogTitle: 'Stain Removal Guide - Quick Solutions for Common Stains | HEVENTON',
  ogDescription: 'Expert stain removal techniques for coffee, wine, oil, ink, sweat, and blood stains. Save your shirts with these proven methods.',
  ogImage: '/images/stain-removal-og.jpg',
});
</script>
