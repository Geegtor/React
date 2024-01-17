import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import * as Yup from 'yup';
import { changeCandidateAbout } from '../../../store/actions/candidateAboutActions';
import EditButton from '../../UI/EditButton/EditButton';
import ControlButtons from '../Buttons/ControlButtons';
import styles from '../ContactsForm/ContactsForm.module.scss';
import TextArea from '../Fields/TextArea';

const CandidateAboutForm = ({ contacts, dispatchChangeUserContacts }) => {
  const [nonEditable, setNonEditable] = useState(true);
  const handleEditToggle = () => {
    setNonEditable(false);
  };
  const handleChangeStore = (details) => {
    dispatchChangeUserContacts(details);
  };
  const onSubmit = (values) => {
    handleChangeStore(values);
    setNonEditable(true);
  };
  const validationSchema = Yup.object({
    about: Yup.string()
      .max(500, 'Превышен лимит символов')
      .required('Введите информацию о себе'),
    expectations: Yup.string()
      .max(500, 'Превышен лимит символов')
      .required('Введите ваши ожидания от стажировки'),
    source: Yup.string()
      .max(500, 'Превышен лимит символов')
      .required('Введите источинк, откуда вы узнали о компании'),
  });
  return (
    <div className={styles.form_container}>
      <div className={styles.form_header}>
        <span>О себе</span>
        {nonEditable && (
          <EditButton onClick={handleEditToggle} />
        )}
      </div>
      <Formik
        initialValues={{ ...contacts }}
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
          const formId = 'contactsInfo';
          return (
            <Form id={formId} className={styles.form_table}>
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="about" className={styles.form_label}>О себе:</label>
                <TextArea
                  name="about"
                  nonEditable={nonEditable}
                  handleChange={handleChange}
                  value={values.about}
                />
              </div>
              {(errors.about && touched.about) && (
              <div className={styles.errorMsg}>
                {errors.about}
              </div>
              )}
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="expectations" className={styles.form_label}>Ожидания от стажировки:</label>
                <TextArea
                  name="expectations"
                  nonEditable={nonEditable}
                  handleChange={handleChange}
                  value={values.expectations}
                />
              </div>
              {(errors.expectations && touched.expectations) && (
              <div className={styles.errorMsg}>
                {errors.expectations}
              </div>
              )}
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="source" className={styles.form_label}>Источник, откуда вы узнали о вакансии:</label>
                <TextArea
                  name="source"
                  nonEditable={nonEditable}
                  handleChange={handleChange}
                  value={values.source}
                />
              </div>
              {(errors.source && touched.source) && (
              <div className={styles.errorMsg}>
                {errors.source}
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

CandidateAboutForm.propTypes = {
  contacts: PropTypes.shape.isRequired,
  dispatchChangeUserContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.profile.candidateAbout,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeUserContacts: (params) => dispatch(changeCandidateAbout(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidateAboutForm);
