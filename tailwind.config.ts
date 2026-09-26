import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0f0f1a',
          800: '#1a1a2e',
          700: '#272752',
          600: '#2d2d5f',
        },
        accent: {
          gold: '#e8b24a',
          'gold-dark': '#d4a245',
          'gold-light': '#f5c871',
        },
        cta: {
          red: '#ff3b3b',
          'red-dark': '#e63030',
          'red-light': '#ff6666',
        },
      },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        hoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'hover-lift': 'hoverLift 150ms ease-out',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
