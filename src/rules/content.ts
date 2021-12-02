import type { Rule } from 'unocss'

export const content: Rule[] = [
  [
    /^content-\[(.*)\]$/,
    ([, content]) => ({ content: JSON.stringify(content) })
  ]
]
