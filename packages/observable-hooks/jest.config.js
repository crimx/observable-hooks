const base = require('../../jest.config.base')

module.exports = Object.assign({}, base, {
  displayName: 'observable-hooks',
  collectCoverageFrom: ['./src/**/*.{ts,tsx}']
})
