import buble from 'rollup-plugin-buble';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/index.js',
    plugins: [resolve(), commonjs(), buble({
        objectAssign: 'Object.assign'
    })],
    output: {sourcemap: true}
};
