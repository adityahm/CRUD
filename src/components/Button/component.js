import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({
  type,
  action,
  text,
  icon,
  iconSize,
  className,
  iconButton,
  children
}) => (
  <button
    data-test="button-component"
    type={type}
    onClick={action}
    className={`${iconButton ? 'icon-button' : 'button'} ${className}`}
  >
    {icon ? <FontAwesomeIcon icon={icon} size={iconSize} /> : null}
    {text}
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  action: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.string,
  className: PropTypes.string,
  iconButton: PropTypes.bool,
  children: PropTypes.node
};

Button.defaultProps = {
  type: 'button',
  className: '',
  text: '',
  iconSize: 'lg',
  iconButton: false,
  action: () => null
};

export default Button;
