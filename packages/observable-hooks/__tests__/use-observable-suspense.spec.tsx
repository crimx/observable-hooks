import { useObservableSuspense, ObservableResource } from '../src'
import React, { Suspense } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { of, Subject, BehaviorSubject } from 'rxjs'

function timer(delay = 0) {
  return new Promise<undefined>(resolve => setTimeout(resolve, delay))
}

async function actSuspense(action: () => any = timer) {
  return act(async () => {
    await action() // Suspender resolved
    await timer() // re-render
  })
}

type SuspenseState = 'pending' | 'success' | 'error' | ''

describe('useObservableSuspense', () => {
  let container: HTMLDivElement = (null as unknown) as HTMLDivElement

  function renderHook<TInput, TOuput extends TInput>(
    resource: ObservableResource<TInput, TOuput>
  ) {
    const result: {
      value?: TOuput
      renderCount: number
      getStatus: () => SuspenseState
    } = {
      renderCount: 0,
      getStatus: () => (container.textContent || '').trim() as SuspenseState
    }

    act(() => {
      render(<Wrapper />, container)
    })

    return result

    function Wrapper() {
      return (
        <Suspense fallback="pending">
          <Child />
        </Suspense>
      )
    }

    function Child() {
      result.renderCount += 1
      result.value = undefined
      result.value = useObservableSuspense(resource)
      return <>success</>
    }
  }

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = (null as unknown) as HTMLDivElement
  })

  it('should trigger suspender on init when no sync value emitted', async () => {
    const input$ = new Subject<number>()
    const inputResource = new ObservableResource(input$)
    const result = renderHook(inputResource)
    expect(result.renderCount).toBe(1)
    expect(result.value).toBeUndefined()
    expect(result.getStatus()).toBe('pending')

    await actSuspense(() => input$.next(1))

    expect(result.renderCount).toBe(2)
    expect(result.value).toBe(1)
    expect(result.getStatus()).toBe('success')
  })

  it('should not trigger suspender on init when sync value emitted', async () => {
    const input$ = of(1, 2, 3, 4)
    const inputResource = new ObservableResource(input$)
    const result = renderHook(inputResource)
    expect(result.renderCount).toBe(1)
    expect(result.value).toBe(4)
    expect(result.getStatus()).toBe('success')

    await actSuspense()

    expect(result.renderCount).toBe(1)
    expect(result.value).toBe(4)
    expect(result.getStatus()).toBe('success')
  })

  it('should trigger Suspense only once when same values are emitted', async () => {
    const input$ = new Subject<number>()
    const inputResource = new ObservableResource(input$)
    const result = renderHook(inputResource)
    expect(result.renderCount).toBe(1)
    expect(result.value).toBeUndefined()
    expect(result.getStatus()).toBe('pending')

    await actSuspense(() => input$.next(4))
    await actSuspense(() => input$.next(4))
    await actSuspense(() => input$.next(4))

    expect(result.renderCount).toBe(2)
    expect(result.value).toBe(4)
    expect(result.getStatus()).toBe('success')

    await actSuspense(() => input$.next(3))
    await actSuspense(() => input$.next(3))
    await actSuspense(() => input$.next(3))

    expect(result.renderCount).toBe(3)
    expect(result.value).toBe(3)
    expect(result.getStatus()).toBe('success')

    await actSuspense(() => input$.next(6))
    await actSuspense(() => input$.next(5))
    await actSuspense(() => input$.next(5))

    expect(result.renderCount).toBe(5)
    expect(result.value).toBe(5)
    expect(result.getStatus()).toBe('success')
  })

  it('should trigger Suspense when a non-success value is emitted during success state', async () => {
    const input$ = new BehaviorSubject<number>(1)
    const inputResource = new ObservableResource(
      input$,
      (value: number) => value !== 2
    )
    const result = renderHook(inputResource)
    expect(result.renderCount).toBe(1)
    expect(result.value).toBe(1)
    expect(result.getStatus()).toBe('success')

    await actSuspense(() => input$.next(2))

    expect(result.renderCount).toBe(2)
    expect(result.value).toBeUndefined()
    expect(result.getStatus()).toBe('pending')

    await actSuspense(() => input$.next(3))

    expect(result.renderCount).toBe(3)
    expect(result.value).toBe(3)
    expect(result.getStatus()).toBe('success')
  })

  it('should not trigger Suspense when a non-success value is emitted during pending state', async () => {
    const input$ = new Subject<number>()
    const inputResource = new ObservableResource(
      input$,
      (value: number) => value === 3
    )
    const result = renderHook(inputResource)
    expect(result.renderCount).toBe(1)
    expect(result.value).toBeUndefined()
    expect(result.getStatus()).toBe('pending')

    await actSuspense(() => input$.next(1))

    expect(result.renderCount).toBe(1)
    expect(result.value).toBeUndefined()
    expect(result.getStatus()).toBe('pending')

    await actSuspense(() => input$.next(2))

    expect(result.renderCount).toBe(1)
    expect(result.value).toBeUndefined()
    expect(result.getStatus()).toBe('pending')

    await actSuspense(() => input$.next(3))

    expect(result.renderCount).toBe(2)
    expect(result.value).toBe(3)
    expect(result.getStatus()).toBe('success')
  })
})
