import { aspectRatio } from './aspect-ratio'
import { due } from './due'
import { fontSize } from './font-size'
import { hyphenated } from './hyphenated'
import { stretchedLink } from './stretched-link'
import { textDecorationLine } from './text-decoration-line'
import { unselectable } from './unselectable'
import type { Rule } from 'unocss'

export const rules: Rule[] = [
  aspectRatio,
  due,
  fontSize,
  hyphenated,
  stretchedLink,
  textDecorationLine,
  unselectable
].flat(1)
