import { Options } from 'tsup'

const config: Options = {
  splitting: true,
  format: ['esm', 'cjs'],
  entryPoints: ['src/*.ts'],
  target: 'es2020',
  clean: true,
  dts: true
}

export default config
