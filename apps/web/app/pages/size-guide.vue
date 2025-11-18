<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
        {{ t('sizeGuide.title') }}
      </h1>

      <!-- Introduction -->
      <div class="mb-10 p-6 bg-primary-100 rounded-lg">
        <p class="text-lg">{{ t('sizeGuide.intro') }}</p>
      </div>

      <!-- How to Measure Section -->
      <section class="mb-12">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('sizeGuide.howToMeasure.title') }}
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Women's Measurements -->
          <div class="border rounded-lg p-6">
            <h3 class="font-bold text-xl mb-4">{{ t('sizeGuide.women.title') }}</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="font-semibold min-w-[140px]">{{ t('sizeGuide.measurements.bust') }}:</span>
                <span>{{ t('sizeGuide.measurements.bustDescription') }}</span>
              </li>
              <li class="flex items-start">
                <span class="font-semibold min-w-[140px]">{{ t('sizeGuide.measurements.waist') }}:</span>
                <span>{{ t('sizeGuide.measurements.waistDescription') }}</span>
              </li>
              <li class="flex items-start">
                <span class="font-semibold min-w-[140px]">{{ t('sizeGuide.measurements.hips') }}:</span>
                <span>{{ t('sizeGuide.measurements.hipsDescription') }}</span>
              </li>
              <li class="flex items-start">
                <span class="font-semibold min-w-[140px]">{{ t('sizeGuide.measurements.shoulderWidth') }}:</span>
                <span>{{ t('sizeGuide.measurements.shoulderWidthDescription') }}</span>
              </li>
            </ul>
          </div>

          <!-- Men's Measurements -->
          <div class="border rounded-lg p-6">
            <h3 class="font-bold text-xl mb-4">{{ t('sizeGuide.men.title') }}</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="font-semibold min-w-[140px]">{{ t('sizeGuide.measurements.chest') }}:</span>
                <span>{{ t('sizeGuide.measurements.chestDescription') }}</span>
              </li>
              <li class="flex items-start">
                <span class="font-semibold min-w-[140px]">{{ t('sizeGuide.measurements.neck') }}:</span>
                <span>{{ t('sizeGuide.measurements.neckDescription') }}</span>
              </li>
              <li class="flex items-start">
                <span class="font-semibold min-w-[140px]">{{ t('sizeGuide.measurements.sleeveLength') }}:</span>
                <span>{{ t('sizeGuide.measurements.sleeveLengthDescription') }}</span>
              </li>
              <li class="flex items-start">
                <span class="font-semibold min-w-[140px]">{{ t('sizeGuide.measurements.shoulderWidth') }}:</span>
                <span>{{ t('sizeGuide.measurements.shoulderWidthDescription') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Size Charts -->
      <section class="mb-12">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('sizeGuide.sizeCharts.title') }}
        </h2>

        <!-- Women's Size Chart -->
        <div class="mb-8">
          <h3 class="font-bold text-xl mb-4">{{ t('sizeGuide.women.sizeChart') }}</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full border-collapse border border-gray-300">
              <thead class="bg-gray-100">
                <tr>
                  <th class="border border-gray-300 px-4 py-3 text-left">{{ t('sizeGuide.table.size') }}</th>
                  <th class="border border-gray-300 px-4 py-3 text-left">EU</th>
                  <th class="border border-gray-300 px-4 py-3 text-left">US</th>
                  <th class="border border-gray-300 px-4 py-3 text-left">UK</th>
                  <th class="border border-gray-300 px-4 py-3 text-left">{{ t('sizeGuide.measurements.bust') }} (cm)</th>
                  <th class="border border-gray-300 px-4 py-3 text-left">{{ t('sizeGuide.measurements.waist') }} (cm)</th>
                  <th class="border border-gray-300 px-4 py-3 text-left">{{ t('sizeGuide.measurements.hips') }} (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-3">XS</td>
                  <td class="border border-gray-300 px-4 py-3">34</td>
                  <td class="border border-gray-300 px-4 py-3">2</td>
                  <td class="border border-gray-300 px-4 py-3">6</td>
                  <td class="border border-gray-300 px-4 py-3">78-82</td>
                  <td class="border border-gray-300 px-4 py-3">62-66</td>
                  <td class="border border-gray-300 px-4 py-3">86-90</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">S</td>
                  <td class="border border-gray-300 px-4 py-3">36</td>
                  <td class="border border-gray-300 px-4 py-3">4</td>
                  <td class="border border-gray-300 px-4 py-3">8</td>
                  <td class="border border-gray-300 px-4 py-3">82-86</td>
                  <td class="border border-gray-300 px-4 py-3">66-70</td>
                  <td class="border border-gray-300 px-4 py-3">90-94</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3">M</td>
                  <td class="border border-gray-300 px-4 py-3">38</td>
                  <td class="border border-gray-300 px-4 py-3">6</td>
                  <td class="border border-gray-300 px-4 py-3">10</td>
                  <td class="border border-gray-300 px-4 py-3">86-90</td>
                  <td class="border border-gray-300 px-4 py-3">70-74</td>
                  <td class="border border-gray-300 px-4 py-3">94-98</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">L</td>
                  <td class="border border-gray-300 px-4 py-3">40</td>
                  <td class="border border-gray-300 px-4 py-3">8</td>
                  <td class="border border-gray-300 px-4 py-3">12</td>
                  <td class="border border-gray-300 px-4 py-3">90-94</td>
                  <td class="border border-gray-300 px-4 py-3">74-78</td>
                  <td class="border border-gray-300 px-4 py-3">98-102</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3">XL</td>
                  <td class="border border-gray-300 px-4 py-3">42</td>
                  <td class="border border-gray-300 px-4 py-3">10</td>
                  <td class="border border-gray-300 px-4 py-3">14</td>
                  <td class="border border-gray-300 px-4 py-3">94-98</td>
                  <td class="border border-gray-300 px-4 py-3">78-82</td>
                  <td class="border border-gray-300 px-4 py-3">102-106</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">XXL</td>
                  <td class="border border-gray-300 px-4 py-3">44</td>
                  <td class="border border-gray-300 px-4 py-3">12</td>
                  <td class="border border-gray-300 px-4 py-3">16</td>
                  <td class="border border-gray-300 px-4 py-3">98-102</td>
                  <td class="border border-gray-300 px-4 py-3">82-86</td>
                  <td class="border border-gray-300 px-4 py-3">106-110</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Men's Size Chart -->
        <div class="mb-8">
          <h3 class="font-bold text-xl mb-4">{{ t('sizeGuide.men.sizeChart') }}</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full border-collapse border border-gray-300">
              <thead class="bg-gray-100">
                <tr>
                  <th class="border border-gray-300 px-4 py-3 text-left">{{ t('sizeGuide.table.size') }}</th>
                  <th class="border border-gray-300 px-4 py-3 text-left">EU</th>
                  <th class="border border-gray-300 px-4 py-3 text-left">US</th>
                  <th class="border border-gray-300 px-4 py-3 text-left">UK</th>
                  <th class="border border-gray-300 px-4 py-3 text-left">{{ t('sizeGuide.measurements.chest') }} (cm)</th>
                  <th class="border border-gray-300 px-4 py-3 text-left">{{ t('sizeGuide.measurements.neck') }} (cm)</th>
                  <th class="border border-gray-300 px-4 py-3 text-left">{{ t('sizeGuide.measurements.sleeveLength') }} (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-3">S</td>
                  <td class="border border-gray-300 px-4 py-3">46</td>
                  <td class="border border-gray-300 px-4 py-3">36</td>
                  <td class="border border-gray-300 px-4 py-3">36</td>
                  <td class="border border-gray-300 px-4 py-3">88-92</td>
                  <td class="border border-gray-300 px-4 py-3">37-38</td>
                  <td class="border border-gray-300 px-4 py-3">62-63</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">M</td>
                  <td class="border border-gray-300 px-4 py-3">48</td>
                  <td class="border border-gray-300 px-4 py-3">38</td>
                  <td class="border border-gray-300 px-4 py-3">38</td>
                  <td class="border border-gray-300 px-4 py-3">92-96</td>
                  <td class="border border-gray-300 px-4 py-3">39-40</td>
                  <td class="border border-gray-300 px-4 py-3">64-65</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3">L</td>
                  <td class="border border-gray-300 px-4 py-3">50</td>
                  <td class="border border-gray-300 px-4 py-3">40</td>
                  <td class="border border-gray-300 px-4 py-3">40</td>
                  <td class="border border-gray-300 px-4 py-3">96-100</td>
                  <td class="border border-gray-300 px-4 py-3">41-42</td>
                  <td class="border border-gray-300 px-4 py-3">66-67</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">XL</td>
                  <td class="border border-gray-300 px-4 py-3">52</td>
                  <td class="border border-gray-300 px-4 py-3">42</td>
                  <td class="border border-gray-300 px-4 py-3">42</td>
                  <td class="border border-gray-300 px-4 py-3">100-104</td>
                  <td class="border border-gray-300 px-4 py-3">43-44</td>
                  <td class="border border-gray-300 px-4 py-3">68-69</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-3">XXL</td>
                  <td class="border border-gray-300 px-4 py-3">54</td>
                  <td class="border border-gray-300 px-4 py-3">44</td>
                  <td class="border border-gray-300 px-4 py-3">44</td>
                  <td class="border border-gray-300 px-4 py-3">104-108</td>
                  <td class="border border-gray-300 px-4 py-3">45-46</td>
                  <td class="border border-gray-300 px-4 py-3">70-71</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">3XL</td>
                  <td class="border border-gray-300 px-4 py-3">56</td>
                  <td class="border border-gray-300 px-4 py-3">46</td>
                  <td class="border border-gray-300 px-4 py-3">46</td>
                  <td class="border border-gray-300 px-4 py-3">108-112</td>
                  <td class="border border-gray-300 px-4 py-3">47-48</td>
                  <td class="border border-gray-300 px-4 py-3">72-73</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Fit Tips -->
      <section class="mb-12">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('sizeGuide.fitTips.title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="border-l-4 border-primary-500 pl-4 py-2">
            <h4 class="font-semibold mb-2">{{ t('sizeGuide.fitTips.betweenSizes.title') }}</h4>
            <p>{{ t('sizeGuide.fitTips.betweenSizes.description') }}</p>
          </div>
          <div class="border-l-4 border-primary-500 pl-4 py-2">
            <h4 class="font-semibold mb-2">{{ t('sizeGuide.fitTips.fabricStretch.title') }}</h4>
            <p>{{ t('sizeGuide.fitTips.fabricStretch.description') }}</p>
          </div>
          <div class="border-l-4 border-primary-500 pl-4 py-2">
            <h4 class="font-semibold mb-2">{{ t('sizeGuide.fitTips.shoulderFit.title') }}</h4>
            <p>{{ t('sizeGuide.fitTips.shoulderFit.description') }}</p>
          </div>
          <div class="border-l-4 border-primary-500 pl-4 py-2">
            <h4 class="font-semibold mb-2">{{ t('sizeGuide.fitTips.lengthConsiderations.title') }}</h4>
            <p>{{ t('sizeGuide.fitTips.lengthConsiderations.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Common Fit Issues -->
      <section class="mb-12">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-6">
          {{ t('sizeGuide.commonIssues.title') }}
        </h2>
        <div class="space-y-4">
          <div class="bg-gray-50 rounded-lg p-6">
            <h4 class="font-semibold mb-2">{{ t('sizeGuide.commonIssues.tooTight.title') }}</h4>
            <p>{{ t('sizeGuide.commonIssues.tooTight.description') }}</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-6">
            <h4 class="font-semibold mb-2">{{ t('sizeGuide.commonIssues.tooLoose.title') }}</h4>
            <p>{{ t('sizeGuide.commonIssues.tooLoose.description') }}</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-6">
            <h4 class="font-semibold mb-2">{{ t('sizeGuide.commonIssues.sleeveTooShort.title') }}</h4>
            <p>{{ t('sizeGuide.commonIssues.sleeveTooShort.description') }}</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-6">
            <h4 class="font-semibold mb-2">{{ t('sizeGuide.commonIssues.gapingButtons.title') }}</h4>
            <p>{{ t('sizeGuide.commonIssues.gapingButtons.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-primary-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('sizeGuide.needHelp.title') }}</h3>
        <p class="mb-6">{{ t('sizeGuide.needHelp.description') }}</p>
        <SfButton :tag="NuxtLink" :to="localePath('/contact')" size="lg">
          {{ t('sizeGuide.needHelp.contactButton') }}
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
setPageMeta(t('sizeGuide.title'), icon);

await getRobots();
setRobotForStaticPage('SizeGuide');
</script>
