import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import { PropTypes } from 'prop-types';
import * as Yup from 'yup';
import editContacts from '../../../store/thunk/profileData/editContacts';
import EditButton from '../../UI/EditButton/EditButton';
import ControlButtons from '../Buttons/ControlButtons';
import styles from './ContactsForm.module.scss';
import PhoneInputField from '../Fields/PhoneInputField';

const ContactsForm = ({ contacts, dispatchChangeUserContacts, uriId }) => {
  const [nonEditable, setNonEditable] = useState(true);
  const handleEditToggle = () => {
    setNonEditable(false);
  };
  const handleChangeStore = useCallback((details) => {
    dispatchChangeUserContacts(details, uriId);
  }, [uriId, dispatchChangeUserContacts]);

  const submitFormikData = useCallback((values) => {
    handleChangeStore(values);
    setNonEditable(true);
  }, [handleChangeStore]);
  const validationSchema = Yup.object({
    skype: Yup.string()
      .min(6, 'Введите минимум 6 символов')
      .max(32, 'Введите максимум 36 символов')
      .matches(/^\S*$/, 'Вводить пробелы запрещено')
      .required('Поле обязательно для заполнения'),
    phone: Yup.string()
      .min(6)
      .max(12)
      .required('Поле обязательно для заполнения'),
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
        onSubmit={submitFormikData}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({
          values,
          handleChange,
          resetForm,
        }) => {
          const handleCancel = useCallback(() => {
            resetForm();
            setNonEditable(true);
          }, [resetForm]);
          const formId = 'contactsInfo';
          return (
            <Form id={formId} className={styles.form_table}>
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="email" className={styles.form_label}>Email:</label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  value={values.email}
                  disabled
                  className={styles.form_field}
                />
              </div>
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
              <ErrorMessage name="skype" component="div" className={styles.errorMsg} />
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="phone" className={styles.form_label}>Телефон:</label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  disabled={nonEditable}
                  onChange={handleChange}
                  component={PhoneInputField}
                />
              </div>
              <ErrorMessage name="phone" component="div" className={styles.errorMsg} />
              <div className={styles.controls_buttons}>
                {!nonEditable && (
                  <ControlButtons handleCancel={handleCancel} formId={formId} />
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

ContactsForm.propTypes = {
  contacts: PropTypes.shape.isRequired,
  dispatchChangeUserContacts: PropTypes.func.isRequired,
  uriId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.profile.contactsInfo,
  uriId: state.profile.generalInfo.id,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeUserContacts: (params, id) => dispatch(editContacts(params, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
