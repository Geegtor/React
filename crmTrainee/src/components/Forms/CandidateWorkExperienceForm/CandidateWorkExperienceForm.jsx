import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import * as Yup from 'yup';
import { changeCandidateWorkExperience } from '../../../store/actions/candidateWorkExperienceAction';
import { changeCandidateFile, showFileModalMessageWrongFormat, showFileModalMessageBigSize } from '../../../store/actions/candidateFileActions';
import EditButton from '../../UI/EditButton/EditButton';
import ControlButtons from '../Buttons/ControlButtons';
import styles from '../ContactsForm/ContactsForm.module.scss';
import TextArea from '../Fields/TextArea';

const CandidateWorkExperienceForm = ({
  workExperience,
  dispatchChangeWorkExperience,
  dispatchChangeCandidateFile,
  dispatchShowModalMessageWrongFormat,
  dispatchShowModalMessageBigSize,
}) => {
  const [nonEditable, setNonEditable] = useState(true);
  const handleEditToggle = () => {
    setNonEditable(false);
  };
  const handleChangeStore = (details) => {
    dispatchChangeWorkExperience(details);
  };
  const onSubmit = (values) => {
    handleChangeStore(values);
    setNonEditable(true);
  };
  const validationSchema = Yup.object({
    workExperience: Yup.string()
      .max(500, 'Превышен лимит символов')
      .required('Введите опыт работы'),
  });
  const onSelectFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if ((file.type === 'image/jpeg' && file.size <= `${15 * 1024 * 1024}`)
      || (file.type === 'image/png' && file.size <= `${15 * 1024 * 1024}`)
      || (file.type === 'application/pdf' && file.size <= `${15 * 1024 * 1024}`)
      || (file.type === 'application/msword' && file.size <= `${15 * 1024 * 1024}`)
      || (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' && file.size <= `${15 * 1024 * 1024}`)
      || (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && file.size <= `${15 * 1024 * 1024}`)
      || (file.type === 'text/plain' && file.size <= `${15 + 1024 * 1024}`)) {
        dispatchChangeCandidateFile(reader.result);
      } else if (file.type !== 'image/jpeg'
      && file.type !== 'image/png'
      && file.type !== 'application/pdf'
      && file.type !== 'application/msword'
      && file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      && file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      && file.type !== 'text/plain') {
        dispatchShowModalMessageWrongFormat();
      } else if (file.size > `${15 * 1024 * 1024}`) {
        dispatchShowModalMessageBigSize();
      }
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className={styles.form_container}>
      <div className={styles.form_header}>
        <span>Опыт работы</span>
        {nonEditable && (
          <EditButton onClick={handleEditToggle} />
        )}
      </div>
      <Formik
        initialValues={{ ...workExperience }}
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
          const formId = 'workExperienceInfo';
          return (
            <Form id={formId} className={styles.form_table}>
              <div className={`${styles.form_row} ${nonEditable ? '' : `${styles.form_row_edit}`}`}>
                <label htmlFor="workExperience" className={styles.form_label}>Опыт работы:</label>
                <TextArea
                  name="workExperience"
                  nonEditable={nonEditable}
                  handleChange={handleChange}
                  value={values.workExperience}
                />
              </div>
              {errors.workExperience && touched.workExperience && (
                <div className={styles.errorMsg}>
                  {errors.workExperience}
                </div>
              )}
              {!nonEditable && (
                <>
                  <div className={styles.form_file_container}>
                    <label className={styles.form_file_container_button} htmlFor="file_uploads">Добавить файл</label>
                    <input type="file" id="file_uploads" name="file_uploads" onChange={onSelectFile} className={styles.hidden_input} />
                    <span className={styles.form_file_container_info}>Макс. размер: 15 Mb</span>
                  </div>
                  <div className={styles.btn_container}>
                    <div className={styles.controls_buttons}>
                      <ControlButtons handleCancel={handleCancel} formId={formId} />
                    </div>
                  </div>
                </>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

CandidateWorkExperienceForm.propTypes = {
  workExperience: PropTypes.shape.isRequired,
  dispatchChangeWorkExperience: PropTypes.func.isRequired,
  dispatchChangeCandidateFile: PropTypes.func.isRequired,
  dispatchShowModalMessageWrongFormat: PropTypes.func.isRequired,
  dispatchShowModalMessageBigSize: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  candidateFile: state.profile.candidateFile,
  workExperience: state.profile.candidateWorkExperience,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeCandidateFile: (details) => dispatch(changeCandidateFile(details)),
  dispatchChangeWorkExperience: (params) => dispatch(changeCandidateWorkExperience(params)),
  dispatchShowModalMessageWrongFormat: () => dispatch(showFileModalMessageWrongFormat()),
  dispatchShowModalMessageBigSize: () => dispatch(showFileModalMessageBigSize()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidateWorkExperienceForm);
