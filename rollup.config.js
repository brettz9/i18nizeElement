import babel from '@rollup/plugin-babel';

import resolve from '@rollup/plugin-node-resolve';

export default [{
  input: 'src/index.js',
  plugins: [babel({
    babelHelpers: 'bundled'
  }), resolve()],
  output: {sourcemap: true}
}, {
  input: 'src/i18nizeelement-jamilih-plugin.js',
  plugins: [babel({
    babelHelpers: 'bundled'
  }), resolve()],
  output: {sourcemap: true}
}];
