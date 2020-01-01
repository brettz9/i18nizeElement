# CHANGES for i18nizeelement

## ?

- Docs: Update Jamilih API; document additional Jamilih plugin APIs
- Linting (ESLint): As per latest ash-nazg
- npm: Switch to non-deprecated `@rollup/plugin-node-resolve`
- npm: Update devDeps

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
