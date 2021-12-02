import { escapeSelector as e } from '@unocss/core'
import type { Rule } from '@unocss/core'

export const stretchedLink: Rule[] = [
  [
    /^stretched-link$/,
    ([], { rawSelector, currentSelector, variantHandlers, theme }) => {
      if (variantHandlers.length) return

      return `
.${e(rawSelector)}::after {
  content: ${JSON.stringify('')};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
`
    }
  ]
]
