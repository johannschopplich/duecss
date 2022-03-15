import { due } from './due'
import { hyphenate } from './hyphenate'
import { unselectable } from './unselectable'
import type { Rule } from '@unocss/core'

export const rules: Rule[] = [due, hyphenate, unselectable].flat(1)
