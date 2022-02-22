import { escapeSelector as e } from '@unocss/core'
import type { Rule } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'

export const hyphenated: Rule<Theme>[] = [
  [
    /^masonry-grid$/,
    ([], { rawSelector, currentSelector, variantHandlers, theme }) => {
      if (variantHandlers.length) return

      return `
.${e(rawSelector)} {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(var(--du-masonry-max-w, 25rem), 100%), 1fr)
  );
  grid-template-rows: masonry;
  justify-content: center;

.${e(rawSelector)} > * {
  align-self: start;
}

.${e(rawSelector)} img {
  object-fit: cover;
  max-height: inherit;
}
`
    }
  ]
]
