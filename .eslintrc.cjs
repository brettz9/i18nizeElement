'use strict';

module.exports = {
  extends: ['ash-nazg/sauron-overrides'],
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    node: true
  },
  settings: {
    polyfills: [
      'Intl.Locale',
      'Promise.resolve'
    ]
  },
  overrides: [
    {
      files: '.eslintrc.js',
      extends: ['plugin:node/recommended-script'],
      rules: {
        'import/no-commonjs': 0
      }
    },
    {
      files: ['*.md/*.js'],
      rules: {
        'import/no-unresolved': ['error', {
          ignore: ['i18nizeelement']
        }]
      }
    },
    {
      files: ['*.html'],
      rules: {
        'import/unambiguous': 0
      }
    },
    {
      files: ['test/**'],
      env: {
        mocha: true
      },
      globals: {
        expect: true,
        chai: true
      }
    }
  ],
  rules: {
  }
};
