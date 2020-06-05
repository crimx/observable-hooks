import { useObservableGetState } from '../src'
import { renderHook, act } from '@testing-library/react-hooks'
import { of, Subject, BehaviorSubject } from 'rxjs'

describe('useObservableGetState', () => {
  it('should have the synced init value from Observable without rerendering', () => {
    const outer$ = of(1, 2, 3)
    const { result } = renderHook(() => useObservableGetState(outer$))
    expect(result.current).toBe(3)
  })

  it('should start receiving values after first rendering', () => {
    const spy = jest.fn()
    const outer$ = of({ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } })
    const { result } = renderHook(() => {
      const state = useObservableGetState(outer$, 'a', 'b')
      spy(state)
      return state
    })
    expect(result.current).toEqual(3)
    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy).toHaveBeenNthCalledWith(1, undefined)
    expect(spy).toHaveBeenNthCalledWith(2, 3)
  })

  it('should update value when the Observable emits value', () => {
    const outer$$ = new Subject<number>()
    const { result } = renderHook(() => useObservableGetState(outer$$))
    expect(result.current).toBeUndefined()

    act(() => outer$$.next(1))
    expect(result.current).toBe(1)

    act(() => outer$$.next(2))
    expect(result.current).toBe(2)
  })

  it('should get value with 1-level path', () => {
    const outer$$ = new BehaviorSubject({ a: 'a' })
    const { result } = renderHook(() => useObservableGetState(outer$$, 'a'))
    expect(result.current).toBe('a')

    act(() => outer$$.next({ a: 'b' }))
    expect(result.current).toBe('b')
  })

  it('should get value with 3-level path', () => {
    const outer$$ = new BehaviorSubject({ a: { b: { c: 'a' } } })
    const { result } = renderHook(() =>
      useObservableGetState(outer$$, 'a', 'b', 'c')
    )
    expect(result.current).toBe('a')

    act(() => outer$$.next({ a: { b: { c: 'b' } } }))
    expect(result.current).toBe('b')
  })
})
