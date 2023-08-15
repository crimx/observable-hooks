import { act, renderHook } from "@testing-library/react-hooks";
import { BehaviorSubject, Subject, of, throwError } from "rxjs";
import { map, scan } from "rxjs/operators";
import { identity, useLayoutObservableState } from "../src";
import { mockConsoleError } from "./utils";

describe("useLayoutObservableState", () => {
  describe("with init function", () => {
    it("should call the init function once", () => {
      const timeSpy = jest.fn(() => of(Date.now()));
      const { rerender } = renderHook(() => useLayoutObservableState(timeSpy));
      expect(timeSpy).toBeCalledTimes(1);
      rerender();
      expect(timeSpy).toBeCalledTimes(1);
      rerender();
      expect(timeSpy).toBeCalledTimes(1);
    });

    it("should start receiving values after first rendering", () => {
      const spy = jest.fn();
      const { result } = renderHook(() => {
        const state = useLayoutObservableState(() => of(1, 2, 3));
        spy(state[0]);
        return state;
      });
      expect(result.current[0]).toBe(3);
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenNthCalledWith(1, undefined);
      expect(spy).toHaveBeenNthCalledWith(2, 3);
    });

    it("should update value when the returned function is called", () => {
      const { result } = renderHook(() =>
        useLayoutObservableState<string, number>(input$ =>
          input$.pipe(map(input => "test" + input))
        )
      );
      const [state, updateState] = result.current;
      expect(state).toBeUndefined();
      act(() => {
        updateState(1);
      });
      expect(result.current[0]).toBe("test1");
      act(() => {
        updateState(2);
      });
      expect(result.current[0]).toBe("test2");
    });

    it("should get the init state if given", () => {
      const { result } = renderHook(() =>
        useLayoutObservableState(identity, 1)
      );
      expect(result.current[0]).toBe(1);
    });

    it("should get the init state of BehaviorSubject without initialState", () => {
      const value$ = new BehaviorSubject("22");
      const renderTimes = jest.fn();
      const { result } = renderHook(() => {
        const result = useLayoutObservableState(value$);
        renderTimes(result);
        return result;
      });
      expect(result.current).toBe("22");
      expect(renderTimes).toHaveBeenCalledTimes(1);
      expect(renderTimes).toHaveBeenLastCalledWith("22");
    });

    it("should ignore the manual initialState for BehaviorSubject", () => {
      const value$ = new BehaviorSubject("22");
      const renderTimes = jest.fn();
      const { result } = renderHook(() => {
        const result = useLayoutObservableState(value$, "initialState");
        renderTimes(result);
        return result;
      });
      expect(result.current).toBe("22");
      expect(renderTimes).toBeCalledTimes(1);
      expect(renderTimes).toHaveBeenLastCalledWith("22");

      act(() => value$.next("22"));
      expect(result.current).toBe("22");
      expect(renderTimes).toBeCalledTimes(1);

      act(() => value$.next("33"));
      expect(result.current).toBe("33");
      expect(renderTimes).toBeCalledTimes(2);
      expect(renderTimes).toHaveBeenLastCalledWith("33");
    });

    it("should ignore the given init state when Observable also emits sync values", () => {
      const { result } = renderHook(() =>
        useLayoutObservableState(() => of(1, 2), 3)
      );
      expect(result.current[0]).toBe(2);
    });

    it("should log error when observable emits error", () => {
      return mockConsoleError(consoleError => {
        const { result } = renderHook(() =>
          useLayoutObservableState(() => throwError(new Error("oops")))
        );
        expect(result.error).toBeUndefined();
        expect(consoleError).toBeCalledTimes(1);
        expect(consoleError.mock.calls[0][0].message).toBe("oops");
      });
    });

    it("should support reducer pattern", () => {
      interface StoreState {
        value1: string;
        value2: number;
      }

      type StoreAction =
        | {
            type: "UPDATE_VALUE1";
            payload: string;
          }
        | {
            type: "INCREMENT_VALUE2";
          };

      const { result } = renderHook(() =>
        useLayoutObservableState<StoreState, StoreAction>(
          (action$, initialState) =>
            action$.pipe(
              scan((state, action) => {
                switch (action.type) {
                  case "UPDATE_VALUE1":
                    return {
                      ...state,
                      value1: action.payload,
                    };
                  case "INCREMENT_VALUE2":
                    return {
                      ...state,
                      value2: state.value2 + 1,
                    };
                  default:
                    return state;
                }
              }, initialState)
            ),
          () => ({ value1: "value1", value2: 2 })
        )
      );

      // eslint-disable-next-line prefer-const
      let [state, dispatch] = result.current;
      expect(state).toEqual({ value1: "value1", value2: 2 });

      act(() => {
        dispatch({ type: "UPDATE_VALUE1", payload: "value2" });
      });

      state = result.current[0];
      expect(state).toEqual({ value1: "value2", value2: 2 });

      act(() => {
        dispatch({ type: "INCREMENT_VALUE2" });
      });

      state = result.current[0];
      expect(state).toEqual({ value1: "value2", value2: 3 });
    });
  });

  describe("with init Observable", () => {
    it("should start receiving values after first rendering", () => {
      const spy = jest.fn();
      const outer$ = of(1, 2, 3);
      const { result } = renderHook(() => {
        const state = useLayoutObservableState(outer$);
        spy(state);
        return state;
      });
      expect(result.current).toBe(3);
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenNthCalledWith(1, undefined);
      expect(spy).toHaveBeenNthCalledWith(2, 3);
    });

    it("should update value when the Observable emits value", () => {
      const outer$$ = new Subject<number>();
      const { result } = renderHook(() => useLayoutObservableState(outer$$));
      expect(result.current).toBeUndefined();
      act(() => {
        outer$$.next(1);
      });
      expect(result.current).toBe(1);
      act(() => {
        outer$$.next(2);
      });
      expect(result.current).toBe(2);
    });

    it("should get the init state if given", () => {
      const outer$$ = new Subject();
      const { result } = renderHook(() => useLayoutObservableState(outer$$, 1));
      expect(result.current).toBe(1);
    });

    it("should ignore the given init state when Observable also emits sync values", () => {
      const outer$ = of(1, 2);
      const { result } = renderHook(() => useLayoutObservableState(outer$, 3));
      expect(result.current).toBe(2);
    });

    it("should log error when observable emits error", () => {
      return mockConsoleError(consoleError => {
        const outer$ = throwError(new Error("oops"));
        const { result } = renderHook(() =>
          useLayoutObservableState(outer$, 3)
        );
        expect(result.error).toBeUndefined();
        expect(consoleError).toBeCalledTimes(1);
        expect(consoleError.mock.calls[0][0].message).toBe("oops");
      });
    });
  });
});
