import type { Theme } from './theme'
import type { RuleContext } from 'unocss'

export function parseBracket(str: string) {
  if (str && str[0] === '[' && str[str.length - 1] === ']') {
    return str.slice(1, -1).replace(/_/g, ' ')
  } else {
    return null
  }
}

export const parseColor = (body: string, theme: Theme) => {
  const [name, no = 'DEFAULT'] = body
    .replace(/([a-z])([0-9])/g, '$1-$2')
    .split(/-/g)

  if (!name) return

  let color: string | undefined
  const bracket = parseBracket(body) || body
  if (bracket.startsWith('#')) color = bracket.slice(1)
  if (bracket.startsWith('hex-')) color = bracket.slice(4)

  if (!color) {
    const colorData = theme.colors?.[name]
    if (typeof colorData === 'string') color = colorData
    else if (no && colorData) color = colorData[no]
  }

  return {
    name,
    no,
    color
  }
}

export const colorResolver =
  (attribute: string) =>
  ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const data = parseColor(body, theme)
    if (!data) return

    const { color } = data
    if (!color) return

    return {
      [attribute]: color
    }
  }
