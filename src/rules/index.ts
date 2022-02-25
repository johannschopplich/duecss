import { due } from './due'
import { hyphenate } from './hyphenate'
import { masonryGrid } from './masonry-grid'
import { unselectable } from './unselectable'
import type { Rule } from '@unocss/core'

export const rules: Rule[] = [due, hyphenate, masonryGrid, unselectable].flat(1)
