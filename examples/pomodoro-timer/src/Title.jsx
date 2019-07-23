import * as React from 'react'
import PropTypes from 'prop-types'

export const Title = ({ state }) => {
  const title =
    state === 'started'
      ? 'Greatness is within sight!!'
      : state === 'paused'
      ? 'Never quite, keep going!!'
      : 'Let the countdown begin!!'
  return <h2 className="title is-6">{title}</h2>
}

Title.propTypes = {
  state: PropTypes.oneOf(['started', 'paused', 'reset'])
}
