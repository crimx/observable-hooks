import { useObservableState } from 'observable-hooks'
import * as React from 'react'
import { mapTo, take } from 'rxjs/operators'
import { timer, merge } from 'rxjs'

export const Warning: React.FC = () => {
  const [isClose, close] = useObservableState<boolean, any>(inputs$ =>
    merge(inputs$, timer(10000)).pipe(
      take(1),
      mapTo(true)
    )
  )

  return isClose ? null : (
    <div className="notification is-info">
      <button className="delete" onClick={close} />
      If Components do not clean up properly in codesandbox, hit the refresh
      button above.
    </div>
  )
}
