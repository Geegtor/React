import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { PropTypes } from 'prop-types';
import * as Yup from 'yup';
import { changeCandidateContacts, addCandidateOtherInfo, resetCandidateOtherInfo } from '../../../store/actions/candidateContactsActions';
import EditButton from '../../UI/EditButton/EditButton';
import ControlButtons from '../Buttons/ControlButtons';
import styles from '../ContactsForm/ContactsForm.module.scss';
import PhoneInputField from '../Fields/PhoneInputField';

const CandidateContactsForm = ({
  contacts,
  dispatchChangeUserContacts,
  dispatchResetCandidateOtherInfo,
  dispatchAddCandidateOtherInfo,
}) => {
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
  function addOtherInfo() {
    dispatchAddCandidateOtherInfo();
  }
  const validationSchema = Yup.object({
    skype: Yup.string()
      .max(50, 'Превышен лимит символов')
      .required('Введите скайп'),
    email: Yup.string()
      .max(50, 'Превышен лимит символов')
      .required('Введите email'),
    phone: Yup.string()
      .max(30, 'Превышен лимит символов')
      .required('Введите номер телефона'),
    telegram: Yup.string()
      .max(50, 'Превышен лимит символов')
      .required('Введите телеграм'),
    other: Yup.array().of(Yup.object({
      link: Yup.string()
        .max(50, 'Превышен лимит символов')
        .required('Введите соц сети'),
    })),
  });

  return (
    <div className={styles.form_container}>
      <div className={styles.form_header}>
        <span>Контакты</span>
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
            dispatchResetCandidateOtherInfo();
            setNonEditable(true);
          };
          const formId = 'contactsInfo';
          return (
            <Form id={formId} className={styles.form_table}>
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="skype" className={styles.form_label}>Skype:</label>
                <Field
                  type="text"
                  id="skype"
                  name="skype"
                  disabled={nonEditable}
                  onChange={handleChange}
                  value={values.skype}
                  className={styles.form_field}
                />
              </div>
              {(errors.skype && touched.skype) && (
              <div className={styles.errorMsg}>
                {errors.skype}
              </div>
              )}
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="email" className={styles.form_label}>Email:</label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  disabled={nonEditable}
                  onChange={handleChange}
                  value={values.email}
                  className={styles.form_field}
                />
              </div>
              {(errors.email && touched.email) && (
              <div className={styles.errorMsg}>
                {errors.email}
              </div>
              )}
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="phone" className={styles.form_label}>Телефон:</label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  disabled={nonEditable}
                  onChange={handleChange}
                  component={PhoneInputField}
                  className={styles.form_phone_field}
                />
              </div>
              {(errors.phone && touched.phone) && (
              <div className={styles.errorMsg}>
                {errors.phone}
              </div>
              )}
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="telegram" className={styles.form_label}>Telegram:</label>
                <Field
                  type="text"
                  id="telegram"
                  name="telegram"
                  disabled={nonEditable}
                  onChange={handleChange}
                  value={values.telegram}
                  className={styles.form_field}
                />
              </div>
              {(errors.telegram && touched.telegram) && (
              <div className={styles.errorMsg}>
                {errors.telegram}
              </div>
              )}
              {values.other.map((item, index) => (
                <div key={item.id}>
                  <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                    <label
                      htmlFor={`${item.id}link`}
                      className={styles.form_label}
                    >
                      Др. соцсети:
                    </label>
                    <Field
                      type="text"
                      id={`${item.id}link`}
                      disabled={nonEditable}
                      onChange={handleChange}
                      name={`other.${index}.link`}
                      className={styles.form_field}
                    />
                    {!nonEditable && ((index + 1) === values.other.length) && (
                    <button type="button" className={styles.form_add_button} onClick={addOtherInfo} aria-label="add" />
                    )}
                  </div>
                  {errors.other && (
                    (errors.other[index])
                      && (
                      <div className={styles.errorMsg}>
                        {errors.other[index].link}
                      </div>
                      )
                  )}
                </div>
              ))}
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

CandidateContactsForm.propTypes = {
  contacts: PropTypes.shape.isRequired,
  dispatchChangeUserContacts: PropTypes.func.isRequired,
  dispatchResetCandidateOtherInfo: PropTypes.func.isRequired,
  dispatchAddCandidateOtherInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.profile.candidateContacts,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeUserContacts: (params) => dispatch(changeCandidateContacts(params)),
  dispatchResetCandidateOtherInfo: () => dispatch(resetCandidateOtherInfo()),
  dispatchAddCandidateOtherInfo: () => dispatch(addCandidateOtherInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidateContactsForm);
