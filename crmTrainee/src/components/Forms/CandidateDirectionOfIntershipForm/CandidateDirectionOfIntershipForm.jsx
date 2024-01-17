import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Form, Formik, FieldArray, Field,
} from 'formik';
import { PropTypes } from 'prop-types';
import * as Yup from 'yup';
import { changeCandidateDirectionOfIntership, addCandidateDirectionOfIntership, resetCandidateDirectionOfIntership } from '../../../store/actions/candidateDirectionOfIntershipActions';
import EditButton from '../../UI/EditButton/EditButton';
import ControlButtons from '../Buttons/ControlButtons';
import { DIRECTION, SPECIALIZATON_DEV, SPECIALIZATON_QA } from '../../../utils/constants';
import styles from '../ContactsForm/ContactsForm.module.scss';
import TextArea from '../Fields/TextArea';

const CandidateDirectionOfIntershipForm = ({
  candidateDirectionOfIntership,
  dispatchChangeCandidateDirectionOfIntership,
  dispatchResetCandidateDirectionOfIntership,
  dispatchAddCandidateDirectionOfIntership,
}) => {
  const [nonEditable, setNonEditable] = useState(true);
  const handleEditToggle = () => {
    setNonEditable(false);
  };
  const handleChangeStore = (details) => {
    dispatchChangeCandidateDirectionOfIntership(details);
  };
  const onSubmit = (values) => {
    handleChangeStore(values);
    setNonEditable(true);
  };
  const validationSchema = Yup.array().of(Yup.object({
    additionalEducation: Yup.string()
      .min(1)
      .max(500)
      .required('Введите дополнительное образование'),
    technicalSkills: Yup.string()
      .min(1)
      .max(500)
      .required('Введите технические навыки'),
    githubLink: Yup.string()
      .min(1)
      .max(500)
      .required('Введите ссылку на githubLink'),
    direction: Yup.string()
      .required('Введите направление стажировки'),
    specialization: Yup.string()
      .required('Введите специализацию'),
  }));

  function addDirectionOfIntership() {
    dispatchAddCandidateDirectionOfIntership();
  }
  const formId = 'directionOfIntershipForm';
  return (
    <div className={styles.form_container}>
      <div className={styles.form_header}>
        <div className="educationform_header_div">
          <span>Направление стажировки</span>
          {!nonEditable && (
            <button type="button" className={styles.form_add_button} onClick={addDirectionOfIntership} aria-label="add" />
          )}
        </div>
        {nonEditable && (
          <EditButton onClick={handleEditToggle} />
        )}
      </div>
      <Formik
        enableReinitialize
        initialValues={[...candidateDirectionOfIntership]}
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
            dispatchResetCandidateDirectionOfIntership();
            setNonEditable(true);
          };
          return (
            <Form id={formId} className={styles.form_table}>
              <FieldArray
                name="directionOfIntership"
                render={() => (
                  <div>
                    {values.map((item, index) => (
                      <div key={item.id}>
                        <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                          <div className={styles.form_label}>
                            <label
                              htmlFor={`${item.id}direction`}
                            >
                              Направление:
                            </label>
                          </div>
                          {!nonEditable
                            ? (
                              <div className={styles.form_field}>
                                <Field
                                  as="select"
                                  id={`${item.id}direction`}
                                  name={`${index}.direction`}
                                  disabled={nonEditable}
                                  className={styles.form_field}
                                >
                                  {DIRECTION.map((option) => (
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
                                value={values[index].direction}
                                className={styles.form_field}
                              />
                            )}
                        </div>
                        {(errors[index] && errors[index].direction) && (
                          <div className={styles.errorMsg}>
                            {errors[index].direction}
                          </div>
                        )}
                        { item.direction === 'Dev'
                          && (
                            <>
                              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                                <div className={styles.form_label}>
                                  <label
                                    htmlFor={`${item.id}specialization`}
                                  >
                                    Специализация:
                                  </label>
                                </div>
                                {!nonEditable
                                  ? (
                                    <div className={styles.form_field}>
                                      <Field
                                        as="select"
                                        id={`${item.id}specialization`}
                                        name={`${index}.specialization`}
                                        disabled={nonEditable}
                                        className={styles.form_field}
                                      >
                                        {SPECIALIZATON_DEV.map((option) => (
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
                                      value={values[index].specialization}
                                      className={styles.form_field}
                                    />
                                  )}
                              </div>
                              {(errors[index] && errors[index].specialization) && (
                                <div className={styles.errorMsg}>
                                  {errors[index].specialization}
                                </div>
                              )}
                            </>
                          )}
                        { item.direction === 'QA'
                          && (
                            <>
                              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                                <div className={styles.form_label}>
                                  <label
                                    htmlFor={`${item.id}specialization`}
                                  >
                                    Специализация:
                                  </label>
                                </div>
                                {!nonEditable
                                  ? (
                                    <div className={styles.form_field}>
                                      <Field
                                        as="select"
                                        id={`${item.id}specialization`}
                                        name={`${index}.specialization`}
                                        disabled={nonEditable}
                                        className={styles.form_field}
                                      >
                                        {SPECIALIZATON_QA.map((option) => (
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
                                      value={values[index].specialization}
                                      className={styles.form_field}
                                    />
                                  )}
                              </div>
                              {(errors[index] && errors[index].specialization) && (
                                <div className={styles.errorMsg}>
                                  {errors[index].specialization}
                                </div>
                              )}
                            </>
                          )}
                        <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                          <label
                            htmlFor={`${item.id}additionalEducation`}
                            className={styles.form_label}
                          >
                            Дополнительное образование:
                          </label>
                          <TextArea
                            id={`${item.id}additionalEducation`}
                            name={`${index}.additionalEducation`}
                            nonEditable={nonEditable}
                            handleChange={handleChange}
                          />
                        </div>
                        {(errors[index] && errors[index].additionalEducation) && (
                          <div className={styles.errorMsg}>
                            {errors[index].additionalEducation}
                          </div>
                        )}
                        <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                          <label
                            htmlFor="technicalSkills"
                            className={styles.form_label}
                          >
                            Технические навыки:
                          </label>
                          <TextArea
                            id={`${item.id}technicalSkills`}
                            name={`${index}.technicalSkills`}
                            nonEditable={nonEditable}
                            handleChange={handleChange}
                          />
                        </div>
                        {(errors[index] && errors[index].technicalSkills) && (
                          <div className={styles.errorMsg}>
                            {errors[index].technicalSkills}
                          </div>
                        )}
                        <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                          <label
                            htmlFor="githubLink"
                            className={styles.form_label}
                          >
                            Ссылка на GitHub:
                          </label>
                          <TextArea
                            id={`${item.id}githubLink`}
                            name={`${index}.githubLink`}
                            nonEditable={nonEditable}
                            handleChange={handleChange}
                          />
                        </div>
                        {(errors[index] && errors[index].githubLink) && (
                          <div className={styles.errorMsg}>
                            {errors[index].githubLink}
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

CandidateDirectionOfIntershipForm.propTypes = {
  candidateDirectionOfIntership: PropTypes.shape.isRequired,
  dispatchChangeCandidateDirectionOfIntership: PropTypes.func.isRequired,
  dispatchResetCandidateDirectionOfIntership: PropTypes.func.isRequired,
  dispatchAddCandidateDirectionOfIntership: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  candidateDirectionOfIntership: state.profile.candidateDirectionOfIntership,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeCandidateDirectionOfIntership: (params) => {
    dispatch(changeCandidateDirectionOfIntership(params));
  },
  dispatchResetCandidateDirectionOfIntership: () => dispatch(resetCandidateDirectionOfIntership()),
  dispatchAddCandidateDirectionOfIntership: () => dispatch(addCandidateDirectionOfIntership()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidateDirectionOfIntershipForm);
