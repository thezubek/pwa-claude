<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('fabricEncyclopedia.title') }}
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          {{ t('fabricEncyclopedia.subtitle') }}
        </p>
      </div>

      <!-- Natural Fabrics -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8 flex items-center gap-3">
          <span class="text-4xl">🌱</span>
          {{ t('fabricEncyclopedia.natural.title') }}
        </h2>

        <div class="space-y-6">
          <!-- Cotton -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1">
                <h3 class="font-bold text-2xl mb-3">{{ t('fabricEncyclopedia.natural.cotton.title') }}</h3>
                <p class="text-gray-700 mb-4">{{ t('fabricEncyclopedia.natural.cotton.description') }}</p>

                <div class="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p class="font-semibold text-sm text-green-700 mb-2">✓ {{ t('fabricEncyclopedia.pros') }}:</p>
                    <ul class="text-sm space-y-1">
                      <li>• {{ t('fabricEncyclopedia.natural.cotton.pro1') }}</li>
                      <li>• {{ t('fabricEncyclopedia.natural.cotton.pro2') }}</li>
                      <li>• {{ t('fabricEncyclopedia.natural.cotton.pro3') }}</li>
                      <li>• {{ t('fabricEncyclopedia.natural.cotton.pro4') }}</li>
                    </ul>
                  </div>
                  <div>
                    <p class="font-semibold text-sm text-red-700 mb-2">✗ {{ t('fabricEncyclopedia.cons') }}:</p>
                    <ul class="text-sm space-y-1">
                      <li>• {{ t('fabricEncyclopedia.natural.cotton.con1') }}</li>
                      <li>• {{ t('fabricEncyclopedia.natural.cotton.con2') }}</li>
                    </ul>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{{ t('fabricEncyclopedia.natural.cotton.use1') }}</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{{ t('fabricEncyclopedia.natural.cotton.use2') }}</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{{ t('fabricEncyclopedia.natural.cotton.use3') }}</span>
                </div>

                <p class="text-sm text-gray-600"><strong>{{ t('fabricEncyclopedia.care') }}:</strong> {{ t('fabricEncyclopedia.natural.cotton.care') }}</p>
              </div>
            </div>
          </div>

          <!-- Linen -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="flex-1">
              <h3 class="font-bold text-2xl mb-3">{{ t('fabricEncyclopedia.natural.linen.title') }}</h3>
              <p class="text-gray-700 mb-4">{{ t('fabricEncyclopedia.natural.linen.description') }}</p>

              <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p class="font-semibold text-sm text-green-700 mb-2">✓ {{ t('fabricEncyclopedia.pros') }}:</p>
                  <ul class="text-sm space-y-1">
                    <li>• {{ t('fabricEncyclopedia.natural.linen.pro1') }}</li>
                    <li>• {{ t('fabricEncyclopedia.natural.linen.pro2') }}</li>
                    <li>• {{ t('fabricEncyclopedia.natural.linen.pro3') }}</li>
                    <li>• {{ t('fabricEncyclopedia.natural.linen.pro4') }}</li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold text-sm text-red-700 mb-2">✗ {{ t('fabricEncyclopedia.cons') }}:</p>
                  <ul class="text-sm space-y-1">
                    <li>• {{ t('fabricEncyclopedia.natural.linen.con1') }}</li>
                    <li>• {{ t('fabricEncyclopedia.natural.linen.con2') }}</li>
                  </ul>
                </div>
              </div>

              <div class="flex flex-wrap gap-2 mb-3">
                <span class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">{{ t('fabricEncyclopedia.natural.linen.use1') }}</span>
                <span class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">{{ t('fabricEncyclopedia.natural.linen.use2') }}</span>
                <span class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">{{ t('fabricEncyclopedia.natural.linen.use3') }}</span>
              </div>

              <p class="text-sm text-gray-600"><strong>{{ t('fabricEncyclopedia.care') }}:</strong> {{ t('fabricEncyclopedia.natural.linen.care') }}</p>
            </div>
          </div>

          <!-- Silk -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="flex-1">
              <h3 class="font-bold text-2xl mb-3">{{ t('fabricEncyclopedia.natural.silk.title') }}</h3>
              <p class="text-gray-700 mb-4">{{ t('fabricEncyclopedia.natural.silk.description') }}</p>

              <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p class="font-semibold text-sm text-green-700 mb-2">✓ {{ t('fabricEncyclopedia.pros') }}:</p>
                  <ul class="text-sm space-y-1">
                    <li>• {{ t('fabricEncyclopedia.natural.silk.pro1') }}</li>
                    <li>• {{ t('fabricEncyclopedia.natural.silk.pro2') }}</li>
                    <li>• {{ t('fabricEncyclopedia.natural.silk.pro3') }}</li>
                    <li>• {{ t('fabricEncyclopedia.natural.silk.pro4') }}</li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold text-sm text-red-700 mb-2">✗ {{ t('fabricEncyclopedia.cons') }}:</p>
                  <ul class="text-sm space-y-1">
                    <li>• {{ t('fabricEncyclopedia.natural.silk.con1') }}</li>
                    <li>• {{ t('fabricEncyclopedia.natural.silk.con2') }}</li>
                    <li>• {{ t('fabricEncyclopedia.natural.silk.con3') }}</li>
                  </ul>
                </div>
              </div>

              <div class="flex flex-wrap gap-2 mb-3">
                <span class="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">{{ t('fabricEncyclopedia.natural.silk.use1') }}</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">{{ t('fabricEncyclopedia.natural.silk.use2') }}</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">{{ t('fabricEncyclopedia.natural.silk.use3') }}</span>
              </div>

              <p class="text-sm text-gray-600"><strong>{{ t('fabricEncyclopedia.care') }}:</strong> {{ t('fabricEncyclopedia.natural.silk.care') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Synthetic Fabrics -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8 flex items-center gap-3">
          <span class="text-4xl">⚗️</span>
          {{ t('fabricEncyclopedia.synthetic.title') }}
        </h2>

        <div class="space-y-6">
          <!-- Polyester -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <h3 class="font-bold text-2xl mb-3">{{ t('fabricEncyclopedia.synthetic.polyester.title') }}</h3>
            <p class="text-gray-700 mb-4">{{ t('fabricEncyclopedia.synthetic.polyester.description') }}</p>

            <div class="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p class="font-semibold text-sm text-green-700 mb-2">✓ {{ t('fabricEncyclopedia.pros') }}:</p>
                <ul class="text-sm space-y-1">
                  <li>• {{ t('fabricEncyclopedia.synthetic.polyester.pro1') }}</li>
                  <li>• {{ t('fabricEncyclopedia.synthetic.polyester.pro2') }}</li>
                  <li>• {{ t('fabricEncyclopedia.synthetic.polyester.pro3') }}</li>
                  <li>• {{ t('fabricEncyclopedia.synthetic.polyester.pro4') }}</li>
                </ul>
              </div>
              <div>
                <p class="font-semibold text-sm text-red-700 mb-2">✗ {{ t('fabricEncyclopedia.cons') }}:</p>
                <ul class="text-sm space-y-1">
                  <li>• {{ t('fabricEncyclopedia.synthetic.polyester.con1') }}</li>
                  <li>• {{ t('fabricEncyclopedia.synthetic.polyester.con2') }}</li>
                  <li>• {{ t('fabricEncyclopedia.synthetic.polyester.con3') }}</li>
                </ul>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 mb-3">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">{{ t('fabricEncyclopedia.synthetic.polyester.use1') }}</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">{{ t('fabricEncyclopedia.synthetic.polyester.use2') }}</span>
            </div>

            <p class="text-sm text-gray-600"><strong>{{ t('fabricEncyclopedia.care') }}:</strong> {{ t('fabricEncyclopedia.synthetic.polyester.care') }}</p>
          </div>

          <!-- Modal/Rayon -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <h3 class="font-bold text-2xl mb-3">{{ t('fabricEncyclopedia.synthetic.modal.title') }}</h3>
            <p class="text-gray-700 mb-4">{{ t('fabricEncyclopedia.synthetic.modal.description') }}</p>

            <div class="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p class="font-semibold text-sm text-green-700 mb-2">✓ {{ t('fabricEncyclopedia.pros') }}:</p>
                <ul class="text-sm space-y-1">
                  <li>• {{ t('fabricEncyclopedia.synthetic.modal.pro1') }}</li>
                  <li>• {{ t('fabricEncyclopedia.synthetic.modal.pro2') }}</li>
                  <li>• {{ t('fabricEncyclopedia.synthetic.modal.pro3') }}</li>
                  <li>• {{ t('fabricEncyclopedia.synthetic.modal.pro4') }}</li>
                </ul>
              </div>
              <div>
                <p class="font-semibold text-sm text-red-700 mb-2">✗ {{ t('fabricEncyclopedia.cons') }}:</p>
                <ul class="text-sm space-y-1">
                  <li>• {{ t('fabricEncyclopedia.synthetic.modal.con1') }}</li>
                  <li>• {{ t('fabricEncyclopedia.synthetic.modal.con2') }}</li>
                </ul>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 mb-3">
              <span class="px-3 py-1 bg-teal-100 text-teal-800 text-xs rounded-full">{{ t('fabricEncyclopedia.synthetic.modal.use1') }}</span>
              <span class="px-3 py-1 bg-teal-100 text-teal-800 text-xs rounded-full">{{ t('fabricEncyclopedia.synthetic.modal.use2') }}</span>
            </div>

            <p class="text-sm text-gray-600"><strong>{{ t('fabricEncyclopedia.care') }}:</strong> {{ t('fabricEncyclopedia.synthetic.modal.care') }}</p>
          </div>
        </div>
      </section>

      <!-- Blends -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8 flex items-center gap-3">
          <span class="text-4xl">🔄</span>
          {{ t('fabricEncyclopedia.blends.title') }}
        </h2>
        <p class="text-gray-700 mb-8 max-w-3xl">{{ t('fabricEncyclopedia.blends.description') }}</p>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-3">{{ t('fabricEncyclopedia.blends.cottonPoly.title') }}</h3>
            <p class="text-sm text-gray-700 mb-3">{{ t('fabricEncyclopedia.blends.cottonPoly.description') }}</p>
            <p class="text-sm"><strong>{{ t('fabricEncyclopedia.blends.bestFor') }}:</strong> {{ t('fabricEncyclopedia.blends.cottonPoly.bestFor') }}</p>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-3">{{ t('fabricEncyclopedia.blends.cottonSilk.title') }}</h3>
            <p class="text-sm text-gray-700 mb-3">{{ t('fabricEncyclopedia.blends.cottonSilk.description') }}</p>
            <p class="text-sm"><strong>{{ t('fabricEncyclopedia.blends.bestFor') }}:</strong> {{ t('fabricEncyclopedia.blends.cottonSilk.bestFor') }}</p>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-3">{{ t('fabricEncyclopedia.blends.linenCotton.title') }}</h3>
            <p class="text-sm text-gray-700 mb-3">{{ t('fabricEncyclopedia.blends.linenCotton.description') }}</p>
            <p class="text-sm"><strong>{{ t('fabricEncyclopedia.blends.bestFor') }}:</strong> {{ t('fabricEncyclopedia.blends.linenCotton.bestFor') }}</p>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-3">{{ t('fabricEncyclopedia.blends.stretch.title') }}</h3>
            <p class="text-sm text-gray-700 mb-3">{{ t('fabricEncyclopedia.blends.stretch.description') }}</p>
            <p class="text-sm"><strong>{{ t('fabricEncyclopedia.blends.bestFor') }}:</strong> {{ t('fabricEncyclopedia.blends.stretch.bestFor') }}</p>
          </div>
        </div>
      </section>

      <!-- Sustainability -->
      <section class="mb-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 flex items-center gap-3">
          <span class="text-4xl">♻️</span>
          {{ t('fabricEncyclopedia.sustainability.title') }}
        </h2>
        <p class="text-gray-700 mb-6 max-w-3xl">{{ t('fabricEncyclopedia.sustainability.description') }}</p>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6">
            <div class="text-3xl mb-3">🌿</div>
            <h3 class="font-bold mb-2">{{ t('fabricEncyclopedia.sustainability.organic.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('fabricEncyclopedia.sustainability.organic.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-3xl mb-3">♻️</div>
            <h3 class="font-bold mb-2">{{ t('fabricEncyclopedia.sustainability.recycled.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('fabricEncyclopedia.sustainability.recycled.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-3xl mb-3">🌍</div>
            <h3 class="font-bold mb-2">{{ t('fabricEncyclopedia.sustainability.lowImpact.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('fabricEncyclopedia.sustainability.lowImpact.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-primary-700 text-white rounded-xl p-12 text-center">
        <h2 class="font-bold text-3xl mb-4">{{ t('fabricEncyclopedia.cta.title') }}</h2>
        <p class="text-lg mb-6 opacity-90">{{ t('fabricEncyclopedia.cta.description') }}</p>
        <SfButton size="lg" class="bg-white text-primary-700 hover:bg-gray-100">
          {{ t('fabricEncyclopedia.cta.button') }}
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
  title: 'Fabric Encyclopedia - Complete Guide to Shirt & Blouse Materials | HEVENTON',
  description: 'Learn everything about cotton, linen, silk, and synthetic fabrics. Understand pros, cons, and care requirements for each material.',
  ogTitle: 'Fabric Encyclopedia - Complete Guide to Materials | HEVENTON',
  ogDescription: 'Comprehensive guide to shirt and blouse fabrics including cotton, linen, silk, and blends. Make informed purchasing decisions.',
  ogImage: '/images/fabric-encyclopedia-og.jpg',
});
</script>
