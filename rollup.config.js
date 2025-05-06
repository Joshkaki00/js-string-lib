import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
  // UMD build for browsers
  {
    input: 'src/index.js',
    output: {
      name: 'StringUtils',
      file: 'dist/string-utils.umd.js',
      format: 'umd',
      exports: 'named'
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      })
    ]
  },
  // Minified UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'StringUtils',
      file: 'dist/string-utils.umd.min.js',
      format: 'umd',
      exports: 'named'
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  },
  // CommonJS and ES Module builds
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs', exports: 'named' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      })
    ],
    external: Object.keys(pkg.dependencies || {})
  }
];