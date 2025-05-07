import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

/** @type {import('rollup').RollupOptions[]} */
const config = [
  // UMD build for browsers
  {
    input: 'src/index.ts',
    output: {
      name: 'StringUtils',
      file: 'dist/string-utils.umd.js',
      format: 'umd',
      exports: 'named'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.js', '.ts'],
        exclude: 'node_modules/**'
      })
    ]
  },
  // Minified UMD build
  {
    input: 'src/index.ts',
    output: {
      name: 'StringUtils',
      file: 'dist/string-utils.umd.min.js',
      format: 'umd',
      exports: 'named'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.js', '.ts'],
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  },
  // CommonJS and ES Module builds
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs', exports: 'named' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.js', '.ts'],
        exclude: 'node_modules/**'
      })
    ],
    external: Object.keys(pkg.dependencies || {})
  }
];

export default config; 