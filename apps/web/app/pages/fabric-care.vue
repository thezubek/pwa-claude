<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
        {{ t('fabricCare.title') }}
      </h1>

      <!-- Introduction -->
      <div class="mb-10 p-6 bg-primary-100 rounded-lg">
        <p class="text-lg">{{ t('fabricCare.intro') }}</p>
      </div>

      <!-- General Care Tips -->
      <section class="mb-12">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('fabricCare.generalTips.title') }}
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-4xl mb-3">🧺</div>
            <h3 class="font-bold text-lg mb-2">{{ t('fabricCare.generalTips.sortLaundry.title') }}</h3>
            <p class="text-sm">{{ t('fabricCare.generalTips.sortLaundry.description') }}</p>
          </div>
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-4xl mb-3">🌡️</div>
            <h3 class="font-bold text-lg mb-2">{{ t('fabricCare.generalTips.checkTemp.title') }}</h3>
            <p class="text-sm">{{ t('fabricCare.generalTips.checkTemp.description') }}</p>
          </div>
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-4xl mb-3">🔄</div>
            <h3 class="font-bold text-lg mb-2">{{ t('fabricCare.generalTips.turnInside.title') }}</h3>
            <p class="text-sm">{{ t('fabricCare.generalTips.turnInside.description') }}</p>
          </div>
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-4xl mb-3">🧴</div>
            <h3 class="font-bold text-lg mb-2">{{ t('fabricCare.generalTips.mildDetergent.title') }}</h3>
            <p class="text-sm">{{ t('fabricCare.generalTips.mildDetergent.description') }}</p>
          </div>
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-4xl mb-3">❌</div>
            <h3 class="font-bold text-lg mb-2">{{ t('fabricCare.generalTips.avoidOverload.title') }}</h3>
            <p class="text-sm">{{ t('fabricCare.generalTips.avoidOverload.description') }}</p>
          </div>
          <div class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
            <div class="text-4xl mb-3">☀️</div>
            <h3 class="font-bold text-lg mb-2">{{ t('fabricCare.generalTips.airDry.title') }}</h3>
            <p class="text-sm">{{ t('fabricCare.generalTips.airDry.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Care by Fabric Type -->
      <section class="mb-12">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('fabricCare.byFabric.title') }}
        </h2>

        <!-- Cotton -->
        <div class="mb-8 border rounded-lg overflow-hidden">
          <div class="bg-primary-500 text-white px-6 py-4">
            <h3 class="font-bold text-xl">{{ t('fabricCare.cotton.title') }}</h3>
          </div>
          <div class="p-6">
            <p class="mb-4">{{ t('fabricCare.cotton.description') }}</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold mb-2">{{ t('fabricCare.washing') }}</h4>
                <ul class="list-disc list-inside space-y-1 text-sm">
                  <li>{{ t('fabricCare.cotton.washing.temp') }}</li>
                  <li>{{ t('fabricCare.cotton.washing.cycle') }}</li>
                  <li>{{ t('fabricCare.cotton.washing.shrinkage') }}</li>
                  <li>{{ t('fabricCare.cotton.washing.whites') }}</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold mb-2">{{ t('fabricCare.drying') }}</h4>
                <ul class="list-disc list-inside space-y-1 text-sm">
                  <li>{{ t('fabricCare.cotton.drying.tumble') }}</li>
                  <li>{{ t('fabricCare.cotton.drying.airDry') }}</li>
                  <li>{{ t('fabricCare.cotton.drying.shape') }}</li>
                </ul>
                <h4 class="font-semibold mt-4 mb-2">{{ t('fabricCare.ironing') }}</h4>
                <ul class="list-disc list-inside space-y-1 text-sm">
                  <li>{{ t('fabricCare.cotton.ironing.heat') }}</li>
                  <li>{{ t('fabricCare.cotton.ironing.steam') }}</li>
                  <li>{{ t('fabricCare.cotton.ironing.damp') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Linen -->
        <div class="mb-8 border rounded-lg overflow-hidden">
          <div class="bg-primary-500 text-white px-6 py-4">
            <h3 class="font-bold text-xl">{{ t('fabricCare.linen.title') }}</h3>
          </div>
          <div class="p-6">
            <p class="mb-4">{{ t('fabricCare.linen.description') }}</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold mb-2">{{ t('fabricCare.washing') }}</h4>
                <ul class="list-disc list-inside space-y-1 text-sm">
                  <li>{{ t('fabricCare.linen.washing.temp') }}</li>
                  <li>{{ t('fabricCare.linen.washing.gentle') }}</li>
                  <li>{{ t('fabricCare.linen.washing.detergent') }}</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold mb-2">{{ t('fabricCare.drying') }}</h4>
                <ul class="list-disc list-inside space-y-1 text-sm">
                  <li>{{ t('fabricCare.linen.drying.airDry') }}</li>
                  <li>{{ t('fabricCare.linen.drying.wrinkles') }}</li>
                </ul>
                <h4 class="font-semibold mt-4 mb-2">{{ t('fabricCare.ironing') }}</h4>
                <ul class="list-disc list-inside space-y-1 text-sm">
                  <li>{{ t('fabricCare.linen.ironing.highHeat') }}</li>
                  <li>{{ t('fabricCare.linen.ironing.slightlyDamp') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Synthetic Blends -->
        <div class="mb-8 border rounded-lg overflow-hidden">
          <div class="bg-primary-500 text-white px-6 py-4">
            <h3 class="font-bold text-xl">{{ t('fabricCare.synthetic.title') }}</h3>
          </div>
          <div class="p-6">
            <p class="mb-4">{{ t('fabricCare.synthetic.description') }}</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold mb-2">{{ t('fabricCare.washing') }}</h4>
                <ul class="list-disc list-inside space-y-1 text-sm">
                  <li>{{ t('fabricCare.synthetic.washing.temp') }}</li>
                  <li>{{ t('fabricCare.synthetic.washing.delicate') }}</li>
                  <li>{{ t('fabricCare.synthetic.washing.colors') }}</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold mb-2">{{ t('fabricCare.drying') }}</h4>
                <ul class="list-disc list-inside space-y-1 text-sm">
                  <li>{{ t('fabricCare.synthetic.drying.lowHeat') }}</li>
                  <li>{{ t('fabricCare.synthetic.drying.hangDry') }}</li>
                </ul>
                <h4 class="font-semibold mt-4 mb-2">{{ t('fabricCare.ironing') }}</h4>
                <ul class="list-disc list-inside space-y-1 text-sm">
                  <li>{{ t('fabricCare.synthetic.ironing.lowTemp') }}</li>
                  <li>{{ t('fabricCare.synthetic.ironing.cloth') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stain Removal Guide -->
      <section class="mb-12">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('fabricCare.stainRemoval.title') }}
        </h2>
        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
          <p class="font-semibold mb-2">{{ t('fabricCare.stainRemoval.important') }}</p>
          <p class="text-sm">{{ t('fabricCare.stainRemoval.importantNote') }}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="border rounded-lg p-6">
            <h4 class="font-bold text-lg mb-3">{{ t('fabricCare.stainRemoval.coffee.title') }}</h4>
            <ol class="list-decimal list-inside space-y-2 text-sm">
              <li>{{ t('fabricCare.stainRemoval.coffee.step1') }}</li>
              <li>{{ t('fabricCare.stainRemoval.coffee.step2') }}</li>
              <li>{{ t('fabricCare.stainRemoval.coffee.step3') }}</li>
            </ol>
          </div>

          <div class="border rounded-lg p-6">
            <h4 class="font-bold text-lg mb-3">{{ t('fabricCare.stainRemoval.wine.title') }}</h4>
            <ol class="list-decimal list-inside space-y-2 text-sm">
              <li>{{ t('fabricCare.stainRemoval.wine.step1') }}</li>
              <li>{{ t('fabricCare.stainRemoval.wine.step2') }}</li>
              <li>{{ t('fabricCare.stainRemoval.wine.step3') }}</li>
            </ol>
          </div>

          <div class="border rounded-lg p-6">
            <h4 class="font-bold text-lg mb-3">{{ t('fabricCare.stainRemoval.oil.title') }}</h4>
            <ol class="list-decimal list-inside space-y-2 text-sm">
              <li>{{ t('fabricCare.stainRemoval.oil.step1') }}</li>
              <li>{{ t('fabricCare.stainRemoval.oil.step2') }}</li>
              <li>{{ t('fabricCare.stainRemoval.oil.step3') }}</li>
            </ol>
          </div>

          <div class="border rounded-lg p-6">
            <h4 class="font-bold text-lg mb-3">{{ t('fabricCare.stainRemoval.ink.title') }}</h4>
            <ol class="list-decimal list-inside space-y-2 text-sm">
              <li>{{ t('fabricCare.stainRemoval.ink.step1') }}</li>
              <li>{{ t('fabricCare.stainRemoval.ink.step2') }}</li>
              <li>{{ t('fabricCare.stainRemoval.ink.step3') }}</li>
            </ol>
          </div>

          <div class="border rounded-lg p-6">
            <h4 class="font-bold text-lg mb-3">{{ t('fabricCare.stainRemoval.sweat.title') }}</h4>
            <ol class="list-decimal list-inside space-y-2 text-sm">
              <li>{{ t('fabricCare.stainRemoval.sweat.step1') }}</li>
              <li>{{ t('fabricCare.stainRemoval.sweat.step2') }}</li>
              <li>{{ t('fabricCare.stainRemoval.sweat.step3') }}</li>
            </ol>
          </div>

          <div class="border rounded-lg p-6">
            <h4 class="font-bold text-lg mb-3">{{ t('fabricCare.stainRemoval.makeup.title') }}</h4>
            <ol class="list-decimal list-inside space-y-2 text-sm">
              <li>{{ t('fabricCare.stainRemoval.makeup.step1') }}</li>
              <li>{{ t('fabricCare.stainRemoval.makeup.step2') }}</li>
              <li>{{ t('fabricCare.stainRemoval.makeup.step3') }}</li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Storage Tips -->
      <section class="mb-12">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('fabricCare.storage.title') }}
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-50 rounded-lg p-6">
            <h4 class="font-semibold mb-3">{{ t('fabricCare.storage.hanging.title') }}</h4>
            <p class="text-sm mb-2">{{ t('fabricCare.storage.hanging.description') }}</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>{{ t('fabricCare.storage.hanging.tip1') }}</li>
              <li>{{ t('fabricCare.storage.hanging.tip2') }}</li>
              <li>{{ t('fabricCare.storage.hanging.tip3') }}</li>
            </ul>
          </div>

          <div class="bg-gray-50 rounded-lg p-6">
            <h4 class="font-semibold mb-3">{{ t('fabricCare.storage.folding.title') }}</h4>
            <p class="text-sm mb-2">{{ t('fabricCare.storage.folding.description') }}</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>{{ t('fabricCare.storage.folding.tip1') }}</li>
              <li>{{ t('fabricCare.storage.folding.tip2') }}</li>
              <li>{{ t('fabricCare.storage.folding.tip3') }}</li>
            </ul>
          </div>

          <div class="bg-gray-50 rounded-lg p-6">
            <h4 class="font-semibold mb-3">{{ t('fabricCare.storage.seasonal.title') }}</h4>
            <p class="text-sm mb-2">{{ t('fabricCare.storage.seasonal.description') }}</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>{{ t('fabricCare.storage.seasonal.tip1') }}</li>
              <li>{{ t('fabricCare.storage.seasonal.tip2') }}</li>
              <li>{{ t('fabricCare.storage.seasonal.tip3') }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Care Symbols Guide -->
      <section class="mb-12">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('fabricCare.symbols.title') }}
        </h2>
        <p class="mb-6">{{ t('fabricCare.symbols.description') }}</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="border rounded p-4 text-center">
            <div class="text-4xl mb-2">🌡️</div>
            <p class="font-semibold">{{ t('fabricCare.symbols.washing') }}</p>
            <p class="text-sm text-gray-600">{{ t('fabricCare.symbols.washingDesc') }}</p>
          </div>
          <div class="border rounded p-4 text-center">
            <div class="text-4xl mb-2">△</div>
            <p class="font-semibold">{{ t('fabricCare.symbols.bleaching') }}</p>
            <p class="text-sm text-gray-600">{{ t('fabricCare.symbols.bleachingDesc') }}</p>
          </div>
          <div class="border rounded p-4 text-center">
            <div class="text-4xl mb-2">⭕</div>
            <p class="font-semibold">{{ t('fabricCare.symbols.drying') }}</p>
            <p class="text-sm text-gray-600">{{ t('fabricCare.symbols.dryingDesc') }}</p>
          </div>
          <div class="border rounded p-4 text-center">
            <div class="text-4xl mb-2">🔥</div>
            <p class="font-semibold">{{ t('fabricCare.symbols.ironing') }}</p>
            <p class="text-sm text-gray-600">{{ t('fabricCare.symbols.ironingDesc') }}</p>
          </div>
        </div>
      </section>

      <!-- Professional Care -->
      <section class="mb-12">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('fabricCare.professional.title') }}
        </h2>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6">
          <h4 class="font-semibold mb-2">{{ t('fabricCare.professional.when') }}</h4>
          <ul class="list-disc list-inside space-y-2 text-sm">
            <li>{{ t('fabricCare.professional.reason1') }}</li>
            <li>{{ t('fabricCare.professional.reason2') }}</li>
            <li>{{ t('fabricCare.professional.reason3') }}</li>
            <li>{{ t('fabricCare.professional.reason4') }}</li>
          </ul>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-primary-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('fabricCare.questions.title') }}</h3>
        <p class="mb-6">{{ t('fabricCare.questions.description') }}</p>
        <SfButton :tag="NuxtLink" :to="localePath('/contact')" size="lg">
          {{ t('fabricCare.questions.contactButton') }}
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
setPageMeta(t('fabricCare.title'), icon);

await getRobots();
setRobotForStaticPage('FabricCare');
</script>
