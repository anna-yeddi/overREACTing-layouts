import React from 'react'
import PropTypes from 'prop-types'
import './IconSwitch.css'

function IconSwitch({ icon, onSwitch }) {
  return (
    <div>
      <button className="icon-switch-btn" onClick={onSwitch}>
        <i className="material-icons icon-switch-icon" role="presentation">
          {icon}
        </i>
        <span className="sr-only">{`Switch to ${
          icon.split('_')[1]
        } view`}</span>
      </button>
    </div>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch
