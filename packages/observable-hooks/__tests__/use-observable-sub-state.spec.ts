import { useObservableSubState } from '../src'
import { renderHook, act } from '@testing-library/react-hooks'
import { of, Subject, BehaviorSubject } from 'rxjs'

describe('useObservableSubState', () => {
  it('should have the synced init value from Observable without rerendering', () => {
    const outer$ = of(1, 2, 3)
    const { result } = renderHook(() => useObservableSubState(outer$))
    expect(result.current).toBe(3)
  })

  it('should not lose the init value from sync Observable when rerendering trigger from other props or states', () => {
    const outer$ = of(1, 2, 3)
    const { result, rerender } = renderHook(() => useObservableSubState(outer$))
    expect(result.current).toBe(3)
    rerender()
    expect(result.current).toBe(3)
  })

  it('should update value when the Observable emits value', () => {
    const outer$$ = new Subject<number>()
    const { result } = renderHook(() => useObservableSubState(outer$$))
    expect(result.current).toBeUndefined()

    act(() => outer$$.next(1))
    expect(result.current).toBe(1)

    act(() => outer$$.next(2))
    expect(result.current).toBe(2)
  })

  it('should get value with 1-level path', () => {
    const outer$$ = new BehaviorSubject({ a: 'a' })
    const { result } = renderHook(() => useObservableSubState(outer$$, 'a'))
    expect(result.current).toBe('a')

    act(() => outer$$.next({ a: 'b' }))
    expect(result.current).toBe('b')
  })

  it('should get value with 3-level path', () => {
    const outer$$ = new BehaviorSubject({ a: { b: { c: 'a' } } })
    const { result } = renderHook(() =>
      useObservableSubState(outer$$, 'a', 'b', 'c')
    )
    expect(result.current).toBe('a')

    act(() => outer$$.next({ a: { b: { c: 'b' } } }))
    expect(result.current).toBe('b')
  })
})
