import type { Rule } from '@unocss/core'

export const content: Rule[] = [
  [
    /^content-\[(.*)\]$/,
    ([, content]) => ({ content: JSON.stringify(content) })
  ]
]
