<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('virtualMeeting.title') }}
        </h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          {{ t('virtualMeeting.subtitle') }}
        </p>
      </div>

      <!-- The Camera Frame Rule -->
      <section class="mb-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center">{{ t('virtualMeeting.cameraFrame.title') }}</h2>
        <p class="text-center text-gray-700 mb-8 max-w-2xl mx-auto">{{ t('virtualMeeting.cameraFrame.description') }}</p>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6">
            <div class="text-4xl mb-3">📏</div>
            <h3 class="font-bold mb-2">{{ t('virtualMeeting.cameraFrame.rule1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('virtualMeeting.cameraFrame.rule1.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-4xl mb-3">🎨</div>
            <h3 class="font-bold mb-2">{{ t('virtualMeeting.cameraFrame.rule2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('virtualMeeting.cameraFrame.rule2.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <div class="text-4xl mb-3">✨</div>
            <h3 class="font-bold mb-2">{{ t('virtualMeeting.cameraFrame.rule3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('virtualMeeting.cameraFrame.rule3.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Best Colors for Video -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('virtualMeeting.colors.title') }}</h2>

        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <!-- Best Colors -->
          <div class="bg-green-50 border-2 border-green-200 rounded-lg p-8">
            <h3 class="font-bold text-2xl mb-4 text-green-800 flex items-center gap-2">
              <span class="text-3xl">✓</span>
              {{ t('virtualMeeting.colors.best.title') }}
            </h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-blue-500 rounded flex-shrink-0"></div>
                <div>
                  <p class="font-semibold">{{ t('virtualMeeting.colors.best.blue.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('virtualMeeting.colors.best.blue.description') }}</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-purple-600 rounded flex-shrink-0"></div>
                <div>
                  <p class="font-semibold">{{ t('virtualMeeting.colors.best.purple.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('virtualMeeting.colors.best.purple.description') }}</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-gray-600 rounded flex-shrink-0"></div>
                <div>
                  <p class="font-semibold">{{ t('virtualMeeting.colors.best.gray.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('virtualMeeting.colors.best.gray.description') }}</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-teal-600 rounded flex-shrink-0"></div>
                <div>
                  <p class="font-semibold">{{ t('virtualMeeting.colors.best.jewel.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('virtualMeeting.colors.best.jewel.description') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Avoid Colors -->
          <div class="bg-red-50 border-2 border-red-200 rounded-lg p-8">
            <h3 class="font-bold text-2xl mb-4 text-red-800 flex items-center gap-2">
              <span class="text-3xl">✗</span>
              {{ t('virtualMeeting.colors.avoid.title') }}
            </h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-white border-2 border-gray-400 rounded flex-shrink-0"></div>
                <div>
                  <p class="font-semibold">{{ t('virtualMeeting.colors.avoid.white.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('virtualMeeting.colors.avoid.white.description') }}</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-black rounded flex-shrink-0"></div>
                <div>
                  <p class="font-semibold">{{ t('virtualMeeting.colors.avoid.black.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('virtualMeeting.colors.avoid.black.description') }}</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-red-500 rounded flex-shrink-0"></div>
                <div>
                  <p class="font-semibold">{{ t('virtualMeeting.colors.avoid.bright.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('virtualMeeting.colors.avoid.bright.description') }}</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded flex-shrink-0" style="background: repeating-linear-gradient(45deg, #000, #000 5px, #fff 5px, #fff 10px);"></div>
                <div>
                  <p class="font-semibold">{{ t('virtualMeeting.colors.avoid.patterns.title') }}</p>
                  <p class="text-sm text-gray-700">{{ t('virtualMeeting.colors.avoid.patterns.description') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Outfit Recommendations -->
      <section class="mb-20">
        <h2 class="font-bold text-3xl mb-8">{{ t('virtualMeeting.outfits.title') }}</h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Women -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
            <h3 class="font-bold text-xl mb-6">{{ t('virtualMeeting.outfits.women.title') }}</h3>

            <div class="space-y-4 mb-6">
              <div>
                <h4 class="font-semibold mb-2">{{ t('virtualMeeting.outfits.women.formal.title') }}</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• {{ t('virtualMeeting.outfits.women.formal.item1') }}</li>
                  <li>• {{ t('virtualMeeting.outfits.women.formal.item2') }}</li>
                  <li>• {{ t('virtualMeeting.outfits.women.formal.item3') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold mb-2">{{ t('virtualMeeting.outfits.women.casual.title') }}</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• {{ t('virtualMeeting.outfits.women.casual.item1') }}</li>
                  <li>• {{ t('virtualMeeting.outfits.women.casual.item2') }}</li>
                  <li>• {{ t('virtualMeeting.outfits.women.casual.item3') }}</li>
                </ul>
              </div>
            </div>

            <div class="p-4 bg-blue-50 rounded">
              <p class="text-sm"><strong>{{ t('virtualMeeting.proTip') }}:</strong> {{ t('virtualMeeting.outfits.women.tip') }}</p>
            </div>
          </div>

          <!-- Men -->
          <div class="bg-white border-2 border-gray-200 rounded-lg p-8">
            <h3 class="font-bold text-xl mb-6">{{ t('virtualMeeting.outfits.men.title') }}</h3>

            <div class="space-y-4 mb-6">
              <div>
                <h4 class="font-semibold mb-2">{{ t('virtualMeeting.outfits.men.formal.title') }}</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• {{ t('virtualMeeting.outfits.men.formal.item1') }}</li>
                  <li>• {{ t('virtualMeeting.outfits.men.formal.item2') }}</li>
                  <li>• {{ t('virtualMeeting.outfits.men.formal.item3') }}</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold mb-2">{{ t('virtualMeeting.outfits.men.casual.title') }}</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• {{ t('virtualMeeting.outfits.men.casual.item1') }}</li>
                  <li>• {{ t('virtualMeeting.outfits.men.casual.item2') }}</li>
                  <li>• {{ t('virtualMeeting.outfits.men.casual.item3') }}</li>
                </ul>
              </div>
            </div>

            <div class="p-4 bg-blue-50 rounded">
              <p class="text-sm"><strong>{{ t('virtualMeeting.proTip') }}:</strong> {{ t('virtualMeeting.outfits.men.tip') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Technical Setup -->
      <section class="mb-16">
        <h2 class="font-bold text-3xl mb-8 text-center">{{ t('virtualMeeting.technical.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">💡</div>
            <h3 class="font-bold mb-2">{{ t('virtualMeeting.technical.lighting.title') }}</h3>
            <p class="text-sm text-gray-700 mb-3">{{ t('virtualMeeting.technical.lighting.description') }}</p>
            <ul class="text-sm space-y-1 text-gray-600">
              <li>• {{ t('virtualMeeting.technical.lighting.tip1') }}</li>
              <li>• {{ t('virtualMeeting.technical.lighting.tip2') }}</li>
              <li>• {{ t('virtualMeeting.technical.lighting.tip3') }}</li>
            </ul>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">🖼️</div>
            <h3 class="font-bold mb-2">{{ t('virtualMeeting.technical.background.title') }}</h3>
            <p class="text-sm text-gray-700 mb-3">{{ t('virtualMeeting.technical.background.description') }}</p>
            <ul class="text-sm space-y-1 text-gray-600">
              <li>• {{ t('virtualMeeting.technical.background.tip1') }}</li>
              <li>• {{ t('virtualMeeting.technical.background.tip2') }}</li>
              <li>• {{ t('virtualMeeting.technical.background.tip3') }}</li>
            </ul>
          </div>

          <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div class="text-4xl mb-3">📹</div>
            <h3 class="font-bold mb-2">{{ t('virtualMeeting.technical.camera.title') }}</h3>
            <p class="text-sm text-gray-700 mb-3">{{ t('virtualMeeting.technical.camera.description') }}</p>
            <ul class="text-sm space-y-1 text-gray-600">
              <li>• {{ t('virtualMeeting.technical.camera.tip1') }}</li>
              <li>• {{ t('virtualMeeting.technical.camera.tip2') }}</li>
              <li>• {{ t('virtualMeeting.technical.camera.tip3') }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Common Mistakes -->
      <section class="mb-16 bg-amber-50 rounded-xl p-8">
        <h2 class="font-bold text-3xl mb-6 text-center">{{ t('virtualMeeting.mistakes.title') }}</h2>
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('virtualMeeting.mistakes.mistake1.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('virtualMeeting.mistakes.mistake1.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('virtualMeeting.mistakes.mistake2.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('virtualMeeting.mistakes.mistake2.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('virtualMeeting.mistakes.mistake3.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('virtualMeeting.mistakes.mistake3.description') }}</p>
          </div>

          <div class="bg-white rounded-lg p-6">
            <h3 class="font-bold mb-2 text-red-700">{{ t('virtualMeeting.mistakes.mistake4.title') }}</h3>
            <p class="text-sm text-gray-700">{{ t('virtualMeeting.mistakes.mistake4.description') }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="bg-primary-700 text-white rounded-xl p-12 text-center">
        <h2 class="font-bold text-3xl mb-4">{{ t('virtualMeeting.cta.title') }}</h2>
        <p class="text-lg mb-6 opacity-90">{{ t('virtualMeeting.cta.description') }}</p>
        <SfButton size="lg" class="bg-white text-primary-700 hover:bg-gray-100">
          {{ t('virtualMeeting.cta.button') }}
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
  title: 'Virtual Meeting Style Guide - Look Professional on Camera | HEVENTON',
  description: 'Master video call styling. Learn which colors, patterns, and styles look best on camera for professional virtual meetings.',
  ogTitle: 'Virtual Meeting Style Guide - Professional Video Call Attire | HEVENTON',
  ogDescription: 'Complete guide to looking great on video calls. Best colors, outfits, lighting, and camera setup for virtual meetings.',
  ogImage: '/images/virtual-meeting-style-og.jpg',
});
</script>
