import React from 'react';
import { Field } from 'formik';
import { PropTypes } from 'prop-types';
import styles from '../ContactsForm/ContactsForm.module.scss';

const TextArea = ({
  id,
  name,
  nonEditable,
  handleChange,
}) => (
  <Field
    as="textarea"
    id={id}
    name={name}
    disabled={nonEditable}
    onChange={handleChange}
    className={styles.form_textarea}
  />
);

TextArea.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  nonEditable: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
