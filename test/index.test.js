import {expect} from 'chai';

import i18nizeElement from '../src/index.js';

describe('i18nizeElement (main)', () => {
  it('should set `lang` and `dir` for LTR languages', () => {
    const div = document.createElement('div');
    i18nizeElement(div, {
      language: 'en-US',
      // Optional (Defaults shown below)
      avoidLangIfSet: true,
      avoidDirIfSet: true,
      avoidLTRByDefault: false
    });
    expect(div.lang).equal('en-US');
    expect(div.dir).equal('ltr');
  });
  it('should set `lang` and `dir` for RTL languages', () => {
    const div = document.createElement('div');
    i18nizeElement(div, {
      language: 'ar-Arab',
      // Optional (Defaults shown below)
      avoidLangIfSet: true,
      avoidDirIfSet: true,
      avoidLTRByDefault: false
    });
    expect(div.lang).equal('ar-Arab');
    expect(div.dir).equal('rtl');
  });
  it('should throw if element or language is not present', () => {
    const div = document.createElement('div');
    expect(() => {
      i18nizeElement(null, {
        language: 'en'
      });
    }).to.throw();
    expect(() => {
      i18nizeElement(div, {});
    }).to.throw();
  });
  describe('Top to bottom', () => {
    /*
        // Todo: Waiting on: https://github.com/shadiabuhilal/rtl-detect/issues/2
        it(
          'should set `style.writingMode` for top-to-bottom languages/scripts',
          () => {
              const div = document.createElement('div');
              i18nizeElement(div, {
                  language: 'mn-Mong'
              });
              expect(div.style.writingMode).equal('vertical-lr');
          }
        );
        */
    it('should not set `style.writingMode` for rtl languages/scripts', () => {
      const div = document.createElement('div');
      i18nizeElement(div, {
        language: 'ar-Arab'
      });
      expect(div.style.writingMode).not.equal('vertical-lr');
    });
    it('should not set `style.writingMode` for ltr languages/scripts', () => {
      const div = document.createElement('div');
      i18nizeElement(div, {
        language: 'en-US'
      });
      expect(div.style.writingMode).not.equal('vertical-lr');
    });
  });
  describe('Options', () => {
    it('`avoidLangIfSet` set to `true` should avoid setting `lang` ' +
            'if already set on an ancestor', () => {
      const div = document.createElement('div');
      div.lang = 'en-US';
      const span = document.createElement('span');
      div.append(span);
      i18nizeElement(span, {
        language: 'en-US',
        avoidLangIfSet: true
      });
      expect(span.lang).equal('');
    });
    it(
      '`avoidLangIfSet` set to `true` should not stop setting of proper ' +
      '`lang` if closest ancestor with `lang` has a different language',
      () => {
        const div = document.createElement('div');
        div.lang = 'en-US';
        const span = document.createElement('span');
        div.append(span);
        i18nizeElement(span, {
          language: 'ar',
          avoidLangIfSet: true
        });
        expect(span.lang).equal('ar');
      }
    );
    it('`avoidLangIfSet` set to `false` should not stop setting of ' +
      '`lang` even if set on an ancestor', () => {
      const div = document.createElement('div');
      div.lang = 'en-US';
      const span = document.createElement('span');
      div.append(span);
      i18nizeElement(span, {
        language: 'en-US',
        avoidLangIfSet: false
      });
      expect(span.lang).equal('en-US');
    });
    it('`avoidLangIfSet` set to `true` should not interfere with setting ' +
            'of `lang` if none set on an ancestor', () => {
      const div = document.createElement('div');
      const span = document.createElement('span');
      div.append(span);
      i18nizeElement(span, {
        language: 'en-US',
        avoidLangIfSet: true
      });
      expect(span.lang).equal('en-US');
    });
    it('`avoidLangIfSet` set to `false` should not interfere with setting ' +
            'of `lang` if none set on an ancestor', () => {
      const div = document.createElement('div');
      const span = document.createElement('span');
      div.append(span);
      i18nizeElement(span, {
        language: 'en-US',
        avoidLangIfSet: false
      });
      expect(span.lang).equal('en-US');
    });

    it('`avoidDirIfSet` set to `true` should avoid setting `dir` if ' +
            'already set on an ancestor', () => {
      const div = document.createElement('div');
      div.dir = 'rtl';
      const span = document.createElement('span');
      div.append(span);
      i18nizeElement(span, {
        language: 'ar',
        avoidDirIfSet: true
      });
      expect(span.dir).equal('');
    });
    it(
      '`avoidDirIfSet` set to `true` should not stop setting of proper `dir` ' +
      'if closest ancestor with `dir` has a different direction',
      () => {
        const div = document.createElement('div');
        div.dir = 'ltr';
        const span = document.createElement('span');
        div.append(span);
        i18nizeElement(span, {
          language: 'ar',
          avoidDirIfSet: true
        });
        expect(span.dir).equal('rtl');
      }
    );
    it('`avoidDirIfSet` set to `true` should not interfere with setting ' +
            '`dir` if not set on an ancestor', () => {
      const div = document.createElement('div');
      const span = document.createElement('span');
      div.append(span);
      i18nizeElement(span, {
        language: 'ar',
        avoidDirIfSet: true
      });
      expect(span.dir).equal('rtl');
    });
    it('`avoidDirIfSet` set to `false` should not interfere with setting ' +
            '`dir` if set on an ancestor', () => {
      const div = document.createElement('div');
      div.dir = 'rtl';
      const span = document.createElement('span');
      div.append(span);
      i18nizeElement(span, {
        language: 'ar',
        avoidDirIfSet: false
      });
      expect(span.dir).equal('rtl');
    });

    it('`avoidLTRByDefault` set to `true` should avoid setting `dir` ' +
        'to "ltr" if there is no ancestor with `dir` ("ltr" is a document ' +
        'default)', () => {
      const div = document.createElement('div');
      const span = document.createElement('span');
      div.append(span);
      i18nizeElement(span, {
        language: 'en-US',
        avoidLTRByDefault: true
      });
      expect(span.dir).equal('');
    });
    it(
      '`avoidLTRByDefault` set to `true` should avoid interfering with ' +
      'the setting of `dir` to "ltr" if there is an ancestor with `dir`',
      () => {
        const div = document.createElement('div');
        div.dir = 'rtl';
        const span = document.createElement('span');
        div.append(span);
        i18nizeElement(span, {
          language: 'en-US',
          avoidLTRByDefault: true
        });
        expect(span.dir).equal('ltr');

        const div3 = document.createElement('div');
        div3.dir = 'ltr';
        const span3 = document.createElement('span');
        div3.append(span3);
        i18nizeElement(span3, {
          language: 'en-US',
          avoidLTRByDefault: true,
          avoidDirIfSet: false // Don't avoid because already set on ancestor
        });
        expect(span3.dir).equal('ltr');
      }
    );
    it(
      '`avoidLTRByDefault` set to `true` should avoid interfering with ' +
      'the setting of `dir` to "rtl" even if there is no ancestor with `dir`',
      () => {
        const div = document.createElement('div');
        const span = document.createElement('span');
        div.append(span);
        i18nizeElement(span, {
          language: 'ar',
          avoidLTRByDefault: true
        });
        expect(span.dir).equal('rtl');
      }
    );
    it(
      '`avoidLTRByDefault` set to `true` should avoid interfering with ' +
      'the setting of `dir` to "rtl" if there is an ancestor with `dir`',
      () => {
        const div = document.createElement('div');
        div.dir = 'ltr';
        const span = document.createElement('span');
        div.append(span);
        i18nizeElement(span, {
          language: 'ar',
          avoidLTRByDefault: true
        });
        expect(span.dir).equal('rtl');

        const div2 = document.createElement('div');
        div2.dir = 'rtl';
        const span2 = document.createElement('span');
        div2.append(span2);
        i18nizeElement(span2, {
          language: 'ar',
          avoidLTRByDefault: true,
          // Also don't avoid because already set on ancestor
          avoidDirIfSet: false
        });
        expect(span2.dir).equal('rtl');
      }
    );
    it(
      '`avoidLTRByDefault` set to `false` should avoid interfering with ' +
      'the setting of `dir` to "rtl" even if there is no ancestor with `dir`',
      () => {
        const div2 = document.createElement('div');
        const span2 = document.createElement('span');
        div2.append(span2);
        i18nizeElement(span2, {
          language: 'ar',
          avoidLTRByDefault: false
        });
        expect(span2.dir).equal('rtl');
      }
    );
    it(
      '`avoidLTRByDefault` set to `false` should avoid interfering with ' +
      'the setting of `dir` to "rtl" if there is an ancestor with `dir`',
      () => {
        const div = document.createElement('div');
        div.dir = 'rtl';
        const span = document.createElement('span');
        div.append(span);
        i18nizeElement(span, {
          language: 'ar',
          avoidLTRByDefault: false,
          avoidDirIfSet: false // Also don't avoid because already on ancestor
        });
        expect(span.dir).equal('rtl');

        const div2 = document.createElement('div');
        div2.dir = 'ltr';
        const span2 = document.createElement('span');
        div2.append(span2);
        i18nizeElement(span2, {
          language: 'ar',
          avoidLTRByDefault: false
        });
        expect(span2.dir).equal('rtl');
      }
    );
  });
});
