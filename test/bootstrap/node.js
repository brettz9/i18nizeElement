import jsdom from 'jsdom';
import {expect} from 'chai';
import jml from 'jamilih';

const {JSDOM} = jsdom;
const {window: win} = new JSDOM();
global.window = win;
global.document = window.document;
// Waiting for jsdom to support: https://github.com/tmpvar/jsdom/issues/1555
global.window.Element.prototype.closest = function (selector) {
  // eslint-disable-next-line consistent-this
  let el = this;
  while (el) {
    if (el.matches(selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
};
global.expect = expect;
global.jml = jml;
