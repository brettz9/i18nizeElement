import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import multiEntry from 'rollup-plugin-multi-entry';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'test/**/*.test.js',
  plugins: [babel(), resolve(), commonjs(), multiEntry()],
  output: {
    globals: {
      mocha: 'mocha',
      chai: 'chai'
    },
    format: 'umd',
    file: 'build/tests-bundle.js',
    name: 'tests',
    intro: 'if (typeof module !== "undefined") ' +
      'require("source-map-support").install();',
    sourcemap: true
  },
  external: ['mocha', 'chai']
};
