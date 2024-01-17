import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Profile.module.scss';

const ProfileFormContainer = ({ children }) => (
  <div className={styles.page_forms}>
    { children }
  </div>
);

ProfileFormContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProfileFormContainer;
