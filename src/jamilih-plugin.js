import i18nizeElement from './index.js';

const plugin = {
    name: '$_language',
    set (element, {attribute: {value: options}}) {
        if (typeof options === 'string') {
            options = {language: options};
        } else if (Array.isArray(options)) {
            options = {
                ...options[1],
                language: options[0]
            };
        }
        i18nizeElement(element, {
            ...options
        });
    }
};

export default plugin;
