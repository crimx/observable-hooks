import { useLayoutObservable, pluckFirst } from '../src'
import { renderHook, act } from '@testing-library/react-hooks'
import { useState } from 'react'
import { of, merge, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

describe('useLayoutObservable', () => {
  it('should call the init function once', () => {
    const timeSpy = jest.fn(() => of(Date.now()))
    const { rerender } = renderHook(() => useLayoutObservable(timeSpy))
    expect(timeSpy).toBeCalledTimes(1)
    rerender()
    expect(timeSpy).toBeCalledTimes(1)
    rerender()
    expect(timeSpy).toBeCalledTimes(1)
  })

  it('should call the init function once with inputs', () => {
    const timeSpy = jest.fn((inputs$: Observable<[number]>) =>
      inputs$.pipe(map(inputs => inputs[0]))
    )
    const { rerender } = renderHook(
      props => useLayoutObservable(timeSpy, [props.value]),
      {
        initialProps: {
          value: 1
        }
      }
    )
    expect(timeSpy).toBeCalledTimes(1)
    rerender({ value: 2 })
    expect(timeSpy).toBeCalledTimes(1)
    rerender({ value: 3 })
    expect(timeSpy).toBeCalledTimes(1)
  })

  it('should always return the same Observable', () => {
    const outer$ = of({ value: 1 })
    const { result, rerender } = renderHook(() =>
      useLayoutObservable(() => merge(outer$, of({ value: 2 })))
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

  it('should always return the same Observable with inputs', () => {
    const { result, rerender } = renderHook(
      props => useLayoutObservable(pluckFirst, [props.value]),
      {
        initialProps: {
          value: 1
        }
      }
    )
    const enhanced$ = result.current
    const spy = jest.fn()
    enhanced$.subscribe(spy)
    expect(spy).toBeCalledTimes(1)
    expect(spy).toBeCalledWith(1)
    spy.mockClear()
    rerender({ value: 2 })
    expect(result.current).toBe(enhanced$)
    expect(spy).toBeCalledTimes(1)
    expect(spy).toBeCalledWith(2)
  })

  it('should be able to be shared with multiple observers', () => {
    const { result } = renderHook(() => {
      const [state, setState] = useState(1)
      const stream$ = useLayoutObservable(pluckFirst, [state])
      return { setState, stream$ }
    })

    const { setState, stream$ } = result.current

    const spies = Array.from(Array(10)).map(() => jest.fn())
    spies.forEach(spy => stream$.subscribe(spy))

    spies.forEach(spy => {
      expect(spy).toBeCalledTimes(1)
      expect(spy).toBeCalledWith(1)
    })

    act(() => setState(2))
    spies.forEach(spy => {
      expect(spy).toBeCalledTimes(2)
      expect(spy).toBeCalledWith(2)
    })

    act(() => setState(2))
    spies.forEach(spy => {
      expect(spy).toBeCalledTimes(2)
      expect(spy).toBeCalledWith(2)
    })

    act(() => setState(3))
    spies.forEach(spy => {
      expect(spy).toBeCalledTimes(3)
      expect(spy).toBeCalledWith(3)
    })
  })

  it('should emit value when one of the deps changes', () => {
    const { result, rerender } = renderHook(
      props => useLayoutObservable(pluckFirst, [props.text]),
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
