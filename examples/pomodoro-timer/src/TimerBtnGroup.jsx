import * as React from 'react'
import PropTypes from 'prop-types'

export const TimerBtnGroup = ({ state, onChange }) => (
  <div>
    <button
      className="button is-dark is-large"
      aria-label="Start count down"
      style={{ margin: 5 }}
      disabled={state === 'started'}
      onClick={() => onChange('started')}
    >
      <i className="fas fa-play-circle" />
    </button>
    <button
      className="button is-dark is-large"
      aria-label="Pause count down"
      style={{ margin: 5 }}
      disabled={state !== 'started'}
      onClick={() => onChange('paused')}
    >
      <i className="fas fa-pause-circle" />
    </button>
    <button
      className="button is-dark is-large"
      aria-label="Reset count down"
      style={{ margin: 5 }}
      onClick={() => onChange('reset')}
    >
      <i className="fas fa-undo" />
    </button>
  </div>
)

TimerBtnGroup.propTypes = {
  state: PropTypes.oneOf(['started', 'paused', 'reset']),
  onChange: PropTypes.func.isRequired
}
