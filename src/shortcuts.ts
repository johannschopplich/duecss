import type { UserShortcuts } from 'unocss'

const buttonBase =
  'due-rounded appearance-none unselectable inline-flex items-center justify-center border leading-none px-3 py-2 disabled:opacity-50'

const spacingMap: Record<string, string> = {
  '2xs': '1',
  xs: '2',
  s: '3',
  m: '5',
  l: '8',
  xl: '13',
  '2xl': '21',
  '3xl': '34'
}

export const shortcuts: UserShortcuts = [
  [
    /^due?-container(?:-(fluid))?$/,
    ([, fluid]) =>
      `relative ${
        fluid
          ? 'mx-[var(--du-spacer)]'
          : 'mx-auto w-[calc(100%-2*var(--du-spacer))]'
      }`
  ],
  [
    /^due?-container-(sm|md|lg|xl|2xl)(?:-(full|fluid))?$/,
    ([, bp, m]) => {
      let result = `relative max-w-screen-${bp}`

      if (m === 'fluid') result += ' mx-[var(--du-spacer)]'
      else result += ' mx-auto w-[calc(100%-2*var(--du-spacer))]'

      if (m === 'full') result += ' w-full'

      return result
    }
  ],
  [/^due?-([pm][xyrltbse]?)-(.+)$/, ([, d, v]) => `${d}-${spacingMap[v]}`],
  [
    /^due?-title$/,
    () => 'text-contrast-higher font-heading font-600 leading-heading'
  ],
  [
    /^due?-control$/,
    () =>
      `due-rounded appearance-none block w-full leading-none border-contrast-lower px-3 py-2 focus:border-primary focus-visible:outline-none`
  ],
  [
    /^due?-button-text$/,
    () =>
      `${buttonBase} bg-transparent border-transparent text-theme-text hover:text-theme-text hover:text-decoration-line-underline focus:text-decoration-line-underline`
  ],
  [
    /^due?-button-(.+?)(?:-?(outlined))?$/,
    ([, color, outlined]) =>
      outlined
        ? `${buttonBase} bg-transparent border-${color} text-${color} outline-color-${color} hover:bg-${color} hover:text-white focus:bg-${color} focus:text-white`
        : `${buttonBase} bg-${color} border-transparent text-white outline-color-${color} hover:bg-${color}-600 hover:text-white focus:bg-${color}-600`
  ],
  [/^column-(\d+)$/, ([, d]) => `flex-none w-${d}/12`],
  {
    columns: 'flex flex-wrap',
    column: 'block flex-1',
    'column-narrow': 'block flex-[0,0,auto] w-auto',
    'column-auto': 'block flex-1 w-auto',
    'column-full': 'block flex-none w-full'
  }
]
