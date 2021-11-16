import { theme } from './theme'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import type { Theme } from './theme'
import type { Preset, ConfigBase } from 'unocss'

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
export const presetDue = (userConfig: ConfigBase<Theme> = {}): Preset => ({
  name: 'unocss-preset-due',
  theme,
  rules,
  shortcuts,
  ...userConfig
})

export default presetDue
