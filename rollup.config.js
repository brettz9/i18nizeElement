import babel from '@rollup/plugin-babel';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

// eslint-disable-next-line import/no-anonymous-default-export
export default [{
  input: 'src/index.js',
  plugins: [babel({
    babelHelpers: 'bundled'
  }), resolve(), commonjs()],
  output: {sourcemap: true}
}, {
  input: 'src/i18nizeelement-jamilih-plugin.js',
  plugins: [babel({
    babelHelpers: 'bundled'
  }), resolve(), commonjs()],
  output: {sourcemap: true}
}];
