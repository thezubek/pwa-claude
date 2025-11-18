<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Hero -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('sustainability.hero.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ t('sustainability.hero.subtitle') }}
        </p>
      </div>

      <!-- Our Commitment -->
      <section class="mb-16">
        <div class="bg-green-50 rounded-lg p-8 md:p-12">
          <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
            {{ t('sustainability.commitment.title') }}
          </h2>
          <div class="prose prose-lg max-w-none">
            <p>{{ t('sustainability.commitment.paragraph1') }}</p>
            <p>{{ t('sustainability.commitment.paragraph2') }}</p>
            <p>{{ t('sustainability.commitment.paragraph3') }}</p>
          </div>
        </div>
      </section>

      <!-- Key Initiatives -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8 text-center">
          {{ t('sustainability.initiatives.title') }}
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-4xl">🌱</span>
            </div>
            <h3 class="font-bold text-lg mb-3">{{ t('sustainability.initiatives.organic.title') }}</h3>
            <p class="text-gray-600">{{ t('sustainability.initiatives.organic.description') }}</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-4xl">♻️</span>
            </div>
            <h3 class="font-bold text-lg mb-3">{{ t('sustainability.initiatives.recycling.title') }}</h3>
            <p class="text-gray-600">{{ t('sustainability.initiatives.recycling.description') }}</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-4xl">🏭</span>
            </div>
            <h3 class="font-bold text-lg mb-3">{{ t('sustainability.initiatives.manufacturing.title') }}</h3>
            <p class="text-gray-600">{{ t('sustainability.initiatives.manufacturing.description') }}</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-4xl">👥</span>
            </div>
            <h3 class="font-bold text-lg mb-3">{{ t('sustainability.initiatives.fairTrade.title') }}</h3>
            <p class="text-gray-600">{{ t('sustainability.initiatives.fairTrade.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Materials & Sourcing -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
          {{ t('sustainability.materials.title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="border-l-4 border-green-500 pl-6 py-4">
            <h3 class="font-bold text-xl mb-3">{{ t('sustainability.materials.cotton.title') }}</h3>
            <p class="text-gray-600 mb-3">{{ t('sustainability.materials.cotton.description') }}</p>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>{{ t('sustainability.materials.cotton.point1') }}</li>
              <li>{{ t('sustainability.materials.cotton.point2') }}</li>
              <li>{{ t('sustainability.materials.cotton.point3') }}</li>
            </ul>
          </div>
          <div class="border-l-4 border-green-500 pl-6 py-4">
            <h3 class="font-bold text-xl mb-3">{{ t('sustainability.materials.linen.title') }}</h3>
            <p class="text-gray-600 mb-3">{{ t('sustainability.materials.linen.description') }}</p>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>{{ t('sustainability.materials.linen.point1') }}</li>
              <li>{{ t('sustainability.materials.linen.point2') }}</li>
              <li>{{ t('sustainability.materials.linen.point3') }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Production Practices -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
          {{ t('sustainability.production.title') }}
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-50 rounded-lg p-6">
            <h4 class="font-semibold text-lg mb-3">{{ t('sustainability.production.waterSaving.title') }}</h4>
            <p class="text-gray-600">{{ t('sustainability.production.waterSaving.description') }}</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-6">
            <h4 class="font-semibold text-lg mb-3">{{ t('sustainability.production.energyEfficient.title') }}</h4>
            <p class="text-gray-600">{{ t('sustainability.production.energyEfficient.description') }}</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-6">
            <h4 class="font-semibold text-lg mb-3">{{ t('sustainability.production.wasteReduction.title') }}</h4>
            <p class="text-gray-600">{{ t('sustainability.production.wasteReduction.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8 text-center">
          {{ t('sustainability.certifications.title') }}
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-gray-200 rounded-lg h-32 mb-4 flex items-center justify-center">
              <span class="text-gray-500 text-sm">{{ t('sustainability.certifications.gots') }}</span>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-gray-200 rounded-lg h-32 mb-4 flex items-center justify-center">
              <span class="text-gray-500 text-sm">{{ t('sustainability.certifications.oeko') }}</span>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-gray-200 rounded-lg h-32 mb-4 flex items-center justify-center">
              <span class="text-gray-500 text-sm">{{ t('sustainability.certifications.fairTrade') }}</span>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-gray-200 rounded-lg h-32 mb-4 flex items-center justify-center">
              <span class="text-gray-500 text-sm">{{ t('sustainability.certifications.bci') }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Packaging -->
      <section class="mb-16">
        <div class="bg-blue-50 rounded-lg p-8">
          <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
            {{ t('sustainability.packaging.title') }}
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <span class="text-green-600 text-xl shrink-0">✓</span>
                  <span>{{ t('sustainability.packaging.point1') }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-600 text-xl shrink-0">✓</span>
                  <span>{{ t('sustainability.packaging.point2') }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-600 text-xl shrink-0">✓</span>
                  <span>{{ t('sustainability.packaging.point3') }}</span>
                </li>
              </ul>
            </div>
            <div>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <span class="text-green-600 text-xl shrink-0">✓</span>
                  <span>{{ t('sustainability.packaging.point4') }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-600 text-xl shrink-0">✓</span>
                  <span>{{ t('sustainability.packaging.point5') }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-600 text-xl shrink-0">✓</span>
                  <span>{{ t('sustainability.packaging.point6') }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Goals & Transparency -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
          {{ t('sustainability.goals.title') }}
        </h2>
        <div class="space-y-6">
          <div class="border-l-4 border-primary-500 pl-6 py-4">
            <h4 class="font-semibold text-lg mb-2">{{ t('sustainability.goals.goal1.title') }}</h4>
            <p class="text-gray-600">{{ t('sustainability.goals.goal1.description') }}</p>
          </div>
          <div class="border-l-4 border-primary-500 pl-6 py-4">
            <h4 class="font-semibold text-lg mb-2">{{ t('sustainability.goals.goal2.title') }}</h4>
            <p class="text-gray-600">{{ t('sustainability.goals.goal2.description') }}</p>
          </div>
          <div class="border-l-4 border-primary-500 pl-6 py-4">
            <h4 class="font-semibold text-lg mb-2">{{ t('sustainability.goals.goal3.title') }}</h4>
            <p class="text-gray-600">{{ t('sustainability.goals.goal3.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-green-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('sustainability.cta.title') }}</h3>
        <p class="mb-6 text-gray-600">{{ t('sustainability.cta.description') }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <SfButton :tag="NuxtLink" :to="localePath('/')" size="lg">
            {{ t('sustainability.cta.shopButton') }}
          </SfButton>
          <SfButton :tag="NuxtLink" :to="localePath('/contact')" size="lg" variant="secondary">
            {{ t('sustainability.cta.contactButton') }}
          </SfButton>
        </div>
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
setPageMeta(t('sustainability.title'), icon);

await getRobots();
setRobotForStaticPage('Sustainability');
</script>
