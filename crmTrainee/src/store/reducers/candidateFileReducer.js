import {
  CHANGE_CANDIDATE_FILE,
  SHOW_FILE_MODAL_MESSAGE_WRONG_FORMAT,
  SHOW_FILE_MODAL_MESSAGE_BIG_SIZE,
  CHANGE_FILE_STATUS,
} from '../actions/candidateFileActions';

const INITIAL_STATE = {
  file: '',
  isWrongFormatModalOpen: false,
  isBigSizeModalOpen: false,
  fileInStore: false,
};

const candidateFileReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_CANDIDATE_FILE:
      return {
        ...state,
        file: payload,
      };
    case SHOW_FILE_MODAL_MESSAGE_WRONG_FORMAT:
      return {
        ...state,
        isWrongFormatModalOpen: !state.isWrongFormatModalOpen,
      };
    case SHOW_FILE_MODAL_MESSAGE_BIG_SIZE:
      return {
        ...state,
        isBigSizeModalOpen: !state.isBigSizeModalOpen,
      };
    case CHANGE_FILE_STATUS:
      return {
        ...state,
        fileInStore: !state.fileInStore,
      };
    default:
      return state;
  }
};

export default candidateFileReducer;
