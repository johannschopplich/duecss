import type { Theme } from '@unocss/preset-uno'

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
  let no = 'DEFAULT'

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

  return {
    name,
    no,
    color
  }
}
