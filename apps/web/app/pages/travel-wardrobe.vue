<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('travelWardrobe.title') }}
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          {{ t('travelWardrobe.subtitle') }}
        </p>
      </div>

      <!-- The 5-4-3-2-1 Packing Rule -->
      <section class="mb-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center">{{ t('travelWardrobe.packingRule.title') }}</h2>
        <p class="text-center text-gray-700 mb-8 max-w-2xl mx-auto">{{ t('travelWardrobe.packingRule.description') }}</p>

        <div class="grid md:grid-cols-5 gap-4">
          <div class="bg-white rounded-lg p-6 text-center">
            <div class="text-5xl font-bold text-blue-600 mb-2">5</div>
            <h3 class="font-bold mb-2">{{ t('travelWardrobe.packingRule.tops.title') }}</h3>
            <p class="text-sm text-gray-600">{{ t('travelWardrobe.packingRule.tops.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6 text-center">
            <div class="text-5xl font-bold text-blue-600 mb-2">4</div>
            <h3 class="font-bold mb-2">{{ t('travelWardrobe.packingRule.bottoms.title') }}</h3>
            <p class="text-sm text-gray-600">{{ t('travelWardrobe.packingRule.bottoms.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6 text-center">
            <div class="text-5xl font-bold text-blue-600 mb-2">3</div>
            <h3 class="font-bold mb-2">{{ t('travelWardrobe.packingRule.shoes.title') }}</h3>
            <p class="text-sm text-gray-600">{{ t('travelWardrobe.packingRule.shoes.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6 text-center">
            <div class="text-5xl font-bold text-blue-600 mb-2">2</div>
            <h3 class="font-bold mb-2">{{ t('travelWardrobe.packingRule.accessories.title') }}</h3>
            <p class="text-sm text-gray-600">{{ t('travelWardrobe.packingRule.accessories.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6 text-center">
            <div class="text-5xl font-bold text-blue-600 mb-2">1</div>
            <h3 class="font-bold mb-2">{{ t('travelWardrobe.packingRule.bag.title') }}</h3>
            <p class="text-sm text-gray-600">{{ t('travelWardrobe.packingRule.bag.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Business Travel Capsule -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('travelWardrobe.businessTravel.title') }}</h2>
        <p class="text-gray-700 mb-8">{{ t('travelWardrobe.businessTravel.description') }}</p>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Women's Business Travel -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-4 flex items-center gap-2">
              <span class="text-2xl">👩‍💼</span>
              {{ t('travelWardrobe.businessTravel.women.title') }}
            </h3>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold mb-2">{{ t('travelWardrobe.tops') }}:</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• {{ t('travelWardrobe.businessTravel.women.top1') }}</li>
                  <li>• {{ t('travelWardrobe.businessTravel.women.top2') }}</li>
                  <li>• {{ t('travelWardrobe.businessTravel.women.top3') }}</li>
                  <li>• {{ t('travelWardrobe.businessTravel.women.top4') }}</li>
                  <li>• {{ t('travelWardrobe.businessTravel.women.top5') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold mb-2">{{ t('travelWardrobe.bottoms') }}:</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• {{ t('travelWardrobe.businessTravel.women.bottom1') }}</li>
                  <li>• {{ t('travelWardrobe.businessTravel.women.bottom2') }}</li>
                  <li>• {{ t('travelWardrobe.businessTravel.women.bottom3') }}</li>
                </ul>
              </div>

              <div class="p-4 bg-blue-50 rounded">
                <p class="text-sm"><strong>{{ t('travelWardrobe.why') }}:</strong> {{ t('travelWardrobe.businessTravel.women.why') }}</p>
              </div>
            </div>
          </div>

          <!-- Men's Business Travel -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-4 flex items-center gap-2">
              <span class="text-2xl">👨‍💼</span>
              {{ t('travelWardrobe.businessTravel.men.title') }}
            </h3>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold mb-2">{{ t('travelWardrobe.tops') }}:</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• {{ t('travelWardrobe.businessTravel.men.top1') }}</li>
                  <li>• {{ t('travelWardrobe.businessTravel.men.top2') }}</li>
                  <li>• {{ t('travelWardrobe.businessTravel.men.top3') }}</li>
                  <li>• {{ t('travelWardrobe.businessTravel.men.top4') }}</li>
                  <li>• {{ t('travelWardrobe.businessTravel.men.top5') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold mb-2">{{ t('travelWardrobe.bottoms') }}:</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• {{ t('travelWardrobe.businessTravel.men.bottom1') }}</li>
                  <li>• {{ t('travelWardrobe.businessTravel.men.bottom2') }}</li>
                  <li>• {{ t('travelWardrobe.businessTravel.men.bottom3') }}</li>
                </ul>
              </div>

              <div class="p-4 bg-blue-50 rounded">
                <p class="text-sm"><strong>{{ t('travelWardrobe.why') }}:</strong> {{ t('travelWardrobe.businessTravel.men.why') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Leisure Travel Capsule -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('travelWardrobe.leisureTravel.title') }}</h2>
        <p class="text-gray-700 mb-8">{{ t('travelWardrobe.leisureTravel.description') }}</p>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Women's Leisure Travel -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-4 flex items-center gap-2">
              <span class="text-2xl">✈️</span>
              {{ t('travelWardrobe.leisureTravel.women.title') }}
            </h3>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold mb-2">{{ t('travelWardrobe.tops') }}:</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• {{ t('travelWardrobe.leisureTravel.women.top1') }}</li>
                  <li>• {{ t('travelWardrobe.leisureTravel.women.top2') }}</li>
                  <li>• {{ t('travelWardrobe.leisureTravel.women.top3') }}</li>
                  <li>• {{ t('travelWardrobe.leisureTravel.women.top4') }}</li>
                  <li>• {{ t('travelWardrobe.leisureTravel.women.top5') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold mb-2">{{ t('travelWardrobe.bottoms') }}:</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• {{ t('travelWardrobe.leisureTravel.women.bottom1') }}</li>
                  <li>• {{ t('travelWardrobe.leisureTravel.women.bottom2') }}</li>
                  <li>• {{ t('travelWardrobe.leisureTravel.women.bottom3') }}</li>
                </ul>
              </div>

              <div class="p-4 bg-green-50 rounded">
                <p class="text-sm"><strong>{{ t('travelWardrobe.why') }}:</strong> {{ t('travelWardrobe.leisureTravel.women.why') }}</p>
              </div>
            </div>
          </div>

          <!-- Men's Leisure Travel -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-4 flex items-center gap-2">
              <span class="text-2xl">🏖️</span>
              {{ t('travelWardrobe.leisureTravel.men.title') }}
            </h3>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold mb-2">{{ t('travelWardrobe.tops') }}:</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• {{ t('travelWardrobe.leisureTravel.men.top1') }}</li>
                  <li>• {{ t('travelWardrobe.leisureTravel.men.top2') }}</li>
                  <li>• {{ t('travelWardrobe.leisureTravel.men.top3') }}</li>
                  <li>• {{ t('travelWardrobe.leisureTravel.men.top4') }}</li>
                  <li>• {{ t('travelWardrobe.leisureTravel.men.top5') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold mb-2">{{ t('travelWardrobe.bottoms') }}:</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• {{ t('travelWardrobe.leisureTravel.men.bottom1') }}</li>
                  <li>• {{ t('travelWardrobe.leisureTravel.men.bottom2') }}</li>
                  <li>• {{ t('travelWardrobe.leisureTravel.men.bottom3') }}</li>
                </ul>
              </div>

              <div class="p-4 bg-green-50 rounded">
                <p class="text-sm"><strong>{{ t('travelWardrobe.why') }}:</strong> {{ t('travelWardrobe.leisureTravel.men.why') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Packing Tips -->
      <section class="mb-16">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('travelWardrobe.packingTips.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">🎯</div>
            <h3 class="font-bold text-lg mb-2">{{ t('travelWardrobe.packingTips.tip1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('travelWardrobe.packingTips.tip1.description') }}</p>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">🧳</div>
            <h3 class="font-bold text-lg mb-2">{{ t('travelWardrobe.packingTips.tip2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('travelWardrobe.packingTips.tip2.description') }}</p>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">👕</div>
            <h3 class="font-bold text-lg mb-2">{{ t('travelWardrobe.packingTips.tip3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('travelWardrobe.packingTips.tip3.description') }}</p>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">📸</div>
            <h3 class="font-bold text-lg mb-2">{{ t('travelWardrobe.packingTips.tip4.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('travelWardrobe.packingTips.tip4.description') }}</p>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">🔄</div>
            <h3 class="font-bold text-lg mb-2">{{ t('travelWardrobe.packingTips.tip5.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('travelWardrobe.packingTips.tip5.description') }}</p>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">🧴</div>
            <h3 class="font-bold text-lg mb-2">{{ t('travelWardrobe.packingTips.tip6.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('travelWardrobe.packingTips.tip6.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Wrinkle Prevention -->
      <section class="mb-16 bg-amber-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center">{{ t('travelWardrobe.wrinklePrevention.title') }}</h2>
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-3">{{ t('travelWardrobe.wrinklePrevention.method1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('travelWardrobe.wrinklePrevention.method1.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-3">{{ t('travelWardrobe.wrinklePrevention.method2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('travelWardrobe.wrinklePrevention.method2.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-3">{{ t('travelWardrobe.wrinklePrevention.method3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('travelWardrobe.wrinklePrevention.method3.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-3">{{ t('travelWardrobe.wrinklePrevention.method4.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('travelWardrobe.wrinklePrevention.method4.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-primary-700 text-white rounded-xl p-12 text-center">
        <h2 class="font-bold text-3xl mb-4">{{ t('travelWardrobe.cta.title') }}</h2>
        <p class="text-lg mb-6 opacity-90">{{ t('travelWardrobe.cta.description') }}</p>
        <SfButton size="lg" class="bg-white text-primary-700 hover:bg-gray-100">
          {{ t('travelWardrobe.cta.button') }}
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
  title: 'Travel Wardrobe Guide - Pack Light, Look Great | HEVENTON',
  description: 'Master the art of packing with capsule wardrobe strategies. Business and leisure travel packing guides for men and women.',
  ogTitle: 'Travel Wardrobe Guide - Smart Packing Strategies | HEVENTON',
  ogDescription: 'Learn to pack efficiently with our travel capsule wardrobe guides. Look great with minimal luggage.',
  ogImage: '/images/travel-wardrobe-og.jpg',
});
</script>
