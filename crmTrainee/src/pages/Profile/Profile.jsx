import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Profile.module.scss';
import ProfileFormContainer from './ProfileFormContainer/ProfileFormContainer';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import getProfileData from '../../store/thunk/profileData/getProfileData';
import ProfileFormItems from './ProfileFormItems/ProfileFormItems';

const Profile = ({ requestUserData }) => {
  useEffect(() => requestUserData(), []);
  return (
    <div className={styles.page_container}>
      <ProfileHeader />
      <ProfileFormContainer>
        <ProfileFormItems />
      </ProfileFormContainer>
    </div>
  );
};

Profile.propTypes = {
  requestUserData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  requestUserData: (details) => dispatch(getProfileData(details)),
});

export default connect(null, mapDispatchToProps)(Profile);
