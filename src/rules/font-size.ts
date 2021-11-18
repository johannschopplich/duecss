import type { Rule } from 'unocss'

export const fontSize: Rule[] = [
  [/^font-size-(\d+)$/, ([, d]) => ({ 'font-size': `var(--text-${d})` })]
]
