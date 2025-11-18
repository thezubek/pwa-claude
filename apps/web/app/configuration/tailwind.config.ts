import sfTypography from '@storefront-ui/typography';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const fontFamilyText = process.env.NUXT_PUBLIC_FONT || 'Red Hat Text';

export default {
  presets: [tailwindConfig],
  content: ['./**/*.vue', '../../node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  safelist: [
    {
      pattern: /^col-span-(1[0-2]|[1-9])$/,
    },
  ],
  theme: {
    extend: {
      sfTypography: () => ({
        'display-1': {
          fontFamily: 'inherit',
        },
        'display-2': {
          fontFamily: 'inherit',
        },
        'headline-1': {
          fontFamily: 'inherit',
        },
        'headline-2': {
          fontFamily: 'inherit',
        },
        'headline-3': {
          fontFamily: 'inherit',
        },
        'headline-4': {
          fontFamily: 'inherit',
        },
        'headline-5': {
          fontFamily: 'inherit',
        },
        'headline-6': {
          fontFamily: 'inherit',
        },
      }),
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Manrope', `${fontFamilyText}`, ...defaultTheme.fontFamily.sans],
        editor: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          '50': 'rgb(var(--colors-2-primary-50) / <alpha-value>)',
          '100': 'rgb(var(--colors-2-primary-100) / <alpha-value>)',
          '200': 'rgb(var(--colors-2-primary-200) / <alpha-value>)',
          '300': 'rgb(var(--colors-2-primary-300) / <alpha-value>)',
          '400': 'rgb(var(--colors-2-primary-400) / <alpha-value>)',
          '500': 'rgb(var(--colors-2-primary-500) / <alpha-value>)',
          '600': 'rgb(var(--colors-2-primary-600) / <alpha-value>)',
          '700': 'rgb(var(--colors-2-primary-700) / <alpha-value>)',
          '800': 'rgb(var(--colors-2-primary-800) / <alpha-value>)',
          '900': 'rgb(var(--colors-2-primary-900) / <alpha-value>)',
          '950': 'rgb(var(--colors-2-primary-950) / <alpha-value>)',
        },
        secondary: {
          '50': 'rgb(var(--colors-2-secondary-50) / <alpha-value>)',
          '100': 'rgb(var(--colors-2-secondary-100) / <alpha-value>)',
          '200': 'rgb(var(--colors-2-secondary-200) / <alpha-value>)',
          '300': 'rgb(var(--colors-2-secondary-300) / <alpha-value>)',
          '400': 'rgb(var(--colors-2-secondary-400) / <alpha-value>)',
          '500': 'rgb(var(--colors-2-secondary-500) / <alpha-value>)',
          '600': 'rgb(var(--colors-2-secondary-600) / <alpha-value>)',
          '700': 'rgb(var(--colors-2-secondary-700) / <alpha-value>)',
          '800': 'rgb(var(--colors-2-secondary-800) / <alpha-value>)',
          '900': 'rgb(var(--colors-2-secondary-900) / <alpha-value>)',
          '950': 'rgb(var(--colors-2-secondary-950) / <alpha-value>)',
        },
        editor: {
          'body-bg': '#F1F3F5',
          button: '#062633',
        },

        header: {
          '50': 'rgb(var(--colors-2-header-50) / <alpha-value>)',
          '100': 'rgb(var(--colors-2-header-100) / <alpha-value>)',
          '200': 'rgb(var(--colors-2-header-200) / <alpha-value>)',
          '300': 'rgb(var(--colors-2-header-300) / <alpha-value>)',
          '400': 'rgb(var(--colors-2-header-400) / <alpha-value>)',
          '500': 'rgb(var(--colors-2-header-500) / <alpha-value>)',
          '600': 'rgb(var(--colors-2-header-600) / <alpha-value>)',
          '700': 'rgb(var(--colors-2-header-700) / <alpha-value>)',
          '800': 'rgb(var(--colors-2-header-800) / <alpha-value>)',
          '900': 'rgb(var(--colors-2-header-900) / <alpha-value>)',
          '950': 'rgb(var(--colors-2-header-950) / <alpha-value>)',
        },
        aura: {
          primary: {
            DEFAULT: '#1A237E',
            light: '#3949AB',
            dark: '#0D1642',
            50: '#E8EAF6',
            100: '#C5CAE9',
            200: '#9FA8DA',
            300: '#7986CB',
            400: '#5C6BC0',
            500: '#1A237E',
            600: '#3949AB',
            700: '#303F9F',
            800: '#283593',
            900: '#1A237E',
          },
          accent: {
            DEFAULT: '#C8A1A4',
            light: '#E8D5D7',
            dark: '#A67B7E',
            50: '#FAF6F6',
            100: '#F0E6E7',
            200: '#E8D5D7',
            300: '#DFC4C7',
            400: '#D6B3B6',
            500: '#C8A1A4',
            600: '#B88E91',
            700: '#A67B7E',
            800: '#8D686B',
            900: '#745558',
          },
          background: {
            light: '#F9F9F9',
            DEFAULT: '#FFFFFF',
            dark: '#F5F5F5',
            darker: '#EEEEEE',
          },
          text: {
            primary: '#222222',
            secondary: '#757575',
            disabled: '#BDBDBD',
            inverse: '#FFFFFF',
          },
          success: {
            DEFAULT: '#4CAF50',
            light: '#81C784',
            dark: '#388E3C',
          },
          warning: {
            DEFAULT: '#FF9800',
            light: '#FFB74D',
            dark: '#F57C00',
          },
          error: {
            DEFAULT: '#F44336',
            light: '#E57373',
            dark: '#D32F2F',
          },
          info: {
            DEFAULT: '#2196F3',
            light: '#64B5F6',
            dark: '#1976D2',
          },
          border: {
            DEFAULT: '#E0E0E0',
            light: '#F5F5F5',
            dark: '#BDBDBD',
          },
        },
      },
      gridTemplateAreas: {
        'product-page': ['left-top right', 'left-bottom right'],
      },
      gridTemplateColumns: {
        'product-page': 'minmax(56%, 500px) auto',
      },
      gridTemplateRows: {
        'category-sidebar': 'min-content auto min-content',
      },
      screens: {
        '4xl': '1920px',
        '3xl': '1536px',
        '2xl': '1366px',
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '376px',
        '2xs': '360px',
      },
      width: {
        '128': '32rem',
      },
      spacing: {
        s: '1.875rem',
        m: '2.5rem',
        l: '3.125rem',
        xl: '3.75rem',
        'aura-xs': '0.5rem',
        'aura-sm': '1rem',
        'aura-md': '1.5rem',
        'aura-lg': '2rem',
        'aura-xl': '3rem',
        'aura-2xl': '4rem',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [sfTypography, require('@savvywombat/tailwindcss-grid-areas')],
} as Config;
