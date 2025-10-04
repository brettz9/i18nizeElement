import 'intl-locale-textinfo-polyfill/lib/polyfill.js';

/**
 * @typedef {{
 *   language?: string,
 *   avoidLangIfSet?: boolean,
 *   avoidDirIfSet?: boolean,
 *   avoidLTRByDefault?: boolean
 * }} I18nizeElementOptions
 */

// e.g., `i18nizeElement(document.title, {language: 'ar-AR'});`

/**
 * @param {HTMLElement} element
 * @param {I18nizeElementOptions} cfg
 */
const i18nizeElement = (element, {
  language,
  // These avoid setting if found to be already set with the same value
  //   on the closest ancestor
  avoidLangIfSet = true, avoidDirIfSet = true,
  // This avoids setting LTR if there is no ancestor with `dir` (since
  //  LTR is the default)
  avoidLTRByDefault = true
} = {}) => {
  if (!element || !language) {
    throw new TypeError('You must supply an element and language');
  }
  let presetLangElement;

  // We set `lang` if:
  //   1. The user is not avoiding setting `lang` when the supplied language
  //      is the same as the closest ancestor with `lang`
  //   2. There is no ancestor with `lang`
  //   3. The closest ancestor with `lang` has a different language from
  //       the supplied
  if (avoidLangIfSet) {
    presetLangElement = /** @type {HTMLElement} */ (
      element.closest('[lang]')
    );
  }
  if (!presetLangElement || presetLangElement.lang !== language) {
    element.lang = language;
  }

  // See <https://github.com/tc39/ecma402/issues/205> for request for JavaScript to detect this
  // We set `dir` if:
  //    1. The user is not avoiding setting `dir` when the supplied
  //       language's directionality is the same as the closest ancestor
  //       with `dir`
  //    2. There is no ancestor with `dir` (and this is either not an LTR
  //        direction or the user isn't avoiding (the default) LTR)
  //    3. The closest ancestor with `dir` has a different `dir` from the
  //        direction of the supplied language
  const {direction: dir} =
    /**
     * @type {Intl.Locale & {
     *   getTextInfo: () => {direction: "ltr"|"rtl"|"ttb"}
     * }}
     */ (
      new Intl.Locale(language)
    ).getTextInfo();

  /** @type {HTMLElement|undefined} */
  let presetDirElement;
  if (avoidDirIfSet ||
    // If avoiding the default LTR except when different (even if not
    //   avoiding an (RTL) already-set dir), we need to know if different
    (avoidLTRByDefault && dir === 'ltr')
  ) {
    presetDirElement = /** @type {HTMLElement} */ (
      element.closest('[dir]')
    );
  }
  if (
    // If the closest ancestor with `dir` is different, we need to
    //  set regardless
    (presetDirElement && presetDirElement.dir !== dir) ||
      // We set if the user is not avoiding (whether there is no ancestor
      //   with `div` or even when there is and the language has the same
      //   directionality as the closest ancestor with `dir`) OR
      (!avoidDirIfSet ||
        // ...if there is no ancestor with `dir` AND...
        (!presetDirElement &&
          // this is either not an LTR direction or the user isn't
          //  avoiding (the default) LTR
          (!avoidLTRByDefault || dir !== 'ltr'))
      )
  ) {
    element.dir = dir;

    /* c8 ignore next 3 */
    if (dir === 'ttb') {
      element.style.writingMode = 'vertical-lr';
    }
  }
};
export default i18nizeElement;
