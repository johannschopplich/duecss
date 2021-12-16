import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'

export function parseBracket(str: string) {
  if (str && str[0] === '[' && str[str.length - 1] === ']') {
    return str.slice(1, -1).replace(/_/g, ' ')
  } else {
    return null
  }
}

export const parseColor = (body: string, theme: Theme) => {
  const colors = body.replace(/([a-z])([0-9])/g, '$1-$2').split(/-/g)
  const [name] = colors

  if (!name) return

  let color: string | undefined
  const bracketOrBody = parseBracket(body) || body

  if (bracketOrBody.startsWith('#')) color = bracketOrBody.slice(1)
  if (bracketOrBody.startsWith('hex-')) color = bracketOrBody.slice(4)

  color = color || bracketOrBody

  let no = 'DEFAULT'

  if (!color) {
    let colorData = theme.colors?.[name]
    if (colorData) {
      ;[, no = no] = colors
    } else {
      if (colors.slice(-1)[0].match(/^\d+$/)) no = colors.pop() as string
      colorData =
        theme.colors?.[
          colors.join('-').replace(/(-[a-z])/g, (n) => n.slice(1).toUpperCase())
        ]
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
