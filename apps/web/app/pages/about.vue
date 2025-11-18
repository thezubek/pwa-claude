<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('about.hero.title') }}
        </h1>
        <p class="text-xl max-w-3xl mx-auto text-gray-600">
          {{ t('about.hero.subtitle') }}
        </p>
      </div>

      <!-- Our Story -->
      <section class="mb-16">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
              {{ t('about.story.title') }}
            </h2>
            <div class="space-y-4 text-gray-700">
              <p>{{ t('about.story.paragraph1') }}</p>
              <p>{{ t('about.story.paragraph2') }}</p>
              <p>{{ t('about.story.paragraph3') }}</p>
            </div>
          </div>
          <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p class="text-gray-500">{{ t('about.story.imageCaption') }}</p>
          </div>
        </div>
      </section>

      <!-- Our Values -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8 text-center">
          {{ t('about.values.title') }}
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="text-5xl mb-4">✨</div>
            <h3 class="font-bold text-xl mb-3">{{ t('about.values.quality.title') }}</h3>
            <p class="text-gray-600">{{ t('about.values.quality.description') }}</p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🌱</div>
            <h3 class="font-bold text-xl mb-3">{{ t('about.values.sustainability.title') }}</h3>
            <p class="text-gray-600">{{ t('about.values.sustainability.description') }}</p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">⏰</div>
            <h3 class="font-bold text-xl mb-3">{{ t('about.values.timeless.title') }}</h3>
            <p class="text-gray-600">{{ t('about.values.timeless.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Quality Commitment -->
      <section class="mb-16 bg-primary-50 rounded-lg p-8 md:p-12">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('about.quality.title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold text-lg mb-3">{{ t('about.quality.materials.title') }}</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">✓</span>
                <span>{{ t('about.quality.materials.point1') }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">✓</span>
                <span>{{ t('about.quality.materials.point2') }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">✓</span>
                <span>{{ t('about.quality.materials.point3') }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">✓</span>
                <span>{{ t('about.quality.materials.point4') }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-3">{{ t('about.quality.craftsmanship.title') }}</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">✓</span>
                <span>{{ t('about.quality.craftsmanship.point1') }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">✓</span>
                <span>{{ t('about.quality.craftsmanship.point2') }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">✓</span>
                <span>{{ t('about.quality.craftsmanship.point3') }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-500 mr-2">✓</span>
                <span>{{ t('about.quality.craftsmanship.point4') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Sustainability -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('about.sustainability.title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="border-l-4 border-green-500 pl-6 py-4">
            <h3 class="font-semibold text-lg mb-2">{{ t('about.sustainability.sourcing.title') }}</h3>
            <p class="text-gray-600">{{ t('about.sustainability.sourcing.description') }}</p>
          </div>
          <div class="border-l-4 border-green-500 pl-6 py-4">
            <h3 class="font-semibold text-lg mb-2">{{ t('about.sustainability.production.title') }}</h3>
            <p class="text-gray-600">{{ t('about.sustainability.production.description') }}</p>
          </div>
          <div class="border-l-4 border-green-500 pl-6 py-4">
            <h3 class="font-semibold text-lg mb-2">{{ t('about.sustainability.packaging.title') }}</h3>
            <p class="text-gray-600">{{ t('about.sustainability.packaging.description') }}</p>
          </div>
          <div class="border-l-4 border-green-500 pl-6 py-4">
            <h3 class="font-semibold text-lg mb-2">{{ t('about.sustainability.longevity.title') }}</h3>
            <p class="text-gray-600">{{ t('about.sustainability.longevity.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Why Choose HEVENTON -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8 text-center">
          {{ t('about.whyChoose.title') }}
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-3xl mb-3">👔</div>
            <h3 class="font-bold mb-2">{{ t('about.whyChoose.specialized.title') }}</h3>
            <p class="text-sm text-gray-600">{{ t('about.whyChoose.specialized.description') }}</p>
          </div>
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-3xl mb-3">💎</div>
            <h3 class="font-bold mb-2">{{ t('about.whyChoose.premiumQuality.title') }}</h3>
            <p class="text-sm text-gray-600">{{ t('about.whyChoose.premiumQuality.description') }}</p>
          </div>
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-3xl mb-3">📐</div>
            <h3 class="font-bold mb-2">{{ t('about.whyChoose.perfectFit.title') }}</h3>
            <p class="text-sm text-gray-600">{{ t('about.whyChoose.perfectFit.description') }}</p>
          </div>
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-3xl mb-3">🤝</div>
            <h3 class="font-bold mb-2">{{ t('about.whyChoose.customerCare.title') }}</h3>
            <p class="text-sm text-gray-600">{{ t('about.whyChoose.customerCare.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Customer Promise -->
      <section class="mb-16 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg p-8 md:p-12">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('about.promise.title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex items-start">
            <span class="text-2xl mr-4">🚚</span>
            <div>
              <h3 class="font-semibold text-lg mb-2">{{ t('about.promise.shipping.title') }}</h3>
              <p class="text-primary-100">{{ t('about.promise.shipping.description') }}</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="text-2xl mr-4">🔄</span>
            <div>
              <h3 class="font-semibold text-lg mb-2">{{ t('about.promise.returns.title') }}</h3>
              <p class="text-primary-100">{{ t('about.promise.returns.description') }}</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="text-2xl mr-4">✅</span>
            <div>
              <h3 class="font-semibold text-lg mb-2">{{ t('about.promise.quality.title') }}</h3>
              <p class="text-primary-100">{{ t('about.promise.quality.description') }}</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="text-2xl mr-4">💬</span>
            <div>
              <h3 class="font-semibold text-lg mb-2">{{ t('about.promise.support.title') }}</h3>
              <p class="text-primary-100">{{ t('about.promise.support.description') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section (Optional) -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8 text-center">
          {{ t('about.team.title') }}
        </h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          {{ t('about.team.description') }}
        </p>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <span class="text-4xl">👤</span>
            </div>
            <h3 class="font-bold text-lg">{{ t('about.team.member1.name') }}</h3>
            <p class="text-sm text-gray-600">{{ t('about.team.member1.role') }}</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <span class="text-4xl">👤</span>
            </div>
            <h3 class="font-bold text-lg">{{ t('about.team.member2.name') }}</h3>
            <p class="text-sm text-gray-600">{{ t('about.team.member2.role') }}</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <span class="text-4xl">👤</span>
            </div>
            <h3 class="font-bold text-lg">{{ t('about.team.member3.name') }}</h3>
            <p class="text-sm text-gray-600">{{ t('about.team.member3.role') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-primary-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('about.cta.title') }}</h3>
        <p class="mb-6 text-gray-600">{{ t('about.cta.description') }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <SfButton :tag="NuxtLink" :to="localePath('/')" size="lg">
            {{ t('about.cta.shopButton') }}
          </SfButton>
          <SfButton :tag="NuxtLink" :to="localePath('/contact')" size="lg" variant="secondary">
            {{ t('about.cta.contactButton') }}
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
setPageMeta(t('about.title'), icon);

await getRobots();
setRobotForStaticPage('About');
</script>
