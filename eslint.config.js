import ashNazg from 'eslint-config-ash-nazg';

export default [
  {
    ignores: [
      'dist',
      'coverage'
    ]
  },
  ...ashNazg(['sauron', 'node', 'browser']),
  {
    files: ['*.md/*.js'],
    rules: {
      // 'import/no-unresolved': ['error', {
      //   ignore: ['i18nizeelement']
      // }]
    }
  },
  {
    rules: {
      camelcase: 'off'
    }
  }
];
