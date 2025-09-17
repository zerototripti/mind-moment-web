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
        teal: '#0F4C5C',
        sage: '#99B2A8',
        sand: '#EAE3D2',
        coral: '#E07A5F',
        ink: '#232323',
      },
    },
  },
  plugins: [],
};

export default config;
