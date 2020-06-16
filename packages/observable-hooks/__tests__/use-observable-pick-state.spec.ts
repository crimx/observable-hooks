import { useObservablePickState } from '../src'
import { renderHook, act } from '@testing-library/react-hooks'
import { of, Subject, BehaviorSubject } from 'rxjs'

describe('useObservablePickState', () => {
  it('should start receiving values after first rendering', () => {
    const spy = jest.fn()
    const outer$ = of(
      { a: '1', b: '2' },
      { a: '3', b: '4' },
      { a: '5', b: '6' }
    )
    const { result } = renderHook(() => {
      const state = useObservablePickState(outer$, () => ({ a: '' }), 'a')
      spy(state)
      return state
    })
    expect(result.current).toEqual({ a: '5' })
    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy).toHaveBeenNthCalledWith(1, { a: '' })
    expect(spy).toHaveBeenNthCalledWith(2, { a: '5' })
  })

  it('should update value when the Observable emits value', () => {
    const outer$$ = new Subject<{ a: number; b: number }>()
    const { result } = renderHook(() =>
      useObservablePickState(outer$$, () => ({ a: 0 }), 'a')
    )
    expect(result.current).toEqual({ a: 0 })

    act(() => outer$$.next({ a: 1, b: 2 }))
    expect(result.current).toEqual({ a: 1 })

    act(() => outer$$.next({ a: 3, b: 4 }))
    expect(result.current).toEqual({ a: 3 })
  })

  it('should pick value with 1 key', () => {
    const outer$$ = new BehaviorSubject({ a: 'a', b: 'b' })
    const { result } = renderHook(() =>
      useObservablePickState(outer$$, () => ({ a: '' }), 'a')
    )
    expect(result.current).toEqual({ a: 'a' })

    act(() => outer$$.next({ a: 'b', b: 'a' }))
    expect(result.current).toEqual({ a: 'b' })
  })

  it('should pick value with 3 keys', () => {
    const outer$$ = new BehaviorSubject({ a: 'a', b: 'b', c: 'c', d: 'd' })
    const { result } = renderHook(() =>
      useObservablePickState(
        outer$$,
        () => ({ a: '', b: '', c: '' }),
        'a',
        'b',
        'c'
      )
    )
    expect(result.current).toEqual({ a: 'a', b: 'b', c: 'c' })

    act(() => outer$$.next({ a: 'd', b: 'c', c: 'b', d: 'a' }))
    expect(result.current).toEqual({ a: 'd', b: 'c', c: 'b' })
  })

  it('should allow undefined as initial value', () => {
    const spy = jest.fn()
    const outer$ = of(
      { a: '1', b: '2' },
      { a: '3', b: '4' },
      { a: '5', b: '6' }
    )
    const { result } = renderHook(() => {
      const state = useObservablePickState(outer$, undefined, 'a')
      spy(state)
      return state
    })
    expect(result.current).toEqual({ a: '5' })
    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy).toHaveBeenNthCalledWith(1, undefined)
    expect(spy).toHaveBeenNthCalledWith(2, { a: '5' })
  })
})
