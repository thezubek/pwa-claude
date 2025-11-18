<template>
  <NuxtLayout name="default">
    <Error404Content v-if="error && error.statusCode == 404" />
    <div v-else class="my-8 flex items-center justify-center p-4">
      <div class="w-full max-w-2xl mx-auto text-center">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <!-- Error Icon -->
          <div class="mb-6">
            <svg class="w-16 h-16 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          <!-- Error Title -->
          <h1 class="text-3xl md:text-4xl font-semibold mb-4">
            {{ error.statusCode }} - {{ t('error.errorOccured') }}
          </h1>

          <!-- Error Message -->
          <p v-if="error.statusMessage" class="text-gray-600 dark:text-gray-300 mb-6">
            {{ error.statusMessage }}
          </p>

          <!-- Error Details (Development Only) -->
          <details v-if="isDevelopment && error.stack" class="text-left mb-6 bg-gray-100 dark:bg-gray-900 rounded p-4">
            <summary class="cursor-pointer font-semibold mb-2">{{ t('error.technicalDetails') }}</summary>
            <pre class="text-xs overflow-auto">{{ error.stack }}</pre>
          </details>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              v-if="canRetry"
              @click="handleRetry"
              :disabled="retrying"
              class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <span v-if="retrying">{{ t('error.retrying') }}...</span>
              <span v-else>{{ t('error.retry') }}</span>
            </button>

            <button
              @click="handleGoHome"
              class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {{ t('error.goHome') }}
            </button>

            <button
              v-if="canGoBack"
              @click="handleGoBack"
              class="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              {{ t('error.goBack') }}
            </button>
          </div>

          <!-- Error ID for Support -->
          <p class="mt-6 text-sm text-gray-500">
            {{ t('error.errorId') }}: <code class="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">{{ errorId }}</code>
          </p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { logger } from '~/utils/logger'

interface ErrorProp {
  statusCode: number;
  statusMessage: string;
  stack?: string;
  [key: string]: unknown;
}

const props = defineProps<{ error: ErrorProp }>();
const { t } = useI18n();
const { setInitialDataSSR } = useInitialSetup();
const router = useRouter();
const log = logger.namespace('ErrorBoundary');

// Error state
const retrying = ref(false);
const errorId = ref(generateErrorId());
const isDevelopment = computed(() => process.env.NODE_ENV === 'development');
const canRetry = computed(() => props.error.statusCode >= 500); // Retry server errors
const canGoBack = computed(() => typeof window !== 'undefined' && window.history.length > 1);

// Log error to console and tracking service
onMounted(() => {
  log.error(`Error boundary caught error ${errorId.value}`, {
    statusCode: props.error.statusCode,
    statusMessage: props.error.statusMessage,
    url: window.location.href,
    userAgent: navigator.userAgent,
  });

  // Send to error tracking service (e.g., Sentry)
  if (typeof window !== 'undefined' && (window as any).Sentry) {
    (window as any).Sentry.captureException(new Error(props.error.statusMessage), {
      tags: {
        errorId: errorId.value,
        statusCode: props.error.statusCode,
      },
    });
  }
});

/**
 * Generate unique error ID for tracking
 */
function generateErrorId(): string {
  return `ERR-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Retry the failed operation
 */
async function handleRetry() {
  retrying.value = true;
  log.info('Retrying after error...');

  try {
    // Wait a moment before retrying
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reload the current page
    await router.replace(router.currentRoute.value.fullPath);

    // Clear error
    clearError({ redirect: router.currentRoute.value.fullPath });
  } catch (err) {
    log.error('Retry failed', err);
  } finally {
    retrying.value = false;
  }
}

/**
 * Navigate to home page
 */
function handleGoHome() {
  clearError({ redirect: '/' });
}

/**
 * Go back to previous page
 */
function handleGoBack() {
  if (typeof window !== 'undefined' && window.history.length > 1) {
    window.history.back();
  } else {
    handleGoHome();
  }
}

const { getSetting: getFavicon } = useSiteSettings('favicon');
const { getSetting: getOgTitle } = useSiteSettings('ogTitle');
const { getSetting: getOgImage } = useSiteSettings('ogImage');
const { getSetting: getMetaDescription } = useSiteSettings('metaDescription');
const { getSetting: getMetaKeywords } = useSiteSettings('metaKeywords');
const { getSetting: getRobots } = useSiteSettings('robots');
const { getSetting: getPrimaryColor } = useSiteSettings('primaryColor');

const ogTitle = ref(getOgTitle());
const ogImage = ref(getOgImage());
const description = ref(getMetaDescription());
const keywords = ref(getMetaKeywords());
const robots = ref(getRobots());
const fav = ref(getFavicon());
const themeColor = ref(getPrimaryColor());

watchEffect(() => {
  ogTitle.value = getOgTitle();
  ogImage.value = getOgImage();
  description.value = getMetaDescription();
  keywords.value = getMetaKeywords();
  robots.value = getRobots();
  fav.value = getFavicon();
  themeColor.value = getPrimaryColor();
});

useSeoMeta({
  title: `${props.error.statusCode} - ${props.error.statusCode === 404 ? t('error.pageNotFound') : t('error.errorPlain')}`,
  ogTitle: () => ogTitle.value,
  ogImage: () => ogImage.value,
  description: () => description.value,
  keywords: () => keywords.value,
  robots: () => robots.value,
  themeColor: () => themeColor.value,
  generator: 'plentymarkets',
});

useHead({
  link: () => [
    { rel: 'icon', href: fav.value },
    { rel: 'apple-touch-icon', href: fav.value },
  ],
});

await callOnce(async () => {
  await setInitialDataSSR();
});
</script>

<style lang="scss">
@use '~/assets/style.scss';
</style>
