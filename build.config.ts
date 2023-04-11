import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
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
