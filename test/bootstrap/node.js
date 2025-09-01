import jsdom from 'jsdom';

const {JSDOM} = jsdom;
const {window: win} = new JSDOM();
const _win = /** @type {unknown} */ (win);
globalThis.window = /** @type {Window & typeof globalThis} */ (_win);
globalThis.document = globalThis.window.document;
