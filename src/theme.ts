import type { Theme } from '@unocss/preset-uno'

export const theme: Theme = {
  colors: {
    primary: {
      DEFAULT: '#365DC9',
      '50': '#C7D2F0',
      '100': '#B7C5EC',
      '200': '#96ABE3',
      '300': '#7691DA',
      '400': '#5677D2',
      '500': '#365DC9',
      '600': '#2A499D',
      '700': '#1E3471',
      '800': '#122044',
      '900': '#060B18'
    },
    accent: {
      DEFAULT: '#C9787C',
      '50': '#FDFBFB',
      '100': '#F8EDED',
      '200': '#ECCFD1',
      '300': '#E0B2B5',
      '400': '#D59598',
      '500': '#C9787C',
      '600': '#B95055',
      '700': '#953C40',
      '800': '#6D2C2F',
      '900': '#451C1E'
    },
    link: {
      DEFAULT: 'var(--du-color-link)',
      hover: 'var(--du-color-link-hover)'
    },
    theme: {
      text: 'var(--du-color-text)',
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
  fontFamily: {
    normal: 'var(--du-font-family-normal)',
    heading: 'var(--du-font-family-heading)'
  },
  lineHeight: {
    normal: 'var(--du-line-height-normal)',
    heading: 'var(--du-line-height-heading)'
  }
}
