const base = require('./jest.config.base')

module.exports = Object.assign({}, base, {
  projects: ['<rootDir>/packages/*'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}']
})
