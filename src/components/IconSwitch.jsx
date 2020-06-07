import React from 'react'
import PropTypes from 'prop-types'
import './IconSwitch.css'

function IconSwitch(props) {
  const icon = props.icon
  const iconNext = icon.map((o) => !o.isActive && o.view)[0]

  const onSwitch = props.onSwitch

  console.log(iconNext.split('_')[1])
  console.log(onSwitch)

  return (
    <>
      <p>Now {icon.map((o) => o.isActive && o.view)} is active</p>
      <button className="icon-switch-btn">
        <i className="material-icons icon-switch-icon">{iconNext}</i>
        <span className="sr-only">{iconNext.split('_')[1] + ' view'}</span>
      </button>
    </>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.arrayOf(
    PropTypes.shape({
      view: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ).isRequired,
  onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch
