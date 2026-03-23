import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--aw-color-background)',
        surface: 'var(--aw-color-surface)',
        border: 'var(--aw-color-border)',
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        'accent-hover': 'var(--aw-color-accent-hover)',
        'accent-soft': 'var(--aw-color-accent-soft)',
        heading: 'var(--aw-color-text-heading)',
        'text-primary': 'var(--aw-color-text-primary)',
        'text-secondary': 'var(--aw-color-text-secondary)',
        'brand-eiffel': 'var(--aw-color-brand-eiffel)',
        'brand-eiffel-soft': 'var(--aw-color-brand-eiffel-soft)',
        link: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-serif)', ...defaultTheme.fontFamily.serif],
      },

      animation: {
        fade: 'fadeInUp 1s both',
        'hero-fade': 'fadeInUp 320ms ease-out both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
