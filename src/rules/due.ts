import type { Rule } from 'unocss'

export const due: Rule[] = [
  ['due-w-container', { width: 'calc(100% - 2 * var(--due-spacer))' }],
  ['due-rounded', { 'border-radius': 'var(--due-radius)' }]
]
