import { Subject, BehaviorSubject } from 'rxjs'
import { ObservableResource } from '../src'

/**
 * Other functionalities are tested in `use-observable-suspense.spec`.
 */

describe('ObservableResource', () => {
  it('should unsubscribe Observable when destroy during initial success state', () => {
    const input$ = new BehaviorSubject<number>(1)
    const resource = new ObservableResource(input$)
    expect(resource.read()).toBe(1)
    expect(resource.isDestroyed).toBe(false)

    resource.destroy()

    input$.next(2)
    expect(resource.read()).toBe(1)
    expect(resource.isDestroyed).toBe(true)
  })

  it('should unsubscribe Observable when destroy during success state', () => {
    const input$ = new Subject<number>()
    const resource = new ObservableResource(input$)
    expect(() => resource.read()).toThrow(Promise)
    expect(resource.shouldUpdate$$.isStopped).toBe(false)

    input$.next(1)
    expect(resource.read()).toBe(1)
    expect(resource.shouldUpdate$$.isStopped).toBe(false)

    resource.destroy()

    input$.next(2)
    expect(resource.read()).toBe(1)
    expect(resource.shouldUpdate$$.isStopped).toBe(true)
  })

  it('should result error when destroy during pending state', () => {
    const input$ = new Subject<number>()
    const resource = new ObservableResource(input$)
    expect(() => resource.read()).toThrow(Promise)
    expect(resource.shouldUpdate$$.isStopped).toBe(false)

    resource.destroy()

    expect(() => resource.read()).toThrow(Error)
    expect(resource.shouldUpdate$$.isStopped).toBe(true)

    input$.next(2)
    expect(() => resource.read()).toThrow(Error)
    expect(resource.shouldUpdate$$.isStopped).toBe(true)
  })
})
