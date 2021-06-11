module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [require.resolve('./scripts/jest-setup.js')],
  collectCoverageFrom: ['packages/*/src/**/*.{ts,tsx}'],
  clearMocks: true,
  testRegex: '.*\\.(test|spec)\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
