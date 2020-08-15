import config from './rollup.config.js';

const [configIndex, configPlugin] = config;

configIndex.output.format = 'umd';
configIndex.output.file = 'dist/i18nizeelement.umd.js';
configIndex.output.name = 'i18nizeElement';

configPlugin.output.format = 'umd';
configPlugin.output.file = 'dist/i18nizeelement-jamilih-plugin.umd.js';
configPlugin.output.name = 'i18nizeElementJamilihPlugin';

// eslint-disable-next-line import/no-anonymous-default-export -- Rollup config
export default [configIndex, configPlugin];
