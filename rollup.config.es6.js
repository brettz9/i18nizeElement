import config from './rollup.config.js';

const [configIndex, configPlugin] = config;

configIndex.output.format = 'es';
configIndex.output.file = 'dist/i18nizeelement.es6.js';

configPlugin.output.format = 'es';
configPlugin.output.file = 'dist/i18nizeelement-jamilih-plugin.es6.js';

// eslint-disable-next-line import/no-anonymous-default-export -- Rollup config
export default [configIndex, configPlugin];
