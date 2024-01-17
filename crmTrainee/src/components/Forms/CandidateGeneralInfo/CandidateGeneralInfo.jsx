import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import BirthdayField from '../Fields/BirthdayField';
import EditButton from '../../UI/EditButton/EditButton';
import ControlButtons from '../Buttons/ControlButtons';

import { changeCandidateGeneralInfo } from '../../../store/actions/candidateGeneralInfoAction';

import { OFFICES } from '../../../utils/constants';
import readDate from '../../../utils/readDate';

import styles from '../ContactsForm/ContactsForm.module.scss';

const CandidateGeneralInfo = ({ candidate, dispatchChangeUserInfo }) => {
  const [nonEditable, setNonEditable] = useState(true);
  const handleEditToggle = () => {
    setNonEditable(false);
  };
  const handleChangeStore = (details) => {
    dispatchChangeUserInfo(details);
  };
  const onSubmit = (values) => {
    handleChangeStore(values);
    setNonEditable(true);
  };
  const validationSchema = Yup.object({
    surname: Yup.string()
      .min(1)
      .max(50, 'Превышен лимит символов')
      .matches(/^[A-ZА-ЯЁ]{1}[a-zа-яё]{0,}$/, 'Недопустимый символ')
      .required('Введите фамилию'),
    name: Yup.string()
      .max(50, 'Превышен лимит символов')
      .matches(/^[A-ZА-ЯЁ]{1}[a-zа-яё]{0,}$/, 'Недопустимый символ')
      .required('Введите имя'),
    adres: Yup.string()
      .max(250, 'Превышен лимит символов')
      .required('Введите адрес'),
  });
  return (
    <div className={styles.form_container}>
      <div className={styles.form_header}>
        <span>Общая информация</span>
        {nonEditable && (
          <EditButton onClick={handleEditToggle} />
        )}
      </div>
      <Formik
        initialValues={{ ...candidate }}
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
          const formId = 'candidateGeneralInfo';
          return (
            <Form id={formId} className={styles.form_table}>
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="surname" className={styles.form_label}>Фамилия:</label>
                <Field
                  type="text"
                  id="surname"
                  name="surname"
                  disabled={nonEditable}
                  onChange={handleChange}
                  value={values.surname}
                  className={styles.form_field}
                />
              </div>
              {errors.surname && touched.surname && (
                <div className={styles.errorMsg}>
                  {errors.surname}
                </div>
              )}
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="name" className={styles.form_label}>Имя:</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  disabled={nonEditable}
                  onChange={handleChange}
                  value={values.name}
                  className={styles.form_field}
                />
              </div>
              {errors.name && touched.name && (
                <div className={styles.errorMsg}>
                  {errors.name}
                </div>
              )}
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <div className={styles.form_label}>
                  <label htmlFor="birthday" key="birthday">
                    Дата рождения:
                  </label>
                </div>
                {!nonEditable ? <BirthdayField name="birthday" />
                  : (
                    <input
                      disabled
                      className={styles.form_field}
                      value={readDate(values.birthday)}
                    />
                  )}
              </div>
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="adres" className={styles.form_label}>Адрес проживания:</label>
                <Field
                  type="text"
                  id="adres"
                  name="adres"
                  disabled={nonEditable}
                  onChange={handleChange}
                  value={values.adres}
                  className={styles.form_field}
                />
              </div>
              {errors.adres && touched.adres && (
                <div className={styles.errorMsg}>
                  {errors.adres}
                </div>
              )}
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <div className={styles.form_label}>
                  <label htmlFor="location" key="location">
                    Локация:
                  </label>
                </div>
                {!nonEditable
                  ? (
                    <div className={styles.form_field}>
                      <Field
                        as="select"
                        name="location"
                        placeholder="location"
                      >
                        {OFFICES.map((option) => (
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
                      value={values.location}
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

CandidateGeneralInfo.propTypes = {
  candidate: PropTypes.shape.isRequired,
  dispatchChangeUserInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeUserInfo: (details) => dispatch(changeCandidateGeneralInfo(details)),
});

const mapStateToProps = (state) => ({
  candidate: state.profile.candidateGeneralInfo,
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidateGeneralInfo);
