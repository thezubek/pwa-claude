<template>
  <div class="bg-aura-bg-light">
    <!-- Header -->
    <BlocksHeaderAura
      :nav-links="navLinks"
      :cart-item-count="3"
      @search="handleSearch"
      @account-click="handleAccountClick"
      @cart-click="handleCartClick"
    />

    <main class="flex flex-col items-center">
      <div class="w-full max-w-7xl px-4 sm:px-8 lg:px-10 py-8 md:py-16">
        <!-- Hero Section -->
        <BlocksHeroAura
          headline="The Art of Ambition"
          subheadline="Discover timeless pieces from the Fall/Winter Collection, crafted for the modern professional. Uncompromising quality, impeccable style."
          cta-text="Shop The Collection"
          cta-link="/category/all"
          bg-image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop"
        />

        <!-- New Arrivals Section -->
        <section class="py-12 md:py-20">
          <h2 class="font-display text-3xl font-bold leading-tight tracking-tight text-center text-aura-text-dark pb-6">
            New Arrivals
          </h2>

          <div class="relative">
            <div class="flex overflow-x-auto scrollbar-hidden py-4 -mx-4">
              <div class="flex items-stretch px-4 gap-6">
                <UiProductCardAura
                  v-for="product in mockProducts"
                  :key="product.id"
                  :product="product"
                  :lazy="false"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Editorial Content -->
        <section class="space-y-8 py-12">
          <BlocksEditorialCardAura
            title="Style Guide: Boardroom to After-Hours"
            description="Explore curated looks designed for seamless transitions, empowering you with confidence and style all day long."
            cta-text="Discover The Lookbook"
            cta-link="/lookbook"
            bg-image="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop"
          />
        </section>

        <!-- Featured Categories -->
        <section class="py-12 md:py-20">
          <h2 class="font-display text-3xl font-bold leading-tight tracking-tight text-center text-aura-text-dark pb-6">
            Shop by Category
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UiCategoryCardAura
              v-for="category in mockCategories"
              :key="category.id"
              :category="category"
            />
          </div>
        </section>

        <!-- Button Examples -->
        <section class="py-12 md:py-20 bg-white rounded-xl p-8">
          <h2 class="font-display text-3xl font-bold leading-tight tracking-tight text-center text-aura-text-dark pb-6">
            AURA Button Variants
          </h2>

          <div class="flex flex-wrap gap-4 justify-center">
            <UiButton variant="aura-primary" size="sm">
              Primary Small
            </UiButton>
            <UiButton variant="aura-primary" size="base">
              Primary Base
            </UiButton>
            <UiButton variant="aura-primary" size="lg">
              Primary Large
            </UiButton>
          </div>

          <div class="flex flex-wrap gap-4 justify-center mt-4">
            <UiButton variant="aura-secondary" size="sm">
              Secondary Small
            </UiButton>
            <UiButton variant="aura-secondary" size="base">
              Secondary Base
            </UiButton>
            <UiButton variant="aura-secondary" size="lg">
              Secondary Large
            </UiButton>
          </div>

          <div class="flex flex-wrap gap-4 justify-center mt-4">
            <UiButton variant="aura-ghost" size="sm">
              Ghost Small
            </UiButton>
            <UiButton variant="aura-ghost" size="base">
              Ghost Base
            </UiButton>
            <UiButton variant="aura-ghost" size="lg">
              Ghost Large
            </UiButton>
          </div>
        </section>

        <!-- Newsletter Section -->
        <section class="py-12 border-t border-gray-200">
          <div class="flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="text-center md:text-left">
              <h3 class="font-display text-2xl font-bold text-aura-text-dark">Join The Inner Circle</h3>
              <p class="font-body text-aura-text-muted">
                Receive exclusive updates on new arrivals and special offers.
              </p>
            </div>

            <div class="flex gap-2 w-full max-w-md">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="flex-1 h-12 px-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aura-primary/50 text-base font-body"
              />
              <UiButton variant="aura-primary" size="base" @click="handleSubscribe">
                Subscribe
              </UiButton>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer placeholder -->
    <footer class="bg-gray-100 text-gray-700 py-8">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 text-center">
        <p class="font-body text-sm text-aura-text-muted">© 2024 AURA. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Mock data for demonstration
const navLinks = [
  { label: 'New In', path: '/new' },
  { label: 'Clothing', path: '/clothing' },
  { label: 'Accessories', path: '/accessories' },
  { label: 'About Us', path: '/about' },
];

const mockProducts = [
  {
    id: 1,
    name: 'The Regent Blazer',
    prices: {
      default: {
        price: {
          value: 450.0,
        },
      },
    },
    images: {
      all: [
        {
          url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=533&fit=crop',
        },
      ],
    },
  },
  {
    id: 2,
    name: 'The City Tote',
    prices: {
      default: {
        price: {
          value: 395.0,
        },
      },
    },
    images: {
      all: [
        {
          url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=533&fit=crop',
        },
      ],
    },
  },
  {
    id: 3,
    name: 'The Sloane Trouser',
    prices: {
      default: {
        price: {
          value: 275.0,
        },
      },
    },
    images: {
      all: [
        {
          url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=533&fit=crop',
        },
      ],
    },
  },
  {
    id: 4,
    name: 'The Elena Silk Blouse',
    prices: {
      default: {
        price: {
          value: 220.0,
        },
      },
    },
    images: {
      all: [
        {
          url: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=533&fit=crop',
        },
      ],
    },
  },
];

const mockCategories = [
  {
    id: 1,
    name: 'The Blazer Shop',
    details: [
      {
        imagePath: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=400&h=500&fit=crop',
      },
    ],
  },
  {
    id: 2,
    name: 'Essential Dresses',
    details: [
      {
        imagePath: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
      },
    ],
  },
  {
    id: 3,
    name: 'Leather Goods',
    details: [
      {
        imagePath: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=500&fit=crop',
      },
    ],
  },
];

const email = ref('');

const handleSearch = (query: string) => {
  console.log('Search query:', query);
  // Implement search logic
};

const handleAccountClick = () => {
  console.log('Account clicked');
  // Navigate to account page
};

const handleCartClick = () => {
  console.log('Cart clicked');
  // Navigate to cart page
};

const handleSubscribe = () => {
  if (email.value) {
    console.log('Subscribing email:', email.value);
    // Implement subscription logic
    email.value = '';
  }
};

// Set page meta
useHead({
  title: 'AURA Design System Demo',
  meta: [
    {
      name: 'description',
      content: 'Demo page showcasing the AURA design system components',
    },
  ],
});
</script>
