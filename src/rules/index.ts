import { aspectRatio } from './aspect-ratio'
import { content } from './content'
import { due } from './due'
import { hyphenated } from './hyphenated'
import { outlineColor } from './outline-color'
import { stretchedLink } from './stretched-link'
import { textDecorationLine } from './text-decoration-line'
import { unselectable } from './unselectable'
import type { Rule } from '@unocss/core'

export const rules: Rule[] = [
  aspectRatio,
  content,
  due,
  hyphenated,
  outlineColor,
  stretchedLink,
  textDecorationLine,
  unselectable
].flat(1)
