import config from './rollup.config';

config.output.format = 'umd';
config.output.file = 'dist/i18nizeelement.umd.js';
config.output.name = 'i18nizeElement';

export default config;
