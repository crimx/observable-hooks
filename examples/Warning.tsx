import * as React from 'react'
import { useObservableState } from '../src'
import { mapTo } from 'rxjs/operators'
import { timer, merge } from 'rxjs'

export const Warning: React.FC = () => {
  const [isClose, close] = useObservableState<boolean, any>(inputs$ =>
    merge(inputs$, timer(3000)).pipe(mapTo(true))
  )

  return isClose ? null : (
    <div className="notification is-info">
      <button className="delete" onClick={close} />
      If Components do not clean up properly, hit the refresh button above.
    </div>
  )
}
