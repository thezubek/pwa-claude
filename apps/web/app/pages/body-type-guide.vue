<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('bodyTypeGuide.title') }}
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          {{ t('bodyTypeGuide.subtitle') }}
        </p>
      </div>

      <!-- Women's Body Types -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('bodyTypeGuide.women.title') }}</h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Pear Shape -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4 text-center">🍐</div>
            <h3 class="font-bold text-xl mb-3">{{ t('bodyTypeGuide.women.pear.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('bodyTypeGuide.women.pear.description') }}</p>

            <div class="mb-4">
              <p class="font-semibold text-green-700 mb-2">✓ {{ t('bodyTypeGuide.bestStyles') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.women.pear.best1') }}</li>
                <li>• {{ t('bodyTypeGuide.women.pear.best2') }}</li>
                <li>• {{ t('bodyTypeGuide.women.pear.best3') }}</li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-red-700 mb-2">✗ {{ t('bodyTypeGuide.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.women.pear.avoid1') }}</li>
                <li>• {{ t('bodyTypeGuide.women.pear.avoid2') }}</li>
              </ul>
            </div>
          </div>

          <!-- Apple Shape -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4 text-center">🍎</div>
            <h3 class="font-bold text-xl mb-3">{{ t('bodyTypeGuide.women.apple.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('bodyTypeGuide.women.apple.description') }}</p>

            <div class="mb-4">
              <p class="font-semibold text-green-700 mb-2">✓ {{ t('bodyTypeGuide.bestStyles') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.women.apple.best1') }}</li>
                <li>• {{ t('bodyTypeGuide.women.apple.best2') }}</li>
                <li>• {{ t('bodyTypeGuide.women.apple.best3') }}</li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-red-700 mb-2">✗ {{ t('bodyTypeGuide.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.women.apple.avoid1') }}</li>
                <li>• {{ t('bodyTypeGuide.women.apple.avoid2') }}</li>
              </ul>
            </div>
          </div>

          <!-- Hourglass Shape -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4 text-center">⏳</div>
            <h3 class="font-bold text-xl mb-3">{{ t('bodyTypeGuide.women.hourglass.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('bodyTypeGuide.women.hourglass.description') }}</p>

            <div class="mb-4">
              <p class="font-semibold text-green-700 mb-2">✓ {{ t('bodyTypeGuide.bestStyles') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.women.hourglass.best1') }}</li>
                <li>• {{ t('bodyTypeGuide.women.hourglass.best2') }}</li>
                <li>• {{ t('bodyTypeGuide.women.hourglass.best3') }}</li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-red-700 mb-2">✗ {{ t('bodyTypeGuide.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.women.hourglass.avoid1') }}</li>
                <li>• {{ t('bodyTypeGuide.women.hourglass.avoid2') }}</li>
              </ul>
            </div>
          </div>

          <!-- Rectangle Shape -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4 text-center">📏</div>
            <h3 class="font-bold text-xl mb-3">{{ t('bodyTypeGuide.women.rectangle.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('bodyTypeGuide.women.rectangle.description') }}</p>

            <div class="mb-4">
              <p class="font-semibold text-green-700 mb-2">✓ {{ t('bodyTypeGuide.bestStyles') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.women.rectangle.best1') }}</li>
                <li>• {{ t('bodyTypeGuide.women.rectangle.best2') }}</li>
                <li>• {{ t('bodyTypeGuide.women.rectangle.best3') }}</li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-red-700 mb-2">✗ {{ t('bodyTypeGuide.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.women.rectangle.avoid1') }}</li>
                <li>• {{ t('bodyTypeGuide.women.rectangle.avoid2') }}</li>
              </ul>
            </div>
          </div>

          <!-- Inverted Triangle -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4 text-center">🔻</div>
            <h3 class="font-bold text-xl mb-3">{{ t('bodyTypeGuide.women.invertedTriangle.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('bodyTypeGuide.women.invertedTriangle.description') }}</p>

            <div class="mb-4">
              <p class="font-semibold text-green-700 mb-2">✓ {{ t('bodyTypeGuide.bestStyles') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.women.invertedTriangle.best1') }}</li>
                <li>• {{ t('bodyTypeGuide.women.invertedTriangle.best2') }}</li>
                <li>• {{ t('bodyTypeGuide.women.invertedTriangle.best3') }}</li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-red-700 mb-2">✗ {{ t('bodyTypeGuide.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.women.invertedTriangle.avoid1') }}</li>
                <li>• {{ t('bodyTypeGuide.women.invertedTriangle.avoid2') }}</li>
              </ul>
            </div>
          </div>

          <!-- Petite -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4 text-center">✨</div>
            <h3 class="font-bold text-xl mb-3">{{ t('bodyTypeGuide.women.petite.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('bodyTypeGuide.women.petite.description') }}</p>

            <div class="mb-4">
              <p class="font-semibold text-green-700 mb-2">✓ {{ t('bodyTypeGuide.bestStyles') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.women.petite.best1') }}</li>
                <li>• {{ t('bodyTypeGuide.women.petite.best2') }}</li>
                <li>• {{ t('bodyTypeGuide.women.petite.best3') }}</li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-red-700 mb-2">✗ {{ t('bodyTypeGuide.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.women.petite.avoid1') }}</li>
                <li>• {{ t('bodyTypeGuide.women.petite.avoid2') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Men's Body Types -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('bodyTypeGuide.men.title') }}</h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Athletic Build -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4 text-center">💪</div>
            <h3 class="font-bold text-xl mb-3">{{ t('bodyTypeGuide.men.athletic.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('bodyTypeGuide.men.athletic.description') }}</p>

            <div class="mb-4">
              <p class="font-semibold text-green-700 mb-2">✓ {{ t('bodyTypeGuide.bestStyles') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.men.athletic.best1') }}</li>
                <li>• {{ t('bodyTypeGuide.men.athletic.best2') }}</li>
                <li>• {{ t('bodyTypeGuide.men.athletic.best3') }}</li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-red-700 mb-2">✗ {{ t('bodyTypeGuide.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.men.athletic.avoid1') }}</li>
                <li>• {{ t('bodyTypeGuide.men.athletic.avoid2') }}</li>
              </ul>
            </div>
          </div>

          <!-- Slim Build -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4 text-center">🎯</div>
            <h3 class="font-bold text-xl mb-3">{{ t('bodyTypeGuide.men.slim.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('bodyTypeGuide.men.slim.description') }}</p>

            <div class="mb-4">
              <p class="font-semibold text-green-700 mb-2">✓ {{ t('bodyTypeGuide.bestStyles') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.men.slim.best1') }}</li>
                <li>• {{ t('bodyTypeGuide.men.slim.best2') }}</li>
                <li>• {{ t('bodyTypeGuide.men.slim.best3') }}</li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-red-700 mb-2">✗ {{ t('bodyTypeGuide.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.men.slim.avoid1') }}</li>
                <li>• {{ t('bodyTypeGuide.men.slim.avoid2') }}</li>
              </ul>
            </div>
          </div>

          <!-- Stocky Build -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4 text-center">🏋️</div>
            <h3 class="font-bold text-xl mb-3">{{ t('bodyTypeGuide.men.stocky.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('bodyTypeGuide.men.stocky.description') }}</p>

            <div class="mb-4">
              <p class="font-semibold text-green-700 mb-2">✓ {{ t('bodyTypeGuide.bestStyles') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.men.stocky.best1') }}</li>
                <li>• {{ t('bodyTypeGuide.men.stocky.best2') }}</li>
                <li>• {{ t('bodyTypeGuide.men.stocky.best3') }}</li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-red-700 mb-2">✗ {{ t('bodyTypeGuide.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.men.stocky.avoid1') }}</li>
                <li>• {{ t('bodyTypeGuide.men.stocky.avoid2') }}</li>
              </ul>
            </div>
          </div>

          <!-- Broad Shoulders -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4 text-center">🦅</div>
            <h3 class="font-bold text-xl mb-3">{{ t('bodyTypeGuide.men.broadShoulders.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('bodyTypeGuide.men.broadShoulders.description') }}</p>

            <div class="mb-4">
              <p class="font-semibold text-green-700 mb-2">✓ {{ t('bodyTypeGuide.bestStyles') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.men.broadShoulders.best1') }}</li>
                <li>• {{ t('bodyTypeGuide.men.broadShoulders.best2') }}</li>
                <li>• {{ t('bodyTypeGuide.men.broadShoulders.best3') }}</li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-red-700 mb-2">✗ {{ t('bodyTypeGuide.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.men.broadShoulders.avoid1') }}</li>
                <li>• {{ t('bodyTypeGuide.men.broadShoulders.avoid2') }}</li>
              </ul>
            </div>
          </div>

          <!-- Tall & Lean -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4 text-center">📐</div>
            <h3 class="font-bold text-xl mb-3">{{ t('bodyTypeGuide.men.tallLean.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('bodyTypeGuide.men.tallLean.description') }}</p>

            <div class="mb-4">
              <p class="font-semibold text-green-700 mb-2">✓ {{ t('bodyTypeGuide.bestStyles') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.men.tallLean.best1') }}</li>
                <li>• {{ t('bodyTypeGuide.men.tallLean.best2') }}</li>
                <li>• {{ t('bodyTypeGuide.men.tallLean.best3') }}</li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-red-700 mb-2">✗ {{ t('bodyTypeGuide.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.men.tallLean.avoid1') }}</li>
                <li>• {{ t('bodyTypeGuide.men.tallLean.avoid2') }}</li>
              </ul>
            </div>
          </div>

          <!-- Short Stature -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4 text-center">🎩</div>
            <h3 class="font-bold text-xl mb-3">{{ t('bodyTypeGuide.men.short.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('bodyTypeGuide.men.short.description') }}</p>

            <div class="mb-4">
              <p class="font-semibold text-green-700 mb-2">✓ {{ t('bodyTypeGuide.bestStyles') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.men.short.best1') }}</li>
                <li>• {{ t('bodyTypeGuide.men.short.best2') }}</li>
                <li>• {{ t('bodyTypeGuide.men.short.best3') }}</li>
              </ul>
            </div>

            <div>
              <p class="font-semibold text-red-700 mb-2">✗ {{ t('bodyTypeGuide.avoid') }}:</p>
              <ul class="text-sm space-y-1 text-gray-700">
                <li>• {{ t('bodyTypeGuide.men.short.avoid1') }}</li>
                <li>• {{ t('bodyTypeGuide.men.short.avoid2') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Universal Fit Tips -->
      <section class="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center">{{ t('bodyTypeGuide.universalTips.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div class="bg-white rounded-lg p-6">
            <div class="text-3xl mb-3">📏</div>
            <h3 class="font-bold mb-2">{{ t('bodyTypeGuide.universalTips.tip1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('bodyTypeGuide.universalTips.tip1.description') }}</p>
          </div>
          <div class="bg-white rounded-lg p-6">
            <div class="text-3xl mb-3">👔</div>
            <h3 class="font-bold mb-2">{{ t('bodyTypeGuide.universalTips.tip2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('bodyTypeGuide.universalTips.tip2.description') }}</p>
          </div>
          <div class="bg-white rounded-lg p-6">
            <div class="text-3xl mb-3">✨</div>
            <h3 class="font-bold mb-2">{{ t('bodyTypeGuide.universalTips.tip3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('bodyTypeGuide.universalTips.tip3.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-primary-700 text-white rounded-xl p-12 text-center">
        <h2 class="font-bold text-3xl mb-4">{{ t('bodyTypeGuide.cta.title') }}</h2>
        <p class="text-lg mb-6 opacity-90">{{ t('bodyTypeGuide.cta.description') }}</p>
        <SfButton size="lg" class="bg-white text-primary-700 hover:bg-gray-100">
          {{ t('bodyTypeGuide.cta.button') }}
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
  title: 'Body Type Guide - Find Your Perfect Fit | HEVENTON',
  description: 'Discover which shirt and blouse styles flatter your body type. Expert guidance for men and women on finding the perfect fit.',
  ogTitle: 'Body Type Guide - Find Your Perfect Fit | HEVENTON',
  ogDescription: 'Expert advice on choosing shirts and blouses that flatter your unique body type.',
  ogImage: '/images/body-type-guide-og.jpg',
});
</script>
