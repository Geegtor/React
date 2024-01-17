import React from 'react';
import PropTypes from 'prop-types';
import spinner from '../../../assets/img/spinner/spinner.png';
import styles from './Spinner.module.scss';

const Spinner = ({ type }) => (
  <div className={`${styles.container} ${styles[type]}`}>
    <img src={spinner} alt="Loading..." className={styles.spinner} />
  </div>
);

Spinner.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Spinner;
