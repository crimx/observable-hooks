import { pluckCurrentTargetValue } from "../src";
import { of } from "rxjs";
import { toArray } from "rxjs/operators";

describe("pluckCurrentTargetValue", () => {
  it("should pluck the `currentTarget.value` field from an event", () => {
    const event$ = of(
      { currentTarget: { value: 1 } },
      { currentTarget: { value: 2 } },
      { currentTarget: { value: 3 } }
    );
    const sub = pluckCurrentTargetValue(event$).pipe(toArray());
    let result;
    sub.subscribe(value => (result = value));
    expect(result).toEqual([1, 2, 3]);
    expect(sub).toBeTruthy();
  });
});
