import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index', 'src/client/client'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true
  }
})
