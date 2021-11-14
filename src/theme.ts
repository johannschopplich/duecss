export interface Theme {
  borderRadius?: Record<string, string>
  breakpoints?: Record<string, string>
  colors?: Record<string, string | Record<string, string>>
  fontFamily?: Record<string, string>
  fontSize?: Record<string, [string, string]>
  lineHeight?: Record<string, string>
  letterSpacing?: Record<string, string>
  boxShadow?: Record<string, string>
  textIndent?: Record<string, string>
  textShadow?: Record<string, string>
  textStrokeWidth?: Record<string, string>
  // filters
  blur?: Record<string, string>
  dropShadow?: Record<string, string | string[]>
}

export const theme: Theme = {
  colors: {
    primary: 'var(--color-primary)',
    accent: 'var(--color-accent)',
    contrast: {
      lowest: 'var(--color-contrast-lowest)',
      lower: 'var(--color-contrast-lower)',
      low: 'var(--color-contrast-low)',
      medium: 'var(--color-contrast-medium)',
      high: 'var(--color-contrast-high)',
      higher: 'var(--color-contrast-higher)'
    }
  },
  fontFamily: {
    normal: 'var(--font-family-normal)',
    heading: 'var(--font-family-heading)'
  },
  lineHeight: {
    normal: 'var(--line-height-normal)',
    heading: 'var(--line-height-heading)'
  }
}
