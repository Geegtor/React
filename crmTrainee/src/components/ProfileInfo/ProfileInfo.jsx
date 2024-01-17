import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  changeProfilePhoto,
  showModalMessageWrongFormat,
  showModalMessageBigSize,
  changePhotoStatus,
} from '../../store/actions/profilePhotoActions';
import styles from './ProfileInfo.module.scss';
import { ReactComponent as Edit } from '../../assets/img/svg/ProfileIcons/edit.svg';
import DefaultAvatar from '../../assets/img/ProfileInfo/default_avatar.png';
import ContextMenu from './ContextMenu/ContextMenu';
import PhotoEditor from './PhotoEditor/PhotoEditor';

const ProfileInfo = ({
  photo,
  initials,
  dispatchChangeProfilePhoto,
  dispatchShowModalMessageWrongFormat,
  dispatchShowModalMessageBigSize,
  dispatchChangePhotoStatus,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [previousPhoto, setPreviousPhoto] = useState('');
  const ref = useRef(null);
  const makeMenuShowed = () => {
    setShowMenu(!showMenu);
  };
  const onSelectFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if ((file.type === 'image/jpeg' && file.size <= '5242880') || (file.type === 'image/png' && file.size <= '5242880')) {
        setPreviousPhoto(photo.photo);
        dispatchChangeProfilePhoto(reader.result);
        dispatchChangePhotoStatus();
      } else if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        dispatchShowModalMessageWrongFormat();
      } else if (file.size > '5252880') {
        dispatchShowModalMessageBigSize();
      }
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className={styles.container}>
      {photo.photoInStore ? (
        <div className={styles.photo_container}>
          <img src={photo.photo} alt="" width="120px" height="120px" className={styles.photo} />
          <div ref={ref} className={styles.wrapper_button}>
            <Edit onClick={makeMenuShowed} />
          </div>
          <div ref={ref} className={styles.menu_container}>
            {showMenu
              && (
              <ContextMenu
                elem={ref.current}
                setShowMenu={setShowMenu}
                setPreviousPhoto={setPreviousPhoto}
              />
              )}
          </div>
        </div>
      ) : (
        <div className={styles.photo_container}>
          <label htmlFor="file">
            <img src={DefaultAvatar} alt="" width="120px" height="120px" className={styles.photo} />
            <input type="file" id="file" name="file" className={styles.hidden_input} onChange={onSelectFile} />
          </label>
        </div>
      )}
      <div className={styles.text_container}>
        <p>{`${initials.surname} ${initials.name}`}</p>
      </div>
      {photo.showPhotoEditor
        && (
        <PhotoEditor
          previousPhoto={previousPhoto}
          setPreviousPhoto={setPreviousPhoto}
        />
        )}
    </div>
  );
};

ProfileInfo.propTypes = {
  photo: PropTypes.shape.isRequired,
  initials: PropTypes.shape.isRequired,
  dispatchChangeProfilePhoto: PropTypes.func.isRequired,
  dispatchShowModalMessageWrongFormat: PropTypes.func.isRequired,
  dispatchShowModalMessageBigSize: PropTypes.func.isRequired,
  dispatchChangePhotoStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  photo: state.profile.profilePhoto,
  initials: state.profile.generalInfo,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeProfilePhoto: (details) => dispatch(changeProfilePhoto(details)),
  dispatchShowModalMessageWrongFormat: () => dispatch(showModalMessageWrongFormat()),
  dispatchShowModalMessageBigSize: () => dispatch(showModalMessageBigSize()),
  dispatchChangePhotoStatus: () => dispatch(changePhotoStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
