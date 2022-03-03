import type { Variant } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'

export const variants: Variant<Theme>[] = [
  // `du-light`
  (matcher) => {
    if (!matcher.startsWith('du-light')) return matcher
    return {
      // Slice `du-light:` prefix and pass to the next variants and rules
      matcher: matcher.slice(9),
      selector: (s) => `:root[data-theme="light"] ${s}`
    }
  },
  // `du-dark`
  (matcher) => {
    if (!matcher.startsWith('du-dark')) return matcher
    return {
      // Slice `du-dark:` prefix and pass to the next variants and rules
      matcher: matcher.slice(8),
      selector: (s) => `:root[data-theme="dark"] ${s}`
    }
  }
]
