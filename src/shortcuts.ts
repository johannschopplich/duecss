import type { UserShortcuts } from 'unocss'

export const shortcuts: UserShortcuts = [
  [
    /^container-(sm|md|lg|xl|2xl)$/,
    ([, bp]) => `relative due-w-container max-w-screen-${bp} mx-auto`
  ],
  [
    /^container-(sm|md|lg|xl|2xl)-full$/,
    ([, bp]) => `relative w-full max-w-screen-${bp} mx-auto`
  ],
  [/^column-(\d+)$/, ([, d]) => `flex-none w-${d}/12`],
  {
    container: 'relative due-w-container mx-auto',
    section: 'py-13',
    title: 'text-contrast-higher font-heading font-600 leading-heading',
    'centered-content': 'flex flex-col items-center justify-center',
    columns: 'flex flex-wrap',
    column: 'block flex-1',
    'column-narrow': 'block flex-grow-0 flex-shrink-0 flex-basis-auto w-auto',
    'column-auto': 'block flex-1 w-auto',
    'column-full': 'block flex-none w-full'
  }
]
