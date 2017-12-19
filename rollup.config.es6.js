import config from './rollup.config';
const [configIndex, configPlugin] = config;

configIndex.output.format = 'es';
configIndex.output.file = 'dist/i18nizeelement.es6.js';

configPlugin.output.format = 'es';
configPlugin.output.file = 'dist/i18nizeelement-jamilih-plugin.es6.js';

export default [configIndex, configPlugin];
