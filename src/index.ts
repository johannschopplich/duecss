import { theme } from './theme'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import { deepMerge } from '@antfu/utils'
import type { Theme } from './theme'
import type { Preset } from 'unocss'

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
export const presetDue = (userThemeConfig: Theme = {}): Preset => ({
  name: 'unocss-preset-due',
  theme: deepMerge(theme, userThemeConfig ?? {}),
  rules,
  shortcuts
})

export default presetDue
