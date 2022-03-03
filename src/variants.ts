import type { Variant } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { variantMatcher } from './utils'

export const variants: Variant<Theme>[] = [
  variantMatcher(
    'du-light',
    (input) => `:root[data-theme="light"] $$ ${input}`
  ),
  variantMatcher('du-dark', (input) => `:root[data-theme="dark"] $$ ${input}`)
]
