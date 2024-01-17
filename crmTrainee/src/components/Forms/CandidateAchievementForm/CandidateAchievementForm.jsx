import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { PropTypes } from 'prop-types';
import * as Yup from 'yup';
import { changeCandidateAchievement } from '../../../store/actions/candidateAchievementAction';
import EditButton from '../../UI/EditButton/EditButton';
import ControlButtons from '../Buttons/ControlButtons';
import styles from '../ContactsForm/ContactsForm.module.scss';

const CandidateAchievementForm = ({ achievement, dispatchChangeCandidateAchievement }) => {
  const [nonEditable, setNonEditable] = useState(true);
  const handleEditToggle = () => {
    setNonEditable(false);
  };
  const handleChangeStore = (details) => {
    dispatchChangeCandidateAchievement(details);
  };
  const onSubmit = (values) => {
    handleChangeStore(values);
    setNonEditable(true);
  };
  const validationSchema = Yup.object({
    olympiads: Yup.string()
      .max(250, 'Превышен лимит символов')
      .required('Введите олимпиалы'),
  });
  return (
    <div className={styles.form_container}>
      <div className={styles.form_header}>
        <span>Достижение</span>
        {nonEditable && (
          <EditButton onClick={handleEditToggle} />
        )}
      </div>
      <Formik
        initialValues={{ ...achievement }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({
          values,
          handleChange,
          resetForm,
          errors,
          touched,
        }) => {
          const handleCancel = () => {
            resetForm();
            setNonEditable(true);
          };
          const formId = 'achievementInfo';
          return (
            <Form id={formId} className={styles.form_table}>
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="olympiads" className={styles.form_label}>Участие в Олимиадах:</label>
                <Field
                  type="text"
                  id="olympiads"
                  name="olympiads"
                  disabled={nonEditable}
                  onChange={handleChange}
                  value={values.olympiads}
                  className={styles.form_field}
                />
              </div>
              {(errors.olympiads && touched.olympiads) && (
              <div className={styles.errorMsg}>
                {errors.olympiads}
              </div>
              )}
              {!nonEditable && (
                <div className={styles.btn_container}>
                  <div className={styles.controls_buttons}>
                    <ControlButtons handleCancel={handleCancel} formId={formId} />
                  </div>
                </div>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

CandidateAchievementForm.propTypes = {
  achievement: PropTypes.shape.isRequired,
  dispatchChangeCandidateAchievement: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  achievement: state.profile.candidateAchievement,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeCandidateAchievement: (params) => dispatch(changeCandidateAchievement(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidateAchievementForm);
