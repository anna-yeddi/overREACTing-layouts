import React from 'react'
import PropTypes from 'prop-types'

function IconSwitch(props) {
  const icon = props.icon
  const onSwitch = props.onSwitch

  return (
    <button>
      <span className="sr-only">Switch View</span>
    </button>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch
