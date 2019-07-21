import { useObservable, pluckFirst } from '../src'
import { renderHook } from '@testing-library/react-hooks'
import { of, merge } from 'rxjs'

describe('useObservable', () => {
  it('should call the init function once', () => {
    const timeSpy = jest.fn(() => of(Date.now()))
    const { rerender } = renderHook(() => useObservable(timeSpy))
    expect(timeSpy).toBeCalledTimes(1)
    rerender()
    expect(timeSpy).toBeCalledTimes(1)
    rerender()
    expect(timeSpy).toBeCalledTimes(1)
  })

  it('should always return the same Observable', () => {
    const outer$ = of({ value: 1 })
    const { result, rerender } = renderHook(() =>
      useObservable(() => merge(outer$, of({ value: 2 })))
    )
    const enhanced$ = result.current
    const spy = jest.fn()
    enhanced$.subscribe(spy)
    expect(spy).toBeCalledTimes(2)
    expect(spy).toBeCalledWith({ value: 1 })
    expect(spy).lastCalledWith({ value: 2 })
    rerender()
    expect(result.current).toBe(enhanced$)
    spy.mockClear()
    expect(spy).toBeCalledTimes(0)
  })

  it('should emit value when one of the deps changes', () => {
    const { result, rerender } = renderHook(
      props => useObservable(pluckFirst, [props.text]),
      {
        initialProps: {
          text: 'hello'
        }
      }
    )

    const spy = jest.fn()
    result.current.subscribe(spy)
    expect(spy).toBeCalledTimes(1)
    expect(spy).lastCalledWith('hello')
    rerender({ text: 'world' })
    expect(spy).toBeCalledTimes(2)
    expect(spy).lastCalledWith('world')
  })
})
