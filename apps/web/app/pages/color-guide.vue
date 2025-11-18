<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('colorGuide.title') }}
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          {{ t('colorGuide.subtitle') }}
        </p>
      </div>

      <!-- Color Basics -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('colorGuide.basics.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">🎨</div>
            <h3 class="font-bold text-xl mb-3">{{ t('colorGuide.basics.neutrals.title') }}</h3>
            <p class="text-sm text-gray-700 mb-3">{{ t('colorGuide.basics.neutrals.description') }}</p>
            <div class="flex gap-2 flex-wrap">
              <span class="px-3 py-1 bg-white border-2 border-gray-800 text-xs rounded">{{ t('colorGuide.basics.neutrals.white') }}</span>
              <span class="px-3 py-1 bg-black text-white text-xs rounded">{{ t('colorGuide.basics.neutrals.black') }}</span>
              <span class="px-3 py-1 bg-gray-400 text-white text-xs rounded">{{ t('colorGuide.basics.neutrals.gray') }}</span>
              <span class="px-3 py-1 bg-amber-100 border border-amber-300 text-xs rounded">{{ t('colorGuide.basics.neutrals.beige') }}</span>
              <span class="px-3 py-1 bg-blue-900 text-white text-xs rounded">{{ t('colorGuide.basics.neutrals.navy') }}</span>
            </div>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">☀️</div>
            <h3 class="font-bold text-xl mb-3">{{ t('colorGuide.basics.warm.title') }}</h3>
            <p class="text-sm text-gray-700 mb-3">{{ t('colorGuide.basics.warm.description') }}</p>
            <div class="flex gap-2 flex-wrap">
              <span class="px-3 py-1 bg-red-500 text-white text-xs rounded">{{ t('colorGuide.basics.warm.red') }}</span>
              <span class="px-3 py-1 bg-orange-500 text-white text-xs rounded">{{ t('colorGuide.basics.warm.orange') }}</span>
              <span class="px-3 py-1 bg-yellow-500 text-white text-xs rounded">{{ t('colorGuide.basics.warm.yellow') }}</span>
              <span class="px-3 py-1 bg-amber-800 text-white text-xs rounded">{{ t('colorGuide.basics.warm.brown') }}</span>
            </div>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">❄️</div>
            <h3 class="font-bold text-xl mb-3">{{ t('colorGuide.basics.cool.title') }}</h3>
            <p class="text-sm text-gray-700 mb-3">{{ t('colorGuide.basics.cool.description') }}</p>
            <div class="flex gap-2 flex-wrap">
              <span class="px-3 py-1 bg-blue-500 text-white text-xs rounded">{{ t('colorGuide.basics.cool.blue') }}</span>
              <span class="px-3 py-1 bg-green-600 text-white text-xs rounded">{{ t('colorGuide.basics.cool.green') }}</span>
              <span class="px-3 py-1 bg-purple-600 text-white text-xs rounded">{{ t('colorGuide.basics.cool.purple') }}</span>
              <span class="px-3 py-1 bg-pink-500 text-white text-xs rounded">{{ t('colorGuide.basics.cool.pink') }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Color Combinations -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('colorGuide.combinations.title') }}</h2>
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-4">{{ t('colorGuide.combinations.classic.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white rounded p-4 border-2 border-gray-200">
                <div class="flex gap-2 mb-2">
                  <div class="w-8 h-8 bg-white border-2 border-gray-800 rounded"></div>
                  <div class="w-8 h-8 bg-blue-900 rounded"></div>
                </div>
                <p class="text-sm font-semibold">{{ t('colorGuide.combinations.classic.combo1') }}</p>
                <p class="text-xs text-gray-600">{{ t('colorGuide.combinations.classic.desc1') }}</p>
              </div>

              <div class="bg-white rounded p-4 border-2 border-gray-200">
                <div class="flex gap-2 mb-2">
                  <div class="w-8 h-8 bg-blue-400 rounded"></div>
                  <div class="w-8 h-8 bg-gray-700 rounded"></div>
                </div>
                <p class="text-sm font-semibold">{{ t('colorGuide.combinations.classic.combo2') }}</p>
                <p class="text-xs text-gray-600">{{ t('colorGuide.combinations.classic.desc2') }}</p>
              </div>

              <div class="bg-white rounded p-4 border-2 border-gray-200">
                <div class="flex gap-2 mb-2">
                  <div class="w-8 h-8 bg-pink-100 rounded"></div>
                  <div class="w-8 h-8 bg-gray-800 rounded"></div>
                </div>
                <p class="text-sm font-semibold">{{ t('colorGuide.combinations.classic.combo3') }}</p>
                <p class="text-xs text-gray-600">{{ t('colorGuide.combinations.classic.desc3') }}</p>
              </div>

              <div class="bg-white rounded p-4 border-2 border-gray-200">
                <div class="flex gap-2 mb-2">
                  <div class="w-8 h-8 bg-black rounded"></div>
                  <div class="w-8 h-8 bg-white border-2 border-gray-800 rounded"></div>
                </div>
                <p class="text-sm font-semibold">{{ t('colorGuide.combinations.classic.combo4') }}</p>
                <p class="text-xs text-gray-600">{{ t('colorGuide.combinations.classic.desc4') }}</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-4">{{ t('colorGuide.combinations.bold.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white rounded p-4 border-2 border-gray-200">
                <div class="flex gap-2 mb-2">
                  <div class="w-8 h-8 bg-burgundy-600 rounded" style="background-color: #800020;"></div>
                  <div class="w-8 h-8 bg-blue-900 rounded"></div>
                </div>
                <p class="text-sm font-semibold">{{ t('colorGuide.combinations.bold.combo1') }}</p>
                <p class="text-xs text-gray-600">{{ t('colorGuide.combinations.bold.desc1') }}</p>
              </div>

              <div class="bg-white rounded p-4 border-2 border-gray-200">
                <div class="flex gap-2 mb-2">
                  <div class="w-8 h-8 bg-emerald-600 rounded"></div>
                  <div class="w-8 h-8 bg-amber-100 border border-amber-300 rounded"></div>
                </div>
                <p class="text-sm font-semibold">{{ t('colorGuide.combinations.bold.combo2') }}</p>
                <p class="text-xs text-gray-600">{{ t('colorGuide.combinations.bold.desc2') }}</p>
              </div>

              <div class="bg-white rounded p-4 border-2 border-gray-200">
                <div class="flex gap-2 mb-2">
                  <div class="w-8 h-8 bg-purple-600 rounded"></div>
                  <div class="w-8 h-8 bg-gray-300 rounded"></div>
                </div>
                <p class="text-sm font-semibold">{{ t('colorGuide.combinations.bold.combo3') }}</p>
                <p class="text-xs text-gray-600">{{ t('colorGuide.combinations.bold.desc3') }}</p>
              </div>

              <div class="bg-white rounded p-4 border-2 border-gray-200">
                <div class="flex gap-2 mb-2">
                  <div class="w-8 h-8 bg-orange-500 rounded"></div>
                  <div class="w-8 h-8 bg-blue-900 rounded"></div>
                </div>
                <p class="text-sm font-semibold">{{ t('colorGuide.combinations.bold.combo4') }}</p>
                <p class="text-xs text-gray-600">{{ t('colorGuide.combinations.bold.desc4') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skin Tone Guide -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('colorGuide.skinTone.title') }}</h2>
        <p class="text-gray-700 mb-8 max-w-3xl">{{ t('colorGuide.skinTone.description') }}</p>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">☀️</div>
            <h3 class="font-bold text-xl mb-3">{{ t('colorGuide.skinTone.warm.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('colorGuide.skinTone.warm.description') }}</p>
            <div class="mb-3">
              <p class="font-semibold text-sm mb-2">{{ t('colorGuide.skinTone.bestColors') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('colorGuide.skinTone.warm.color1') }}</li>
                <li>• {{ t('colorGuide.skinTone.warm.color2') }}</li>
                <li>• {{ t('colorGuide.skinTone.warm.color3') }}</li>
                <li>• {{ t('colorGuide.skinTone.warm.color4') }}</li>
              </ul>
            </div>
            <div>
              <p class="font-semibold text-sm mb-2">{{ t('colorGuide.skinTone.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('colorGuide.skinTone.warm.avoid1') }}</li>
                <li>• {{ t('colorGuide.skinTone.warm.avoid2') }}</li>
              </ul>
            </div>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">❄️</div>
            <h3 class="font-bold text-xl mb-3">{{ t('colorGuide.skinTone.cool.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('colorGuide.skinTone.cool.description') }}</p>
            <div class="mb-3">
              <p class="font-semibold text-sm mb-2">{{ t('colorGuide.skinTone.bestColors') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('colorGuide.skinTone.cool.color1') }}</li>
                <li>• {{ t('colorGuide.skinTone.cool.color2') }}</li>
                <li>• {{ t('colorGuide.skinTone.cool.color3') }}</li>
                <li>• {{ t('colorGuide.skinTone.cool.color4') }}</li>
              </ul>
            </div>
            <div>
              <p class="font-semibold text-sm mb-2">{{ t('colorGuide.skinTone.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('colorGuide.skinTone.cool.avoid1') }}</li>
                <li>• {{ t('colorGuide.skinTone.cool.avoid2') }}</li>
              </ul>
            </div>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">🌟</div>
            <h3 class="font-bold text-xl mb-3">{{ t('colorGuide.skinTone.neutral.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('colorGuide.skinTone.neutral.description') }}</p>
            <div class="mb-3">
              <p class="font-semibold text-sm mb-2">{{ t('colorGuide.skinTone.bestColors') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('colorGuide.skinTone.neutral.color1') }}</li>
                <li>• {{ t('colorGuide.skinTone.neutral.color2') }}</li>
                <li>• {{ t('colorGuide.skinTone.neutral.color3') }}</li>
                <li>• {{ t('colorGuide.skinTone.neutral.color4') }}</li>
              </ul>
            </div>
            <div>
              <p class="font-semibold text-sm mb-2">{{ t('colorGuide.skinTone.tip') }}:</p>
              <p class="text-sm text-gray-700">{{ t('colorGuide.skinTone.neutral.tip') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Professional Color Choices -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('colorGuide.professional.title') }}</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-4">{{ t('colorGuide.professional.conservative.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('colorGuide.professional.conservative.description') }}</p>
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-white border-2 border-gray-800 rounded"></div>
                <span class="text-sm">{{ t('colorGuide.professional.conservative.color1') }}</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-blue-400 rounded"></div>
                <span class="text-sm">{{ t('colorGuide.professional.conservative.color2') }}</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-gray-300 rounded"></div>
                <span class="text-sm">{{ t('colorGuide.professional.conservative.color3') }}</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-blue-900 rounded"></div>
                <span class="text-sm">{{ t('colorGuide.professional.conservative.color4') }}</span>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-4">{{ t('colorGuide.professional.creative.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('colorGuide.professional.creative.description') }}</p>
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-burgundy-600 rounded" style="background-color: #800020;"></div>
                <span class="text-sm">{{ t('colorGuide.professional.creative.color1') }}</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-emerald-600 rounded"></div>
                <span class="text-sm">{{ t('colorGuide.professional.creative.color2') }}</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-purple-600 rounded"></div>
                <span class="text-sm">{{ t('colorGuide.professional.creative.color3') }}</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-pink-100 rounded"></div>
                <span class="text-sm">{{ t('colorGuide.professional.creative.color4') }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pattern Mixing -->
      <section class="mb-16">
        <h2 class="font-bold text-3xl mb-8">{{ t('colorGuide.patterns.title') }}</h2>
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-bold text-xl mb-4 flex items-center gap-2">
                <span class="text-green-600">✓</span>
                {{ t('colorGuide.patterns.do.title') }}
              </h3>
              <ul class="space-y-3">
                <li class="flex gap-3">
                  <span class="text-green-600 font-bold">•</span>
                  <span class="text-sm">{{ t('colorGuide.patterns.do.tip1') }}</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-green-600 font-bold">•</span>
                  <span class="text-sm">{{ t('colorGuide.patterns.do.tip2') }}</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-green-600 font-bold">•</span>
                  <span class="text-sm">{{ t('colorGuide.patterns.do.tip3') }}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold text-xl mb-4 flex items-center gap-2">
                <span class="text-red-600">✗</span>
                {{ t('colorGuide.patterns.dont.title') }}
              </h3>
              <ul class="space-y-3">
                <li class="flex gap-3">
                  <span class="text-red-600 font-bold">•</span>
                  <span class="text-sm">{{ t('colorGuide.patterns.dont.tip1') }}</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-red-600 font-bold">•</span>
                  <span class="text-sm">{{ t('colorGuide.patterns.dont.tip2') }}</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-red-600 font-bold">•</span>
                  <span class="text-sm">{{ t('colorGuide.patterns.dont.tip3') }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-primary-700 text-white rounded-xl p-12 text-center">
        <h2 class="font-bold text-3xl mb-4">{{ t('colorGuide.cta.title') }}</h2>
        <p class="text-lg mb-6 opacity-90">{{ t('colorGuide.cta.description') }}</p>
        <SfButton size="lg" class="bg-white text-primary-700 hover:bg-gray-100">
          {{ t('colorGuide.cta.button') }}
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
  title: 'Color Matching Guide - Perfect Color Combinations | HEVENTON',
  description: 'Master the art of color matching with our comprehensive guide. Learn which colors work together and suit your skin tone.',
  ogTitle: 'Color Matching Guide - Perfect Color Combinations | HEVENTON',
  ogDescription: 'Expert advice on combining colors, choosing shades for your skin tone, and creating sophisticated looks.',
  ogImage: '/images/color-guide-og.jpg',
});
</script>
