<template>
  <NuxtLayout name="default">
    <div class="max-w-7xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <h1 class="font-bold mb-6 typography-headline-3 md:typography-headline-2">
        {{ t('blog.title') }}
      </h1>

      <p class="text-lg text-gray-600 mb-10">
        {{ t('blog.subtitle') }}
      </p>

      <!-- Categories Filter -->
      <div class="mb-10 flex flex-wrap gap-3">
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

      <!-- Blog Posts Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in filteredPosts"
          :key="post.slug"
          class="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          @click="navigateTo(localePath(`/blog/${post.slug}`))"
        >
          <!-- Featured Image -->
          <div class="bg-gray-200 h-48 flex items-center justify-center">
            <span class="text-gray-400">{{ post.imageCaption }}</span>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-xs font-medium px-3 py-1 bg-primary-100 text-primary-700 rounded-full">
                {{ post.category }}
              </span>
              <span class="text-xs text-gray-500">{{ post.date }}</span>
            </div>

            <h2 class="font-bold text-xl mb-3 hover:text-primary-500 transition-colors">
              {{ post.title }}
            </h2>

            <p class="text-gray-600 text-sm mb-4 line-clamp-3">
              {{ post.excerpt }}
            </p>

            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ post.readTime }}</span>
              <span class="text-primary-500 text-sm font-medium">{{ t('blog.readMore') }} →</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-if="filteredPosts.length === 0" class="text-center py-20">
        <p class="text-gray-500 text-lg">{{ t('blog.noPosts') }}</p>
      </div>

      <!-- Newsletter CTA -->
      <section class="mt-16 bg-primary-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('blog.newsletter.title') }}</h3>
        <p class="mb-6 text-gray-600">{{ t('blog.newsletter.description') }}</p>
        <div class="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            :placeholder="t('blog.newsletter.placeholder')"
            class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <SfButton size="lg">
            {{ t('blog.newsletter.subscribe') }}
          </SfButton>
        </div>
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
const localePath = useLocalePath();
const { getRobots, setRobotForStaticPage } = useRobots();
const { setPageMeta } = usePageMeta();

const icon = 'page';
setPageMeta(t('blog.title'), icon);

await getRobots();
setRobotForStaticPage('Blog');

const selectedCategory = ref('all');

const categories = [
  { id: 'all', name: t('blog.categories.all') },
  { id: 'style', name: t('blog.categories.style') },
  { id: 'care', name: t('blog.categories.care') },
  { id: 'fabric', name: t('blog.categories.fabric') },
  { id: 'sustainability', name: t('blog.categories.sustainability') },
];

// Sample blog posts - In production, these would come from a CMS or API
const blogPosts = [
  {
    slug: '5-ways-to-style-white-blouse',
    title: t('blog.posts.whiteBlouse.title'),
    excerpt: t('blog.posts.whiteBlouse.excerpt'),
    category: t('blog.categories.style'),
    categoryId: 'style',
    date: '2025-01-15',
    readTime: '5 min read',
    imageCaption: 'White blouse styling',
  },
  {
    slug: 'cotton-care-guide',
    title: t('blog.posts.cottonCare.title'),
    excerpt: t('blog.posts.cottonCare.excerpt'),
    category: t('blog.categories.care'),
    categoryId: 'care',
    date: '2025-01-12',
    readTime: '7 min read',
    imageCaption: 'Cotton fabric care',
  },
  {
    slug: 'understanding-fabric-quality',
    title: t('blog.posts.fabricQuality.title'),
    excerpt: t('blog.posts.fabricQuality.excerpt'),
    category: t('blog.categories.fabric'),
    categoryId: 'fabric',
    date: '2025-01-10',
    readTime: '6 min read',
    imageCaption: 'Fabric quality',
  },
  {
    slug: 'sustainable-fashion-choices',
    title: t('blog.posts.sustainable.title'),
    excerpt: t('blog.posts.sustainable.excerpt'),
    category: t('blog.categories.sustainability'),
    categoryId: 'sustainability',
    date: '2025-01-08',
    readTime: '8 min read',
    imageCaption: 'Sustainable fashion',
  },
  {
    slug: 'capsule-wardrobe-essentials',
    title: t('blog.posts.capsule.title'),
    excerpt: t('blog.posts.capsule.excerpt'),
    category: t('blog.categories.style'),
    categoryId: 'style',
    date: '2025-01-05',
    readTime: '10 min read',
    imageCaption: 'Capsule wardrobe',
  },
  {
    slug: 'stain-removal-guide',
    title: t('blog.posts.stainRemoval.title'),
    excerpt: t('blog.posts.stainRemoval.excerpt'),
    category: t('blog.categories.care'),
    categoryId: 'care',
    date: '2025-01-03',
    readTime: '6 min read',
    imageCaption: 'Stain removal',
  },
];

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'all') {
    return blogPosts;
  }
  return blogPosts.filter(post => post.categoryId === selectedCategory.value);
});
</script>
