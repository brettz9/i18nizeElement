# CHANGES for i18nizeelement

## 0.6.0

- fix: add `intl-locale-textinfo-polyfill` as dep.
- chore: update devDeps and lint; switch to pnpm

## 0.5.2

- fix: for importing of TS `node_modules` path, provide re-export that can be found

## 0.5.1

- fix: for importing of TS `node_modules` path, provide re-export that can be found

## 0.5.0

BREAKING CHANGE: Requires Node 16

- refactor: added types
- refactor: switch to `intl-locale-textinfo-polyfill`; use ESM
- chore: update devDeps.

## 0.4.0

- Docs: Update Jamilih API; document additional Jamilih plugin APIs
- Linting (ESLint): As per latest ash-nazg
- Testing: Use `chai/register-expect`
- Testing: Fix paths to allow avoiding a global; drop now unneeded `closest`
    polyfill
- npm: Add eslint to test script
- npm: Script from `prepare` to `prepublishOnly`
- npm: Update `rollup-plugin-babel` to `@rollup/plugin-babel`
    and make explicit `babelHelpers` value of `bundled`
- npm: Switch to non-deprecated `@rollup/plugin-node-resolve`
- npm: Switch to non-deprecated `@rollup/plugin-commonjs`
- npm: Remove `test-cov` script in favor of letting `test` run coverage
- npm: Delete full cache (ESM and nyc) in testing coverage
- npm: Update devDeps. and package-lock

## 0.3.0

- Breaking change: Insist on Node >= 6
- Linting (ESLint): Apply ash-nazg; use a recommended extension ("js")
- Testing: Move `tests` to `test`
- Testing: Switch to `esm`
- Testing: Add `nyc` for coverage and bring to 100%
- Build: Switch to Babel; update Rollup API usage
- Maintenance: Add `.editorconfig`
- Docs: Add badges
- npm: Update devDeps; avoid `build` script; `opn-cli`->`open-cli`
- npm: Remove `rollup-watch` and `rollup-plugin-multi-entry`

## 0.2.1

- Exclude items from `.npmignore`

## 0.2.0

- Build: Add i18nizeElement Jamilih plugin builds, ensuring buble runs
    before other Rollup plugins
- Refactoring: Rename plugin file

## 0.1.0

- Initial release
