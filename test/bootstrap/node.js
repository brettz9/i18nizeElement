import jsdom from 'jsdom';

const {JSDOM} = jsdom;
const {window: win} = new JSDOM();
const _win = /** @type {unknown} */ (win);
global.window = /** @type {Window & typeof globalThis} */ (_win);
global.document = window.document;
