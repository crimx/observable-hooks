module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [require.resolve('./scripts/jest-setup.js')],
  transform: {
    '^.+\\.ts(x?)$': 'ts-jest'
  },
  collectCoverageFrom: ['packages/*/src/**/*.{ts,tsx}'],
  clearMocks: true,
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
