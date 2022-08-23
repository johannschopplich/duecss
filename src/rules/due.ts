import type { Rule } from 'unocss'
import { parseColor } from '../utils'

export const due: Rule[] = [
  [
    /^(?:du-)?var-color-(.+)$/,
    ([, body], { theme }) => {
      const { color } = parseColor(body, theme) ?? {}
      if (!color)
        return

      return {
        [`--du-color-${body}`]: color,
      }
    },
  ],
]
