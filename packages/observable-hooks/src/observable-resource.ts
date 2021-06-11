import { Observable, Subject, Subscription } from 'rxjs'

interface Handler<T = any> {
  suspender: Promise<T>
  resolve: (value?: T) => void
}

/**
 * Rewires Observable to Relay-like Suspense resource.
 */
export class ObservableResource<TInput, TOutput extends TInput = TInput> {
  /**
   * Unlike Promise, Observable is a multiple push mechanism.
   * Only force update when Suspense needs to restart.
   */
  readonly shouldUpdate$$ = new Subject<
    { current: TOutput } | undefined | void
  >()

  get isDestroyed(): boolean {
    return this._isDestroyed
  }

  private handler: Handler | null = this.getHandler()

  private value: TOutput | undefined

  private error: any = null

  private input$: Observable<TInput>

  private subscription: Subscription

  private isSuccess = (value: TInput): value is TOutput => true

  private _isDestroyed = false

  /**
   * @param input$ An Observable.
   * @param isSuccess A function that determines if the value emitted from
   * `input$` is of success state. If false a Suspense is triggered.
   *  Default all true.
   */
  constructor(
    input$: Observable<TInput>,
    isSuccess?: TInput extends TOutput
      ? (value: TInput) => boolean
      : (value: TInput) => value is TOutput
  ) {
    if (isSuccess) {
      this.isSuccess = isSuccess as (value: TInput) => value is TOutput
    }

    this.input$ = input$

    this.subscription = input$.subscribe({
      next: this.handleNext,
      error: this.handleError,
      complete: this.handleComplete
    })
  }

  read(): TOutput {
    if (this.error) {
      throw this.error
    }
    if (this.handler) {
      throw this.handler.suspender
    }
    return this.value!
  }

  reload(newInput$?: Observable<TInput>): void {
    if (this._isDestroyed) {
      throw new Error('Cannot reload a destroyed Observable Resource')
    }

    if (newInput$) {
      this.input$ = newInput$
    }

    this.subscription.unsubscribe()

    this.error = null

    if (this.handler) {
      this.handler.resolve()
      this.handler = this.getHandler()
    }

    this.subscription = this.input$.subscribe({
      next: this.handleNext,
      error: this.handleError,
      complete: this.handleComplete
    })
  }

  destroy(): void {
    this._isDestroyed = true
    this.subscription.unsubscribe()
    this.shouldUpdate$$.complete()
    if (this.handler) {
      this.error = new Error('Resource has been destroyed.')
      const { resolve } = this.handler
      this.handler = null
      resolve()
    }
  }

  private handleNext = (value: TInput): void => {
    this.error = null
    if (this.isSuccess(value)) {
      const isDiff = this.value !== value
      this.value = value
      if (this.handler) {
        // This will also remove the initial
        // suspender if sync values are emitted.
        const { resolve } = this.handler
        this.handler = null
        resolve()
      }
      if (isDiff) {
        this.shouldUpdate$$.next({ current: value })
      }
    } else if (!this.handler) {
      // start a new Suspense
      this.handler = this.getHandler()
      this.shouldUpdate$$.next()
    }
  }

  private handleError = (error: any): void => {
    this.error = error
    if (this.handler) {
      const { resolve } = this.handler
      this.handler = null
      // Errors thrown from the request is not catchable by error boundaries.
      // Here we resolve the suspender and let this.read throw the error.
      resolve()
    } else {
      this.shouldUpdate$$.next()
    }
  }

  private handleComplete = (): void => {
    if (this.handler) {
      this.error = new Error('Suspender ended unexpectedly.')
      const { resolve } = this.handler
      this.handler = null
      // Errors thrown from the request is not catchable by error boundaries.
      // Here we resolve the suspender and let this.read throw the error.
      resolve()
    }
  }

  private getHandler(): Handler {
    const handler: Partial<Handler> = {}
    handler.suspender = new Promise(resolve => {
      handler.resolve = resolve
    })
    return handler as Handler
  }
}
