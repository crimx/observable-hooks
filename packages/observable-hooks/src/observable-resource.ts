import { Observable, Subject, Subscription } from 'rxjs'

interface Handler<T = any> {
  suspender: Promise<T>
  resolve: (value?: T) => void
  reject: (error?: any) => void
}

/**
 * Adapter that rewires Observable to Suspense resource.
 */
export class ObservableResource<TInput, TOutput extends TInput = TInput> {
  /**
   * Unlike Promise, Observable is a multiple push mechanism.
   * Only force update when Suspense needs to restart.
   */
  readonly shouldUpdate$$ = new Subject<undefined>()

  private handler: Handler | null = this.getHandler()

  private value: TOutput | undefined

  private error: any = null

  private subscription: Subscription

  private isSuccess = (value: TInput): value is TOutput => true

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

    this.subscription = input$.subscribe(
      this.handleNext,
      this.handleError,
      this.handleComplete
    )
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

  destroy(): void {
    this.subscription.unsubscribe()
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
      } else if (isDiff) {
        this.shouldUpdate$$.next()
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
      const { reject } = this.handler
      this.handler = null
      reject(error)
    } else {
      this.shouldUpdate$$.next()
    }
  }

  private handleComplete = (): void => {
    if (this.handler) {
      // Last check on next tick
      setTimeout(() => {
        if (this.handler) {
          this.error = new Error('Suspender ended unexpectedly.')
          const { reject } = this.handler
          this.handler = null
          reject(this.error)
        }
      }, 0)
    }
  }

  private getHandler(): Handler {
    const handler: Partial<Handler> = {}
    handler.suspender = new Promise((resolve, reject) => {
      handler.resolve = resolve
      handler.reject = reject
    })
    return handler as Handler
  }
}
