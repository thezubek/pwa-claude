<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('tuckingGuide.title') }}
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          {{ t('tuckingGuide.subtitle') }}
        </p>
      </div>

      <!-- When to Tuck, When Not To -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('tuckingGuide.whenToTuck.title') }}</h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Always Tuck -->
          <div class="bg-green-50 border-2 border-green-200 rounded-lg p-8">
            <h3 class="font-bold text-2xl mb-4 text-green-800 flex items-center gap-2">
              <span class="text-3xl">✓</span>
              {{ t('tuckingGuide.whenToTuck.alwaysTuck.title') }}
            </h3>
            <ul class="space-y-3">
              <li class="flex gap-3">
                <span class="text-green-600">•</span>
                <div>
                  <p class="font-semibold">{{ t('tuckingGuide.whenToTuck.alwaysTuck.situation1.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('tuckingGuide.whenToTuck.alwaysTuck.situation1.description') }}</p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-green-600">•</span>
                <div>
                  <p class="font-semibold">{{ t('tuckingGuide.whenToTuck.alwaysTuck.situation2.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('tuckingGuide.whenToTuck.alwaysTuck.situation2.description') }}</p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-green-600">•</span>
                <div>
                  <p class="font-semibold">{{ t('tuckingGuide.whenToTuck.alwaysTuck.situation3.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('tuckingGuide.whenToTuck.alwaysTuck.situation3.description') }}</p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-green-600">•</span>
                <div>
                  <p class="font-semibold">{{ t('tuckingGuide.whenToTuck.alwaysTuck.situation4.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('tuckingGuide.whenToTuck.alwaysTuck.situation4.description') }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Never Tuck -->
          <div class="bg-red-50 border-2 border-red-200 rounded-lg p-8">
            <h3 class="font-bold text-2xl mb-4 text-red-800 flex items-center gap-2">
              <span class="text-3xl">✗</span>
              {{ t('tuckingGuide.whenToTuck.neverTuck.title') }}
            </h3>
            <ul class="space-y-3">
              <li class="flex gap-3">
                <span class="text-red-600">•</span>
                <div>
                  <p class="font-semibold">{{ t('tuckingGuide.whenToTuck.neverTuck.situation1.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('tuckingGuide.whenToTuck.neverTuck.situation1.description') }}</p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-red-600">•</span>
                <div>
                  <p class="font-semibold">{{ t('tuckingGuide.whenToTuck.neverTuck.situation2.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('tuckingGuide.whenToTuck.neverTuck.situation2.description') }}</p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-red-600">•</span>
                <div>
                  <p class="font-semibold">{{ t('tuckingGuide.whenToTuck.neverTuck.situation3.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('tuckingGuide.whenToTuck.neverTuck.situation3.description') }}</p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="text-red-600">•</span>
                <div>
                  <p class="font-semibold">{{ t('tuckingGuide.whenToTuck.neverTuck.situation4.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('tuckingGuide.whenToTuck.neverTuck.situation4.description') }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Tucking Methods -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('tuckingGuide.methods.title') }}</h2>

        <div class="space-y-8">
          <!-- Full Tuck -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
            <div class="flex items-start gap-6">
              <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center text-blue-700 font-bold text-2xl flex-shrink-0">
                1
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-2xl mb-3">{{ t('tuckingGuide.methods.fullTuck.title') }}</h3>
                <p class="text-gray-700 mb-4">{{ t('tuckingGuide.methods.fullTuck.description') }}</p>

                <div class="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 class="font-semibold mb-3">{{ t('tuckingGuide.howTo') }}:</h4>
                  <ol class="space-y-2 text-sm">
                    <li>1. {{ t('tuckingGuide.methods.fullTuck.step1') }}</li>
                    <li>2. {{ t('tuckingGuide.methods.fullTuck.step2') }}</li>
                    <li>3. {{ t('tuckingGuide.methods.fullTuck.step3') }}</li>
                    <li>4. {{ t('tuckingGuide.methods.fullTuck.step4') }}</li>
                  </ol>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{{ t('tuckingGuide.methods.fullTuck.use1') }}</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{{ t('tuckingGuide.methods.fullTuck.use2') }}</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{{ t('tuckingGuide.methods.fullTuck.use3') }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Half Tuck / French Tuck -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
            <div class="flex items-start gap-6">
              <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center text-purple-700 font-bold text-2xl flex-shrink-0">
                2
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-2xl mb-3">{{ t('tuckingGuide.methods.halfTuck.title') }}</h3>
                <p class="text-gray-700 mb-4">{{ t('tuckingGuide.methods.halfTuck.description') }}</p>

                <div class="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 class="font-semibold mb-3">{{ t('tuckingGuide.howTo') }}:</h4>
                  <ol class="space-y-2 text-sm">
                    <li>1. {{ t('tuckingGuide.methods.halfTuck.step1') }}</li>
                    <li>2. {{ t('tuckingGuide.methods.halfTuck.step2') }}</li>
                    <li>3. {{ t('tuckingGuide.methods.halfTuck.step3') }}</li>
                    <li>4. {{ t('tuckingGuide.methods.halfTuck.step4') }}</li>
                  </ol>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">{{ t('tuckingGuide.methods.halfTuck.use1') }}</span>
                  <span class="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">{{ t('tuckingGuide.methods.halfTuck.use2') }}</span>
                  <span class="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">{{ t('tuckingGuide.methods.halfTuck.use3') }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Front Tuck -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
            <div class="flex items-start gap-6">
              <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center text-green-700 font-bold text-2xl flex-shrink-0">
                3
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-2xl mb-3">{{ t('tuckingGuide.methods.frontTuck.title') }}</h3>
                <p class="text-gray-700 mb-4">{{ t('tuckingGuide.methods.frontTuck.description') }}</p>

                <div class="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 class="font-semibold mb-3">{{ t('tuckingGuide.howTo') }}:</h4>
                  <ol class="space-y-2 text-sm">
                    <li>1. {{ t('tuckingGuide.methods.frontTuck.step1') }}</li>
                    <li>2. {{ t('tuckingGuide.methods.frontTuck.step2') }}</li>
                    <li>3. {{ t('tuckingGuide.methods.frontTuck.step3') }}</li>
                    <li>4. {{ t('tuckingGuide.methods.frontTuck.step4') }}</li>
                  </ol>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">{{ t('tuckingGuide.methods.frontTuck.use1') }}</span>
                  <span class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">{{ t('tuckingGuide.methods.frontTuck.use2') }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Military Tuck -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
            <div class="flex items-start gap-6">
              <div class="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center text-amber-700 font-bold text-2xl flex-shrink-0">
                4
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-2xl mb-3">{{ t('tuckingGuide.methods.militaryTuck.title') }}</h3>
                <p class="text-gray-700 mb-4">{{ t('tuckingGuide.methods.militaryTuck.description') }}</p>

                <div class="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 class="font-semibold mb-3">{{ t('tuckingGuide.howTo') }}:</h4>
                  <ol class="space-y-2 text-sm">
                    <li>1. {{ t('tuckingGuide.methods.militaryTuck.step1') }}</li>
                    <li>2. {{ t('tuckingGuide.methods.militaryTuck.step2') }}</li>
                    <li>3. {{ t('tuckingGuide.methods.militaryTuck.step3') }}</li>
                    <li>4. {{ t('tuckingGuide.methods.militaryTuck.step4') }}</li>
                    <li>5. {{ t('tuckingGuide.methods.militaryTuck.step5') }}</li>
                  </ol>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">{{ t('tuckingGuide.methods.militaryTuck.use1') }}</span>
                  <span class="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">{{ t('tuckingGuide.methods.militaryTuck.use2') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Body Type Considerations -->
      <section class="mb-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center">{{ t('tuckingGuide.bodyType.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-3">{{ t('tuckingGuide.bodyType.tall.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('tuckingGuide.bodyType.tall.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-3">{{ t('tuckingGuide.bodyType.petite.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('tuckingGuide.bodyType.petite.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-3">{{ t('tuckingGuide.bodyType.athletic.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('tuckingGuide.bodyType.athletic.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Common Mistakes -->
      <section class="mb-16">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('tuckingGuide.mistakes.title') }}</h2>
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('tuckingGuide.mistakes.mistake1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('tuckingGuide.mistakes.mistake1.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('tuckingGuide.mistakes.mistake2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('tuckingGuide.mistakes.mistake2.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('tuckingGuide.mistakes.mistake3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('tuckingGuide.mistakes.mistake3.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('tuckingGuide.mistakes.mistake4.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('tuckingGuide.mistakes.mistake4.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-primary-700 text-white rounded-xl p-12 text-center">
        <h2 class="font-bold text-3xl mb-4">{{ t('tuckingGuide.cta.title') }}</h2>
        <p class="text-lg mb-6 opacity-90">{{ t('tuckingGuide.cta.description') }}</p>
        <SfButton size="lg" class="bg-white text-primary-700 hover:bg-gray-100">
          {{ t('tuckingGuide.cta.button') }}
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
  title: 'Shirt Tucking Guide - Master the Perfect Tuck | HEVENTON',
  description: 'Learn when and how to tuck your shirt. Complete guide to full tuck, half tuck, French tuck, and military tuck techniques.',
  ogTitle: 'Shirt Tucking Guide - Perfect Tuck Techniques | HEVENTON',
  ogDescription: 'Master shirt tucking with our complete guide. Learn which tucking methods work best for your body type and occasion.',
  ogImage: '/images/tucking-guide-og.jpg',
});
</script>
