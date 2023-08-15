import { act, renderHook } from "@testing-library/react-hooks";
import { useForceUpdate } from "../src";

describe("useForceUpdate", () => {
  it("should trigger rerender", () => {
    let count = 0;
    const {
      result: { current: forceUpdate },
    } = renderHook(() => {
      count++;
      return useForceUpdate();
    });
    expect(count).toBe(1);
    act(() => forceUpdate());
    expect(count).toBe(2);
    act(() => forceUpdate());
    expect(count).toBe(3);
  });

  it("should always return same function", () => {
    const forceUpdates = new Set<(...args: any[]) => any>();
    const { rerender, result } = renderHook(() => useForceUpdate());
    forceUpdates.add(result.current);
    rerender();
    forceUpdates.add(result.current);
    rerender();
    forceUpdates.add(result.current);
    rerender();
    forceUpdates.add(result.current);
    expect(forceUpdates.size).toBe(1);
  });
});
