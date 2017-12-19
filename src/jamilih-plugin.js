import i18nizeElement from './index.js';

const plugin = {
    name: '$_language',
    set ({element, attribute: {value: options}}) {
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
        Promise.resolve().then(() => {
            i18nizeElement(element, {
                ...options
            });
        });
    }
};

export default plugin;
