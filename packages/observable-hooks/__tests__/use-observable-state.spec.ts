import { useObservableState, identity } from '../src'
import { renderHook, act } from '@testing-library/react-hooks'
import { of, Subject } from 'rxjs'
import { map } from 'rxjs/operators'

describe('useObservableState', () => {
  describe('with init function', () => {
    it('should call the init function once', () => {
      const timeSpy = jest.fn(() => of(Date.now()))
      const { rerender } = renderHook(() => useObservableState(timeSpy))
      expect(timeSpy).toBeCalledTimes(1)
      rerender()
      expect(timeSpy).toBeCalledTimes(1)
      rerender()
      expect(timeSpy).toBeCalledTimes(1)
    })

    it('should have the synced init value from Observable without rerendering', () => {
      const { result } = renderHook(() => useObservableState(() => of(1, 2, 3)))
      expect(result.current[0]).toBe(3)
    })

    it('should not lose the init value from sync Observable when rerendering trigger from other props or states', () => {
      const { result, rerender } = renderHook(() =>
        useObservableState(() => of(1, 2, 3))
      )
      expect(result.current[0]).toBe(3)
      rerender()
      expect(result.current[0]).toBe(3)
    })

    it('should update value when the returned function is called', () => {
      const { result } = renderHook(() =>
        useObservableState<string, number>(input$ =>
          input$.pipe(map(input => 'test' + input))
        )
      )
      const [state, updateState] = result.current
      expect(state).toBeUndefined()
      act(() => {
        updateState(1)
      })
      expect(result.current[0]).toBe('test1')
      act(() => {
        updateState(2)
      })
      expect(result.current[0]).toBe('test2')
    })

    it('should not trigger rerendering when value is not changed', () => {
      const spy = jest.fn()
      const { result } = renderHook(() => {
        spy()
        return useObservableState<string, number>(input$ =>
          input$.pipe(map(input => 'test' + input))
        )
      })
      const [state, updateState] = result.current
      expect(state).toBeUndefined()
      expect(spy).toHaveBeenCalledTimes(1)

      act(() => updateState(1))
      expect(result.current[0]).toBe('test1')
      expect(spy).toHaveBeenCalledTimes(2)

      act(() => updateState(1))
      expect(result.current[0]).toBe('test1')
      expect(spy).toHaveBeenCalledTimes(2)
    })

    it('should get the init state if given', () => {
      const { result } = renderHook(() => useObservableState(identity, 1))
      expect(result.current[0]).toBe(1)
    })

    it('should ignore the given init state when Observable also emits sync values', () => {
      const { result } = renderHook(() => useObservableState(() => of(1, 2), 3))
      expect(result.current[0]).toBe(2)
    })
  })

  describe('with init Observable', () => {
    it('should have the synced init value from Observable without rerendering', () => {
      const outer$ = of(1, 2, 3)
      const { result } = renderHook(() => useObservableState(outer$))
      expect(result.current).toBe(3)
    })

    it('should not lose the init value from sync Observable when rerendering trigger from other props or states', () => {
      const outer$ = of(1, 2, 3)
      const { result, rerender } = renderHook(() => useObservableState(outer$))
      expect(result.current).toBe(3)
      rerender()
      expect(result.current).toBe(3)
    })

    it('should update value when the Observable emits value', () => {
      const outer$$ = new Subject<number>()
      const { result } = renderHook(() => useObservableState(outer$$))
      expect(result.current).toBeUndefined()
      act(() => {
        outer$$.next(1)
      })
      expect(result.current).toBe(1)
      act(() => {
        outer$$.next(2)
      })
      expect(result.current).toBe(2)
    })

    it('should get the init state if given', () => {
      const outer$$ = new Subject()
      const { result } = renderHook(() => useObservableState(outer$$, 1))
      expect(result.current).toBe(1)
    })

    it('should ignore the given init state when Observable also emits sync values', () => {
      const outer$ = of(1, 2)
      const { result } = renderHook(() => useObservableState(outer$, 3))
      expect(result.current).toBe(2)
    })
  })
})
