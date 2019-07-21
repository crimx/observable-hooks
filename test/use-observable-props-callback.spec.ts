import { useObservablePropsCallback } from '../src'
import { renderHook } from '@testing-library/react-hooks'
import { Subject } from 'rxjs'

describe('useObservablePropsCallback', () => {
  it('should invoke the callback when Observable emits values', () => {
    const num$$ = new Subject()
    const spy = jest.fn()
    renderHook(() => {
      useObservablePropsCallback(num$$, spy)
    })
    expect(spy).toBeCalledTimes(0)
    num$$.next(1)
    expect(spy).toBeCalledTimes(1)
    expect(spy).lastCalledWith(1)
    num$$.next(2)
    expect(spy).toBeCalledTimes(2)
    expect(spy).lastCalledWith(2)
  })

  it('should invoke the latest callback', () => {
    const num$$ = new Subject()
    const spy1 = jest.fn()
    const spy2 = jest.fn()
    const { rerender } = renderHook(
      props => {
        useObservablePropsCallback(num$$, props.cb)
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

  it('should not emit value for callback changing', () => {
    const num$$ = new Subject()
    const spy1 = jest.fn()
    const spy2 = jest.fn()
    const { rerender } = renderHook(
      props => {
        useObservablePropsCallback(num$$, props.cb)
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

  it('should not invoke the callback when unmount', () => {
    const num$$ = new Subject()
    const spy = jest.fn()
    const { unmount } = renderHook(() => {
      useObservablePropsCallback(num$$, spy)
    })
    expect(spy).toBeCalledTimes(0)
    num$$.next(1)
    expect(spy).toBeCalledTimes(1)
    expect(spy).lastCalledWith(1)
    num$$.next(2)
    expect(spy).toBeCalledTimes(2)
    expect(spy).lastCalledWith(2)
    spy.mockClear()
    unmount()
    num$$.next(3)
    expect(spy).toBeCalledTimes(0)
  })
})
