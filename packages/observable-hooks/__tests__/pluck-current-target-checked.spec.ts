import { pluckCurrentTargetChecked } from '../src'
import { of } from 'rxjs'
import { toArray } from 'rxjs/operators'

describe('pluckCurrentTargetChecked', () => {
  it('should pluck the `currentTarget.checked` field from an event', () => {
    const event$ = of(
      { currentTarget: { checked: true } },
      { currentTarget: { checked: false } },
      { currentTarget: { checked: true } }
    )
    const sub = pluckCurrentTargetChecked(event$).pipe(toArray())
    let result
    sub.subscribe(value => (result = value))
    expect(result).toEqual([true, false, true])
    expect(sub).toBeTruthy()
  })
})
