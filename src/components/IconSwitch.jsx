import React from 'react'
import PropTypes from 'prop-types'
import './IconSwitch.css'

function IconSwitch({ view, onSwitch }) {
  return (
    <div>
      <button className="icon-switch-btn" onClick={onSwitch}>
        <i className="material-icons icon-switch-icon" role="presentation">
          {view}
        </i>
        <span className="sr-only">{`Switch to ${
          view.split('_')[1]
        } view`}</span>
      </button>
    </div>
  )
}

IconSwitch.propTypes = {
  view: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch
