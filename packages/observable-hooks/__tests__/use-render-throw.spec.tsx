import React from 'react'
import { of, throwError } from 'rxjs'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { useSubscription, useRenderThrow } from '../src'

describe('useRenderThrow', () => {
  let container: HTMLDivElement = null as unknown as HTMLDivElement

  function renderHook<TInput, TOutput extends TInput>(hook: () => TOutput) {
    const result: {
      value?: TOutput
      error?: Error
      renderCount: number
      clearError: () => void
    } = {
      renderCount: 0,
      clearError: () => {}
    }

    class ErrorBoundary extends React.Component {
      state = { hasError: false }

      static getDerivedStateFromError(error: Error) {
        result.error = error
        return { hasError: true }
      }

      constructor(props: {}) {
        super(props)
        result.clearError = () => act(() => this.setState({ hasError: false }))
      }

      render() {
        return this.state.hasError ? 'error' : this.props.children
      }
    }

    function Child() {
      result.renderCount += 1
      result.value = undefined
      result.value = hook()
      return null
    }

    function Wrapper() {
      return (
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>
      )
    }

    act(() => {
      render(<Wrapper />, container)
    })

    return result
  }

  let consoleError: jest.SpyInstance
  beforeAll(() => {
    // Remove React's annoying error log
    consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterAll(() => {
    consoleError.mockRestore()
  })

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    consoleError.mockClear()
    unmountComponentAtNode(container)
    container.remove()
    container = null as unknown as HTMLDivElement
  })

  it('should do nothing if no error is emitted', () => {
    const num$ = of(1, 2, 3)
    const numSpy = jest.fn()
    const result = renderHook(() =>
      useSubscription(useRenderThrow(num$), numSpy)
    )
    expect(result.error).toBeUndefined()
    expect(numSpy).toBeCalledTimes(3)
    expect(numSpy).lastCalledWith(3)
    expect(numSpy).toBeCalledWith(1)
    expect(numSpy).toBeCalledWith(2)
  })

  it('should throw error', async () => {
    const error = new Error('oops')
    const error$ = throwError(error)
    const nextSpy = jest.fn()
    const completeSpy = jest.fn()

    const result = renderHook(() => {
      const enhanced = useRenderThrow(error$)
      return useSubscription(enhanced, nextSpy, null, completeSpy)
    })

    expect(result.error).toBeInstanceOf(Error)
    expect(result.error?.message).toBe('oops')
    expect(nextSpy).toBeCalledTimes(0)
    expect(completeSpy).toBeCalledTimes(0)
  })
})
