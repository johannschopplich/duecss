import type { Rule } from '@unocss/core'

export const textDecorationLine: Rule[] = [
  [
    /^text-decoration-line-(none|underline|line-through)$/,
    ([, m]) => ({ 'text-decoration-line': m })
  ]
]
