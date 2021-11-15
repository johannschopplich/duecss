import type { UserShortcuts } from 'unocss'

export const shortcuts: UserShortcuts = [
  [
    /^container-(sm|md|lg|xl|2xl)$/,
    ([, bp]) => `relative max-w-screen-${bp} mx-auto px-[var(--due-spacer)]`
  ],
  [
    /^container-(sm|md|lg|xl|2xl)-full$/,
    ([, bp]) => `relative max-w-screen-${bp} mx-auto`
  ],
  [/^column-(\d+)$/, ([, d]) => `flex-none w-${d}/12`],
  {
    container: 'relative mx-auto px-[var(--due-spacer)]',
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
