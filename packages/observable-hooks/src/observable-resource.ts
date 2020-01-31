import { Observable, Subject } from 'rxjs'

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

  private input$: Observable<TInput>

  private isValid = (value: TInput): value is TOutput => true

  /**
   * @param input$ An Observable.
   * @param isValid A function that determines if the value emitted from
   * `input$` is valid. Invalid values will trigger Suspense. Default all valid.
   */
  constructor(
    input$: Observable<TInput>,
    isValid?: TInput extends TOutput
      ? (value: TInput) => boolean
      : (value: TInput) => value is TOutput
  ) {
    if (isValid) {
      this.isValid = isValid as (value: TInput) => value is TOutput
    }

    this.input$ = input$

    this.input$.subscribe(
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

  private handleNext = (value: TInput): void => {
    this.error = null
    if (this.isValid(value)) {
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
      this.handler = this.getHandler()
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
