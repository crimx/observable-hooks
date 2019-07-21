import { useSubscription } from '../src'
import { renderHook } from '@testing-library/react-hooks'
import { of, BehaviorSubject } from 'rxjs'

describe('useSubscription', () => {
  it('should always return the same Subscription', () => {
    const num$ = of(1, 2, 3)
    const { result, rerender } = renderHook(() =>
      useSubscription(num$, () => {})
    )
    const firstSubscription = result.current
    rerender()
    expect(firstSubscription).toBe(result.current)
  })

  it('should receive emitted values from Observable', () => {
    const num$ = of(1, 2, 3)
    const numSpy = jest.fn()
    const { rerender } = renderHook(() => useSubscription(num$, numSpy))
    expect(numSpy).toBeCalledTimes(3)
    expect(numSpy).lastCalledWith(3)
    expect(numSpy).toBeCalledWith(1)
    expect(numSpy).toBeCalledWith(2)
    rerender()
    expect(numSpy).toBeCalledTimes(3)
    expect(numSpy).lastCalledWith(3)
  })

  it('should unsubscribe when unmount', () => {
    const num$$ = new BehaviorSubject(1)
    const numSpy = jest.fn()
    const { unmount } = renderHook(() => useSubscription(num$$, numSpy))
    expect(numSpy).toBeCalledTimes(1)
    expect(numSpy).lastCalledWith(1)
    num$$.next(2)
    expect(numSpy).toBeCalledTimes(2)
    expect(numSpy).lastCalledWith(2)
    numSpy.mockClear()
    unmount()
    num$$.next(3)
    expect(numSpy).toBeCalledTimes(0)
  })
})
