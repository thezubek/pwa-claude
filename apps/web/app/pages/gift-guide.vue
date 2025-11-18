<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('giftGuide.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ t('giftGuide.subtitle') }}
        </p>
      </div>

      <!-- Gift by Recipient -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
          {{ t('giftGuide.byRecipient.title') }}
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4">👩</div>
            <h3 class="font-bold text-lg mb-2">{{ t('giftGuide.byRecipient.forHer.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('giftGuide.byRecipient.forHer.description') }}</p>
            <ul class="text-sm space-y-2">
              <li>• {{ t('giftGuide.byRecipient.forHer.item1') }}</li>
              <li>• {{ t('giftGuide.byRecipient.forHer.item2') }}</li>
              <li>• {{ t('giftGuide.byRecipient.forHer.item3') }}</li>
            </ul>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4">👨</div>
            <h3 class="font-bold text-lg mb-2">{{ t('giftGuide.byRecipient.forHim.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('giftGuide.byRecipient.forHim.description') }}</p>
            <ul class="text-sm space-y-2">
              <li>• {{ t('giftGuide.byRecipient.forHim.item1') }}</li>
              <li>• {{ t('giftGuide.byRecipient.forHim.item2') }}</li>
              <li>• {{ t('giftGuide.byRecipient.forHim.item3') }}</li>
            </ul>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4">👔</div>
            <h3 class="font-bold text-lg mb-2">{{ t('giftGuide.byRecipient.professional.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('giftGuide.byRecipient.professional.description') }}</p>
            <ul class="text-sm space-y-2">
              <li>• {{ t('giftGuide.byRecipient.professional.item1') }}</li>
              <li>• {{ t('giftGuide.byRecipient.professional.item2') }}</li>
              <li>• {{ t('giftGuide.byRecipient.professional.item3') }}</li>
            </ul>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-5xl mb-4">🎓</div>
            <h3 class="font-bold text-lg mb-2">{{ t('giftGuide.byRecipient.graduate.title') }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ t('giftGuide.byRecipient.graduate.description') }}</p>
            <ul class="text-sm space-y-2">
              <li>• {{ t('giftGuide.byRecipient.graduate.item1') }}</li>
              <li>• {{ t('giftGuide.byRecipient.graduate.item2') }}</li>
              <li>• {{ t('giftGuide.byRecipient.graduate.item3') }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Gift by Budget -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
          {{ t('giftGuide.byBudget.title') }}
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-blue-50 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-3">{{ t('giftGuide.byBudget.under50.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('giftGuide.byBudget.under50.description') }}</p>
            <ul class="space-y-2 text-sm">
              <li>✓ {{ t('giftGuide.byBudget.under50.item1') }}</li>
              <li>✓ {{ t('giftGuide.byBudget.under50.item2') }}</li>
              <li>✓ {{ t('giftGuide.byBudget.under50.item3') }}</li>
            </ul>
          </div>

          <div class="bg-blue-50 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-3">{{ t('giftGuide.byBudget.under100.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('giftGuide.byBudget.under100.description') }}</p>
            <ul class="space-y-2 text-sm">
              <li>✓ {{ t('giftGuide.byBudget.under100.item1') }}</li>
              <li>✓ {{ t('giftGuide.byBudget.under100.item2') }}</li>
              <li>✓ {{ t('giftGuide.byBudget.under100.item3') }}</li>
            </ul>
          </div>

          <div class="bg-blue-50 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-3">{{ t('giftGuide.byBudget.luxury.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('giftGuide.byBudget.luxury.description') }}</p>
            <ul class="space-y-2 text-sm">
              <li>✓ {{ t('giftGuide.byBudget.luxury.item1') }}</li>
              <li>✓ {{ t('giftGuide.byBudget.luxury.item2') }}</li>
              <li>✓ {{ t('giftGuide.byBudget.luxury.item3') }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Gift by Occasion -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
          {{ t('giftGuide.byOccasion.title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="border-l-4 border-pink-500 pl-6 py-4">
            <h3 class="font-bold text-lg mb-2">{{ t('giftGuide.byOccasion.birthday.title') }}</h3>
            <p class="text-gray-600">{{ t('giftGuide.byOccasion.birthday.description') }}</p>
          </div>
          <div class="border-l-4 border-pink-500 pl-6 py-4">
            <h3 class="font-bold text-lg mb-2">{{ t('giftGuide.byOccasion.anniversary.title') }}</h3>
            <p class="text-gray-600">{{ t('giftGuide.byOccasion.anniversary.description') }}</p>
          </div>
          <div class="border-l-4 border-pink-500 pl-6 py-4">
            <h3 class="font-bold text-lg mb-2">{{ t('giftGuide.byOccasion.mothersDay.title') }}</h3>
            <p class="text-gray-600">{{ t('giftGuide.byOccasion.mothersDay.description') }}</p>
          </div>
          <div class="border-l-4 border-pink-500 pl-6 py-4">
            <h3 class="font-bold text-lg mb-2">{{ t('giftGuide.byOccasion.fathersDay.title') }}</h3>
            <p class="text-gray-600">{{ t('giftGuide.byOccasion.fathersDay.description') }}</p>
          </div>
          <div class="border-l-4 border-pink-500 pl-6 py-4">
            <h3 class="font-bold text-lg mb-2">{{ t('giftGuide.byOccasion.christmas.title') }}</h3>
            <p class="text-gray-600">{{ t('giftGuide.byOccasion.christmas.description') }}</p>
          </div>
          <div class="border-l-4 border-pink-500 pl-6 py-4">
            <h3 class="font-bold text-lg mb-2">{{ t('giftGuide.byOccasion.graduation.title') }}</h3>
            <p class="text-gray-600">{{ t('giftGuide.byOccasion.graduation.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Gift Sets -->
      <section class="mb-16 bg-primary-50 rounded-lg p-8">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('giftGuide.giftSets.title') }}
        </h2>
        <p class="text-gray-600 mb-8">{{ t('giftGuide.giftSets.description') }}</p>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6">
            <h4 class="font-bold mb-2">{{ t('giftGuide.giftSets.set1.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('giftGuide.giftSets.set1.description') }}</p>
          </div>
          <div class="bg-white rounded-lg p-6">
            <h4 class="font-bold mb-2">{{ t('giftGuide.giftSets.set2.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('giftGuide.giftSets.set2.description') }}</p>
          </div>
          <div class="bg-white rounded-lg p-6">
            <h4 class="font-bold mb-2">{{ t('giftGuide.giftSets.set3.title') }}</h4>
            <p class="text-sm text-gray-600">{{ t('giftGuide.giftSets.set3.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Gift Wrapping -->
      <section class="mb-16">
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="flex-1">
              <h3 class="font-bold text-2xl mb-4">{{ t('giftGuide.wrapping.title') }}</h3>
              <p class="text-gray-600 mb-4">{{ t('giftGuide.wrapping.description') }}</p>
              <ul class="space-y-2">
                <li class="flex items-center gap-2">
                  <span class="text-primary-500">✓</span>
                  <span>{{ t('giftGuide.wrapping.feature1') }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-primary-500">✓</span>
                  <span>{{ t('giftGuide.wrapping.feature2') }}</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-primary-500">✓</span>
                  <span>{{ t('giftGuide.wrapping.feature3') }}</span>
                </li>
              </ul>
            </div>
            <div class="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span class="text-gray-400">{{ t('giftGuide.wrapping.imageCaption') }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-primary-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('giftGuide.cta.title') }}</h3>
        <p class="mb-6 text-gray-600">{{ t('giftGuide.cta.description') }}</p>
        <SfButton :tag="NuxtLink" :to="localePath('/')" size="lg">
          {{ t('giftGuide.cta.button') }}
        </SfButton>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';

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
setPageMeta(t('giftGuide.title'), icon);

await getRobots();
setRobotForStaticPage('GiftGuide');
</script>
