import { variantMatcher } from '@unocss/preset-mini/utils'
import type { Variant } from 'unocss'
import type { Theme } from '@unocss/preset-wind'

export const variants: Variant<Theme>[] = [
  variantMatcher('du-light', input => ({ prefix: `:root[data-theme="light"] $$ ${input.prefix}` })),
  variantMatcher('du-dark', input => ({ prefix: `:root[data-theme="dark"] $$ ${input.prefix}` })),
]
