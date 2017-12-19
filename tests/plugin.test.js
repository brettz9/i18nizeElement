import {expect} from 'chai';

import i18nizeElementForPlugin from '../src/jamilih-plugin';
import jml from 'jamilih';

if (typeof global !== 'undefined') {
    require('../tests/node-environment.js');
}

describe('i18nizeElement Plugin', function () {
    beforeEach(function () {
        const options = {$plugins: [i18nizeElementForPlugin]};
        this.j = jml.bind(null, options);
    });
    it('Basic creation of element, attributes, and setting of `lang`/`dir`', function () {
        const div = this.j('div', {
            id: 'myDiv',
            $_language: {
                language: 'en-US',
                avoidLTRByDefault: false
            }
        }, document.body);
        expect(div.nodeName.toLowerCase()).equal('div');
        expect(div.id).equal('myDiv');
        expect(div.lang).equal('en-US');
        expect(div.dir).equal('ltr');

        const div2 = this.j('div', {
            id: 'myDiv2',
            $_language: {
                language: 'fa',
                avoidLTRByDefault: false
            }
        });
        expect(div2.nodeName.toLowerCase()).equal('div');
        expect(div2.id).equal('myDiv2');
        expect(div2.lang).equal('fa');
        expect(div2.dir).equal('rtl');
    });
    describe('Options', function () {
        it('`avoidLTRByDefault` set to `false` will set `dir` on elements ' +
            'without `dir` ancestors', function () {
            const div = this.j('div', [
                ['span', {$_language: {
                    language: 'en-US',
                    avoidLTRByDefault: false
                }}, ['Text']]
            ], document.body);
            const span = div.querySelector('span');
            expect(span.lang).equal('en-US');
            expect(span.dir).equal('ltr');
        });
        it('`avoidLTRByDefault` set to `true` will not set `dir` on elements ' +
            'without `dir` ancestors', function () {
            const div = this.j('div', [
                ['span', {$_language: {
                    language: 'en-US',
                    avoidLTRByDefault: true
                }}, ['Text']]
            ], document.body);
            const span = div.querySelector('span');
            expect(span.lang).equal('en-US');
            expect(span.dir).equal('');
        });
        it('`avoidLangIfSet` set to `false` will set `lang` on elements ' +
            'with the closest `lang` ancestor having the same language', function () {
            const div = this.j('div', {lang: 'en-US'}, [
                ['span', {$_language: {
                    language: 'en-US',
                    avoidLangIfSet: false
                }}, ['Text']]
            ], document.body);
            const span = div.querySelector('span');
            expect(span.lang).equal('en-US');
        });
        it('`avoidLangIfSet` set to `true` will not set `lang` on elements ' +
            'with the closest `lang` ancestor having the same language', function () {
            const div = this.j('div', {lang: 'en-US'}, [
                ['span', {$_language: {
                    language: 'en-US',
                    avoidLangIfSet: true
                }}, ['Text']]
            ], document.body);
            const span = div.querySelector('span');
            expect(span.lang).equal('');
        });
        it('`avoidDirIfSet` set to `false` will set `dir` on elements ' +
            'with the closest `dir` ancestor having the same direction', function () {
            const div = this.j('div', {dir: 'rtl'}, [
                ['span', {$_language: {
                    language: 'ar',
                    avoidDirIfSet: false
                }}, ['Text']]
            ], document.body);
            const span = div.querySelector('span');
            expect(span.dir).equal('rtl');
        });
        it('`avoidDirIfSet` set to `true` will not set `dir` on elements ' +
            'with the closest `dir` ancestor having the same direction', function () {
            const div = this.j('div', {dir: 'rtl'}, [
                ['span', {$_language: {
                    language: 'ar',
                    avoidDirIfSet: true
                }}, ['Text']]
            ], document.body);
            const span = div.querySelector('span');
            expect(span.dir).equal('');
        });
    });
});
