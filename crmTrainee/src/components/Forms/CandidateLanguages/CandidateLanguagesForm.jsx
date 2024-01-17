import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { PropTypes } from 'prop-types';
import * as Yup from 'yup';
import { changeCandidateLanguages } from '../../../store/actions/candidateLanguagesActions';
import EditButton from '../../UI/EditButton/EditButton';
import ControlButtons from '../Buttons/ControlButtons';
import styles from '../ContactsForm/ContactsForm.module.scss';
import { LANGUAGES } from '../../../utils/constants';

const CandidateEducationForm = ({ contacts, dispatchChangeUserContacts }) => {
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
    english: Yup.string()
      .required('Выберите уровень английского'),
    german: Yup.string('Выберите уровень немецкого')
      .required(),
  });
  return (
    <div className={styles.form_container}>
      <div className={styles.form_header}>
        <span>Языки</span>
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
          resetForm,
        }) => {
          const handleCancel = () => {
            resetForm();
            setNonEditable(true);
          };
          const formId = 'candidateLanguages';
          return (
            <Form id={formId} className={styles.form_table}>
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <div className={styles.form_label}>
                  <label htmlFor="english" key="english">
                    Английский:
                  </label>
                </div>
                {!nonEditable
                  ? (
                    <div className={styles.form_field}>
                      <Field
                        as="select"
                        name="english"
                        placeholder="english"
                      >
                        {LANGUAGES.map((option) => (
                          <option
                            key={option}
                            value={option}
                          >
                            {option}
                          </option>
                        ))}
                      </Field>
                    </div>
                  )
                  : (
                    <input
                      disabled
                      value={values.english}
                      className={styles.form_field}
                    />
                  )}
              </div>
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <div className={styles.form_label}>
                  <label htmlFor="german" key="german">
                    Немецкий:
                  </label>
                </div>
                {!nonEditable
                  ? (
                    <div className={styles.form_field}>
                      <Field
                        as="select"
                        name="german"
                        placeholder="german"
                      >
                        {LANGUAGES.map((option) => (
                          <option
                            key={option}
                            value={option}
                          >
                            {option}
                          </option>
                        ))}
                      </Field>
                    </div>
                  )
                  : (
                    <input
                      disabled
                      value={values.german}
                      className={styles.form_field}
                    />
                  )}
              </div>
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

CandidateEducationForm.propTypes = {
  contacts: PropTypes.shape.isRequired,
  dispatchChangeUserContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.profile.candidateLanguages,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeUserContacts: (params) => dispatch(changeCandidateLanguages(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidateEducationForm);
