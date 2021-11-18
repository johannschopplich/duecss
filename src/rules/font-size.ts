import type { Rule } from 'unocss'

export const fontSize: Rule[] = [
  [/^font-size-(\w+)$/, ([, w]) => ({ 'font-size': `var(--du-text-${w})` })]
]
