import buble from 'rollup-plugin-buble';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [{
    input: 'src/index.js',
    plugins: [buble({
        objectAssign: 'Object.assign'
    }), resolve(), commonjs()],
    output: {sourcemap: true}
}, {
    input: 'src/i18nizeelement-jamilih-plugin.js',
    plugins: [buble({
        objectAssign: 'Object.assign'
    }), resolve(), commonjs()],
    output: {sourcemap: true}
}];
