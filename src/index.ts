import { rules } from './rules'
import { shortcuts } from './shortcuts'
import type { Preset } from 'unocss'

/**
 * DueCSS Preset
 *
 * ```js
 * // unocss.config.js
 * import { presetUno } from 'unocss'
 * import { presetDue } from 'unocss-preset-due'
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
  rules,
  shortcuts
})

export default presetDue
