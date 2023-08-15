/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import * as RxType from "rxjs";

let Scheduler: import("./utils").Scheduler;
let React: typeof import("react");
let ReactTestRenderer: typeof import("react-test-renderer");
let act: typeof import("react-test-renderer").act;
let ObservableHooks: typeof import("../src");
let Rx: typeof import("rxjs");

describe("Concurrent Mode", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.mock("scheduler", () => require("scheduler/unstable_mock"));
    jest.mock("react", () => require("experimental_react"));
    jest.mock("react-dom", () => require("experimental_react-dom"));
    jest.mock("react-test-renderer", () =>
      require("experimental_react-test-renderer")
    );

    ObservableHooks = require("../src");
    React = require("react");
    ReactTestRenderer = require("react-test-renderer");
    Scheduler = require("scheduler");

    Rx = require("rxjs");

    act = ReactTestRenderer.act;
  });

  describe("useSubscription", () => {
    it("should ignore emissions when the observable is changed but new subscription is not yet established", () => {
      function Subscription({
        source$,
      }: {
        source$: RxType.Observable<string>;
      }) {
        ObservableHooks.useSubscription(source$, value => {
          Scheduler.unstable_yieldValue(value);
        });
        Scheduler.unstable_yieldValue("render");
        return null;
      }

      const observableA = new Rx.BehaviorSubject("a-0");
      const observableB = new Rx.BehaviorSubject("b-0");

      let renderer: ReturnType<typeof ReactTestRenderer.create>;
      act(() => {
        renderer = ReactTestRenderer.create(
          <Subscription source$={observableA} />,
          { unstable_isConcurrent: true } as any
        );
      });

      expect(Scheduler).toHaveYielded(["render", "a-0"]);

      act(() => {
        renderer.update(<Subscription source$={observableB} />);

        // Start React update, but don't finish
        expect(Scheduler).toFlushAndYieldThrough(["render"]);

        observableA.next("a-1");

        // observableA is ignored
        expect(Scheduler).toFlushAndYield(["b-0"]);

        observableA.next("a-2");
        observableB.next("b-2");

        // observableA is still ignored
        expect(Scheduler).toHaveYielded(["b-2"]);

        Scheduler.unstable_flushAllWithoutAsserting();
      });

      act(() => {
        renderer.update(<Subscription source$={observableA} />);

        // Start React update, but don't finish
        expect(Scheduler).toFlushAndYieldThrough(["render"]);

        observableB.next("b-3");
        observableB.error(new Error("oops"));

        // observableB is ignored
        expect(Scheduler).toFlushAndYield(["a-2"]);
      });

      const observableC = new Rx.BehaviorSubject("c-0");

      act(() => {
        renderer.update(<Subscription source$={observableC} />);

        // Start React update, but don't finish
        expect(Scheduler).toFlushAndYieldThrough(["render"]);

        observableA.next("a-3");
        observableA.complete();

        // observableA is ignored
        expect(Scheduler).toFlushAndYield(["c-0"]);
      });

      expect(Scheduler).toFlushWithoutYielding();
    });
  });

  describe("useLayoutSubscription", () => {
    it("should ignore emissions when the observable is changed but new subscription is not yet established", () => {
      function Subscription({
        source$,
      }: {
        source$: RxType.Observable<string>;
      }) {
        ObservableHooks.useLayoutSubscription(source$, value => {
          Scheduler.unstable_yieldValue(value);
        });
        Scheduler.unstable_yieldValue("render");
        return null;
      }

      const observableA = new Rx.BehaviorSubject("a-0");
      const observableB = new Rx.BehaviorSubject("b-0");

      let renderer: ReturnType<typeof ReactTestRenderer.create>;
      act(() => {
        renderer = ReactTestRenderer.create(
          <Subscription source$={observableA} />,
          { unstable_isConcurrent: true } as any
        );

        expect(Scheduler).toFlushAndYieldThrough(["render", "a-0"]);
      });

      act(() => {
        renderer.update(<Subscription source$={observableB} />);

        // useLayoutEffect runs synchronously
        expect(Scheduler).toFlushAndYieldThrough(["render", "b-0"]);

        observableA.next("a-1");

        // observableA is ignored
        expect(Scheduler).toFlushAndYield([]);

        observableA.next("a-2");
        observableB.next("b-2");

        // observableA is still ignored
        expect(Scheduler).toHaveYielded(["b-2"]);

        Scheduler.unstable_flushAllWithoutAsserting();
      });

      act(() => {
        renderer.update(<Subscription source$={observableA} />);

        // useLayoutEffect runs synchronously
        expect(Scheduler).toFlushAndYieldThrough(["render", "a-2"]);

        observableB.next("b-3");
        observableB.error(new Error("oops"));

        // observableB is ignored
        expect(Scheduler).toFlushAndYield([]);
      });

      const observableC = new Rx.BehaviorSubject("c-0");

      act(() => {
        renderer.update(<Subscription source$={observableC} />);

        // useLayoutEffect runs synchronously
        expect(Scheduler).toFlushAndYieldThrough(["render", "c-0"]);

        observableA.next("a-3");
        observableA.complete();

        // observableA is ignored
        expect(Scheduler).toFlushAndYield([]);
      });

      expect(Scheduler).toFlushWithoutYielding();
    });
  });

  describe("useObservableState", () => {
    it("should not tear if a mutation occurs during a concurrent update", () => {
      jest.useFakeTimers();

      const input$ = new Rx.Subject<string>();

      const Subscriber = ({ id }: { id: string }) => {
        const value = ObservableHooks.useObservableState(input$, "A");
        Scheduler.unstable_yieldValue(`render:${id}:${value}`);
        return <>{value}</>;
      };

      act(() => {
        ReactTestRenderer.create(
          <>
            <Subscriber id="first" />
            <Subscriber id="second" />
          </>,
          { unstable_isConcurrent: true } as any
        );
        expect(Scheduler).toFlushAndYield([
          "render:first:A",
          "render:second:A",
        ]);

        // Update state "A" -> "B"
        // This update will be eagerly evaluated,
        // so the tearing case this test is guarding against would not happen.
        input$.next("B");
        expect(Scheduler).toFlushAndYield([
          "render:first:B",
          "render:second:B",
        ]);

        // No more pending updates
        jest.runAllTimers();

        // Partial update "B" -> "C"
        // Interrupt with a second mutation "C" -> "D".
        // This update will not be eagerly evaluated,
        // but useObservableState() should eagerly close over the updated value to avoid tearing.
        input$.next("C");
        expect(Scheduler).toFlushAndYieldThrough(["render:first:C"]);
        input$.next("D");
        expect(Scheduler).toFlushAndYield([
          "render:second:C",
          "render:first:D",
          "render:second:D",
        ]);

        // No more pending updates
        jest.runAllTimers();
      });
    });
  });

  describe("useObservableEagerState", () => {
    it("should not tear if a mutation occurs during a concurrent update", () => {
      jest.useFakeTimers();

      const input$ = new Rx.BehaviorSubject("A");

      const Subscriber = ({ id }: { id: string }) => {
        const value = ObservableHooks.useObservableEagerState(input$);
        Scheduler.unstable_yieldValue(`render:${id}:${value}`);
        return <>{value}</>;
      };

      act(() => {
        ReactTestRenderer.create(
          <>
            <Subscriber id="first" />
            <Subscriber id="second" />
          </>,
          { unstable_isConcurrent: true } as any
        );
        expect(Scheduler).toFlushAndYield([
          "render:first:A",
          "render:second:A",
        ]);

        // Update state "A" -> "B"
        // This update will be eagerly evaluated,
        // so the tearing case this test is guarding against would not happen.
        input$.next("B");
        expect(Scheduler).toFlushAndYield([
          "render:first:B",
          "render:second:B",
        ]);

        // No more pending updates
        jest.runAllTimers();

        // Partial update "B" -> "C"
        // Interrupt with a second mutation "C" -> "D".
        // This update will not be eagerly evaluated,
        // but useObservableState() should eagerly close over the updated value to avoid tearing.
        input$.next("C");
        expect(Scheduler).toFlushAndYieldThrough(["render:first:C"]);
        input$.next("D");
        expect(Scheduler).toFlushAndYield([
          "render:second:C",
          "render:first:D",
          "render:second:D",
        ]);

        // No more pending updates
        jest.runAllTimers();
      });
    });

    it("should ignore errors when the observable is changed but new subscription is not yet established", () => {
      function Subscription({
        source$,
      }: {
        source$: RxType.Observable<string>;
      }) {
        const state = ObservableHooks.useObservableEagerState(source$);
        Scheduler.unstable_yieldValue(`render:${state}`);
        return null;
      }

      const observableA = new Rx.BehaviorSubject("a-0");
      const observableB = new Rx.BehaviorSubject("b-0");

      let renderer: ReturnType<typeof ReactTestRenderer.create>;
      act(() => {
        renderer = ReactTestRenderer.create(
          <Subscription source$={observableA} />,
          { unstable_isConcurrent: true } as any
        );
      });

      expect(Scheduler).toHaveYielded(["render:a-0"]);

      act(() => {
        renderer.update(<Subscription source$={observableB} />);

        // Start React update, but don't finish
        expect(Scheduler).toFlushAndYieldThrough(["render:a-0"]);

        observableA.next("a-1");

        // observableA is ignored
        expect(Scheduler).toFlushAndYield(["render:b-0"]);

        observableA.next("a-2");
        observableB.next("b-2");

        // observableA is still ignored
        expect(Scheduler).toFlushAndYield(["render:b-2"]);
      });

      act(() => {
        renderer.update(<Subscription source$={observableA} />);

        // Start React update, but don't finish
        expect(Scheduler).toFlushAndYieldThrough(["render:b-2"]);

        observableB.next("b-3");
        observableB.error(new Error("oops"));

        // observableB is ignored
        expect(Scheduler).toFlushAndYield(["render:a-2"]);
      });
    });
  });

  describe("ObservableResource", () => {
    it("should not tear if a mutation occurs during a concurrent update", () => {
      jest.useFakeTimers();

      const input$ = new Rx.BehaviorSubject<string>("A");
      const resource = new ObservableHooks.ObservableResource(input$);

      const Subscriber = ({ id }: { id: string }) => {
        const value = ObservableHooks.useObservableSuspense(resource);
        Scheduler.unstable_yieldValue(`render:${id}:${value}`);
        return <>{value}</>;
      };

      act(() => {
        ReactTestRenderer.create(
          <>
            <Subscriber id="first" />
            <Subscriber id="second" />
          </>,
          { unstable_isConcurrent: true } as any
        );
        expect(Scheduler).toFlushAndYield([
          "render:first:A",
          "render:second:A",
        ]);

        // Update state "A" -> "B"
        // This update will be eagerly evaluated,
        // so the tearing case this test is guarding against would not happen.
        input$.next("B");
        expect(Scheduler).toFlushAndYield([
          "render:first:B",
          "render:second:B",
        ]);

        // No more pending updates
        jest.runAllTimers();

        // Partial update "B" -> "C"
        // Interrupt with a second mutation "C" -> "D".
        // This update will not be eagerly evaluated,
        // but useObservableState() should eagerly close over the updated value to avoid tearing.
        input$.next("C");
        expect(Scheduler).toFlushAndYieldThrough(["render:first:C"]);
        input$.next("D");
        expect(Scheduler).toFlushAndYield([
          "render:second:C",
          "render:first:D",
          "render:second:D",
        ]);

        // No more pending updates
        jest.runAllTimers();
      });
    });
  });
});
