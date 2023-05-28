import { useObservableRef } from '../src'
import { renderHook } from '@testing-library/react-hooks'

describe('useObservableRef', () => {
  it('should emit undefined value on subscribe', () => {
    const countSpy = jest.fn()
    const { result } = renderHook(() => {
      const [, value$] = useObservableRef()
      countSpy()
      return value$
    })
    expect(countSpy).toHaveBeenCalledTimes(1)
    expect(result.current.value).toBeUndefined()

    const valueSpy = jest.fn()
    result.current.subscribe(valueSpy)
    expect(valueSpy).toHaveBeenCalledTimes(1)
    expect(valueSpy).lastCalledWith(undefined)
  })

  it('should emit initial value on subscribe', () => {
    const countSpy = jest.fn()
    const { result } = renderHook(() => {
      const [, value$] = useObservableRef('initial')
      countSpy()
      return value$
    })
    expect(countSpy).toHaveBeenCalledTimes(1)
    expect(result.current.value).toBe('initial')

    const valueSpy = jest.fn()
    result.current.subscribe(valueSpy)
    expect(valueSpy).toHaveBeenCalledTimes(1)
    expect(valueSpy).lastCalledWith('initial')
  })

  it('should emit new value when ref.current is updated', () => {
    const { result } = renderHook(() => useObservableRef(1))
    const [ref, value$] = result.current

    const valueSpy = jest.fn()
    value$.subscribe(valueSpy)
    expect(valueSpy).toHaveBeenCalledTimes(1)
    expect(valueSpy).lastCalledWith(1)
    expect(ref.current).toBe(1)

    ref.current = 2

    expect(valueSpy).toHaveBeenCalledTimes(2)
    expect(valueSpy).lastCalledWith(2)
    expect(ref.current).toBe(2)
  })
})
