import React from 'react';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import { PropTypes } from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import { YEARS, MONTHS } from '../../../utils/constants';
import styles from '../ContactsForm/ContactsForm.module.scss';

const BirthdayField = ({ name }) => (
  <Field name={name} type="text">
    {
      ({ form, field }) => {
        const { setFieldValue } = form;
        const handleDateChangeRaw = (e) => {
          e.preventDefault();
        };
        const val = field.value;
        return (

          <DatePicker
            wrapperClassName={styles.reactDatepickerWrapper}
            onChangeRaw={handleDateChangeRaw}
            dateFormat="dd.MM.yyyy"
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
            }) => (
              <div className={styles.datePicker_select}>
                <select
                  value={date.getFullYear()}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {YEARS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={MONTHS[date.getMonth()]}
                  onChange={({ target: { value } }) => changeMonth(MONTHS.indexOf(value))}
                >
                  {MONTHS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
            selected={val}
            onChange={(date) => setFieldValue(name, date)}
          />
        );
      }
    }
  </Field>
);

BirthdayField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BirthdayField;
