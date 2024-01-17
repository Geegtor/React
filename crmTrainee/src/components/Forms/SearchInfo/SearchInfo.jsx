import React, { useCallback } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import editSearchInfo from '../../../store/thunk/profileData/editSearchInfo';
import MultiselectDropdown from '../Fields/MultiselectDropdown';
import EditButton from '../../UI/EditButton/EditButton';
import ControlButtons from '../Buttons/ControlButtons';
import readGeneralInfoFormKey from '../../../utils/readGeneralInfoFormKey';
import styles from './SearchInfo.module.scss';

const SearchInfo = (
  {
    search, dispatchChangeSearchInfo, officeLocations, departments, uriId,
  },
) => {
  const submitFormikData = useCallback((values, { ...actions }) => {
    dispatchChangeSearchInfo(values, uriId, officeLocations, departments);
    actions.setStatus({
      edit: false,
    });
  }, [uriId, officeLocations, departments, dispatchChangeSearchInfo]);
  return (
    <Formik
      initialValues={{ ...search }}
      initialStatus={{ edit: false }}
      enableReinitialize
      onSubmit={submitFormikData}
    >
      {({
        status, setStatus, resetForm,
      }) => {
        const enableEditToogle = useCallback((event) => {
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

        const formId = 'searchInfo';
        const locationsForSelect = officeLocations.map((location) => (
          {
            value: location.city,
            label: location.city,
          }
        ));
        const departmentsForSelect = departments.map((department) => (
          {
            value: department.name,
            label: department.name,
          }
        ));

        return (
          <div className={styles.form_container}>
            <div className={styles.form_header}>
              <span>Поиск</span>
              {
                  !status?.edit
                  && (
                  <div>
                    <EditButton onClick={enableEditToogle} />
                  </div>
                  )
              }
            </div>
            <Form id={formId} className={styles.form_table}>
              <div className={`${styles.form_row} ${!status.edit ? '' : `${styles.form_row_edit}`}`}>
                <div htmlFor="locations" className={styles.form_label}>{readGeneralInfoFormKey('locations')}</div>
                {
                  status?.edit
                    ? (
                      <MultiselectDropdown
                        name="locations"
                        disabled={!status?.edit}
                        options={locationsForSelect}
                      />
                    )
                    : (
                      <input
                        disabled
                        value={search.locations}
                        className={styles.form_field}
                      />
                    )
                  }
              </div>
              <div className={`${styles.form_row} ${!status.edit ? '' : `${styles.form_row_edit}`}`}>
                <div htmlFor="departments" className={styles.form_label}>{readGeneralInfoFormKey('departments')}</div>
                {
                  status?.edit
                    ? (
                      <MultiselectDropdown
                        name="departments"
                        disabled={!status?.edit}
                        options={departmentsForSelect}
                      />
                    )
                    : (
                      <input
                        disabled
                        value={search.departments}
                        className={styles.form_field}
                      />
                    )
                  }
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
        );
      } }
    </Formik>
  );
};

SearchInfo.propTypes = {
  search: PropTypes.shape.isRequired,
  dispatchChangeSearchInfo: PropTypes.func.isRequired,
  officeLocations: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
  uriId: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeSearchInfo: (details, id, locationsWithId, departmentsWithId) => (
    dispatch(editSearchInfo(details, id, locationsWithId, departmentsWithId))
  ),
});

const mapStateToProps = (state) => ({
  search: state.profile.searchInfo,
  officeLocations: state.profile.userDataList.officeLocations,
  departments: state.profile.userDataList.departments,
  uriId: state.profile.generalInfo.id,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInfo);
