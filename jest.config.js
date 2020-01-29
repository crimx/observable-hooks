module.exports = {
  transform: {
    '^.+\\.ts(x?)$': 'ts-jest'
  },
  collectCoverageFrom: ['packages/*/src/**/*.{ts,tsx}'],
  testEnvironment: 'node',
  testRegex: '.*\\.(test|spec)\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      // enable type checking ts
      diagnostics: true,
      tsConfig: 'tsconfig.test.json'
    }
  }
}
