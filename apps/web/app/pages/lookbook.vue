<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('lookbook.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ t('lookbook.subtitle') }}
        </p>
      </div>

      <!-- Season Selector -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="season in seasons"
          :key="season.id"
          @click="selectedSeason = season.id"
          :class="[
            'px-6 py-3 rounded-lg font-medium transition-all',
            selectedSeason === season.id
              ? 'bg-primary-500 text-white shadow-lg'
              : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary-500'
          ]"
        >
          {{ season.icon }} {{ season.name }}
        </button>
      </div>

      <!-- Spring/Summer Lookbook -->
      <div v-if="selectedSeason === 'spring-summer'">
        <section class="mb-16">
          <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
            {{ t('lookbook.springSummer.title') }}
          </h2>
          <p class="text-lg text-gray-600 mb-8">{{ t('lookbook.springSummer.description') }}</p>

          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <!-- Look 1 -->
            <div class="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div class="bg-gray-200 h-96 flex items-center justify-center">
                <span class="text-gray-400">{{ t('lookbook.springSummer.look1.image') }}</span>
              </div>
              <div class="p-6">
                <h3 class="font-bold text-xl mb-3">{{ t('lookbook.springSummer.look1.title') }}</h3>
                <p class="text-gray-600 mb-4">{{ t('lookbook.springSummer.look1.description') }}</p>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center gap-2">
                    <span class="font-semibold">{{ t('lookbook.top') }}:</span>
                    <span>{{ t('lookbook.springSummer.look1.top') }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="font-semibold">{{ t('lookbook.bottom') }}:</span>
                    <span>{{ t('lookbook.springSummer.look1.bottom') }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="font-semibold">{{ t('lookbook.styling') }}:</span>
                    <span>{{ t('lookbook.springSummer.look1.styling') }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Look 2 -->
            <div class="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div class="bg-gray-200 h-96 flex items-center justify-center">
                <span class="text-gray-400">{{ t('lookbook.springSummer.look2.image') }}</span>
              </div>
              <div class="p-6">
                <h3 class="font-bold text-xl mb-3">{{ t('lookbook.springSummer.look2.title') }}</h3>
                <p class="text-gray-600 mb-4">{{ t('lookbook.springSummer.look2.description') }}</p>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center gap-2">
                    <span class="font-semibold">{{ t('lookbook.top') }}:</span>
                    <span>{{ t('lookbook.springSummer.look2.top') }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="font-semibold">{{ t('lookbook.bottom') }}:</span>
                    <span>{{ t('lookbook.springSummer.look2.bottom') }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="font-semibold">{{ t('lookbook.styling') }}:</span>
                    <span>{{ t('lookbook.springSummer.look2.styling') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Key Pieces -->
          <div class="bg-yellow-50 rounded-lg p-8">
            <h3 class="font-bold text-2xl mb-6">{{ t('lookbook.springSummer.keyPieces.title') }}</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <h4 class="font-semibold mb-2">{{ t('lookbook.springSummer.keyPieces.piece1.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('lookbook.springSummer.keyPieces.piece1.description') }}</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">{{ t('lookbook.springSummer.keyPieces.piece2.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('lookbook.springSummer.keyPieces.piece2.description') }}</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">{{ t('lookbook.springSummer.keyPieces.piece3.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('lookbook.springSummer.keyPieces.piece3.description') }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Fall/Winter Lookbook -->
      <div v-if="selectedSeason === 'fall-winter'">
        <section class="mb-16">
          <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
            {{ t('lookbook.fallWinter.title') }}
          </h2>
          <p class="text-lg text-gray-600 mb-8">{{ t('lookbook.fallWinter.description') }}</p>

          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <!-- Look 1 -->
            <div class="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div class="bg-gray-200 h-96 flex items-center justify-center">
                <span class="text-gray-400">{{ t('lookbook.fallWinter.look1.image') }}</span>
              </div>
              <div class="p-6">
                <h3 class="font-bold text-xl mb-3">{{ t('lookbook.fallWinter.look1.title') }}</h3>
                <p class="text-gray-600 mb-4">{{ t('lookbook.fallWinter.look1.description') }}</p>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center gap-2">
                    <span class="font-semibold">{{ t('lookbook.top') }}:</span>
                    <span>{{ t('lookbook.fallWinter.look1.top') }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="font-semibold">{{ t('lookbook.layer') }}:</span>
                    <span>{{ t('lookbook.fallWinter.look1.layer') }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="font-semibold">{{ t('lookbook.bottom') }}:</span>
                    <span>{{ t('lookbook.fallWinter.look1.bottom') }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Look 2 -->
            <div class="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div class="bg-gray-200 h-96 flex items-center justify-center">
                <span class="text-gray-400">{{ t('lookbook.fallWinter.look2.image') }}</span>
              </div>
              <div class="p-6">
                <h3 class="font-bold text-xl mb-3">{{ t('lookbook.fallWinter.look2.title') }}</h3>
                <p class="text-gray-600 mb-4">{{ t('lookbook.fallWinter.look2.description') }}</p>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center gap-2">
                    <span class="font-semibold">{{ t('lookbook.top') }}:</span>
                    <span>{{ t('lookbook.fallWinter.look2.top') }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="font-semibold">{{ t('lookbook.layer') }}:</span>
                    <span>{{ t('lookbook.fallWinter.look2.layer') }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="font-semibold">{{ t('lookbook.bottom') }}:</span>
                    <span>{{ t('lookbook.fallWinter.look2.bottom') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Layering Tips -->
          <div class="bg-orange-50 rounded-lg p-8">
            <h3 class="font-bold text-2xl mb-6">{{ t('lookbook.fallWinter.layeringTips.title') }}</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <h4 class="font-semibold mb-2">{{ t('lookbook.fallWinter.layeringTips.tip1.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('lookbook.fallWinter.layeringTips.tip1.description') }}</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">{{ t('lookbook.fallWinter.layeringTips.tip2.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('lookbook.fallWinter.layeringTips.tip2.description') }}</p>
              </div>
              <div>
                <h4 class="font-semibold mb-2">{{ t('lookbook.fallWinter.layeringTips.tip3.title') }}</h4>
                <p class="text-sm text-gray-600">{{ t('lookbook.fallWinter.layeringTips.tip3.description') }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- CTA -->
      <section class="bg-primary-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('lookbook.cta.title') }}</h3>
        <p class="mb-6 text-gray-600">{{ t('lookbook.cta.description') }}</p>
        <SfButton :tag="NuxtLink" :to="localePath('/')" size="lg">
          {{ t('lookbook.cta.button') }}
        </SfButton>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';
import { ref } from 'vue';

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
setPageMeta(t('lookbook.title'), icon);

await getRobots();
setRobotForStaticPage('Lookbook');

const selectedSeason = ref('spring-summer');

const seasons = [
  { id: 'spring-summer', name: t('lookbook.seasons.springSummer'), icon: '🌸' },
  { id: 'fall-winter', name: t('lookbook.seasons.fallWinter'), icon: '🍂' },
];
</script>
