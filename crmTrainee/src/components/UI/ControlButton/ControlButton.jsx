import React from 'react';
import PropTypes from 'prop-types';
import styles from './ControlButton.module.scss';

const ControlButton = ({
  type = 'button',
  color = 'transparent',
  width = 'min-width180',
  border = 'border',
  className,
  value,
  onClick,
  formId,
}) => (
  <button
    type={type === 'button' ? 'button' : 'submit'}
    className={`${styles.buttonStyle} ${styles[color]} ${styles[width]} ${styles[border]} ${className}`}
    onClick={onClick}
    form={formId}
  >
    {value}
  </button>
);

ControlButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  color: PropTypes.oneOf(['transparent', 'yellow']).isRequired,
  width: PropTypes.oneOf(['min-width180', 'min-width312']).isRequired,
  border: PropTypes.oneOf(['no_border', 'border']).isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired,
};

export default ControlButton;
