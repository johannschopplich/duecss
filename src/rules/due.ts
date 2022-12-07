import type { Rule } from '@unocss/core'
import { parseColor } from '@unocss/preset-mini/utils'

export const due: Rule[] = [
  [
    /^(?:du-)?var-color-(.+)$/,
    ([, body], { theme }) => {
      const parsed = parseColor(body, theme)
      if (!parsed)
        return

      return {
        [`--du-color-${body}`]: parsed.color,
      }
    },
  ],
]
