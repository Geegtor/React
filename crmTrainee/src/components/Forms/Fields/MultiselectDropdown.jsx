/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import readMultiselected from '../../../utils/readMultiselected';

const Option = (props) => {
  const { isSelected, label } = props;
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => null}
        />
        <label htmlFor={label}>{label}</label>
      </components.Option>
    </div>
  );
};
Option.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

const MultiselectDropdown = ({
  name, disabled, options,
}) => (
  <Field name={name} type="text" disabled={disabled}>
    {
      ({ form, field }) => {
        const { setFieldValue } = form;
        const val = field.value;

        const [optionSelected, setSelected] = useState(readMultiselected(val));

        const customStyles = {
          container: (provided) => ({
            ...provided,
            overflow: 'hiden',
            maxHeight: 35,
            width: '100%',
            minWidth: 220,
            maxWidth: 350,
          }),

          option: (provided) => ({
            ...provided,
            maxWidth: 300,
            width: '100%',
          }),

          control: (provided) => ({
            ...provided,
            overflow: 'hidden',
            maxHeight: 34,
            cursor: 'pointer',
            userSelect: 'none',
          }),

          menuList: (provided) => ({
            ...provided,
            height: '120px',
          }),

          valueContainer: () => ({
            maxHeight: 35,
            fontSize: 16,
            display: 'flex',
            flexDirection: 'row',
            overflow: 'auto',
          }),

          multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#FFFFFF',
          }),

          singleValue: (provided) => ({ ...provided }),

          indicatorsContainer: (provided) => ({
            ...provided,
          }),
        };

        const handleChange = (selected) => {
          setSelected(selected);
          setFieldValue(name, readMultiselected(selected));
        };

        return (
          <Select
            isMulti
            options={options}
            styles={customStyles}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            menuPlacement="auto"
            components={{
              Option,
            }}
            isClearable={false}
            onChange={handleChange}
            value={optionSelected}
            isDisabled={disabled}
          />
        );
      }
    }
  </Field>
);

MultiselectDropdown.propTypes = {
  disabled: PropTypes.string.isRequired,
  options: PropTypes.shape.isRequired,
  name: PropTypes.string.isRequired,
};

export default MultiselectDropdown;
