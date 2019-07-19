import { useRef, MutableRefObject } from 'react'
import { Subject } from 'rxjs'

/**
 * Return a empty Subject
 */
export function getEmptySubject<T>() {
  return new Subject<T>()
}

/**
 * One-time ref init
 */
export function useRefFn<T extends NonNullable<object>>(init: () => T) {
  const ref = useRef<T | null>(null)
  if (ref.current === null) {
    ref.current = init()
  }
  return ref as MutableRefObject<T>
}

/**
 * Is next micro task tick
 */
export function useAsync() {
  const isAsyncRef = useRef(false)
  useRefFn(() =>
    Promise.resolve().then(() => {
      isAsyncRef.current = true
    })
  )
  return isAsyncRef
}
