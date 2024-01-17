import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import BirthdayField from '../Fields/BirthdayField';
import EditButton from '../../UI/EditButton/EditButton';
import ControlButtons from '../Buttons/ControlButtons';

import editUserInfoData from '../../../store/thunk/profileData/editUserInfoData';
import readGeneralInfoFormKey from '../../../utils/readGeneralInfoFormKey';

import readDate from '../../../utils/readDate';
import sortListArray from '../../../utils/sortArrGeneralInfo';

import styles from './GeneralInfo.module.scss';

const GeneralInfo = (
  {
    user, dispatchChangeUserInfo, roles: rolesDB, officeLocations: officeLocationsDB, uriId,
  },
) => {
  const submitFormikData = useCallback((values, { ...actions }) => {
    dispatchChangeUserInfo(values, uriId);
    actions.setStatus({
      edit: false,
    });
  }, [uriId, dispatchChangeUserInfo]);
  const formId = 'generalInfo';
  const officeLocations = useMemo(
    () => sortListArray(officeLocationsDB, 'city', user.officeLocation),
    [user.officeLocation, officeLocationsDB],
  );
  const roles = useMemo(
    () => sortListArray(rolesDB, 'name', user.roles[0]),
    [user.roles[0], rolesDB],
  );
  const validator = yup.object().shape({
    surname: yup.string()
      .min(1, 'Введите фамилию')
      .max(255, 'Превышен лимит символов')
      .matches(/^[A-Za-zА-ЯЁа-яё\s-]+$/, 'Недопустимый символ')
      .required('Введите фамилию'),
    name: yup.string()
      .min(1, 'Введите имя')
      .max(255, 'Превышен лимит символов')
      .matches(/^[A-Za-zА-ЯЁа-яё]+$/, 'Недопустимый символ')
      .required('Введите имя'),
  });
  return (
    <Formik
      initialValues={{ ...user }}
      initialStatus={{ edit: false }}
      enableReinitialize
      validationSchema={validator}
      onSubmit={submitFormikData}
    >
      {({
        status, setStatus, resetForm, errors, touched,
      }) => {
        const enableEditToggle = useCallback((event) => {
          event.preventDefault();
          const data = !(status.edit);
          setStatus({
            edit: data,
          });
        }, [status.edit]);

        const handleCancel = useCallback((event) => {
          event.preventDefault();
          resetForm();
          setStatus({
            edit: false,
          });
        }, [resetForm]);
        return (
          <div className={styles.form_container}>
            <div>
              <div className={styles.form_header}>
                <span>
                  Общая информация
                </span>
                {
                  !status?.edit
                  && (
                    <div>
                      <EditButton onClick={enableEditToggle} />
                    </div>
                  )
                }
              </div>
              <Form id={formId} className={styles.form_table}>
                <div>
                  {['surname', 'name'].map((key) => (
                    <>
                      <div className={`${styles.form_row} ${!status.edit ? '' : `${styles.form_row_edit}`}`}>
                        <div className={styles.form_label}>
                          <label htmlFor={key} key={key}>
                            {readGeneralInfoFormKey(key)}
                          </label>
                        </div>
                        <Field
                          id={key}
                          type="text"
                          name={key}
                          disabled={!status?.edit}
                          className={styles.form_field}
                        />
                      </div>
                      {errors[key] && touched[key] ? (
                        <div className={styles.errorMsg}>
                          {errors[key]}
                        </div>
                      ) : null}
                    </>
                  ))}
                  <div className={`${styles.form_row} ${!status.edit ? '' : `${styles.form_row_edit}`}`}>
                    <div className={styles.form_label}>
                      <label htmlFor="birthday" key="birthday">
                        {readGeneralInfoFormKey('birthday')}
                      </label>
                    </div>
                    {status.edit ? <BirthdayField name="birthday" />
                      : (
                        <input
                          disabled
                          className={styles.form_field}
                          value={user.birthday ? readDate(user.birthday) : ''}
                        />
                      )}
                  </div>
                  <div className={`${styles.form_row} ${!status.edit ? '' : `${styles.form_row_edit}`}`}>
                    <div className={styles.form_label}>
                      <label htmlFor="city" key="city">
                        {readGeneralInfoFormKey('city')}
                      </label>
                    </div>
                    {status.edit
                      ? (
                        <div className={styles.form_field}>
                          <Field
                            as="select"
                            name="officeLocation"
                            placeholder="city"
                          >
                            {officeLocations.map((option) => (
                              <option
                                key={option.id}
                                value={JSON.stringify(option)}
                              >
                                {option.city}
                              </option>
                            ))}
                          </Field>
                        </div>
                      )
                      : (
                        <input
                          disabled
                          value={user.officeLocation?.city}
                          className={styles.form_field}
                        />
                      )}
                  </div>
                  <div className={`${styles.form_row} ${!status.edit ? '' : `${styles.form_row_edit}`}`}>
                    <div className={styles.form_label}>
                      <label htmlFor="role" key="role">
                        {readGeneralInfoFormKey('role')}
                      </label>
                    </div>
                    {status.edit
                      ? (
                        <div className={styles.form_field}>
                          <Field
                            as="select"
                            name="roles"
                            placeholder="role"
                          >
                            {roles.map((option) => (
                              <option
                                key={option.id}
                                value={JSON.stringify(option)}
                              >
                                {option.name}
                              </option>
                            ))}
                          </Field>
                        </div>
                      )
                      : (
                        <input
                          disabled
                          value={user.roles[0]?.name}
                          className={styles.form_field}
                        />
                      )}
                  </div>
                </div>
                <div className={styles.controls_buttons}>
                  {
                    status?.edit
                    && (
                      <ControlButtons handleCancel={handleCancel} formId={formId} />
                    )
                  }
                </div>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

GeneralInfo.propTypes = {
  user: PropTypes.shape.isRequired,
  roles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
  officeLocations: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
  dispatchChangeUserInfo: PropTypes.func.isRequired,
  uriId: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeUserInfo: (details, id) => dispatch(editUserInfoData(details, id)),
});

const mapStateToProps = (state) => ({
  user: state.profile.generalInfo,
  roles: state.profile.userDataList.roles,
  officeLocations: state.profile.userDataList.officeLocations,
  uriId: state.profile.generalInfo.id,
});

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInfo);
