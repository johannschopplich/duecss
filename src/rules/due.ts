import type { Rule } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'
import { parseColor } from '@unocss/preset-mini/utils'

export const due: Rule<Theme>[] = [
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
