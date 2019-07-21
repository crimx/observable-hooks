import { identity } from '../src'

describe('identity', () => {
  it('should return the first argument given', () => {
    var object = { name: 'CRIMX' }
    expect(identity(object)).toBe(object)
  })
})
