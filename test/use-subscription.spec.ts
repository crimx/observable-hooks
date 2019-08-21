import { useSubscription } from '../src'
import { renderHook, act } from '@testing-library/react-hooks'
import { of, BehaviorSubject, Subject } from 'rxjs'
import { useState } from 'react'

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

  it('should invoke the latest callback', () => {
    const num$$ = new Subject()
    const spy1 = jest.fn()
    const spy2 = jest.fn()
    const { rerender } = renderHook(
      props => {
        useSubscription(num$$, props.cb)
      },
      {
        initialProps: {
          cb: spy1
        }
      }
    )
    expect(spy1).toBeCalledTimes(0)
    expect(spy2).toBeCalledTimes(0)
    num$$.next(1)
    expect(spy1).toBeCalledTimes(1)
    expect(spy1).lastCalledWith(1)
    expect(spy2).toBeCalledTimes(0)
    spy1.mockClear()
    spy2.mockClear()
    rerender({ cb: spy2 })
    num$$.next(2)
    expect(spy1).toBeCalledTimes(0)
    expect(spy2).toBeCalledTimes(1)
    expect(spy2).lastCalledWith(2)
  })

  it('should be able to access closure', () => {
    const num$$ = new Subject<number>()
    const numSpy = jest.fn()
    const { rerender, result } = renderHook(
      props => {
        const [stateVal, setState] = useState('s1')
        useSubscription(num$$, num => {
          numSpy(num, stateVal, props.propVal)
        })
        return { setState }
      },
      {
        initialProps: {
          propVal: 'p1'
        }
      }
    )
    expect(numSpy).toBeCalledTimes(0)
    num$$.next(1)
    expect(numSpy).lastCalledWith(1, 's1', 'p1')

    numSpy.mockClear()
    act(() => {
      result.current.setState('s2')
    })
    expect(numSpy).toBeCalledTimes(0)
    num$$.next(2)
    expect(numSpy).lastCalledWith(2, 's2', 'p1')

    numSpy.mockClear()
    rerender({ propVal: 'p2' })
    expect(numSpy).toBeCalledTimes(0)
    num$$.next(2)
    expect(numSpy).lastCalledWith(2, 's2', 'p2')
  })

  it('should not emit value for callback changing', () => {
    const num$$ = new Subject()
    const spy1 = jest.fn()
    const spy2 = jest.fn()
    const { rerender } = renderHook(
      props => {
        useSubscription(num$$, props.cb)
      },
      {
        initialProps: {
          cb: spy1
        }
      }
    )
    expect(spy1).toBeCalledTimes(0)
    expect(spy2).toBeCalledTimes(0)
    num$$.next(1)
    expect(spy1).toBeCalledTimes(1)
    expect(spy1).lastCalledWith(1)
    expect(spy2).toBeCalledTimes(0)
    spy1.mockClear()
    spy2.mockClear()
    rerender({ cb: spy2 })
    expect(spy1).toBeCalledTimes(0)
    expect(spy2).toBeCalledTimes(0)
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
