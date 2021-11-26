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
    /^due-container(?:-(fluid))?$/,
    ([, fluid]) =>
      `relative ${fluid ? 'mx-[var(--du-spacer)]' : 'mx-auto due-w-contained'}`
  ],
  [
    /^due-container-(sm|md|lg|xl|2xl)(?:-(full|fluid))?$/,
    ([, bp, m]) => {
      let result = `relative max-w-screen-${bp}`

      if (m === 'fluid') result += ' mx-[var(--du-spacer)]'
      else result += ' mx-auto due-w-contained'

      if (m === 'full') result += ' w-full'

      return result
    }
  ],
  [/^due-([pm][xyrltbse]?)-(.+)$/, ([, d, v]) => `${d}-${spacingMap[v]}`],
  [/^column-(\d+)$/, ([, d]) => `flex-none w-${d}/12`],
  {
    columns: 'flex flex-wrap',
    column: 'block flex-1',
    'column-narrow': 'block flex-[0,0,auto] w-auto',
    'column-auto': 'block flex-1 w-auto',
    'column-full': 'block flex-none w-full',
    'due-title': 'text-contrast-higher font-heading font-600 leading-heading',
    'due-control': `due-rounded appearance-none block w-full leading-none border-contrast-lower focus:border-primary focus-visible:outline-none px-3 py-2`,
    'due-button-text': `${buttonBase} bg-transparent border-transparent text-theme-text hover:text-theme-text hover:text-decoration-line-underline focus:text-decoration-line-underline`,
    'due-button-primary': `${buttonBase} bg-primary border-transparent text-white outline-color-primary hover:text-white hover:bg-primary-600 focus:bg-primary-600`,
    'due-button-primary-outlined': `${buttonBase} bg-transparent border-primary text-primary outline-color-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white`,
    'due-button-accent': `${buttonBase} bg-accent border-transparent text-white outline-color-accent hover:text-white hover:bg-accent-600 focus:bg-accent-600`,
    'due-button-accent-outlined': `${buttonBase} bg-transparent border-accent text-accent outline-color-accent hover:bg-accent hover:text-white focus:bg-accent focus:text-white`
  }
]
