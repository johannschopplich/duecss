import { escapeSelector as e } from '@unocss/core'
import type { Rule } from '@unocss/core'

export const masonryGrid: Rule[] = [
  [
    /^masonry-grid$/,
    ([,], { rawSelector }) => {
      return `
.${e(rawSelector)} {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(var(--masonry-col-max-w, 25rem), 100%), 1fr)
  );
  grid-template-rows: masonry;
  justify-content: center;
}
.${e(rawSelector)} > * {
  align-self: start;
}
`
    }
  ]
]
