import type { Preset } from '@unocss/core'
import { theme } from './theme'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import { variants } from './variants'

export * from './client'

/**
 * DueCSS Preset
 *
 * @example
 * // unocss.config.ts
 * import { presetUno } from 'unocss'
 * import { presetDue } from 'duecss'
 *
 * export default defineConfig({
 *   presets: [
 *     presetUno(),
 *     presetDue()
 *   ]
 * })
 */
export const presetDue = (): Preset => ({
  name: 'unocss-preset-due',
  theme,
  rules,
  shortcuts,
  variants,
})

export default presetDue
