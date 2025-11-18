<template>
  <header
    class="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/80 px-4 sm:px-8 lg:px-10 py-4"
    data-testid="header-aura"
  >
    <div class="flex items-center justify-between">
      <!-- Logo + Brand -->
      <div class="flex items-center gap-8">
        <NuxtLink to="/" class="flex items-center gap-3 no-underline">
          <!-- Logo SVG -->
          <div class="size-5 text-aura-text-dark">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 class="font-display text-xl font-bold tracking-headline text-aura-text-dark">{{ brandName }}</h2>
        </NuxtLink>

        <!-- Desktop Nav -->
        <nav v-if="navLinks && navLinks.length > 0" class="hidden md:flex items-center gap-9">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="font-body text-sm font-medium text-aura-text-dark hover:text-aura-primary transition-colors no-underline"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-2 sm:gap-4">
        <!-- Search Bar (desktop) -->
        <div v-if="showSearch" class="hidden lg:flex items-center bg-gray-100 rounded-lg h-10 max-w-64">
          <div class="flex items-center justify-center pl-3 text-gray-500">
            <span class="material-symbols-outlined text-base">search</span>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search"
            class="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 px-2 text-sm font-body"
            @keyup.enter="handleSearch"
          />
        </div>

        <!-- Icon Buttons -->
        <button
          v-if="showSearch"
          class="flex lg:hidden p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Search"
          @click="toggleMobileSearch"
        >
          <span class="material-symbols-outlined">search</span>
        </button>

        <button
          v-if="showAccount"
          class="p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Account"
          @click="handleAccountClick"
        >
          <span class="material-symbols-outlined">person</span>
        </button>

        <button
          v-if="showCart"
          class="p-2.5 hover:bg-gray-100 rounded-lg transition-colors relative"
          aria-label="Shopping cart"
          @click="handleCartClick"
        >
          <span class="material-symbols-outlined">shopping_bag</span>
          <span
            v-if="cartItemCount > 0"
            class="absolute top-1 right-1 bg-aura-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
          >
            {{ cartItemCount }}
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Search (expandable) -->
    <Transition name="slide-down">
      <div v-if="mobileSearchOpen" class="mt-4 lg:hidden">
        <div class="flex items-center bg-gray-100 rounded-lg h-10">
          <div class="flex items-center justify-center pl-3 text-gray-500">
            <span class="material-symbols-outlined text-base">search</span>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search"
            class="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 px-2 text-sm font-body"
            @keyup.enter="handleSearch"
          />
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
interface NavLink {
  label: string;
  path: string;
}

interface Props {
  brandName?: string;
  navLinks?: NavLink[];
  showSearch?: boolean;
  showAccount?: boolean;
  showCart?: boolean;
  cartItemCount?: number;
}

const props = withDefaults(defineProps<Props>(), {
  brandName: 'AURA',
  navLinks: () => [],
  showSearch: true,
  showAccount: true,
  showCart: true,
  cartItemCount: 0,
});

const emit = defineEmits<{
  search: [query: string];
  accountClick: [];
  cartClick: [];
}>();

const searchQuery = ref('');
const mobileSearchOpen = ref(false);

const toggleMobileSearch = () => {
  mobileSearchOpen.value = !mobileSearchOpen.value;
};

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value);
  }
};

const handleAccountClick = () => {
  emit('accountClick');
};

const handleCartClick = () => {
  emit('cartClick');
};
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
