import { content } from './content'
import { due } from './due'
import { hyphenated } from './hyphenated'
import { outlineColor } from './outline-color'
import { textDecorationLine } from './text-decoration-line'
import { unselectable } from './unselectable'
import type { Rule } from '@unocss/core'

export const rules: Rule[] = [
  content,
  due,
  hyphenated,
  outlineColor,
  textDecorationLine,
  unselectable
].flat(1)
