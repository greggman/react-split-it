import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: 'umd',
      exports: 'default',
      name: 'Split',
      globals: {
        react: 'React',
        'prop-types': 'PropTypes',
      },
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
    },
  ],
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
};