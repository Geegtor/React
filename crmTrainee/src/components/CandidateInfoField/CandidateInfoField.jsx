import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as City } from '../../assets/img/svg/ProfileIcons/candidateProfileIcons/city.svg';
import { ReactComponent as English } from '../../assets/img/svg/ProfileIcons/candidateProfileIcons/english.svg';
import { ReactComponent as German } from '../../assets/img/svg/ProfileIcons/candidateProfileIcons/german.svg';
import { ReactComponent as Email } from '../../assets/img/svg/ProfileIcons/candidateProfileIcons/email.svg';
import { ReactComponent as Skype } from '../../assets/img/svg/ProfileIcons/candidateProfileIcons/skype.svg';
import { ReactComponent as Telegram } from '../../assets/img/svg/ProfileIcons/candidateProfileIcons/telegram.svg';
import { ReactComponent as Phone } from '../../assets/img/svg/ProfileIcons/candidateProfileIcons/telephone.svg';
import styles from './CandidateInfoField.module.scss';

const CandidateInfoField = ({ contacts, languages, user }) => (
  <div className={styles.info_field_container}>
    <div className={styles.info_field}>
      <span className={styles.flex}>
        <span className={styles.field_icon}><City /></span>
        <span className={styles.list_item}>{user.location}</span>
      </span>
      <span className={styles.flex}>
        <span className={styles.field_icon}><English /></span>
        <span className={styles.list_item}>{languages.english}</span>
      </span>
      <span className={styles.flex}>
        <span className={styles.field_icon}><German /></span>
        <span href="/" className={styles.list_item}>{languages.german}</span>
      </span>
    </div>
    <div className={styles.info_field}>
      <span className={styles.flex}>
        <span className={styles.field_icon}><Skype /></span>
        <a href={`skype:${contacts.skype}`} className={styles.list_item} target="_blank" rel="noreferrer">{contacts.skype}</a>
      </span>
      <span className={styles.flex}>
        <span className={styles.field_icon}><Email /></span>
        <a href={`mailto:${contacts.email}`} className={styles.list_item} target="_blank" rel="noreferrer">{contacts.email}</a>
      </span>
      <span className={styles.flex}>
        <span className={styles.field_icon}><Phone /></span>
        <a href={`tel:${contacts.phone}`} className={styles.list_item} target="_blank" rel="noreferrer">{contacts.phone}</a>
      </span>
      <span className={styles.flex}>
        <span className={styles.field_icon}><Telegram /></span>
        <a href={`https://telegram.me/@:${contacts.telegram}`} className={styles.list_item} target="_blank" rel="noreferrer">{contacts.telegram}</a>
      </span>
    </div>
  </div>
);

CandidateInfoField.propTypes = {
  user: PropTypes.shape.isRequired,
  contacts: PropTypes.shape.isRequired,
  languages: PropTypes.shape.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.profile.candidateGeneralInfo,
  contacts: state.profile.candidateContacts,
  languages: state.profile.candidateLanguages,
});

export default connect(mapStateToProps)(CandidateInfoField);
