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
        teal: {
          DEFAULT: '#0F4C5C',
          light: '#3D7A89',
          dark: '#073642',
        },
        sage: {
          DEFAULT: '#99B2A8',
          light: '#C7D3CC',
          dark: '#6D8377',
        },
        sand: {
          DEFAULT: '#EAE3D2',
          light: '#F7F5EF',
          dark: '#D6CBB3',
        },
        coral: {
          DEFAULT: '#E07A5F',
          light: '#F4A896',
          dark: '#B85C3B',
        },
        ink: {
          DEFAULT: '#232323',
          light: '#444444',
        },
        white: '#fff',
        black: '#000',
      },
    },
  },
  plugins: [],
};

export default config;
