module.exports = {
  extends: ["ash-nazg/sauron"],
  parserOptions: {
    sourceType: "module"
  },
  env: {
    node: true,
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
