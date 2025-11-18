<template>
  <NuxtLayout name="default">
    <article class="max-w-4xl mx-auto px-4 pt-4 pb-20 md:px-6 md:mt-4">
      <!-- Breadcrumbs -->
      <nav class="mb-6 text-sm">
        <NuxtLink :to="localePath('/')" class="text-primary-500 hover:underline">
          {{ t('blog.breadcrumb.home') }}
        </NuxtLink>
        <span class="mx-2 text-gray-400">/</span>
        <NuxtLink :to="localePath('/blog')" class="text-primary-500 hover:underline">
          {{ t('blog.breadcrumb.blog') }}
        </NuxtLink>
        <span class="mx-2 text-gray-400">/</span>
        <span class="text-gray-600">{{ post?.title }}</span>
      </nav>

      <!-- Category Badge -->
      <div class="mb-4">
        <span class="text-xs font-medium px-3 py-1 bg-primary-100 text-primary-700 rounded-full">
          {{ post?.category }}
        </span>
      </div>

      <!-- Title -->
      <h1 class="font-bold mb-4 typography-headline-3 md:typography-headline-2">
        {{ post?.title }}
      </h1>

      <!-- Meta Info -->
      <div class="flex items-center gap-4 mb-8 text-sm text-gray-600">
        <span>{{ post?.date }}</span>
        <span>•</span>
        <span>{{ post?.readTime }}</span>
        <span>•</span>
        <span>{{ post?.author }}</span>
      </div>

      <!-- Featured Image -->
      <div class="bg-gray-200 rounded-lg h-96 mb-8 flex items-center justify-center">
        <span class="text-gray-400">{{ post?.imageCaption }}</span>
      </div>

      <!-- Content -->
      <div class="prose prose-lg max-w-none mb-12" v-html="post?.content"></div>

      <!-- Tags -->
      <div v-if="post?.tags" class="mb-12">
        <h3 class="font-semibold mb-3">{{ t('blog.tags') }}</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            #{{ tag }}
          </span>
        </div>
      </div>

      <!-- Share Section -->
      <div class="border-y py-6 mb-12">
        <h3 class="font-semibold mb-3">{{ t('blog.shareArticle') }}</h3>
        <div class="flex gap-4">
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Facebook
          </button>
          <button class="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition-colors">
            Twitter
          </button>
          <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
            Pinterest
          </button>
        </div>
      </div>

      <!-- Related Posts -->
      <section v-if="relatedPosts.length > 0" class="mb-12">
        <h2 class="font-bold text-2xl mb-6">{{ t('blog.relatedPosts') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="relatedPost in relatedPosts"
            :key="relatedPost.slug"
            class="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            @click="navigateTo(localePath(`/blog/${relatedPost.slug}`))"
          >
            <div class="bg-gray-200 h-32 flex items-center justify-center">
              <span class="text-gray-400 text-sm">{{ relatedPost.imageCaption }}</span>
            </div>
            <div class="p-4">
              <h3 class="font-bold mb-2 hover:text-primary-500 transition-colors">
                {{ relatedPost.title }}
              </h3>
              <p class="text-sm text-gray-600 line-clamp-2">{{ relatedPost.excerpt }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-primary-100 rounded-lg p-8 text-center">
        <h3 class="font-bold text-2xl mb-4">{{ t('blog.cta.title') }}</h3>
        <p class="mb-6 text-gray-600">{{ t('blog.cta.description') }}</p>
        <SfButton :tag="NuxtLink" :to="localePath('/')" size="lg">
          {{ t('blog.cta.shopButton') }}
        </SfButton>
      </section>
    </article>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SfButton } from '@storefront-ui/vue';
import { computed } from 'vue';

definePageMeta({
  layout: false,
  pageType: 'static',
});

const route = useRoute();
const { t } = useI18n();
const localePath = useLocalePath();
const { getRobots, setRobotForStaticPage } = useRobots();
const { setPageMeta } = usePageMeta();
const NuxtLink = resolveComponent('NuxtLink');

// Sample blog posts data - In production, fetch from CMS/API
const blogPosts = {
  '5-ways-to-style-white-blouse': {
    slug: '5-ways-to-style-white-blouse',
    title: '5 Ways to Style a White Blouse: From Office to Evening',
    excerpt: 'Discover versatile styling options for the classic white blouse, perfect for any occasion.',
    category: 'Style & Inspiration',
    categoryId: 'style',
    date: 'January 15, 2025',
    readTime: '5 min read',
    author: 'HEVENTON Style Team',
    imageCaption: 'White blouse styling',
    tags: ['styling', 'white-blouse', 'office-wear', 'versatility'],
    content: `
      <p>The white blouse is arguably the most versatile piece in any wardrobe. Whether you're heading to the office, meeting friends for lunch, or attending an evening event, a white blouse can be styled to suit any occasion.</p>

      <h2>1. Classic Office Look</h2>
      <p>Pair your white blouse with tailored trousers and a blazer for a timeless professional appearance. Add a statement belt to cinch the waist and create a polished silhouette. Complete the look with closed-toe heels and minimal jewelry.</p>

      <h2>2. Casual Weekend Vibes</h2>
      <p>Tuck your blouse into high-waisted jeans and add a leather jacket for an effortlessly chic weekend look. Roll up the sleeves for a relaxed feel, and finish with sneakers or ankle boots.</p>

      <h2>3. Elegant Evening Ensemble</h2>
      <p>Transform your white blouse for evening wear by pairing it with a sleek midi or maxi skirt. Add statement earrings, a clutch, and heeled sandals. Consider a bold red lip to elevate the look further.</p>

      <h2>4. Layered Sophistication</h2>
      <p>Layer your white blouse under a sweater vest or cardigan for a preppy, sophisticated style. This works beautifully with both skirts and trousers, and adds visual interest while keeping you warm.</p>

      <h2>5. Business Casual Perfection</h2>
      <p>Wear your blouse with smart culottes or wide-leg trousers for a modern business casual look. Add loafers or block heels, and accessorize with a structured bag and delicate jewelry.</p>

      <h2>Styling Tips</h2>
      <ul>
        <li>Choose the right fit - your blouse should skim your body without being too tight or too loose</li>
        <li>Pay attention to fabric quality - 100% cotton provides the best drape and breathability</li>
        <li>Keep it crisp - always iron or steam your white blouse for a polished appearance</li>
        <li>Invest in proper undergarments - a seamless nude bra is essential under white</li>
      </ul>

      <p>The beauty of a white blouse lies in its adaptability. By changing your accessories, bottoms, and shoes, you can create countless looks from this single piece. It's truly the foundation of a versatile wardrobe.</p>
    `,
  },
  'cotton-care-guide': {
    slug: 'cotton-care-guide',
    title: 'How to Properly Care for Cotton Blouses: A Complete Guide',
    excerpt: 'Learn professional techniques to keep your cotton blouses looking pristine for years.',
    category: 'Care & Maintenance',
    categoryId: 'care',
    date: 'January 12, 2025',
    readTime: '7 min read',
    author: 'HEVENTON Care Team',
    imageCaption: 'Cotton fabric care',
    tags: ['cotton-care', 'washing', 'ironing', 'maintenance'],
    content: `
      <p>Cotton is one of the most beloved natural fibers for blouses, offering breathability, comfort, and durability. However, proper care is essential to maintain the quality and appearance of your cotton garments.</p>

      <h2>Understanding Cotton</h2>
      <p>Cotton is a natural fiber that becomes stronger when wet, making it durable and easy to care for. However, it can shrink if not washed properly and may wrinkle easily. The key is understanding how to work with these characteristics.</p>

      <h2>Washing Your Cotton Blouses</h2>
      <h3>Temperature Matters</h3>
      <p>Always check the care label first. Generally, cotton can be washed in warm water (30-40°C), but for white cotton, you can use higher temperatures (60°C) to maintain brightness. Colored cotton should be washed in cooler water to prevent fading.</p>

      <h3>Sorting Is Essential</h3>
      <p>Separate whites from colors, and wash delicate cotton blouses separately from heavier items like jeans. This prevents color transfer and reduces friction that can damage the fabric.</p>

      <h3>Detergent Selection</h3>
      <p>Use a mild, color-safe detergent for colored cotton. For whites, you can use a detergent with optical brighteners. Avoid using too much detergent as residue can make cotton feel stiff.</p>

      <h2>Drying Techniques</h2>
      <p>Air drying is ideal for cotton blouses. Hang them on a padded hanger while still slightly damp to minimize wrinkles. If using a dryer, remove the blouses while slightly damp and hang immediately to prevent excessive wrinkling.</p>

      <h2>Ironing for Perfection</h2>
      <p>Cotton requires high heat for effective ironing. Set your iron to the cotton setting (usually the highest). Iron while the fabric is slightly damp, or use plenty of steam. Always iron on the reverse side to prevent shine on dark colors.</p>

      <h3>Professional Tips</h3>
      <ul>
        <li>Start with the collar, ironing from points toward the center</li>
        <li>Move to the shoulders and yoke</li>
        <li>Iron sleeves flat, starting from the armhole</li>
        <li>Finish with the body, front and back</li>
      </ul>

      <h2>Storage Solutions</h2>
      <p>Store cotton blouses on hangers in a cool, dry place. Avoid overcrowding in your closet as this can cause wrinkles. For long-term storage, clean the blouses first and store in breathable cotton garment bags.</p>

      <p>With proper care, your cotton blouses can remain beautiful and comfortable for many years, making them a worthy investment in your wardrobe.</p>
    `,
  },
  'understanding-fabric-quality': {
    slug: 'understanding-fabric-quality',
    title: 'Understanding Thread Count: What Makes a Quality Shirt?',
    excerpt: 'Decode fabric terminology and learn what truly indicates quality in shirts and blouses.',
    category: 'Fabric & Quality',
    categoryId: 'fabric',
    date: 'January 10, 2025',
    readTime: '6 min read',
    author: 'HEVENTON Quality Team',
    imageCaption: 'Fabric quality details',
    tags: ['fabric-quality', 'thread-count', 'materials', 'craftsmanship'],
    content: `
      <p>When shopping for quality shirts and blouses, you'll often encounter terms like "thread count," "ply," and "weave type." Understanding these terms helps you make informed decisions about your purchases.</p>

      <h2>What is Thread Count?</h2>
      <p>Thread count refers to the number of threads woven into one square inch of fabric. It's calculated by adding the number of lengthwise (warp) and widthwise (weft) threads.</p>

      <h3>The Thread Count Myth</h3>
      <p>While higher thread count often indicates better quality, it's not the only factor. A thread count between 80-120 is standard for quality dress shirts. Beyond 200, you may not notice significant quality differences.</p>

      <h2>Ply Matters</h2>
      <p>Ply refers to how many yarns are twisted together to make a single thread. Two-ply fabric (where two yarns are twisted together) is generally more durable and has a better hand feel than single-ply fabric.</p>

      <h2>Weave Types</h2>
      <h3>Poplin</h3>
      <p>A tight, plain weave that creates a smooth, crisp fabric. Ideal for formal wear and creates a clean, professional appearance.</p>

      <h3>Oxford</h3>
      <p>A basketweave pattern creating a slightly textured, durable fabric. More casual than poplin and slightly more breathable.</p>

      <h3>Twill</h3>
      <p>Characterized by diagonal parallel ribs. Soft, drapes well, and resists wrinkles better than other weaves.</p>

      <h2>Quality Indicators Beyond Thread Count</h2>
      <ul>
        <li><strong>Fiber Quality:</strong> Long-staple cotton creates smoother, stronger fabric</li>
        <li><strong>Finish:</strong> Look for even coloring and consistent texture</li>
        <li><strong>Construction:</strong> Examine stitching quality, button attachment, and seam strength</li>
        <li><strong>Pattern Matching:</strong> Quality shirts have patterns that align at seams</li>
      </ul>

      <h2>The HEVENTON Quality Standards</h2>
      <p>At HEVENTON, we prioritize fiber quality and construction over simply maximizing thread count. We use premium long-staple cotton, ensure proper ply construction, and maintain exacting standards for finishing and detail work.</p>

      <p>Remember: a well-made shirt with a moderate thread count will outlast and outperform a poorly constructed shirt with a high thread count every time.</p>
    `,
  },
};

const slug = route.params.slug as string;
const post = computed(() => blogPosts[slug as keyof typeof blogPosts] || null);

// Get related posts
const relatedPosts = computed(() => {
  if (!post.value) return [];
  return Object.values(blogPosts)
    .filter(p => p.categoryId === post.value?.categoryId && p.slug !== post.value?.slug)
    .slice(0, 3);
});

if (post.value) {
  setPageMeta(post.value.title, 'page');
  await getRobots();
  setRobotForStaticPage('BlogPost');
}
</script>

<style scoped>
.prose {
  @apply text-gray-700;
}

.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold mt-6 mb-3;
}

.prose p {
  @apply mb-4 leading-relaxed;
}

.prose ul {
  @apply list-disc list-inside mb-4 space-y-2;
}

.prose li {
  @apply ml-4;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
