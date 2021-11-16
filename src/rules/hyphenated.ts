import { escapeSelector as e } from 'unocss'
import type { Rule } from 'unocss'

export const hyphenated: Rule[] = [
  [
    /^hyphenated$/,
    ([], { rawSelector, currentSelector, variantHandlers, theme }) => ({
      'overflow-wrap': 'break-word',

      '-webkit-hyphens': 'auto',
      '-webkit-hyphenate-limit-before': '3',
      '-webkit-hyphenate-limit-after': '3',
      '-webkit-hyphenate-limit-chars': '6 3 3',
      '-webkit-hyphenate-limit-lines': '2',
      '-webkit-hyphenate-limit-last': 'always',
      '-webkit-hyphenate-limit-zone': '8%',

      hyphens: 'auto',
      'hyphenate-limit-chars': '6 3 3',
      'hyphenate-limit-lines': '2',
      'hyphenate-limit-last': 'always',
      'hyphenate-limit-zone': '8%'
    })
  ]
]
