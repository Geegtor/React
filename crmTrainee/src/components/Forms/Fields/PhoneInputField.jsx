import React from 'react';
import { PropTypes } from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import ru from 'react-phone-input-2/lang/ru.json';
import 'react-phone-input-2/lib/style.css';
import styles from '../ContactsForm/ContactsForm.module.scss';

const PhoneInputField = ({
  form: { setFieldValue },
  field: { name, value },
  disabled,
  onChange,
}) => {
  const onValueChange = (phoneNumber) => {
    setFieldValue(name, phoneNumber);
    if (onChange !== null) {
      onChange(phoneNumber);
    }
  };
  return (
    <PhoneInput
      value={value}
      onlyCountries={['by', 'ru', 'ua', 'pl']}
      masks={{
        by: '.. ... .. ..',
        ru: '... ... .. ..',
        ua: '.. ... .. ..',
        pl: '... ... ...',
      }}
      countryCodeEditable={false}
      localization={ru}
      preserveOrder={['onlyCountries']}
      inputClass={`${styles.form_field} ${styles.form_phone_field} ${disabled ? `${styles.non_editable_phone_field}` : `${styles.editable_phone_field}`}`}
      specialLabel=""
      placeholder=""
      disabled={disabled}
      onChange={onValueChange}
      buttonClass={disabled ? `${styles.dropdown_flags}` : `${styles.show_dropdown_flags}`}
    />
  );
};

PhoneInputField.propTypes = {
  form: PropTypes.shape.isRequired,
  field: PropTypes.shape.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PhoneInputField;
