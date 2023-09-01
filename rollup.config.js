import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import postcss from 'rollup-plugin-postcss'

import pkg from './package.json';

const commonOptions = {
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
		postcss({
      extensions: ['.css']
    }),
  ],
  watch: {
    include: 'src/**',
  },
}

export default [
  {
    input: pkg.source,
    output: {
      file: pkg.module,
      format: 'cjs',
      exports: 'named',
    },
    ...commonOptions,
  },
  {
    input: 'src/umd.js',
    output: {
      file: pkg.main,
      format: 'umd',
      exports: 'default',
      name: 'Split',
      globals: {
        react: 'React',
        'prop-types': 'PropTypes',
      },
    },
    ...commonOptions,
    plugins: commonOptions.plugins.concat([globals()]),
  },
];