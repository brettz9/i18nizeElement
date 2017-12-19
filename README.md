# i18nizeElement

Internationalize an element with `lang`, `dir`, and `style.writingMode` as indicated
by the supplied language and settings.

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
import i18nizeElement from 'i18nizeelement/dist/jamilih-plugin';
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

## License

-   MIT
