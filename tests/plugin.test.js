import {expect} from 'chai';

import i18nizeElementForPlugin from '../src/jamilih-plugin';
import jml from 'jamilih';

if (typeof global !== 'undefined') {
    require('../tests/setGlobals.js');
}

describe('i18nizeElement Plugin', () => {
    it('', () => {
        const options = {$plugins: [i18nizeElementForPlugin]};
        const j = jml.bind(null, options);

        j('div', {
            id: 'myDiv',
            $_language: {
                language: 'en-US',
                // Optional (Defaults shown below)
                avoidLangIfSet: true,
                avoidDirIfSet: true,
                avoidLTRByDefault: true
            }
        }, document.body);
        expect();
    });
});
