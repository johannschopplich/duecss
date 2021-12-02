import { theme } from './theme'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import type { Preset } from '@unocss/core'

/**
 * DueCSS Preset
 *
 * ```js
 * // unocss.config.js
 * import { presetUno } from 'unocss'
 * import { presetDue } from 'duecss'
 *
 * export default defineConfig({
 *   presets: [
 *     presetUno(),
 *     presetDue()
 *   ]
 * })
 * ```
 */
export const presetDue = (): Preset => ({
  name: 'unocss-preset-due',
  theme,
  rules,
  shortcuts
})

export default presetDue
