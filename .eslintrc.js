module.exports = {
  "extends": "ash-nazg/sauron",
  "parserOptions": {
      "sourceType": "module"
  },
  "env": {
    "node": true,
    "mocha": true
  },
  settings: {
    polyfills: [
      'Promise.resolve'
    ]
  },
  overrides: [
    {
      files: ['*.md'],
      rules: {
        'import/no-unresolved': ['error', { ignore: ['i18nizeelement'] }]
      }
    },
    {
      files: ['*.html'],
      rules: {
        'import/unambiguous': 0
      }
    },
    {
      extends: ['plugin:node/recommended-script'],
      files: ['test/node-environment.js']
    }
  ],
  "rules": {
  }
};
