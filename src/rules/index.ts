import type { Rule } from 'unocss'
import { due } from './due'
import { hyphenate } from './hyphenate'
import { unselectable } from './unselectable'

export const rules: Rule[] = [due, hyphenate, unselectable].flat(1)
