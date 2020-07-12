import React from "react"
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ onClick, outline, children, className}) => {

  return (
    <button 
      className={classNames('btn', className, {
        'btn--outline': outline,
      })}
      onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button
