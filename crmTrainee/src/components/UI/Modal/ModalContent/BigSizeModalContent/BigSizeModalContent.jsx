import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ControlButton from '../../../ControlButton/ControlButton';
import styles from './BigSizeModalContent.module.scss';
import { changePhotoStatus } from '../../../../../store/actions/profilePhotoActions';

const BigSizeModalContent = ({ changeProfilePhoto, showModalMessageBigSize }) => {
  const photoInStore = useSelector((state) => state.profile.profilePhoto.photoInStore);
  const dispatch = useDispatch();
  const showInputFile = () => {
    document.getElementById('file').click();
  };
  const onSelectFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if ((file.type === 'image/jpeg' && file.size <= '5242880') || (file.type === 'image/png' && file.size <= '5242880')) {
        dispatch(changeProfilePhoto(reader.result));
        if (!photoInStore) {
          dispatch(changePhotoStatus());
        }
        dispatch(showModalMessageBigSize());
      }
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <div className={styles.text_container}>
        <p className={styles.text_message}>Файл превышает</p>
        <p className={styles.text_message}>максимальный размер: 5MB</p>
      </div>
      <div className={styles.control_button}>
        <label htmlFor="file">
          <ControlButton value="Выбрать другой файл" color="yellow" border="no_border" onClick={showInputFile} />
          <input type="file" id="file" name="file" className={styles.hidden_input} onChange={onSelectFile} />
        </label>
      </div>
    </>
  );
};

BigSizeModalContent.propTypes = {
  changeProfilePhoto: PropTypes.func.isRequired,
  showModalMessageBigSize: PropTypes.func.isRequired,
};

export default BigSizeModalContent;
