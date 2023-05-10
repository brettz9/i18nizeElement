import i18nizeElement from './index.js';

/** @type {import('jamilih').JamilihPlugin} */
const plugin = {
  name: '$_language',
  async set ({element, attribute: {value}}) {
    let options = /** @type {import('jamilih').PluginValue} */ (
      value
    );
    if (typeof options === 'string') {
      options = {language: options};
    } else if (Array.isArray(options)) {
      options = {
        ...options[1],
        language: options[0]
      };
    }
    // We don't immediately internationalize
    //   because Jamilih has not yet appended
    //   the child element into the ancestors
    //   it is being built with
    await Promise.resolve();
    i18nizeElement(/** @type {HTMLElement} */ (element), {
      ...(
        /**
         * @type {{
         *   [key: string]: any;
         * }}
         */
        (options)
      )
    });
  }
};

export default plugin;
