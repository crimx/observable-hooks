import { useObservableState } from 'observable-hooks'
import * as React from 'react'
import { mapTo, take } from 'rxjs/operators'
import { timer, merge } from 'rxjs'

export const Warning: React.FC = () => {
  const [isClose, onClose] = useObservableState<boolean, React.MouseEvent>(
    inputs$ => merge(inputs$, timer(10000)).pipe(take(1), mapTo(true)),
    false
  )

  return isClose ? null : (
    <div className="notification is-info">
      <button className="delete" onClick={onClose} />
      If Components do not clean up properly in codesandbox, hit the refresh
      button above.
    </div>
  )
}
