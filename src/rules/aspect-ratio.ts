import { escapeSelector as e } from 'unocss'
import type { Rule } from 'unocss'

export const aspectRatio: Rule[] = [
  [
    /^aspect-ratio-(\d+):(\d+)$/,
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
