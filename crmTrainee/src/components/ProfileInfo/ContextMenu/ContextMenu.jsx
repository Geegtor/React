import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  changeProfilePhoto,
  deleteProfilePhoto,
  showModalMessageWrongFormat,
  showModalMessageBigSize,
  changePhotoStatus,
} from '../../../store/actions/profilePhotoActions';
import styles from './ContextMenu.module.scss';

const ContextMenu = ({
  photo,
  dispatchChangeProfilePhoto,
  dispatchDeleteProfilePhoto,
  dispatchShowModalMessageWrongFormat,
  dispatchShowModalMessageBigSize,
  dispatchChangePhotoStatus,
  elem,
  setShowMenu,
  setPreviousPhoto,
}) => {
  const onSelectFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if ((file.type === 'image/jpeg' && file.size <= '5242880') || (file.type === 'image/png' && file.size <= '5242880')) {
        setPreviousPhoto(photo.photo);
        dispatchChangeProfilePhoto(reader.result);
      } else if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        dispatchShowModalMessageWrongFormat();
      } else if (file.size > '5252880') {
        dispatchShowModalMessageBigSize();
      }
    };
    reader.readAsDataURL(file);
    setShowMenu(false);
  };
  const deletePhoto = () => {
    dispatchDeleteProfilePhoto();
    setShowMenu(false);
    dispatchChangePhotoStatus();
  };
  const handleClick = (e) => {
    if (!elem.contains(e.target)) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  return (
    <div className={styles.menu_container}>
      <label htmlFor="file" className={styles.menu_field}>
        Выбрать новое фото
        <input type="file" id="file" name="file" className={styles.file_input} onChange={onSelectFile} />
      </label>
      <button type="button" className={styles.menu_field} onClick={deletePhoto}>Удалить фото</button>
    </div>
  );
};

ContextMenu.propTypes = {
  photo: PropTypes.shape.isRequired,
  dispatchChangeProfilePhoto: PropTypes.func.isRequired,
  dispatchDeleteProfilePhoto: PropTypes.func.isRequired,
  dispatchShowModalMessageWrongFormat: PropTypes.func.isRequired,
  dispatchShowModalMessageBigSize: PropTypes.func.isRequired,
  dispatchChangePhotoStatus: PropTypes.func.isRequired,
  setShowMenu: PropTypes.func.isRequired,
  elem: PropTypes.element.isRequired,
  setPreviousPhoto: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  photo: state.profile.profilePhoto,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeProfilePhoto: (details) => dispatch(changeProfilePhoto(details)),
  dispatchDeleteProfilePhoto: () => dispatch(deleteProfilePhoto()),
  dispatchShowModalMessageWrongFormat: () => dispatch(showModalMessageWrongFormat()),
  dispatchShowModalMessageBigSize: () => dispatch(showModalMessageBigSize()),
  dispatchChangePhotoStatus: () => dispatch(changePhotoStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu);
