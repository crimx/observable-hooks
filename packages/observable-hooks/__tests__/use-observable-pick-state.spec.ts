import { useObservablePickState } from '../src'
import { renderHook, act } from '@testing-library/react-hooks'
import { of, Subject, BehaviorSubject } from 'rxjs'

describe('useObservablePickState', () => {
  it('should have the synced init value from Observable without rerendering', () => {
    const outer$ = of({ a: 'a' }, { a: 'b' }, { a: 'c' })
    const { result } = renderHook(() => useObservablePickState(outer$, 'a'))
    expect(result.current).toEqual({ a: 'c' })
  })

  it('should not lose the init value from sync Observable when rerendering trigger from other props or states', () => {
    const outer$ = of({ a: 'a' }, { a: 'b' }, { a: 'c' })
    const { result, rerender } = renderHook(() =>
      useObservablePickState(outer$, 'a')
    )
    expect(result.current).toEqual({ a: 'c' })
    rerender()
    expect(result.current).toEqual({ a: 'c' })
  })

  it('should update value when the Observable emits value', () => {
    const outer$$ = new Subject<{ a: number; b: number }>()
    const { result } = renderHook(() => useObservablePickState(outer$$, 'a'))
    expect(result.current).toBeUndefined()

    act(() => outer$$.next({ a: 1, b: 2 }))
    expect(result.current).toEqual({ a: 1 })

    act(() => outer$$.next({ a: 3, b: 4 }))
    expect(result.current).toEqual({ a: 3 })
  })

  it('should get value with 1 key', () => {
    const outer$$ = new BehaviorSubject({ a: 'a', b: 'b' })
    const { result } = renderHook(() => useObservablePickState(outer$$, 'a'))
    expect(result.current).toEqual({ a: 'a' })

    act(() => outer$$.next({ a: 'b', b: 'a' }))
    expect(result.current).toEqual({ a: 'b' })
  })

  it('should get value with 3 keys', () => {
    const outer$$ = new BehaviorSubject({ a: 'a', b: 'b', c: 'c', d: 'd' })
    const { result } = renderHook(() =>
      useObservablePickState(outer$$, 'a', 'b', 'c')
    )
    expect(result.current).toEqual({ a: 'a', b: 'b', c: 'c' })

    act(() => outer$$.next({ a: 'd', b: 'c', c: 'b', d: 'a' }))
    expect(result.current).toEqual({ a: 'd', b: 'c', c: 'b' })
  })
})
