import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Form, Formik, FieldArray, Field,
} from 'formik';
import { PropTypes } from 'prop-types';
import * as Yup from 'yup';
import { changeCandidateEducation, addCandidateEducation, resetCandidateEducation } from '../../../store/actions/candidateEducationActions';
import EditButton from '../../UI/EditButton/EditButton';
import ControlButtons from '../Buttons/ControlButtons';
import styles from '../ContactsForm/ContactsForm.module.scss';

const CandidateEducationForm = ({
  candidateEducation,
  dispatchChangeCandidateEducation,
  dispatchResetCandidateEducation,
  dispatchAddCandidateEducation,
}) => {
  const [nonEditable, setNonEditable] = useState(true);
  const handleEditToggle = () => {
    setNonEditable(false);
  };
  const handleChangeStore = (details) => {
    dispatchChangeCandidateEducation(details);
  };
  const onSubmit = (values) => {
    handleChangeStore(values);
    setNonEditable(true);
  };
  const validationSchema = Yup.array().of(Yup.object({
    education: Yup.string()
      .max(250, 'Превышен лимит символов')
      .required('Введите образование'),
    avarageScore: Yup.string()
      .max(10, 'Превышен лимит символов')
      .matches(/^[0-9.,]+$/, 'Недопустимый символ')
      .required('Введите средний балл диплома'),
  }));

  function addEducationForm() {
    dispatchAddCandidateEducation();
  }
  const formId = 'educationForm';
  return (
    <div className={styles.form_container}>
      <div className={styles.form_header}>
        <div className="educationform_header_div">
          <span>Образование</span>
          {!nonEditable && (
            <button type="button" className={styles.form_add_button} onClick={addEducationForm} aria-label="add" />
          )}
        </div>
        {nonEditable && (
          <EditButton onClick={handleEditToggle} />
        )}
      </div>
      <Formik
        enableReinitialize
        initialValues={[...candidateEducation]}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleChange,
          resetForm,
          errors,
        }) => {
          const handleCancel = () => {
            resetForm();
            dispatchResetCandidateEducation();
            setNonEditable(true);
          };
          return (
            <Form id={formId} className={styles.form_table}>
              <FieldArray
                name="candidateEducationForm"
                render={() => (
                  <div>
                    {values.map((item, index) => (
                      <div key={item.id}>
                        <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                          <label
                            htmlFor={`${item.id}education`}
                            className={styles.form_label}
                          >
                            Образование:
                          </label>
                          <Field
                            type="text"
                            id={`${item.id}education`}
                            disabled={nonEditable}
                            onChange={handleChange}
                            name={`${index}.education`}
                            className={styles.form_field}
                          />
                        </div>
                        {(errors[index] && errors[index].education) && (
                          <div className={styles.errorMsg}>
                            {errors[index].education}
                          </div>
                        )}
                        <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                          <label htmlFor={`${item.id}avarageScore`} className={styles.form_label}>Средний балл диплома:</label>
                          <Field
                            type="text"
                            id={`${item.id}avarageScore`}
                            disabled={nonEditable}
                            onChange={handleChange}
                            value={item.avarageScore}
                            name={`${index}.avarageScore`}
                            className={styles.form_field}
                          />
                        </div>
                        {(errors[index] && errors[index].avarageScore) && (
                          <div className={styles.errorMsg}>
                            {errors[index].avarageScore}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              />
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
  candidateEducation: PropTypes.shape.isRequired,
  dispatchChangeCandidateEducation: PropTypes.func.isRequired,
  dispatchResetCandidateEducation: PropTypes.func.isRequired,
  dispatchAddCandidateEducation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  candidateEducation: state.profile.candidateEducation,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeCandidateEducation: (params) => dispatch(changeCandidateEducation(params)),
  dispatchResetCandidateEducation: () => dispatch(resetCandidateEducation()),
  dispatchAddCandidateEducation: () => dispatch(addCandidateEducation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidateEducationForm);
