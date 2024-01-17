import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Edit } from '../../../assets/img/svg/ProfileIcons/edit.svg';
import styles from './EditButton.module.scss';

const EditButton = ({ onClick }) => (
  <button type="button" className={styles.buttonStyle} onClick={onClick}>
    <Edit />
    <p className={styles.textStyle}>Редактировать</p>
  </button>
);

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EditButton;
