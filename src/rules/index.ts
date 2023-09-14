import type { Rule } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'
import { due } from './due'
import { hyphenate } from './hyphenate'
import { unselectable } from './unselectable'
import { animated } from './animated'

export const rules: Rule<Theme>[] = [due, hyphenate, unselectable, animated].flat(1)
