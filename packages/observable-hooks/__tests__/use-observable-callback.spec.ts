import { useObservableCallback, identity } from '../src'
import { renderHook } from '@testing-library/react-hooks'

describe('useObservableCallback', () => {
  it('should call the init function once', () => {
    const timeSpy = jest.fn(identity)
    const { rerender } = renderHook(() => useObservableCallback(timeSpy))
    expect(timeSpy).toBeCalledTimes(1)
    rerender()
    expect(timeSpy).toBeCalledTimes(1)
    rerender()
    expect(timeSpy).toBeCalledTimes(1)
  })

  it('should always return the same callback and Observable', () => {
    const { result, rerender } = renderHook(() =>
      useObservableCallback<string>(identity)
    )
    const firstResult = result.current
    rerender()
    expect(firstResult).not.toBe(result.current)
    expect(result.current).toStrictEqual(firstResult)
  })

  it('should emit value when the callback is called', () => {
    const { result } = renderHook(() => useObservableCallback<string>(identity))
    const [onChange, event$] = result.current
    const spy = jest.fn()
    event$.subscribe(spy)
    expect(spy).toBeCalledTimes(0)
    onChange('hello')
    expect(spy).toBeCalledTimes(1)
    expect(spy).lastCalledWith('hello')
    onChange('world')
    expect(spy).toBeCalledTimes(2)
    expect(spy).lastCalledWith('world')
  })

  it('should get the selected argument from selector', () => {
    const { result } = renderHook(() =>
      useObservableCallback<string, string, [boolean, string]>(
        identity,
        args => args[1]
      )
    )
    const [onChange, event$] = result.current
    const spy = jest.fn()
    event$.subscribe(spy)
    expect(spy).toBeCalledTimes(0)
    onChange(true, 'hello')
    expect(spy).toBeCalledTimes(1)
    expect(spy).lastCalledWith('hello')
    onChange(false, 'world')
    expect(spy).toBeCalledTimes(2)
    expect(spy).lastCalledWith('world')
  })

  it('should get a observable of events if no argument', () => {
    const { result } = renderHook(() => useObservableCallback<string>())
    const [onChange, event$] = result.current
    const spy = jest.fn()
    event$.subscribe(spy)
    expect(spy).toBeCalledTimes(0)
    onChange('hello')
    expect(spy).toBeCalledTimes(1)
    expect(spy).lastCalledWith('hello')
    onChange('world')
    expect(spy).toBeCalledTimes(2)
    expect(spy).lastCalledWith('world')
  })
})
