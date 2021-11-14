import { escapeSelector as e } from 'unocss'
import type { Rule } from 'unocss'

export const rules: Rule[] = [
  [/^font-size-(\w+)$/, ([, w]) => ({ 'font-size': `var(--text-${w})` })],
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
  ],
  [
    /^hyphenated$/,
    ([], { rawSelector, currentSelector, variantHandlers, theme }) => `
.${e(rawSelector)} {
  overflow-wrap: break-word;

  -webkit-hyphens: auto;
  -webkit-hyphenate-limit-before: 3;
  -webkit-hyphenate-limit-after: 3;
  -webkit-hyphenate-limit-chars: 6 3 3;
  -webkit-hyphenate-limit-lines: 2;
  -webkit-hyphenate-limit-last: always;
  -webkit-hyphenate-limit-zone: 8%;

  hyphens: auto;
  hyphenate-limit-chars: 6 3 3;
  hyphenate-limit-lines: 2;
  hyphenate-limit-last: always;
  hyphenate-limit-zone: 8%;
}
`
  ]
]
