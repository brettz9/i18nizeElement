import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import multiEntry from 'rollup-plugin-multi-entry';

export default {
    input: 'tests/**/*.test.js',
    plugins: [buble(), resolve(), commonjs(), multiEntry()],
    output: {
        format: 'umd',
        file: 'build/tests-bundle.js',
        name: 'tests',
        sourcemap: true
    },
    globals: {
        mocha: 'mocha',
        chai: 'chai'
    },
    external: ['mocha', 'chai'],
    intro: 'if (typeof module !== "undefined") require("source-map-support").install();'
};
