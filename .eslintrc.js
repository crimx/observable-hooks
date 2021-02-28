module.exports = {
  settings: {
    react: {
      version: '16.8'
    }
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'standard',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  plugins: ['@typescript-eslint', 'jest'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false
      }
    ],
    yoda: 'off',
    'react/prop-types': 'off',
    'import/first': 'off',
    // https://github.com/benmosher/eslint-plugin-import/issues/1357
    'import/export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'no-dupe-class-members': 'off',
    'no-use-before-define': 'off',
    'no-redeclare': 'off'
  }
}
