import jsdom from 'jsdom';

const {JSDOM} = jsdom;
const {window: win} = new JSDOM();
global.window = win;
global.document = window.document;
