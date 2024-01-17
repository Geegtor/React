import React from 'react';
import styles from '../Profile.module.scss';
import ProfileInfo from '../../../components/ProfileInfo/ProfileInfo';
import GeneralInfo from '../../../components/Forms/GeneralInfo/GeneralInfo';
import SearchInfo from '../../../components/Forms/SearchInfo/SearchInfo';
import ContactsForm from '../../../components/Forms/ContactsForm/ContactsForm';

const ProfileFormItems = () => (
  <>
    <div className={styles.page_photo}>
      <ProfileInfo />
    </div>
    <div className={styles.forms_container}>
      <div className={styles.forms_column}>
        <GeneralInfo />
      </div>
      <div className={styles.forms_column}>
        <ContactsForm />
        <SearchInfo />
      </div>
    </div>
  </>
);

export default ProfileFormItems;
