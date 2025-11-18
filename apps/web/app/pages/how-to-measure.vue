<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('howToMeasure.title') }}
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          {{ t('howToMeasure.subtitle') }}
        </p>
      </div>

      <!-- What You'll Need -->
      <section class="mb-16 bg-blue-50 rounded-xl p-8">
        <h2 class="font-bold text-2xl mb-6 text-center">{{ t('howToMeasure.whatYouNeed.title') }}</h2>
        <div class="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="text-5xl mb-3">📏</div>
            <p class="font-semibold">{{ t('howToMeasure.whatYouNeed.item1') }}</p>
          </div>
          <div class="text-center">
            <div class="text-5xl mb-3">🪞</div>
            <p class="font-semibold">{{ t('howToMeasure.whatYouNeed.item2') }}</p>
          </div>
          <div class="text-center">
            <div class="text-5xl mb-3">📝</div>
            <p class="font-semibold">{{ t('howToMeasure.whatYouNeed.item3') }}</p>
          </div>
          <div class="text-center">
            <div class="text-5xl mb-3">👕</div>
            <p class="font-semibold">{{ t('howToMeasure.whatYouNeed.item4') }}</p>
          </div>
        </div>
      </section>

      <!-- Women's Measurements -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('howToMeasure.women.title') }}</h2>

        <div class="space-y-8">
          <!-- Bust -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <div class="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center text-primary-700 font-bold text-xl">
                    1
                  </div>
                  <h3 class="font-bold text-2xl">{{ t('howToMeasure.women.bust.title') }}</h3>
                </div>
                <div class="space-y-3">
                  <p class="text-gray-700">{{ t('howToMeasure.women.bust.step1') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.women.bust.step2') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.women.bust.step3') }}</p>
                </div>
                <div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p class="text-sm"><strong>{{ t('howToMeasure.tip') }}:</strong> {{ t('howToMeasure.women.bust.tip') }}</p>
                </div>
              </div>
              <div class="md:w-64 bg-gray-100 rounded-lg flex items-center justify-center p-8">
                <div class="text-center text-gray-500">
                  <div class="text-4xl mb-2">📐</div>
                  <p class="text-sm">{{ t('howToMeasure.women.bust.diagram') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Waist -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <div class="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center text-primary-700 font-bold text-xl">
                    2
                  </div>
                  <h3 class="font-bold text-2xl">{{ t('howToMeasure.women.waist.title') }}</h3>
                </div>
                <div class="space-y-3">
                  <p class="text-gray-700">{{ t('howToMeasure.women.waist.step1') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.women.waist.step2') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.women.waist.step3') }}</p>
                </div>
                <div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p class="text-sm"><strong>{{ t('howToMeasure.tip') }}:</strong> {{ t('howToMeasure.women.waist.tip') }}</p>
                </div>
              </div>
              <div class="md:w-64 bg-gray-100 rounded-lg flex items-center justify-center p-8">
                <div class="text-center text-gray-500">
                  <div class="text-4xl mb-2">📐</div>
                  <p class="text-sm">{{ t('howToMeasure.women.waist.diagram') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Shoulder Width -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <div class="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center text-primary-700 font-bold text-xl">
                    3
                  </div>
                  <h3 class="font-bold text-2xl">{{ t('howToMeasure.women.shoulder.title') }}</h3>
                </div>
                <div class="space-y-3">
                  <p class="text-gray-700">{{ t('howToMeasure.women.shoulder.step1') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.women.shoulder.step2') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.women.shoulder.step3') }}</p>
                </div>
                <div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p class="text-sm"><strong>{{ t('howToMeasure.tip') }}:</strong> {{ t('howToMeasure.women.shoulder.tip') }}</p>
                </div>
              </div>
              <div class="md:w-64 bg-gray-100 rounded-lg flex items-center justify-center p-8">
                <div class="text-center text-gray-500">
                  <div class="text-4xl mb-2">📐</div>
                  <p class="text-sm">{{ t('howToMeasure.women.shoulder.diagram') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sleeve Length -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <div class="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center text-primary-700 font-bold text-xl">
                    4
                  </div>
                  <h3 class="font-bold text-2xl">{{ t('howToMeasure.women.sleeve.title') }}</h3>
                </div>
                <div class="space-y-3">
                  <p class="text-gray-700">{{ t('howToMeasure.women.sleeve.step1') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.women.sleeve.step2') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.women.sleeve.step3') }}</p>
                </div>
                <div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p class="text-sm"><strong>{{ t('howToMeasure.tip') }}:</strong> {{ t('howToMeasure.women.sleeve.tip') }}</p>
                </div>
              </div>
              <div class="md:w-64 bg-gray-100 rounded-lg flex items-center justify-center p-8">
                <div class="text-center text-gray-500">
                  <div class="text-4xl mb-2">📐</div>
                  <p class="text-sm">{{ t('howToMeasure.women.sleeve.diagram') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Men's Measurements -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('howToMeasure.men.title') }}</h2>

        <div class="space-y-8">
          <!-- Neck -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <div class="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-700 font-bold text-xl">
                    1
                  </div>
                  <h3 class="font-bold text-2xl">{{ t('howToMeasure.men.neck.title') }}</h3>
                </div>
                <div class="space-y-3">
                  <p class="text-gray-700">{{ t('howToMeasure.men.neck.step1') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.men.neck.step2') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.men.neck.step3') }}</p>
                </div>
                <div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p class="text-sm"><strong>{{ t('howToMeasure.tip') }}:</strong> {{ t('howToMeasure.men.neck.tip') }}</p>
                </div>
              </div>
              <div class="md:w-64 bg-gray-100 rounded-lg flex items-center justify-center p-8">
                <div class="text-center text-gray-500">
                  <div class="text-4xl mb-2">📐</div>
                  <p class="text-sm">{{ t('howToMeasure.men.neck.diagram') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Chest -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <div class="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-700 font-bold text-xl">
                    2
                  </div>
                  <h3 class="font-bold text-2xl">{{ t('howToMeasure.men.chest.title') }}</h3>
                </div>
                <div class="space-y-3">
                  <p class="text-gray-700">{{ t('howToMeasure.men.chest.step1') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.men.chest.step2') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.men.chest.step3') }}</p>
                </div>
                <div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p class="text-sm"><strong>{{ t('howToMeasure.tip') }}:</strong> {{ t('howToMeasure.men.chest.tip') }}</p>
                </div>
              </div>
              <div class="md:w-64 bg-gray-100 rounded-lg flex items-center justify-center p-8">
                <div class="text-center text-gray-500">
                  <div class="text-4xl mb-2">📐</div>
                  <p class="text-sm">{{ t('howToMeasure.men.chest.diagram') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Waist -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <div class="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-700 font-bold text-xl">
                    3
                  </div>
                  <h3 class="font-bold text-2xl">{{ t('howToMeasure.men.waist.title') }}</h3>
                </div>
                <div class="space-y-3">
                  <p class="text-gray-700">{{ t('howToMeasure.men.waist.step1') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.men.waist.step2') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.men.waist.step3') }}</p>
                </div>
                <div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p class="text-sm"><strong>{{ t('howToMeasure.tip') }}:</strong> {{ t('howToMeasure.men.waist.tip') }}</p>
                </div>
              </div>
              <div class="md:w-64 bg-gray-100 rounded-lg flex items-center justify-center p-8">
                <div class="text-center text-gray-500">
                  <div class="text-4xl mb-2">📐</div>
                  <p class="text-sm">{{ t('howToMeasure.men.waist.diagram') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sleeve Length -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-4">
                  <div class="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-700 font-bold text-xl">
                    4
                  </div>
                  <h3 class="font-bold text-2xl">{{ t('howToMeasure.men.sleeve.title') }}</h3>
                </div>
                <div class="space-y-3">
                  <p class="text-gray-700">{{ t('howToMeasure.men.sleeve.step1') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.men.sleeve.step2') }}</p>
                  <p class="text-gray-700">{{ t('howToMeasure.men.sleeve.step3') }}</p>
                </div>
                <div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                  <p class="text-sm"><strong>{{ t('howToMeasure.tip') }}:</strong> {{ t('howToMeasure.men.sleeve.tip') }}</p>
                </div>
              </div>
              <div class="md:w-64 bg-gray-100 rounded-lg flex items-center justify-center p-8">
                <div class="text-center text-gray-500">
                  <div class="text-4xl mb-2">📐</div>
                  <p class="text-sm">{{ t('howToMeasure.men.sleeve.diagram') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Common Mistakes -->
      <section class="mb-16 bg-red-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center flex items-center justify-center gap-3">
          <span class="text-4xl">⚠️</span>
          {{ t('howToMeasure.mistakes.title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-2">{{ t('howToMeasure.mistakes.mistake1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('howToMeasure.mistakes.mistake1.description') }}</p>
          </div>
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-2">{{ t('howToMeasure.mistakes.mistake2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('howToMeasure.mistakes.mistake2.description') }}</p>
          </div>
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-2">{{ t('howToMeasure.mistakes.mistake3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('howToMeasure.mistakes.mistake3.description') }}</p>
          </div>
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-2">{{ t('howToMeasure.mistakes.mistake4.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('howToMeasure.mistakes.mistake4.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Pro Tips -->
      <section class="mb-16">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('howToMeasure.proTips.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
            <div class="text-3xl mb-3">🕐</div>
            <h3 class="font-bold mb-2">{{ t('howToMeasure.proTips.tip1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('howToMeasure.proTips.tip1.description') }}</p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
            <div class="text-3xl mb-3">👥</div>
            <h3 class="font-bold mb-2">{{ t('howToMeasure.proTips.tip2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('howToMeasure.proTips.tip2.description') }}</p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
            <div class="text-3xl mb-3">📊</div>
            <h3 class="font-bold mb-2">{{ t('howToMeasure.proTips.tip3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('howToMeasure.proTips.tip3.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-primary-700 text-white rounded-xl p-12 text-center">
        <h2 class="font-bold text-3xl mb-4">{{ t('howToMeasure.cta.title') }}</h2>
        <p class="text-lg mb-6 opacity-90">{{ t('howToMeasure.cta.description') }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <SfButton size="lg" class="bg-white text-primary-700 hover:bg-gray-100">
            {{ t('howToMeasure.cta.button1') }}
          </SfButton>
          <SfButton size="lg" variant="secondary" class="border-2 border-white text-white hover:bg-white hover:text-primary-700">
            {{ t('howToMeasure.cta.button2') }}
          </SfButton>
        </div>
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
  title: 'How to Measure Yourself - Perfect Fit Guide | HEVENTON',
  description: 'Learn how to accurately measure yourself for the perfect shirt or blouse fit. Step-by-step instructions for men and women.',
  ogTitle: 'How to Measure Yourself - Perfect Fit Guide | HEVENTON',
  ogDescription: 'Step-by-step guide to taking accurate body measurements for perfect-fitting shirts and blouses.',
  ogImage: '/images/how-to-measure-og.jpg',
});
</script>
