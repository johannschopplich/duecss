import type { Rule } from '@unocss/core'

export const unselectable: Rule[] = [
  [
    'unselectable',
    {
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      'user-select': 'none'
    }
  ]
]
