import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const content = ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']

export const theme = {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
        950: '#082f49',
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
      },
      accent: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
        950: '#022c22',
      },
    },
    fontFamily: {
      sans: ['Inter Variable', 'Inter', ..._fontFamily.sans],
      serif: ['Merriweather', ..._fontFamily.serif],
      mono: ['JetBrains Mono', ..._fontFamily.mono],
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'slide-up': 'slideUp 0.5s ease-out',
      'slide-down': 'slideDown 0.5s ease-out',
      'scale-in': 'scaleIn 0.3s ease-out',
      'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      'float': 'float 3s ease-in-out infinite',
      'gradient': 'gradient 15s ease infinite',
      'shimmer': 'shimmer 2s linear infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideUp: {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      slideDown: {
        '0%': { transform: 'translateY(-20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      scaleIn: {
        '0%': { transform: 'scale(0.9)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
      bounceGentle: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      gradient: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center'
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center'
        },
      },
      shimmer: {
        '0%': {
          'background-position': '-200px 0'
        },
        '100%': {
          'background-position': 'calc(200px + 100%) 0'
        },
      },
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      'shimmer': 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.5) 50%, transparent 60%)',
    },
    backdropBlur: {
      xs: '2px',
    },
  },
}

export const plugins = [
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/typography'),
]