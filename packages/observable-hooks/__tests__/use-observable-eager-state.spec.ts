import { useObservableEagerState } from '../src'
import { renderHook, act } from '@testing-library/react-hooks'
import {
  of,
  BehaviorSubject,
  throwError,
  scheduled,
  asyncScheduler
} from 'rxjs'
import { tap } from 'rxjs/operators'

describe('useObservableEagerState', () => {
  it('should start receiving values after first rendering', () => {
    const spy = jest.fn()
    const outer$ = of(1, 2, 3)
    const { result } = renderHook(() => {
      const state = useObservableEagerState(outer$)
      spy(state)
      return state
    })
    expect(result.current).toBe(3)
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(3)
  })

  it('should start receiving values after first rendering 2', () => {
    const spy = jest.fn()
    const outer$ = scheduled(of(1, 2, 3), asyncScheduler)
    const { result } = renderHook(() => {
      const state = useObservableEagerState(outer$)
      spy(state)
      return state
    })
    expect(result.error).toBeInstanceOf(Error)
    expect(result.error.message).toBe(
      'Observable did not synchronously emit a value.'
    )
  })

  it('should update value when the Observable emits value', () => {
    const outer$$ = new BehaviorSubject(1)
    const { result } = renderHook(() => useObservableEagerState(outer$$))
    expect(result.current).toBe(1)
    act(() => {
      outer$$.next(2)
    })
    expect(result.current).toBe(2)
    act(() => {
      outer$$.next(3)
    })
    expect(result.current).toBe(3)
  })

  it('should subscribe the twice by dafult', () => {
    const spy = jest.fn()
    const outer$$ = of(1).pipe(tap(spy))
    const { result } = renderHook(() => useObservableEagerState(outer$$))
    expect(result.current).toBe(1)
    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should throw error when observable emits error', () => {
    const outer$ = throwError(new Error('oops'))
    const { result } = renderHook(() => useObservableEagerState(outer$))
    expect(result.error).toBeInstanceOf(Error)
    expect(result.error.message).toBe('oops')
  })
})
