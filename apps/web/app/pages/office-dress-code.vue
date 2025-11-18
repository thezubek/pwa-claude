<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('officeDressCode.title') }}
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          {{ t('officeDressCode.subtitle') }}
        </p>
      </div>

      <!-- Dress Code Levels -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('officeDressCode.levels.title') }}</h2>

        <div class="space-y-6">
          <!-- Business Formal -->
          <div class="bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="text-5xl">👔</div>
              <div>
                <h3 class="font-bold text-2xl">{{ t('officeDressCode.levels.businessFormal.title') }}</h3>
                <p class="text-sm opacity-90">{{ t('officeDressCode.levels.businessFormal.when') }}</p>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6 mt-6">
              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('officeDressCode.forWomen') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('officeDressCode.levels.businessFormal.women.item1') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessFormal.women.item2') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessFormal.women.item3') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessFormal.women.item4') }}</li>
                </ul>
              </div>

              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('officeDressCode.forMen') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('officeDressCode.levels.businessFormal.men.item1') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessFormal.men.item2') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessFormal.men.item3') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessFormal.men.item4') }}</li>
                </ul>
              </div>
            </div>

            <div class="mt-4 p-4 bg-yellow-500/20 border-l-4 border-yellow-400 rounded">
              <p class="text-sm"><strong>{{ t('officeDressCode.remember') }}:</strong> {{ t('officeDressCode.levels.businessFormal.tip') }}</p>
            </div>
          </div>

          <!-- Business Professional -->
          <div class="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="text-5xl">💼</div>
              <div>
                <h3 class="font-bold text-2xl">{{ t('officeDressCode.levels.businessProfessional.title') }}</h3>
                <p class="text-sm opacity-90">{{ t('officeDressCode.levels.businessProfessional.when') }}</p>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6 mt-6">
              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('officeDressCode.forWomen') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('officeDressCode.levels.businessProfessional.women.item1') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessProfessional.women.item2') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessProfessional.women.item3') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessProfessional.women.item4') }}</li>
                </ul>
              </div>

              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('officeDressCode.forMen') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('officeDressCode.levels.businessProfessional.men.item1') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessProfessional.men.item2') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessProfessional.men.item3') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessProfessional.men.item4') }}</li>
                </ul>
              </div>
            </div>

            <div class="mt-4 p-4 bg-yellow-500/20 border-l-4 border-yellow-400 rounded">
              <p class="text-sm"><strong>{{ t('officeDressCode.remember') }}:</strong> {{ t('officeDressCode.levels.businessProfessional.tip') }}</p>
            </div>
          </div>

          <!-- Business Casual -->
          <div class="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white rounded-xl p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="text-5xl">👕</div>
              <div>
                <h3 class="font-bold text-2xl">{{ t('officeDressCode.levels.businessCasual.title') }}</h3>
                <p class="text-sm opacity-90">{{ t('officeDressCode.levels.businessCasual.when') }}</p>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6 mt-6">
              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('officeDressCode.forWomen') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('officeDressCode.levels.businessCasual.women.item1') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessCasual.women.item2') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessCasual.women.item3') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessCasual.women.item4') }}</li>
                </ul>
              </div>

              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('officeDressCode.forMen') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('officeDressCode.levels.businessCasual.men.item1') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessCasual.men.item2') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessCasual.men.item3') }}</li>
                  <li>• {{ t('officeDressCode.levels.businessCasual.men.item4') }}</li>
                </ul>
              </div>
            </div>

            <div class="mt-4 p-4 bg-yellow-500/20 border-l-4 border-yellow-400 rounded">
              <p class="text-sm"><strong>{{ t('officeDressCode.remember') }}:</strong> {{ t('officeDressCode.levels.businessCasual.tip') }}</p>
            </div>
          </div>

          <!-- Smart Casual -->
          <div class="bg-gradient-to-r from-teal-600 to-teal-400 text-white rounded-xl p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="text-5xl">🎨</div>
              <div>
                <h3 class="font-bold text-2xl">{{ t('officeDressCode.levels.smartCasual.title') }}</h3>
                <p class="text-sm opacity-90">{{ t('officeDressCode.levels.smartCasual.when') }}</p>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6 mt-6">
              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('officeDressCode.forWomen') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('officeDressCode.levels.smartCasual.women.item1') }}</li>
                  <li>• {{ t('officeDressCode.levels.smartCasual.women.item2') }}</li>
                  <li>• {{ t('officeDressCode.levels.smartCasual.women.item3') }}</li>
                  <li>• {{ t('officeDressCode.levels.smartCasual.women.item4') }}</li>
                </ul>
              </div>

              <div class="bg-white/10 rounded-lg p-6">
                <h4 class="font-bold mb-3">{{ t('officeDressCode.forMen') }}</h4>
                <ul class="space-y-2 text-sm">
                  <li>• {{ t('officeDressCode.levels.smartCasual.men.item1') }}</li>
                  <li>• {{ t('officeDressCode.levels.smartCasual.men.item2') }}</li>
                  <li>• {{ t('officeDressCode.levels.smartCasual.men.item3') }}</li>
                  <li>• {{ t('officeDressCode.levels.smartCasual.men.item4') }}</li>
                </ul>
              </div>
            </div>

            <div class="mt-4 p-4 bg-yellow-500/20 border-l-4 border-yellow-400 rounded">
              <p class="text-sm"><strong>{{ t('officeDressCode.remember') }}:</strong> {{ t('officeDressCode.levels.smartCasual.tip') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- By Industry -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('officeDressCode.byIndustry.title') }}</h2>
        <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">{{ t('officeDressCode.byIndustry.description') }}</p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">🏦</div>
            <h3 class="font-bold text-xl mb-2">{{ t('officeDressCode.byIndustry.finance.title') }}</h3>
            <p class="text-sm text-gray-600 mb-3">{{ t('officeDressCode.byIndustry.finance.code') }}</p>
            <p class="text-sm">{{ t('officeDressCode.byIndustry.finance.description') }}</p>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">⚖️</div>
            <h3 class="font-bold text-xl mb-2">{{ t('officeDressCode.byIndustry.law.title') }}</h3>
            <p class="text-sm text-gray-600 mb-3">{{ t('officeDressCode.byIndustry.law.code') }}</p>
            <p class="text-sm">{{ t('officeDressCode.byIndustry.law.description') }}</p>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">💻</div>
            <h3 class="font-bold text-xl mb-2">{{ t('officeDressCode.byIndustry.tech.title') }}</h3>
            <p class="text-sm text-gray-600 mb-3">{{ t('officeDressCode.byIndustry.tech.code') }}</p>
            <p class="text-sm">{{ t('officeDressCode.byIndustry.tech.description') }}</p>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">🎨</div>
            <h3 class="font-bold text-xl mb-2">{{ t('officeDressCode.byIndustry.creative.title') }}</h3>
            <p class="text-sm text-gray-600 mb-3">{{ t('officeDressCode.byIndustry.creative.code') }}</p>
            <p class="text-sm">{{ t('officeDressCode.byIndustry.creative.description') }}</p>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">🏥</div>
            <h3 class="font-bold text-xl mb-2">{{ t('officeDressCode.byIndustry.healthcare.title') }}</h3>
            <p class="text-sm text-gray-600 mb-3">{{ t('officeDressCode.byIndustry.healthcare.code') }}</p>
            <p class="text-sm">{{ t('officeDressCode.byIndustry.healthcare.description') }}</p>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">🎓</div>
            <h3 class="font-bold text-xl mb-2">{{ t('officeDressCode.byIndustry.education.title') }}</h3>
            <p class="text-sm text-gray-600 mb-3">{{ t('officeDressCode.byIndustry.education.code') }}</p>
            <p class="text-sm">{{ t('officeDressCode.byIndustry.education.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Common Mistakes -->
      <section class="mb-16 bg-red-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center flex items-center justify-center gap-3">
          <span class="text-4xl">⚠️</span>
          {{ t('officeDressCode.mistakes.title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('officeDressCode.mistakes.mistake1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('officeDressCode.mistakes.mistake1.description') }}</p>
          </div>
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('officeDressCode.mistakes.mistake2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('officeDressCode.mistakes.mistake2.description') }}</p>
          </div>
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('officeDressCode.mistakes.mistake3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('officeDressCode.mistakes.mistake3.description') }}</p>
          </div>
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('officeDressCode.mistakes.mistake4.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('officeDressCode.mistakes.mistake4.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Pro Tips -->
      <section class="mb-16">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('officeDressCode.proTips.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
            <div class="text-3xl mb-3">👀</div>
            <h3 class="font-bold mb-2">{{ t('officeDressCode.proTips.tip1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('officeDressCode.proTips.tip1.description') }}</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
            <div class="text-3xl mb-3">📈</div>
            <h3 class="font-bold mb-2">{{ t('officeDressCode.proTips.tip2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('officeDressCode.proTips.tip2.description') }}</p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
            <div class="text-3xl mb-3">🎯</div>
            <h3 class="font-bold mb-2">{{ t('officeDressCode.proTips.tip3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('officeDressCode.proTips.tip3.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-primary-700 text-white rounded-xl p-12 text-center">
        <h2 class="font-bold text-3xl mb-4">{{ t('officeDressCode.cta.title') }}</h2>
        <p class="text-lg mb-6 opacity-90">{{ t('officeDressCode.cta.description') }}</p>
        <SfButton size="lg" class="bg-white text-primary-700 hover:bg-gray-100">
          {{ t('officeDressCode.cta.button') }}
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
  title: 'Office Dress Code Guide - What to Wear for Every Workplace | HEVENTON',
  description: 'Master office dress codes from business formal to smart casual. Industry-specific guidance for professional attire.',
  ogTitle: 'Office Dress Code Guide - Professional Attire for Every Industry | HEVENTON',
  ogDescription: 'Complete guide to workplace dress codes with examples for every industry and dress code level.',
  ogImage: '/images/office-dress-code-og.jpg',
});
</script>
