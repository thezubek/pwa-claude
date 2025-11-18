<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <div class="text-center mb-16">
        <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
          {{ t('testimonials.title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ t('testimonials.subtitle') }}
        </p>
      </div>

      <!-- Overall Rating -->
      <div class="bg-primary-50 rounded-lg p-8 mb-16 text-center">
        <div class="text-6xl font-bold text-primary-500 mb-2">4.8</div>
        <div class="flex justify-center gap-1 mb-3">
          <span v-for="i in 5" :key="i" class="text-yellow-400 text-2xl">★</span>
        </div>
        <p class="text-gray-600">{{ t('testimonials.basedOn') }} 1,247 {{ t('testimonials.reviews') }}</p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="filter in filters"
          :key="filter.id"
          @click="selectedFilter = filter.id"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            selectedFilter === filter.id
              ? 'bg-primary-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ filter.name }}
        </button>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div v-for="testimonial in filteredTestimonials"
             :key="testimonial.id"
             class="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <!-- Rating -->
          <div class="flex gap-1 mb-3">
            <span v-for="i in testimonial.rating" :key="i" class="text-yellow-400">★</span>
            <span v-for="i in (5 - testimonial.rating)" :key="'empty-' + i" class="text-gray-300">★</span>
          </div>

          <!-- Review Title -->
          <h3 class="font-bold text-lg mb-3">{{ testimonial.title }}</h3>

          <!-- Review Text -->
          <p class="text-gray-600 mb-4">{{ testimonial.review }}</p>

          <!-- Customer Info -->
          <div class="flex items-center gap-3 pt-4 border-t">
            <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
              {{ testimonial.initials }}
            </div>
            <div>
              <div class="font-semibold">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-500">{{ testimonial.product }}</div>
              <div class="text-xs text-gray-400">{{ testimonial.date }}</div>
            </div>
          </div>

          <!-- Verified Badge -->
          <div v-if="testimonial.verified" class="mt-4 inline-flex items-center gap-2 text-xs text-green-600">
            <span>✓</span>
            <span>{{ t('testimonials.verifiedPurchase') }}</span>
          </div>
        </div>
      </div>

      <!-- Customer Photos Section -->
      <section class="mb-16">
        <h2 class="font-bold typography-headline-4 md:typography-headline-3 mb-8 text-center">
          {{ t('testimonials.customerPhotos.title') }}
        </h2>
        <p class="text-center text-gray-600 mb-8">
          {{ t('testimonials.customerPhotos.subtitle') }}
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="i in 8" :key="i" class="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            <span class="text-gray-400 text-sm">{{ t('testimonials.customerPhotos.placeholder') }}</span>
          </div>
        </div>
      </section>

      <!-- Write a Review CTA -->
      <section class="bg-primary-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('testimonials.writeReview.title') }}</h3>
        <p class="mb-6 text-gray-600">{{ t('testimonials.writeReview.description') }}</p>
        <SfButton size="lg">
          {{ t('testimonials.writeReview.button') }}
        </SfButton>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';
import { ref, computed } from 'vue';

definePageMeta({
  layout: false,
  pageType: 'static',
});

const { t } = useI18n();
const { getRobots, setRobotForStaticPage } = useRobots();
const { setPageMeta } = usePageMeta();

const icon = 'page';
setPageMeta(t('testimonials.title'), icon);

await getRobots();
setRobotForStaticPage('Testimonials');

const selectedFilter = ref('all');

const filters = [
  { id: 'all', name: t('testimonials.filters.all') },
  { id: '5-star', name: t('testimonials.filters.5star') },
  { id: 'womens', name: t('testimonials.filters.womens') },
  { id: 'mens', name: t('testimonials.filters.mens') },
  { id: 'recent', name: t('testimonials.filters.recent') },
];

const testimonials = [
  {
    id: 1,
    rating: 5,
    title: t('testimonials.reviews.1.title'),
    review: t('testimonials.reviews.1.text'),
    name: 'Sarah M.',
    initials: 'SM',
    product: t('testimonials.reviews.1.product'),
    date: 'November 2025',
    verified: true,
    category: 'womens',
    stars: 5,
  },
  {
    id: 2,
    rating: 5,
    title: t('testimonials.reviews.2.title'),
    review: t('testimonials.reviews.2.text'),
    name: 'Michael K.',
    initials: 'MK',
    product: t('testimonials.reviews.2.product'),
    date: 'November 2025',
    verified: true,
    category: 'mens',
    stars: 5,
  },
  {
    id: 3,
    rating: 5,
    title: t('testimonials.reviews.3.title'),
    review: t('testimonials.reviews.3.text'),
    name: 'Anna L.',
    initials: 'AL',
    product: t('testimonials.reviews.3.product'),
    date: 'October 2025',
    verified: true,
    category: 'womens',
    stars: 5,
  },
  {
    id: 4,
    rating: 4,
    title: t('testimonials.reviews.4.title'),
    review: t('testimonials.reviews.4.text'),
    name: 'Thomas B.',
    initials: 'TB',
    product: t('testimonials.reviews.4.product'),
    date: 'October 2025',
    verified: true,
    category: 'mens',
    stars: 4,
  },
  {
    id: 5,
    rating: 5,
    title: t('testimonials.reviews.5.title'),
    review: t('testimonials.reviews.5.text'),
    name: 'Emma W.',
    initials: 'EW',
    product: t('testimonials.reviews.5.product'),
    date: 'October 2025',
    verified: true,
    category: 'womens',
    stars: 5,
  },
  {
    id: 6,
    rating: 5,
    title: t('testimonials.reviews.6.title'),
    review: t('testimonials.reviews.6.text'),
    name: 'David R.',
    initials: 'DR',
    product: t('testimonials.reviews.6.product'),
    date: 'September 2025',
    verified: true,
    category: 'mens',
    stars: 5,
  },
];

const filteredTestimonials = computed(() => {
  if (selectedFilter.value === 'all') return testimonials;
  if (selectedFilter.value === '5-star') return testimonials.filter(t => t.stars === 5);
  if (selectedFilter.value === 'recent') return testimonials.slice(0, 3);
  return testimonials.filter(t => t.category === selectedFilter.value);
});
</script>
