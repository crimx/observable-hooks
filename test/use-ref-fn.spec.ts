import { useRefFn } from '../src'
import { renderHook } from '@testing-library/react-hooks'

describe('useRefFn', () => {
  it('should invoke the function once and always returns the same result', () => {
    const { result, rerender } = renderHook(() =>
      useRefFn(() => ({ date: Date.now() }))
    )
    const firestResult = result.current.current
    const firstDate = firestResult.date
    expect(typeof firstDate).toBe('number')
    rerender()
    expect(result.current.current).toBe(firestResult)
    expect(result.current.current.date).toBe(firstDate)
  })
})
