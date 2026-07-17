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
        'luxury-fade': 'luxuryFade 1.2s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        luxuryFade: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

