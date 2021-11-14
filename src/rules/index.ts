import { aspectRatio } from './aspect-ratio'
import { fontSize } from './font-size'
import { hyphenated } from './hyphenated'
import { stretchedLink } from './stretched-link'
import type { Rule } from 'unocss'

export const rules: Rule[] = [aspectRatio, fontSize, hyphenated, stretchedLink]
