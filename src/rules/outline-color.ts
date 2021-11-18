import { colorResolver } from '../utils'
import type { Rule } from 'unocss'

export const outlineColor: Rule[] = [
  [/^outline-color-(.+)$/, colorResolver('outline-color')]
]
