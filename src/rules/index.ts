import { due } from './due'
import { hyphenated } from './hyphenated'
import { textDecorationLine } from './text-decoration-line'
import { unselectable } from './unselectable'
import type { Rule } from '@unocss/core'

export const rules: Rule[] = [
  due,
  hyphenated,
  textDecorationLine,
  unselectable
].flat(1)
