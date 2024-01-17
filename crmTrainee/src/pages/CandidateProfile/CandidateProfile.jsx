import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './CandidateProfile.module.scss';
import CandidateGeneralInfo from '../../components/Forms/CandidateGeneralInfo/CandidateGeneralInfo';
import CandidateContactsForm from '../../components/Forms/CandidateContactsForm/CandidateContactsForm';
import CandidateEducationForm from '../../components/Forms/CandidateEducationForm/CandidateEducationForm';
import CandidateWorkExperienceForm from '../../components/Forms/CandidateWorkExperienceForm/CandidateWorkExperienceForm';
import CandidateAboutForm from '../../components/Forms/CandidateAboutForm/CandidateAboutForm';
import CandidateDirectionOfIntershipForm from '../../components/Forms/CandidateDirectionOfIntershipForm/CandidateDirectionOfIntershipForm';
import CandidateLanguagesForm from '../../components/Forms/CandidateLanguages/CandidateLanguagesForm';
import CandidateInfoField from '../../components/CandidateInfoField/CandidateInfoField';
import CandidateNav from '../../components/CandidateNav/CandidateNav';
import CandidateAchievementForm from '../../components/Forms/CandidateAchievementForm/CandidateAchievementForm';

const CandidateProfile = ({ user }) => (
  <div className={styles.candidate_profile}>
    <header className={styles.page_header}>
      <span>Профиль кандидата</span>
    </header>
    <div className={styles.page_container}>
      <div className={styles.page_forms}>
        <div className={styles.page_content}>
          <div>
            <h2 className={styles.page_title}>
              <span className={styles.name_container}>
                {user.surname}
              </span>
              {user.name}
            </h2>
            <button className={styles.page_button_star} type="button" aria-label="favourite" />
          </div>
          <button className={styles.page_button} type="button">В черный список</button>
        </div>
        <CandidateInfoField />
        <CandidateNav />
        <CandidateGeneralInfo />
        <CandidateContactsForm />
        <CandidateEducationForm />
        <CandidateAchievementForm />
        <CandidateLanguagesForm />
        <CandidateDirectionOfIntershipForm />
        <CandidateAboutForm />
        <CandidateWorkExperienceForm />
      </div>
    </div>
  </div>
);

CandidateProfile.propTypes = {
  user: PropTypes.shape.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.profile.candidateGeneralInfo,
});

export default connect(mapStateToProps)(CandidateProfile);
