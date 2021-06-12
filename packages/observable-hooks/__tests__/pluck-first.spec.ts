import { pluckFirst } from '../src'
import { of } from 'rxjs'
import { toArray } from 'rxjs/operators'

describe('pluckFirst', () => {
  it('should pluck the first item of an array', () => {
    const inputs: [number, string][] = [
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ]
    const input$ = of(...inputs)
    const sub = pluckFirst(input$).pipe(toArray())
    let result: number[] | undefined
    sub.subscribe(value => (result = value))
    expect(result).toEqual([1, 2, 3])
    expect(sub).toBeTruthy()
  })
})
