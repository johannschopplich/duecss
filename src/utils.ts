import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'

export function parseBracket(str: string) {
  if (str && str[0] === '[' && str[str.length - 1] === ']') {
    return str
      .slice(1, -1)
      .replace(/_/g, ' ')
      .replace(/calc\((.*)/g, (v) => {
        return v.replace(
          /(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,
          '$1 $2 '
        )
      })
  }
}

function getThemeColor(theme: Theme, colors: string[]) {
  return theme.colors?.[
    colors.join('-').replace(/(-[a-z])/g, (n) => n.slice(1).toUpperCase())
  ]
}

export const parseColor = (body: string, theme: Theme) => {
  const colors = body.replace(/([a-z])([0-9])/g, '$1-$2').split(/-/g)
  const [name] = colors

  if (!name) return

  let color: string | undefined
  const bracket = parseBracket(body)
  const bracketOrBody = bracket || body

  if (bracketOrBody.startsWith('#')) color = bracketOrBody.slice(1)
  if (bracketOrBody.startsWith('hex-')) color = bracketOrBody.slice(4)

  color = color || bracket

  let no = 'DEFAULT'

  if (!color) {
    let colorData
    const [scale] = colors.slice(-1)
    if (scale.match(/^\d+$/)) {
      no = scale
      colorData = getThemeColor(theme, colors.slice(0, -1))
    } else {
      colorData = getThemeColor(theme, colors)
      if (!colorData) {
        ;[, no = no] = colors
        colorData = getThemeColor(theme, [name])
      }
    }

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
