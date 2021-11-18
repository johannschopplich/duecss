import { parseColor } from '../utils'
import type { Rule } from 'unocss'

export const due: Rule[] = [
  ['due-w-container', { width: 'calc(100% - 2 * var(--due-spacer))' }],
  ['due-rounded', { 'border-radius': 'var(--due-radius)' }],
  [
    /^due-var-color-(.+)$/,
    ([, body], { rawSelector, currentSelector, variantHandlers, theme }) => {
      if (variantHandlers.length) return

      const { color } = parseColor(body, theme) ?? {}
      if (color) return

      return {
        [`--color-${body}`]: color
      }
    }
  ]
]
