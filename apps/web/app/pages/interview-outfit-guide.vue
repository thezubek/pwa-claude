<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('interviewOutfit.title') }}
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          {{ t('interviewOutfit.subtitle') }}
        </p>
      </div>

      <!-- Golden Rules -->
      <section class="mb-20 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center">{{ t('interviewOutfit.goldenRules.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6">
            <div class="text-4xl mb-3">📈</div>
            <h3 class="font-bold mb-2">{{ t('interviewOutfit.goldenRules.rule1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('interviewOutfit.goldenRules.rule1.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-4xl mb-3">✅</div>
            <h3 class="font-bold mb-2">{{ t('interviewOutfit.goldenRules.rule2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('interviewOutfit.goldenRules.rule2.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-4xl mb-3">🎯</div>
            <h3 class="font-bold mb-2">{{ t('interviewOutfit.goldenRules.rule3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('interviewOutfit.goldenRules.rule3.description') }}</p>
          </div>
        </div>
      </section>

      <!-- By Industry -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('interviewOutfit.byIndustry.title') }}</h2>

        <div class="space-y-6">
          <!-- Corporate/Finance -->
          <div class="bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="text-4xl">🏦</div>
              <h3 class="font-bold text-2xl">{{ t('interviewOutfit.byIndustry.corporate.title') }}</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('interviewOutfit.women') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('interviewOutfit.byIndustry.corporate.women.item1') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.corporate.women.item2') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.corporate.women.item3') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.corporate.women.item4') }}</li>
                </ul>
              </div>

              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('interviewOutfit.men') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('interviewOutfit.byIndustry.corporate.men.item1') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.corporate.men.item2') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.corporate.men.item3') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.corporate.men.item4') }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Tech/Startup -->
          <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="text-4xl">💻</div>
              <h3 class="font-bold text-2xl">{{ t('interviewOutfit.byIndustry.tech.title') }}</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('interviewOutfit.women') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('interviewOutfit.byIndustry.tech.women.item1') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.tech.women.item2') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.tech.women.item3') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.tech.women.item4') }}</li>
                </ul>
              </div>

              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('interviewOutfit.men') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('interviewOutfit.byIndustry.tech.men.item1') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.tech.men.item2') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.tech.men.item3') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.tech.men.item4') }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Creative -->
          <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="text-4xl">🎨</div>
              <h3 class="font-bold text-2xl">{{ t('interviewOutfit.byIndustry.creative.title') }}</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('interviewOutfit.women') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('interviewOutfit.byIndustry.creative.women.item1') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.creative.women.item2') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.creative.women.item3') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.creative.women.item4') }}</li>
                </ul>
              </div>

              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('interviewOutfit.men') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('interviewOutfit.byIndustry.creative.men.item1') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.creative.men.item2') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.creative.men.item3') }}</li>
                  <li>• {{ t('interviewOutfit.byIndustry.creative.men.item4') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Virtual Interviews -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('interviewOutfit.virtual.title') }}</h2>
        <p class="text-gray-700 mb-8 max-w-3xl">{{ t('interviewOutfit.virtual.description') }}</p>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">📹</div>
            <h3 class="font-bold mb-2">{{ t('interviewOutfit.virtual.colors.title') }}</h3>
            <p class="text-sm text-gray-700 mb-3">{{ t('interviewOutfit.virtual.colors.description') }}</p>
            <ul class="text-sm space-y-1 text-gray-600">
              <li>• {{ t('interviewOutfit.virtual.colors.tip1') }}</li>
              <li>• {{ t('interviewOutfit.virtual.colors.tip2') }}</li>
            </ul>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">👔</div>
            <h3 class="font-bold mb-2">{{ t('interviewOutfit.virtual.dress.title') }}</h3>
            <p class="text-sm text-gray-700 mb-3">{{ t('interviewOutfit.virtual.dress.description') }}</p>
            <ul class="text-sm space-y-1 text-gray-600">
              <li>• {{ t('interviewOutfit.virtual.dress.tip1') }}</li>
              <li>• {{ t('interviewOutfit.virtual.dress.tip2') }}</li>
            </ul>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">🔍</div>
            <h3 class="font-bold mb-2">{{ t('interviewOutfit.virtual.test.title') }}</h3>
            <p class="text-sm text-gray-700 mb-3">{{ t('interviewOutfit.virtual.test.description') }}</p>
            <ul class="text-sm space-y-1 text-gray-600">
              <li>• {{ t('interviewOutfit.virtual.test.tip1') }}</li>
              <li>• {{ t('interviewOutfit.virtual.test.tip2') }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Checklist -->
      <section class="mb-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center">{{ t('interviewOutfit.checklist.title') }}</h2>
        <p class="text-center text-gray-600 mb-8">{{ t('interviewOutfit.checklist.description') }}</p>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 class="font-bold text-lg mb-4">{{ t('interviewOutfit.checklist.nightBefore.title') }}</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">☐</span>
                <span>{{ t('interviewOutfit.checklist.nightBefore.item1') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">☐</span>
                <span>{{ t('interviewOutfit.checklist.nightBefore.item2') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">☐</span>
                <span>{{ t('interviewOutfit.checklist.nightBefore.item3') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">☐</span>
                <span>{{ t('interviewOutfit.checklist.nightBefore.item4') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">☐</span>
                <span>{{ t('interviewOutfit.checklist.nightBefore.item5') }}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-lg mb-4">{{ t('interviewOutfit.checklist.morningOf.title') }}</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">☐</span>
                <span>{{ t('interviewOutfit.checklist.morningOf.item1') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">☐</span>
                <span>{{ t('interviewOutfit.checklist.morningOf.item2') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">☐</span>
                <span>{{ t('interviewOutfit.checklist.morningOf.item3') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">☐</span>
                <span>{{ t('interviewOutfit.checklist.morningOf.item4') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 font-bold">☐</span>
                <span>{{ t('interviewOutfit.checklist.morningOf.item5') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Common Mistakes -->
      <section class="mb-16">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('interviewOutfit.mistakes.title') }}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('interviewOutfit.mistakes.mistake1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('interviewOutfit.mistakes.mistake1.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('interviewOutfit.mistakes.mistake2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('interviewOutfit.mistakes.mistake2.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('interviewOutfit.mistakes.mistake3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('interviewOutfit.mistakes.mistake3.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('interviewOutfit.mistakes.mistake4.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('interviewOutfit.mistakes.mistake4.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('interviewOutfit.mistakes.mistake5.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('interviewOutfit.mistakes.mistake5.description') }}</p>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('interviewOutfit.mistakes.mistake6.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('interviewOutfit.mistakes.mistake6.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-primary-700 text-white rounded-xl p-12 text-center">
        <h2 class="font-bold text-3xl mb-4">{{ t('interviewOutfit.cta.title') }}</h2>
        <p class="text-lg mb-6 opacity-90">{{ t('interviewOutfit.cta.description') }}</p>
        <SfButton size="lg" class="bg-white text-primary-700 hover:bg-gray-100">
          {{ t('interviewOutfit.cta.button') }}
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
  title: 'Interview Outfit Guide - Dress to Impress & Land the Job | HEVENTON',
  description: 'Complete interview attire guide. Learn what to wear for job interviews in corporate, tech, and creative industries.',
  ogTitle: 'Interview Outfit Guide - Professional Interview Attire | HEVENTON',
  ogDescription: 'Industry-specific interview outfit recommendations. Make the best first impression and land your dream job.',
  ogImage: '/images/interview-outfit-og.jpg',
});
</script>
