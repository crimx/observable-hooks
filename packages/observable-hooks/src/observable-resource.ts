import {
  BehaviorSubject,
  Observable,
  Observer,
  Subject,
  Subscription,
} from "rxjs";

interface Handler<T = any> {
  suspender_: Promise<T>;
  resolve_: (value?: T) => void;
}

const createHandler = (): Handler => {
  const handler: Partial<Handler> = {};
  handler.suspender_ = new Promise(resolve => {
    handler.resolve_ = resolve;
  });
  return handler as Handler;
};

/**
 * Rewires Observable to Relay-like Suspense resource.
 */
export class ObservableResource<TInput, TOutput extends TInput = TInput> {
  /**
   * Unlike Promise, Observable is a multiple push mechanism.
   * Only force update when Suspense needs to restart.
   */
  public readonly shouldUpdate$$ = new Subject<true>();

  public get isDestroyed(): boolean {
    return this._isDestroyed_;
  }

  public readonly valueRef$$ = new BehaviorSubject<
    { current: TOutput } | undefined
  >(undefined);

  public input$: Observable<TInput>;

  private _handler_: Handler | null = createHandler();

  private _error_: unknown = null;

  private _subscription_: Subscription;

  private _isDestroyed_ = false;

  private readonly _observer_: Observer<TInput>;

  /**
   * @param input$ An Observable.
   * @param isSuccess A function that determines if the value emitted from
   * `input$` is of success state. If false a Suspense is triggered.
   *  Default all true.
   */
  public constructor(
    input$: Observable<TInput>,
    isSuccess?: TInput extends TOutput
      ? (value: TInput) => boolean
      : (value: TInput) => value is TOutput
  ) {
    this.input$ = input$;

    this._observer_ = {
      next: (value: TInput): void => {
        this._error_ = null;
        if (!isSuccess || isSuccess(value)) {
          if (this.valueRef$$.value?.current !== value) {
            this.valueRef$$.next({ current: value as TOutput });
          }
          if (this._handler_) {
            // This will also remove the initial
            // suspender if sync values are emitted.
            const { resolve_: resolve } = this._handler_;
            this._handler_ = null;
            resolve();
          }
        } else if (!this._handler_) {
          // start a new Suspense
          this._handler_ = createHandler();
          this.shouldUpdate$$.next(true);
        }
      },
      error: (error: unknown): void => {
        this._error_ = error;
        if (this._handler_) {
          const { resolve_: resolve } = this._handler_;
          this._handler_ = null;
          // Errors thrown from the request is not catch-able by error boundaries.
          // Here we resolve the suspender and let this.read throw the error.
          resolve();
        } else {
          this.shouldUpdate$$.next(true);
        }
      },
      complete: (): void => {
        if (this._handler_) {
          this._error_ = new Error("Suspender ended unexpectedly.");
          const { resolve_: resolve } = this._handler_;
          this._handler_ = null;
          // Errors thrown from the request is not catch-able by error boundaries.
          // Here we resolve the suspender and let this.read throw the error.
          resolve();
        }
      },
    };

    this._subscription_ = input$.subscribe(this._observer_);
  }

  public read(): TOutput {
    if (this._error_) {
      throw this._error_;
    }
    if (this._handler_) {
      throw this._handler_.suspender_;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    return this.valueRef$$.value?.current!;
  }

  public reload(newInput$?: Observable<TInput>): void {
    if (this._isDestroyed_) {
      throw new Error("Cannot reload a destroyed Observable Resource");
    }

    if (newInput$) {
      this.input$ = newInput$;
    }

    this._subscription_.unsubscribe();

    this._error_ = null;

    if (this._handler_) {
      this._handler_.resolve_();
      this._handler_ = createHandler();
    }

    this._subscription_ = this.input$.subscribe(this._observer_);
  }

  public destroy(): void {
    this._isDestroyed_ = true;
    this._subscription_.unsubscribe();
    this.shouldUpdate$$.complete();
    if (this._handler_) {
      this._error_ = new Error("Resource has been destroyed.");
      const { resolve_: resolve } = this._handler_;
      this._handler_ = null;
      resolve();
    }
  }
}
