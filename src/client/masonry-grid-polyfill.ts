interface Grid {
  el: HTMLElement
  gap: number
  items: HTMLElement[]
  columns: number
  count: number
}

const composeGrid = (grid: Grid) => {
  const columns = getComputedStyle(grid.el).gridTemplateColumns.split(
    ' '
  ).length

  for (const column of grid.items) {
    const { height } = column.getBoundingClientRect()
    const h = height.toString()

    if (h !== column.dataset?.h) {
      column.dataset.h = h
      grid.count++
    }
  }

  // If the number of columns has changed
  if (grid.columns !== columns || grid.count) {
    // Update the number of columns
    grid.columns = columns

    // Revert to initial positioning, no margin
    for (const { style } of grid.items) style.removeProperty('margin-top')

    // If we have more than one column
    if (grid.columns > 1) {
      for (const [index, column] of grid.items.slice(columns).entries()) {
        // Bottom edge of item above
        const { bottom: prevBottom } = grid.items[index].getBoundingClientRect()
        // Top edge of current item
        const { top } = column.getBoundingClientRect()

        column.style.marginTop = `${prevBottom + grid.gap - top}px`
      }
    }

    grid.count = 0
  }
}

export const masonryGridPolyfill = (selectors = '.masonry-grid') => {
  const elements = [...document.querySelectorAll<HTMLElement>(selectors)]

  // Bail if no elements where found
  if (!elements.length) return

  // Bail if masonry layouts are already supported by the browser
  if (getComputedStyle(elements[0]).gridTemplateRows === 'masonry') return

  for (const el of elements) {
    const grid: Grid = {
      el,
      gap: parseFloat(getComputedStyle(el).rowGap),
      items: ([...el.childNodes] as HTMLElement[])
        // Make sure the child nodes are element nodes
        .filter((i) => i.nodeType === 1),
      columns: 0,
      count: 0
    }

    composeGrid(grid)

    const resizeObserver = new ResizeObserver(() => composeGrid(grid))
    resizeObserver.observe(grid.el)
  }
}
