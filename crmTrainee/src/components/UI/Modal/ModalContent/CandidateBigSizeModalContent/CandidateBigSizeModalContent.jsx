import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ControlButton from '../../../ControlButton/ControlButton';
import styles from '../BigSizeModalContent/BigSizeModalContent.module.scss';
import { changeFileStatus } from '../../../../../store/actions/candidateFileActions';

const CandidateBigSizeModalContent = ({ changeCandidateFile, showModalMessageBigSize }) => {
  const fileInStore = useSelector((state) => state.profile.candidateFile.fileInStore);
  const dispatch = useDispatch();
  const showInputFile = () => {
    document.getElementById('file').click();
  };
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
      || (file.type === 'text/plain' && file.size <= `${15 * 1024 * 1024}`)) {
        dispatch(changeCandidateFile(reader.result));
        if (!fileInStore) {
          dispatch(changeFileStatus());
        }
        dispatch(showModalMessageBigSize());
      }
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <p className={styles.text_message}>
        Файл превышает максимальный размер: 15MB
      </p>
      <div className={styles.control_button}>
        <label htmlFor="file">
          <ControlButton value="Выбрать другой файл" color="yellow" border="no_border" onClick={showInputFile} />
          <input type="file" id="file" name="file" className={styles.hidden_input} onChange={onSelectFile} />
        </label>
      </div>
    </>
  );
};

CandidateBigSizeModalContent.propTypes = {
  changeCandidateFile: PropTypes.func.isRequired,
  showModalMessageBigSize: PropTypes.func.isRequired,
};

export default CandidateBigSizeModalContent;
