import { colorResolver } from '../utils'
import type { Rule } from '@unocss/core'

export const outlineColor: Rule[] = [
  [/^outline-color-(.+)$/, colorResolver('outline-color')]
]
