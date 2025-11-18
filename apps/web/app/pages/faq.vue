<template>
  <NuxtLayout name="default">
    <div class="max-w-4xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
        {{ t('faq.title') }}
      </h1>

      <p class="text-lg text-gray-600 mb-10">
        {{ t('faq.subtitle') }}
      </p>

      <!-- Category Tabs -->
      <div class="flex flex-wrap gap-3 mb-10">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory = category.id"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            selectedCategory === category.id
              ? 'bg-primary-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- FAQ Sections -->
      <div class="space-y-8">
        <!-- Ordering & Shipping -->
        <section v-if="selectedCategory === 'all' || selectedCategory === 'ordering'">
          <h2 class="font-bold text-2xl mb-6">{{ t('faq.ordering.title') }}</h2>
          <div class="space-y-4">
            <div v-for="(item, index) in orderingFaqs" :key="index"
                 class="border-b border-gray-200 pb-4">
              <button
                @click="toggleFaq('ordering-' + index)"
                class="w-full text-left flex justify-between items-start gap-4 py-2 hover:text-primary-500 transition-colors"
              >
                <span class="font-semibold">{{ item.question }}</span>
                <span class="text-2xl shrink-0">{{ openFaqs.has('ordering-' + index) ? '−' : '+' }}</span>
              </button>
              <div v-show="openFaqs.has('ordering-' + index)"
                   class="mt-3 text-gray-600 prose prose-sm max-w-none"
                   v-html="item.answer">
              </div>
            </div>
          </div>
        </section>

        <!-- Sizing & Fit -->
        <section v-if="selectedCategory === 'all' || selectedCategory === 'sizing'">
          <h2 class="font-bold text-2xl mb-6">{{ t('faq.sizing.title') }}</h2>
          <div class="space-y-4">
            <div v-for="(item, index) in sizingFaqs" :key="index"
                 class="border-b border-gray-200 pb-4">
              <button
                @click="toggleFaq('sizing-' + index)"
                class="w-full text-left flex justify-between items-start gap-4 py-2 hover:text-primary-500 transition-colors"
              >
                <span class="font-semibold">{{ item.question }}</span>
                <span class="text-2xl shrink-0">{{ openFaqs.has('sizing-' + index) ? '−' : '+' }}</span>
              </button>
              <div v-show="openFaqs.has('sizing-' + index)"
                   class="mt-3 text-gray-600 prose prose-sm max-w-none"
                   v-html="item.answer">
              </div>
            </div>
          </div>
        </section>

        <!-- Returns & Exchanges -->
        <section v-if="selectedCategory === 'all' || selectedCategory === 'returns'">
          <h2 class="font-bold text-2xl mb-6">{{ t('faq.returns.title') }}</h2>
          <div class="space-y-4">
            <div v-for="(item, index) in returnsFaqs" :key="index"
                 class="border-b border-gray-200 pb-4">
              <button
                @click="toggleFaq('returns-' + index)"
                class="w-full text-left flex justify-between items-start gap-4 py-2 hover:text-primary-500 transition-colors"
              >
                <span class="font-semibold">{{ item.question }}</span>
                <span class="text-2xl shrink-0">{{ openFaqs.has('returns-' + index) ? '−' : '+' }}</span>
              </button>
              <div v-show="openFaqs.has('returns-' + index)"
                   class="mt-3 text-gray-600 prose prose-sm max-w-none"
                   v-html="item.answer">
              </div>
            </div>
          </div>
        </section>

        <!-- Care & Quality -->
        <section v-if="selectedCategory === 'all' || selectedCategory === 'care'">
          <h2 class="font-bold text-2xl mb-6">{{ t('faq.care.title') }}</h2>
          <div class="space-y-4">
            <div v-for="(item, index) in careFaqs" :key="index"
                 class="border-b border-gray-200 pb-4">
              <button
                @click="toggleFaq('care-' + index)"
                class="w-full text-left flex justify-between items-start gap-4 py-2 hover:text-primary-500 transition-colors"
              >
                <span class="font-semibold">{{ item.question }}</span>
                <span class="text-2xl shrink-0">{{ openFaqs.has('care-' + index) ? '−' : '+' }}</span>
              </button>
              <div v-show="openFaqs.has('care-' + index)"
                   class="mt-3 text-gray-600 prose prose-sm max-w-none"
                   v-html="item.answer">
              </div>
            </div>
          </div>
        </section>

        <!-- Payment & Security -->
        <section v-if="selectedCategory === 'all' || selectedCategory === 'payment'">
          <h2 class="font-bold text-2xl mb-6">{{ t('faq.payment.title') }}</h2>
          <div class="space-y-4">
            <div v-for="(item, index) in paymentFaqs" :key="index"
                 class="border-b border-gray-200 pb-4">
              <button
                @click="toggleFaq('payment-' + index)"
                class="w-full text-left flex justify-between items-start gap-4 py-2 hover:text-primary-500 transition-colors"
              >
                <span class="font-semibold">{{ item.question }}</span>
                <span class="text-2xl shrink-0">{{ openFaqs.has('payment-' + index) ? '−' : '+' }}</span>
              </button>
              <div v-show="openFaqs.has('payment-' + index)"
                   class="mt-3 text-gray-600 prose prose-sm max-w-none"
                   v-html="item.answer">
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Still Have Questions -->
      <section class="mt-16 bg-primary-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('faq.stillHaveQuestions.title') }}</h3>
        <p class="mb-6 text-gray-600">{{ t('faq.stillHaveQuestions.description') }}</p>
        <SfButton :tag="NuxtLink" :to="localePath('/contact')" size="lg">
          {{ t('faq.stillHaveQuestions.button') }}
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
setPageMeta(t('faq.title'), icon);

await getRobots();
setRobotForStaticPage('FAQ');

const selectedCategory = ref('all');
const openFaqs = ref(new Set<string>());

const categories = [
  { id: 'all', name: t('faq.categories.all') },
  { id: 'ordering', name: t('faq.categories.ordering') },
  { id: 'sizing', name: t('faq.categories.sizing') },
  { id: 'returns', name: t('faq.categories.returns') },
  { id: 'care', name: t('faq.categories.care') },
  { id: 'payment', name: t('faq.categories.payment') },
];

const toggleFaq = (id: string) => {
  if (openFaqs.value.has(id)) {
    openFaqs.value.delete(id);
  } else {
    openFaqs.value.add(id);
  }
};

const orderingFaqs = [
  {
    question: t('faq.ordering.q1.question'),
    answer: t('faq.ordering.q1.answer'),
  },
  {
    question: t('faq.ordering.q2.question'),
    answer: t('faq.ordering.q2.answer'),
  },
  {
    question: t('faq.ordering.q3.question'),
    answer: t('faq.ordering.q3.answer'),
  },
  {
    question: t('faq.ordering.q4.question'),
    answer: t('faq.ordering.q4.answer'),
  },
  {
    question: t('faq.ordering.q5.question'),
    answer: t('faq.ordering.q5.answer'),
  },
];

const sizingFaqs = [
  {
    question: t('faq.sizing.q1.question'),
    answer: t('faq.sizing.q1.answer'),
  },
  {
    question: t('faq.sizing.q2.question'),
    answer: t('faq.sizing.q2.answer'),
  },
  {
    question: t('faq.sizing.q3.question'),
    answer: t('faq.sizing.q3.answer'),
  },
  {
    question: t('faq.sizing.q4.question'),
    answer: t('faq.sizing.q4.answer'),
  },
  {
    question: t('faq.sizing.q5.question'),
    answer: t('faq.sizing.q5.answer'),
  },
];

const returnsFaqs = [
  {
    question: t('faq.returns.q1.question'),
    answer: t('faq.returns.q1.answer'),
  },
  {
    question: t('faq.returns.q2.question'),
    answer: t('faq.returns.q2.answer'),
  },
  {
    question: t('faq.returns.q3.question'),
    answer: t('faq.returns.q3.answer'),
  },
  {
    question: t('faq.returns.q4.question'),
    answer: t('faq.returns.q4.answer'),
  },
  {
    question: t('faq.returns.q5.question'),
    answer: t('faq.returns.q5.answer'),
  },
];

const careFaqs = [
  {
    question: t('faq.care.q1.question'),
    answer: t('faq.care.q1.answer'),
  },
  {
    question: t('faq.care.q2.question'),
    answer: t('faq.care.q2.answer'),
  },
  {
    question: t('faq.care.q3.question'),
    answer: t('faq.care.q3.answer'),
  },
  {
    question: t('faq.care.q4.question'),
    answer: t('faq.care.q4.answer'),
  },
  {
    question: t('faq.care.q5.question'),
    answer: t('faq.care.q5.answer'),
  },
];

const paymentFaqs = [
  {
    question: t('faq.payment.q1.question'),
    answer: t('faq.payment.q1.answer'),
  },
  {
    question: t('faq.payment.q2.question'),
    answer: t('faq.payment.q2.answer'),
  },
  {
    question: t('faq.payment.q3.question'),
    answer: t('faq.payment.q3.answer'),
  },
  {
    question: t('faq.payment.q4.question'),
    answer: t('faq.payment.q4.answer'),
  },
  {
    question: t('faq.payment.q5.question'),
    answer: t('faq.payment.q5.answer'),
  },
];
</script>
