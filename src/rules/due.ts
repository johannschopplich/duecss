import { parseColor } from '../utils'
import type { Rule } from '@unocss/core'

export const due: Rule[] = [
  [
    /^due?-var-color-(.+)$/,
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
