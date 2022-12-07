import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index', 'src/client'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  externals: [
    '@unocss/core',
    '@unocss/preset-mini',
    '@unocss/preset-mini/utils',
  ],
})
