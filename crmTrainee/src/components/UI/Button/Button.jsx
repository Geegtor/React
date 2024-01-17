// !!! WARNING !!!
// the code in this file was written during initial setup and shold be corrected or removed

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, onClick }) => (
  <button type="button" onClick={onClick}>{value}</button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
