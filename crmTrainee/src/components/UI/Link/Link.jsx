// !!! WARNING !!!
// the code in this file was written during initial setup and shold be corrected or removed
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Link.scss';

const Link = ({ to, value }) => <RouterLink to={to}>{value}</RouterLink>;

Link.propTypes = {
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Link;
