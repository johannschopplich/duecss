import type { Theme } from '@unocss/preset-wind'

export const theme: Theme = {
  colors: {
    primary: {
      DEFAULT: '#6366f1',
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81'
    },
    accent: {
      DEFAULT: '#f43f5e',
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337'
    },
    link: {
      DEFAULT: 'var(--du-color-link)',
      hover: 'var(--du-color-link-hover)'
    },
    theme: {
      base: 'var(--du-color-text)',
      background: 'var(--du-color-background)'
    },
    contrast: {
      lowest: 'var(--du-color-contrast-lowest)',
      lower: 'var(--du-color-contrast-lower)',
      low: 'var(--du-color-contrast-low)',
      medium: 'var(--du-color-contrast-medium)',
      high: 'var(--du-color-contrast-high)',
      higher: 'var(--du-color-contrast-higher)'
    }
  },
  borderRadius: {
    DEFAULT: '0.125rem'
  },
  fontSize: {
    xs: ['0.75rem', 'var(--du-line-height-normal)'],
    sm: ['0.875rem', 'var(--du-line-height-normal)'],
    base: ['1rem', 'var(--du-line-height-normal)'],
    lg: ['var(--du-text-lg)', 'var(--du-line-height-heading)'],
    xl: ['var(--du-text-xl)', 'var(--du-line-height-heading)'],
    '2xl': ['var(--du-text-2xl)', 'var(--du-line-height-heading)'],
    '3xl': ['var(--du-text-3xl)', 'var(--du-line-height-heading)'],
    '4xl': ['var(--du-text-4xl)', 'var(--du-line-height-heading)']
  },
  fontFamily: {
    normal: 'var(--du-font-family-normal)',
    heading: 'var(--du-font-family-heading)'
  },
  lineHeight: {
    normal: 'var(--du-line-height-normal)',
    heading: 'var(--du-line-height-heading)'
  }
}
