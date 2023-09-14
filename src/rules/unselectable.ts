import type { Rule } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

export const unselectable: Rule<Theme>[] = [
  [
    'unselectable',
    {
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      'user-select': 'none',
    },
  ],
]
