import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

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
  },
];