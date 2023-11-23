import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1366px',
      // => @media (min-width: 1438px) { ... }
    },
    colors: {
      'primary-bg': 'var(--primary-bg)',
      'secondary-bg': 'var(--secondary-bg)',
      'primary-text': 'var(--primary-text)',
      'secondary-text': 'var(--secondary-text)',
      'tertiary-text': 'var(--tertiary-text)',

      'primary-bg-dark': 'var(--primary-bg-dark)',
      'secondary-bg-dark': 'var(--secondary-bg-dark)',
      'primary-text-dark': 'var(--primary-text-dark)',
      'secondary-text-dark': 'var(--secondary-text-dark)',
      'tertiary-text-dark': 'var(--tertiary-text-dark)',

    },
    extend: {
      fontFamily: {
        'open-sans': 'var(--open-sans)'
      }
    },
  },
  plugins: [],
}
export default config
