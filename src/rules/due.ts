import { parseColor } from '../utils'
import type { Rule } from 'unocss'

export const due: Rule[] = [
  ['due-w-contained', { width: 'calc(100% - 2 * var(--du-spacer))' }],
  ['due-rounded', { 'border-radius': 'var(--du-radius)' }],
  [/^due-text-(\w+)$/, ([, m]) => ({ 'font-size': `var(--du-text-${m})` })],
  [
    /^due-var-color-(.+)$/,
    ([, body], { rawSelector, currentSelector, variantHandlers, theme }) => {
      if (variantHandlers.length) return

      const { color } = parseColor(body, theme) ?? {}
      if (!color) return

      return {
        [`--du-color-${body}`]: color
      }
    }
  ]
]
