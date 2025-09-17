import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        anchor: {
          DEFAULT: '#0F4C5C', // Anchor Teal
          dark: '#0A2E36',
        },
        sage: {
          DEFAULT: '#99B2A8', // Sage
          dark: '#7A9487',
        },
        sand: {
          DEFAULT: '#EAE3D2', // Sand
          dark: '#CFC7B0',
        },
        coral: {
          DEFAULT: '#E07A5F', // Warm Coral
          dark: '#B85C44',
        },
        ink: {
          DEFAULT: '#232323', // Ink
          dark: '#F5F5F5',
        },
        white: '#fff',
        black: '#000',
      },
      borderRadius: {
        card: '1rem',
        chip: '9999px',
        button: '0.5rem',
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(15, 76, 92, 0.08)',
        chip: '0 1px 2px 0 rgba(15, 76, 92, 0.06)',
        'soft': '0 2px 8px 0 rgba(15, 76, 92, 0.10)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
  function ({ addComponents, theme }: any) {
      addComponents({
        '.card': {
          borderRadius: theme('borderRadius.card'),
          boxShadow: theme('boxShadow.card'),
          backgroundColor: theme('colors.sand.DEFAULT'),
          color: theme('colors.ink.DEFAULT'),
          padding: '1.5rem',
          '@screen dark': {
            backgroundColor: theme('colors.ink.DEFAULT'),
            color: theme('colors.sand.DEFAULT'),
          },
        },
        '.soft-shadow': {
          boxShadow: theme('boxShadow.soft'),
        },
        '.btn-brand': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: theme('borderRadius.button'),
          fontWeight: '600',
          padding: '0.5rem 1.25rem',
          backgroundColor: theme('colors.anchor.DEFAULT'),
          color: theme('colors.sand.DEFAULT'),
          transition: 'background 0.2s',
          border: 'none',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: theme('colors.coral.DEFAULT'),
            color: theme('colors.sand.DEFAULT'),
          },
          '@screen dark': {
            backgroundColor: theme('colors.anchor.dark'),
            color: theme('colors.sand.dark'),
          },
        },
        '.chip': {
          display: 'inline-block',
          borderRadius: theme('borderRadius.chip'),
          backgroundColor: theme('colors.sage.DEFAULT'),
          color: theme('colors.ink.DEFAULT'),
          fontWeight: '500',
          fontSize: '0.875rem',
          padding: '0.25rem 0.75rem',
          boxShadow: theme('boxShadow.chip'),
          '@screen dark': {
            backgroundColor: theme('colors.sage.dark'),
            color: theme('colors.ink.dark'),
          },
        },
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: theme('borderRadius.button'),
          fontWeight: '600',
          padding: '0.5rem 1.25rem',
          backgroundColor: theme('colors.anchor.DEFAULT'),
          color: theme('colors.sand.DEFAULT'),
          transition: 'background 0.2s',
          border: 'none',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: theme('colors.coral.DEFAULT'),
            color: theme('colors.sand.DEFAULT'),
          },
          '@screen dark': {
            backgroundColor: theme('colors.anchor.dark'),
            color: theme('colors.sand.dark'),
          },
        },
      });
    },
  ],
};

export default config;
