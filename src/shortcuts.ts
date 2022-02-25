import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'

const buttonBase =
  'appearance-none unselectable inline-flex items-center justify-center border leading-none px-3 py-2 rounded disabled:opacity-50'

export const shortcuts: UserShortcuts<Theme> = [
  [
    /^(?:du-)?title$/,
    () => 'text-contrast-higher font-heading font-600 leading-tight'
  ],
  [
    /^(?:du-)?control$/,
    () =>
      `appearance-none block w-full leading-none border-contrast-lower px-3 py-2 rounded focus:border-primary focus-visible:outline-none`
  ],
  [
    /^(?:du-)?button-text$/,
    () =>
      `${buttonBase} bg-transparent border-transparent text-theme-base hover:text-theme-base hover:decoration-underline focus:decoration-underline`
  ],
  [
    /^(?:du-)?button-(.+?)(?:-?(outlined))?$/,
    ([, color, outlined]) =>
      outlined
        ? `${buttonBase} bg-transparent border-${color} text-${color} outline-${color} hover:bg-${color} hover:text-white focus:bg-${color} focus:text-white`
        : `${buttonBase} bg-${color} border-transparent text-white outline-${color} hover:bg-${color}-600 hover:text-white focus:bg-${color}-600`
  ],

  // Global shortcuts
  [/^column-(\d+)$/, ([, d]) => `flex-none w-${d}/12`],
  {
    columns: 'flex flex-wrap',
    column: 'block flex-1',
    'column-narrow': 'block flex-[0_0_auto] w-auto',
    'column-auto': 'block flex-1 w-auto',
    'column-full': 'block flex-none w-full'
  }
]
