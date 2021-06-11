const base = require('../../jest.config')

module.exports = Object.assign({}, base, {
  displayName: 'observable-hooks',
  collectCoverageFrom: ['src/**/*.{ts,tsx}']
})
