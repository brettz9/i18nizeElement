[![npm](http://img.shields.io/npm/v/i18nizeelement.svg)](https://www.npmjs.com/package/i18nizeelement)
[![Dependencies](https://img.shields.io/david/brettz9/i18nizeElement.svg)](https://david-dm.org/brettz9/i18nizeElement)
[![devDependencies](https://img.shields.io/david/dev/brettz9/i18nizeElement.svg)](https://david-dm.org/brettz9/i18nizeElement?type=dev)

[![Actions Status](https://github.com/brettz9/i18nizeElement/workflows/Node%20CI/badge.svg)](https://github.com/brettz9/i18nizeElement/actions)
[![Actions Status](https://github.com/brettz9/i18nizeElement/workflows/Coverage/badge.svg)](https://github.com/brettz9/i18nizeElement/actions)

[![Known Vulnerabilities](https://snyk.io/test/github/brettz9/i18nizeElement/badge.svg)](https://snyk.io/test/github/brettz9/i18nizeElement)
[![Total Alerts](https://img.shields.io/lgtm/alerts/g/brettz9/i18nizeElement.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/brettz9/i18nizeElement/alerts)
[![Code Quality: Javascript](https://img.shields.io/lgtm/grade/javascript/g/brettz9/i18nizeElement.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/brettz9/i18nizeElement/context:javascript)

[![License](https://img.shields.io/npm/l/i18nizeelement.svg)](LICENSE-MIT.txt)

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
import {jml, body} from 'jamilih';
import i18nizeElement from
  'i18nizeelement/dist/i18nizeelement-jamilih-plugin.js';

const options = {$plugins: [i18nizeElement]};
const j = jml.bind(null, options);

j('div', {id: 'myDiv', $_language: {
  language: 'en-US',
  // Optional (Defaults shown below)
  avoidLangIfSet: true,
  avoidDirIfSet: true,
  avoidLTRByDefault: true
}}, body);

// An alternative API is:
j('div', {id: 'myDiv', $_language: [
  'en-US' /* , optionalOptionsObjectHere */
]});

// If options are not needed you can use this format:
j('div', {id: 'myDiv', $_language: 'en-US'}, body);
```

Please note that this plugin suffers from one limitation: The
`$_language` settings will only be visible on the element (e.g.,
`lang` and `dir`) after a Promise microtask. This is because
Jamilih at present processes attributes and properties on
elements before appending them to their parent, and `i18nizeElement`
defines settings which depend on the element's intended ancestors
being present.

## See also

- [intl-dom](https://github.com/brettz9/intl-dom)

## License

-   MIT
