import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Clock.module.css'
import { Digit } from './Digit'

/**
 * Display countdown time.
 */
export const Clock = ({ seconds }) => {
  const restMinutes = ~~(seconds / 60) % 60
  const restSeconds = (seconds - restMinutes * 60) % 60
  return (
    <div
      className={styles.clock}
      role="timer"
      aria-live={restSeconds % 10 === 0 ? 'polite' : 'off'}
      aria-atomic="true"
      aria-label={`${restMinutes} minutes ${restSeconds} seconds left`}
    >
      <Digit digit={~~(restMinutes / 10)} />
      <Digit digit={restMinutes % 10} />
      <div className={styles.colon} />
      <Digit digit={~~(restSeconds / 10)} />
      <Digit digit={restSeconds % 10} />
    </div>
  )
}

Clock.propTypes = {
  /** how many seconds left */
  seconds: PropTypes.number.isRequired
}
