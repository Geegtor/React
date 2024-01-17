export const CHANGE_PROFILE_PHOTO = 'CHANGE_PROFILE_PHOTO';
export const DELETE_PROFILE_PHOTO = 'DELETE_PROFILE_PHOTO';
export const SHOW_MODAL_MESSAGE_WRONG_FORMAT = 'SHOW_MODAL_MESSAGE_WRONG_FORMAT';
export const SHOW_MODAL_MESSAGE_BIG_SIZE = 'SHOW_MODAL_MESSAGE_BIG_SIZE';
export const CHANGE_PHOTO_STATUS = 'CHANGE_PHOTO_STATUS';
export const SHOW_PHOTO_EDITOR = 'SHOW_PHOTO_EDITOR';

export const changeProfilePhoto = (details) => ({
  type: CHANGE_PROFILE_PHOTO,
  payload: details,
});

export const deleteProfilePhoto = (details) => ({
  type: DELETE_PROFILE_PHOTO,
  payload: details,
});

export const showModalMessageWrongFormat = () => ({
  type: SHOW_MODAL_MESSAGE_WRONG_FORMAT,
});

export const showModalMessageBigSize = () => ({
  type: SHOW_MODAL_MESSAGE_BIG_SIZE,
});

export const changePhotoStatus = () => ({
  type: CHANGE_PHOTO_STATUS,
});

export const showPhotoEditor = (details) => ({
  type: SHOW_PHOTO_EDITOR,
  payload: details,
});
