import { useRef, MutableRefObject } from 'react'
import { Observable } from 'rxjs'

/**
 * One-time ref init
 */
export function useRefFn<T extends Observable<any>>(init: () => T) {
  const ref = useRef<T | null>(null)
  if (ref.current === null) {
    ref.current = init()
  }
  return ref as MutableRefObject<T>
}
