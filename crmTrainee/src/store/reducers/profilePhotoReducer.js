import {
  CHANGE_PROFILE_PHOTO,
  DELETE_PROFILE_PHOTO,
  SHOW_MODAL_MESSAGE_WRONG_FORMAT,
  SHOW_MODAL_MESSAGE_BIG_SIZE,
  CHANGE_PHOTO_STATUS,
  SHOW_PHOTO_EDITOR,
} from '../actions/profilePhotoActions';

const INITIAL_STATE = {
  photo: '',
  isWrongFormatModalOpen: false,
  isBigSizeModalOpen: false,
  photoInStore: false,
  showPhotoEditor: false,
};

const profilePhotoReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_PROFILE_PHOTO:
      return {
        ...state,
        photo: payload,
        showPhotoEditor: !state.showPhotoEditor,
      };
    case DELETE_PROFILE_PHOTO:
      return {
        ...state,
        photo: '',
      };
    case SHOW_MODAL_MESSAGE_WRONG_FORMAT:
      return {
        ...state,
        isWrongFormatModalOpen: !state.isWrongFormatModalOpen,
      };
    case SHOW_MODAL_MESSAGE_BIG_SIZE:
      return {
        ...state,
        isBigSizeModalOpen: !state.isBigSizeModalOpen,
      };
    case CHANGE_PHOTO_STATUS:
      return {
        ...state,
        photoInStore: !state.photoInStore,
      };
    case SHOW_PHOTO_EDITOR:
      return {
        ...state,
        showPhotoEditor: payload,
      };
    default:
      return state;
  }
};

export default profilePhotoReducer;
