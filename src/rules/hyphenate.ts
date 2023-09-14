import type { Rule } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

export const hyphenate: Rule<Theme>[] = [
  [
    'hyphenate',
    {
      'overflow-wrap': 'break-word',

      '-webkit-hyphens': 'auto',
      '-webkit-hyphenate-limit-before': '3',
      '-webkit-hyphenate-limit-after': '3',
      '-webkit-hyphenate-limit-chars': '6 3 3',
      '-webkit-hyphenate-limit-lines': '2',
      '-webkit-hyphenate-limit-last': 'always',
      '-webkit-hyphenate-limit-zone': '8%',

      'hyphens': 'auto',
      'hyphenate-limit-chars': '6 3 3',
      'hyphenate-limit-lines': '2',
      'hyphenate-limit-last': 'always',
      'hyphenate-limit-zone': '8%',
    },
  ],
]
