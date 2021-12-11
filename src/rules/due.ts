import { escapeSelector as e } from '@unocss/core'
import { parseColor } from '../utils'
import type { Rule } from '@unocss/core'

export const due: Rule[] = [
  [/^due?-rounded$/, () => ({ 'border-radius': 'var(--du-radius)' })],
  [
    /^due?-text-(?:size-)?(\w+)$/,
    ([, w]) => ({ 'font-size': `var(--du-text-${w})` })
  ],
  [
    /^due?-var-color-(.+)$/,
    ([, body], { rawSelector, currentSelector, variantHandlers, theme }) => {
      if (variantHandlers.length) return

      const { color } = parseColor(body, theme) ?? {}
      if (!color) return

      return {
        [`--du-color-${body}`]: color
      }
    }
  ],
  [
    /^due?-aspect-ratio-(\d+):(\d+)$/,
    ([, w, h], { rawSelector, currentSelector, variantHandlers, theme }) => {
      if (variantHandlers.length) return

      return `
.${e(rawSelector)} {
  display: grid;
}
.${e(rawSelector)}::before {
  content: '';
  display: block;
  padding-bottom: ${(100 / (+w / +h)).toFixed(2)}%;
}
.${e(rawSelector)}::before,
.${e(rawSelector)} > * {
  grid-area: 1 / 1 / 1 / 1;
}
    `
    }
  ]
]
