import { useSubscription } from '../src'
import { renderHook, act } from '@testing-library/react-hooks'
import { of, BehaviorSubject, Subject, throwError } from 'rxjs'
import { useState } from 'react'

describe('useSubscription', () => {
  it('should always return the same Subscription after first rendering', () => {
    const num$ = of(1, 2, 3)
    const { result, rerender } = renderHook(() => {
      const subscriptionRef = useSubscription(num$, () => {})
      return subscriptionRef.current
    })
    expect(result.current).toBeUndefined()
    rerender()
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

  it('should receive error', () => {
    const error = new Error('oops')
    const error$ = throwError(error)
    const nextSpy = jest.fn()
    const errorSpy = jest.fn()
    const completeSpy = jest.fn()
    const { rerender } = renderHook(() =>
      useSubscription(error$, nextSpy, errorSpy, completeSpy)
    )
    expect(errorSpy).toBeCalledTimes(1)
    expect(errorSpy).lastCalledWith(error)
    expect(nextSpy).toBeCalledTimes(0)
    expect(completeSpy).toBeCalledTimes(0)
    rerender()
    expect(errorSpy).toBeCalledTimes(1)
    expect(nextSpy).toBeCalledTimes(0)
    expect(completeSpy).toBeCalledTimes(0)
  })

  it('should throw the error when error callback is not provided', async () => {
    const error = new Error('oops')
    const error$ = throwError(error)
    const nextSpy = jest.fn()
    const completeSpy = jest.fn()

    const { rerender, result } = renderHook(() =>
      useSubscription(error$, nextSpy, null, completeSpy)
    )

    expect(result.error).toBeInstanceOf(Error)
    expect(result.error.message).toBe('oops')
    expect(nextSpy).toBeCalledTimes(0)
    expect(completeSpy).toBeCalledTimes(0)

    rerender()
    expect(result.error).toBeInstanceOf(Error)
    expect(result.error.message).toBe('oops')
    expect(nextSpy).toBeCalledTimes(0)
    expect(completeSpy).toBeCalledTimes(0)
  })

  it('should receive complete', () => {
    const num$ = of(1, 2, 3)
    const completeSpy = jest.fn()
    const { rerender } = renderHook(() =>
      useSubscription(num$, null, null, completeSpy)
    )
    expect(completeSpy).toBeCalledTimes(1)
    expect(completeSpy).lastCalledWith()
    rerender()
    expect(completeSpy).toBeCalledTimes(1)
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

  it('should unsubscribe old Observable and subscribe to new one when it changes.', () => {
    const num1$ = of(1)
    const num2$ = of(2)
    const numSpy = jest.fn()

    const { rerender } = renderHook(
      props => {
        useSubscription(props.input$, numSpy)
      },
      {
        initialProps: {
          input$: num1$
        }
      }
    )

    expect(numSpy).toBeCalledTimes(1)
    expect(numSpy).lastCalledWith(1)

    rerender({ input$: num2$ })

    expect(numSpy).toBeCalledTimes(2)
    expect(numSpy).lastCalledWith(2)
  })
})
