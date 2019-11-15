# i18nizeElement

Internationalize an element with `lang`, `dir`, and `style.writingMode` as indicated
by the supplied language and settings.

## Installation

```bash
npm install i18nizeelement
```

## Usage

```js
import i18nizeElement from 'i18nizeelement';

i18nizeElement(document.querySelector('html'), {
  language: 'en-US',
  // Optional (Defaults shown below)
  avoidLangIfSet: true,
  avoidDirIfSet: true,
  avoidLTRByDefault: true
});
```

## Usage (as a [jamilih](https://github.com/brettz9/jamilih) plugin)

```js
import jml from 'jamilih';
import i18nizeElement from 'i18nizeelement/dist/i18nizeelement-jamilih-plugin.js';

const options = {$plugins: [i18nizeElement]};
const j = jml.bind(null, options);

j('div', {id: 'myDiv', $_language: {
  language: 'en-US',
  // Optional (Defaults shown below)
  avoidLangIfSet: true,
  avoidDirIfSet: true,
  avoidLTRByDefault: true
}}, document.body);
```

Please note that this plugin suffers from one limitation: The
`$_language` settings will only be visible on the element (e.g.,
`lang` and `dir`) after a Promise microtask. This is because
Jamilih at present processes attributes and properties on
elements before appending them to their parent, and `i18nizeElement`
defines settings which depend on the element's intended ancestors
being present.

## License

-   MIT
