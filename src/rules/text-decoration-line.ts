import type { Rule } from 'unocss'

export const textDecorationLine: Rule[] = [
  [
    /^text-decoration-line-(none|underline|line-through)$/,
    ([, m]) => ({ 'text-decoration-line': m })
  ]
]
