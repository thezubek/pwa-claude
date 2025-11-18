<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('accessorizingGuide.title') }}
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          {{ t('accessorizingGuide.subtitle') }}
        </p>
      </div>

      <!-- The Golden Rules -->
      <section class="mb-20 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center">{{ t('accessorizingGuide.goldenRules.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6">
            <div class="text-4xl mb-3">1️⃣</div>
            <h3 class="font-bold mb-2">{{ t('accessorizingGuide.goldenRules.rule1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('accessorizingGuide.goldenRules.rule1.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-4xl mb-3">2️⃣</div>
            <h3 class="font-bold mb-2">{{ t('accessorizingGuide.goldenRules.rule2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('accessorizingGuide.goldenRules.rule2.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-4xl mb-3">3️⃣</div>
            <h3 class="font-bold mb-2">{{ t('accessorizingGuide.goldenRules.rule3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('accessorizingGuide.goldenRules.rule3.description') }}</p>
          </div>
        </div>
      </section>

      <!-- For Women -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('accessorizingGuide.women.title') }}</h2>

        <div class="space-y-8">
          <!-- Jewelry -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="text-4xl">💎</div>
              <h3 class="font-bold text-2xl">{{ t('accessorizingGuide.women.jewelry.title') }}</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold mb-3">{{ t('accessorizingGuide.women.jewelry.necklaces.title') }}</h4>
                <ul class="text-sm space-y-2 text-gray-700">
                  <li>• {{ t('accessorizingGuide.women.jewelry.necklaces.item1') }}</li>
                  <li>• {{ t('accessorizingGuide.women.jewelry.necklaces.item2') }}</li>
                  <li>• {{ t('accessorizingGuide.women.jewelry.necklaces.item3') }}</li>
                  <li>• {{ t('accessorizingGuide.women.jewelry.necklaces.item4') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold mb-3">{{ t('accessorizingGuide.women.jewelry.earrings.title') }}</h4>
                <ul class="text-sm space-y-2 text-gray-700">
                  <li>• {{ t('accessorizingGuide.women.jewelry.earrings.item1') }}</li>
                  <li>• {{ t('accessorizingGuide.women.jewelry.earrings.item2') }}</li>
                  <li>• {{ t('accessorizingGuide.women.jewelry.earrings.item3') }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Scarves -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="text-4xl">🧣</div>
              <h3 class="font-bold text-2xl">{{ t('accessorizingGuide.women.scarves.title') }}</h3>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <h4 class="font-semibold mb-2">{{ t('accessorizingGuide.women.scarves.silk.title') }}</h4>
                <p class="text-sm text-gray-700">{{ t('accessorizingGuide.women.scarves.silk.description') }}</p>
              </div>

              <div>
                <h4 class="font-semibold mb-2">{{ t('accessorizingGuide.women.scarves.statement.title') }}</h4>
                <p class="text-sm text-gray-700">{{ t('accessorizingGuide.women.scarves.statement.description') }}</p>
              </div>

              <div>
                <h4 class="font-semibold mb-2">{{ t('accessorizingGuide.women.scarves.neutral.title') }}</h4>
                <p class="text-sm text-gray-700">{{ t('accessorizingGuide.women.scarves.neutral.description') }}</p>
              </div>
            </div>
          </div>

          <!-- Belts & Bags -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="text-4xl">👜</div>
              <h3 class="font-bold text-2xl">{{ t('accessorizingGuide.women.beltsAndBags.title') }}</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold mb-3">{{ t('accessorizingGuide.women.beltsAndBags.belts.title') }}</h4>
                <ul class="text-sm space-y-2 text-gray-700">
                  <li>• {{ t('accessorizingGuide.women.beltsAndBags.belts.item1') }}</li>
                  <li>• {{ t('accessorizingGuide.women.beltsAndBags.belts.item2') }}</li>
                  <li>• {{ t('accessorizingGuide.women.beltsAndBags.belts.item3') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold mb-3">{{ t('accessorizingGuide.women.beltsAndBags.bags.title') }}</h4>
                <ul class="text-sm space-y-2 text-gray-700">
                  <li>• {{ t('accessorizingGuide.women.beltsAndBags.bags.item1') }}</li>
                  <li>• {{ t('accessorizingGuide.women.beltsAndBags.bags.item2') }}</li>
                  <li>• {{ t('accessorizingGuide.women.beltsAndBags.bags.item3') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- For Men -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('accessorizingGuide.men.title') }}</h2>

        <div class="space-y-8">
          <!-- Ties & Bowties -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="text-4xl">👔</div>
              <h3 class="font-bold text-2xl">{{ t('accessorizingGuide.men.ties.title') }}</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold mb-3">{{ t('accessorizingGuide.men.ties.choosing.title') }}</h4>
                <ul class="text-sm space-y-2 text-gray-700">
                  <li>• {{ t('accessorizingGuide.men.ties.choosing.item1') }}</li>
                  <li>• {{ t('accessorizingGuide.men.ties.choosing.item2') }}</li>
                  <li>• {{ t('accessorizingGuide.men.ties.choosing.item3') }}</li>
                  <li>• {{ t('accessorizingGuide.men.ties.choosing.item4') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold mb-3">{{ t('accessorizingGuide.men.ties.width.title') }}</h4>
                <ul class="text-sm space-y-2 text-gray-700">
                  <li>• {{ t('accessorizingGuide.men.ties.width.item1') }}</li>
                  <li>• {{ t('accessorizingGuide.men.ties.width.item2') }}</li>
                  <li>• {{ t('accessorizingGuide.men.ties.width.item3') }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Watches -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="text-4xl">⌚</div>
              <h3 class="font-bold text-2xl">{{ t('accessorizingGuide.men.watches.title') }}</h3>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <h4 class="font-semibold mb-2">{{ t('accessorizingGuide.men.watches.formal.title') }}</h4>
                <p class="text-sm text-gray-700">{{ t('accessorizingGuide.men.watches.formal.description') }}</p>
              </div>

              <div>
                <h4 class="font-semibold mb-2">{{ t('accessorizingGuide.men.watches.business.title') }}</h4>
                <p class="text-sm text-gray-700">{{ t('accessorizingGuide.men.watches.business.description') }}</p>
              </div>

              <div>
                <h4 class="font-semibold mb-2">{{ t('accessorizingGuide.men.watches.casual.title') }}</h4>
                <p class="text-sm text-gray-700">{{ t('accessorizingGuide.men.watches.casual.description') }}</p>
              </div>
            </div>
          </div>

          <!-- Pocket Squares, Cufflinks & Belts -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="text-4xl">✨</div>
              <h3 class="font-bold text-2xl">{{ t('accessorizingGuide.men.extras.title') }}</h3>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <h4 class="font-semibold mb-3">{{ t('accessorizingGuide.men.extras.pocketSquares.title') }}</h4>
                <ul class="text-sm space-y-2 text-gray-700">
                  <li>• {{ t('accessorizingGuide.men.extras.pocketSquares.item1') }}</li>
                  <li>• {{ t('accessorizingGuide.men.extras.pocketSquares.item2') }}</li>
                  <li>• {{ t('accessorizingGuide.men.extras.pocketSquares.item3') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold mb-3">{{ t('accessorizingGuide.men.extras.cufflinks.title') }}</h4>
                <ul class="text-sm space-y-2 text-gray-700">
                  <li>• {{ t('accessorizingGuide.men.extras.cufflinks.item1') }}</li>
                  <li>• {{ t('accessorizingGuide.men.extras.cufflinks.item2') }}</li>
                  <li>• {{ t('accessorizingGuide.men.extras.cufflinks.item3') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold mb-3">{{ t('accessorizingGuide.men.extras.belts.title') }}</h4>
                <ul class="text-sm space-y-2 text-gray-700">
                  <li>• {{ t('accessorizingGuide.men.extras.belts.item1') }}</li>
                  <li>• {{ t('accessorizingGuide.men.extras.belts.item2') }}</li>
                  <li>• {{ t('accessorizingGuide.men.extras.belts.item3') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Metal Coordination -->
      <section class="mb-16 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center">{{ t('accessorizingGuide.metalCoordination.title') }}</h2>
        <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">{{ t('accessorizingGuide.metalCoordination.description') }}</p>

        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="bg-white rounded-lg p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl">🥇</div>
              <h3 class="font-bold text-xl">{{ t('accessorizingGuide.metalCoordination.gold.title') }}</h3>
            </div>
            <p class="text-sm text-gray-700 mb-3">{{ t('accessorizingGuide.metalCoordination.gold.description') }}</p>
            <p class="text-sm"><strong>{{ t('accessorizingGuide.metalCoordination.pairWith') }}:</strong> {{ t('accessorizingGuide.metalCoordination.gold.pairWith') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl">🥈</div>
              <h3 class="font-bold text-xl">{{ t('accessorizingGuide.metalCoordination.silver.title') }}</h3>
            </div>
            <p class="text-sm text-gray-700 mb-3">{{ t('accessorizingGuide.metalCoordination.silver.description') }}</p>
            <p class="text-sm"><strong>{{ t('accessorizingGuide.metalCoordination.pairWith') }}:</strong> {{ t('accessorizingGuide.metalCoordination.silver.pairWith') }}</p>
          </div>
        </div>
      </section>

      <!-- Common Mistakes -->
      <section class="mb-16">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('accessorizingGuide.mistakes.title') }}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('accessorizingGuide.mistakes.mistake1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('accessorizingGuide.mistakes.mistake1.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('accessorizingGuide.mistakes.mistake2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('accessorizingGuide.mistakes.mistake2.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('accessorizingGuide.mistakes.mistake3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('accessorizingGuide.mistakes.mistake3.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('accessorizingGuide.mistakes.mistake4.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('accessorizingGuide.mistakes.mistake4.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('accessorizingGuide.mistakes.mistake5.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('accessorizingGuide.mistakes.mistake5.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('accessorizingGuide.mistakes.mistake6.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('accessorizingGuide.mistakes.mistake6.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-primary-700 text-white rounded-xl p-12 text-center">
        <h2 class="font-bold text-3xl mb-4">{{ t('accessorizingGuide.cta.title') }}</h2>
        <p class="text-lg mb-6 opacity-90">{{ t('accessorizingGuide.cta.description') }}</p>
        <SfButton size="lg" class="bg-white text-primary-700 hover:bg-gray-100">
          {{ t('accessorizingGuide.cta.button') }}
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
  title: 'Accessorizing Guide - Complete Your Look Perfectly | HEVENTON',
  description: 'Master the art of accessorizing shirts and blouses. Learn how to choose jewelry, ties, scarves, and more for a polished look.',
  ogTitle: 'Accessorizing Guide - Perfect Your Style | HEVENTON',
  ogDescription: 'Complete guide to accessorizing with jewelry, ties, scarves, belts, and watches. Expert styling tips for men and women.',
  ogImage: '/images/accessorizing-guide-og.jpg',
});
</script>
