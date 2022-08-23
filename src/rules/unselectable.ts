import type { Rule } from 'unocss'

export const unselectable: Rule[] = [
  [
    'unselectable',
    {
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      'user-select': 'none',
    },
  ],
]
