import type { UserShortcuts } from 'unocss'

export const shortcuts: UserShortcuts = [
  [
    /^container(?:-(fluid))?$/,
    ([, m]) =>
      `relative mx-${m ? '[var(--due-spacer)]' : 'auto due-w-container'}`
  ],
  [
    /^container-(sm|md|lg|xl|2xl)(?:-(full|fluid))?$/,
    ([, bp, m]) =>
      `relative mx-${m === 'fluid' ? '[var(--due-spacer)]' : 'auto'} ${
        m === 'full' ? 'w-full' : m !== 'fluid' ? 'due-w-container' : ''
      } max-w-screen-${bp}`
  ],
  [/^column-(\d+)$/, ([, d]) => `flex-none w-${d}/12`],
  {
    section: 'py-13',
    title: 'text-contrast-higher font-heading font-600 leading-heading',
    columns: 'flex flex-wrap',
    column: 'block flex-1',
    'column-narrow': 'block flex-grow-0 flex-shrink-0 flex-basis-auto w-auto',
    'column-auto': 'block flex-1 w-auto',
    'column-full': 'block flex-none w-full',
    'due-button':
      'due-rounded appearance-none unselectable inline-flex items-center justify-center border border-transparent px-3 py-2 disabled:opacity-50 disabled:text-theme-text',
    'button-text':
      'due-button bg-transparent border-transparent text-theme-text hover:text-theme-text hover:text-decoration-line-underline focus:text-decoration-line-underline',
    'button-primary':
      'due-button bg-primary border-transparent text-white hover:text-white hover:bg-primary-600 focus:bg-primary-600',
    'button-accent':
      'due-button bg-accent border-transparent text-white hover:text-white hover:bg-accent-600 focus:bg-accent-600',
    'button-outlined':
      'due-button bg-transparent border-primary text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white'
  }
]
