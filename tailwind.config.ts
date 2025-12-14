import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vine-red': {
          DEFAULT: '#8B4A5C',
          light: '#A66B7A',
        },
        'bronze': {
          DEFAULT: '#CD7F32',
          overlay: 'rgba(205, 127, 50, 0.08)',
        },
        'gold': {
          DEFAULT: '#D4AF37',
        },
        'ivory': {
          DEFAULT: '#FFFEF7',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

