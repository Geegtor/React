import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AvatarEditor from 'react-avatar-editor';
import { changePhotoStatus, changeProfilePhoto, showPhotoEditor } from '../../../store/actions/profilePhotoActions';
import ControlButton from '../../UI/ControlButton/ControlButton';
import { ReactComponent as ModalClose } from '../../../assets/img/ProfileInfo/close.svg';
import { ReactComponent as SmallAvatar } from '../../../assets/img/ProfileInfo/small_avatar.svg';
import { ReactComponent as BigAvatar } from '../../../assets/img/ProfileInfo/big_avatar.svg';
import styles from './PhotoEditor.module.scss';

const PhotoEditor = ({
  photo,
  dispatchChangeProfilePhoto,
  dispatchChangePhotoStatus,
  previousPhoto,
  setPreviousPhoto,
  dispatchShowPhotoEditor,
}) => {
  const [scale, setScale] = useState(1);
  const [selectorStyle, setSelectorStyle] = useState({ left: `${scale}%` });
  const [progressBarStyle, setProgressBarStyle] = useState({ width: `${scale}%` });
  const editorRef = useRef(null);
  const closeModal = () => {
    dispatchShowPhotoEditor(false);
  };
  const cancelChanges = () => {
    if (previousPhoto === '') {
      dispatchChangePhotoStatus();
    }
    dispatchChangeProfilePhoto(previousPhoto);
  };
  const onCrop = () => {
    if (editorRef.current !== null) {
      setPreviousPhoto(photo.photo);
      const url = editorRef.current.getImageScaledToCanvas().toDataURL();
      dispatchChangeProfilePhoto(url);
    }
  };
  const changeValues = (event) => {
    setScale(event.target.value);
    setSelectorStyle({ left: `${event.target.value}%` });
    setProgressBarStyle({ width: `${event.target.value}%` });
  };
  return (
    <div className={styles.editor_container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.header_text}>Редактирование изображения</p>
          <button type="button" className={styles.close_button} onClick={closeModal}>
            <ModalClose />
          </button>
        </div>
        <div className={styles.avatar_editor}>
          <AvatarEditor
            ref={editorRef}
            image={photo.photo}
            width={314}
            height={314}
            border={0}
            borderRadius={200}
            scale={scale}
          />
        </div>
        <div className={styles.slider_container}>
          <SmallAvatar />
          <div className={styles.range_container}>
            <input type="range" value={scale} min="1" max="75" name="range" step="0.01" id="scale_range" className={styles.slider} onInput={changeValues} />
            <div id={styles.selector} style={selectorStyle}>
              <div className={styles.progress_bar_container} />
            </div>
            <div id={styles.progress_bar} style={progressBarStyle} />
          </div>
          <BigAvatar />
        </div>
        <div className={styles.control_buttons}>
          <div className={styles.cancel_button}>
            <ControlButton value="Отмена" onClick={cancelChanges} />
          </div>
          <ControlButton value="Сохранить" color="yellow" border="no_border" onClick={onCrop} />
        </div>
      </div>
    </div>
  );
};

PhotoEditor.propTypes = {
  photo: PropTypes.shape.isRequired,
  dispatchChangeProfilePhoto: PropTypes.func.isRequired,
  dispatchChangePhotoStatus: PropTypes.func.isRequired,
  previousPhoto: PropTypes.string.isRequired,
  setPreviousPhoto: PropTypes.func.isRequired,
  dispatchShowPhotoEditor: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  photo: state.profile.profilePhoto,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeProfilePhoto: (details) => dispatch(changeProfilePhoto(details)),
  dispatchChangePhotoStatus: () => dispatch(changePhotoStatus()),
  dispatchShowPhotoEditor: (details) => dispatch(showPhotoEditor(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoEditor);
