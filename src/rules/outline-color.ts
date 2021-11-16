import type { Rule } from 'unocss'

export const outlineColor: Rule[] = [
  [
    /^outline-color-(\w+)$/,
    ([, name], { rawSelector, currentSelector, variantHandlers, theme }) => {
      // @ts-expect-error: colors not defined
      const colorData = theme.colors?.[name]
      const color =
        typeof colorData === 'string' ? colorData : colorData.DEFAULT

      return { 'outline-color': color }
    }
  ]
]
