export const CHANGE_CANDIDATE_FILE = 'CHANGE_PROFILE_FILE';
export const SHOW_FILE_MODAL_MESSAGE_WRONG_FORMAT = 'SHOW_FILE_MODAL_MESSAGE_WRONG_FORMAT';
export const SHOW_FILE_MODAL_MESSAGE_BIG_SIZE = 'SHOW_FILE_MODAL_MESSAGE_BIG_SIZE';
export const CHANGE_FILE_STATUS = 'CHANGE_FILE_STATUS';

export const changeCandidateFile = (details) => ({
  type: CHANGE_CANDIDATE_FILE,
  payload: details,
});

export const showFileModalMessageWrongFormat = () => ({
  type: SHOW_FILE_MODAL_MESSAGE_WRONG_FORMAT,
});

export const showFileModalMessageBigSize = () => ({
  type: SHOW_FILE_MODAL_MESSAGE_BIG_SIZE,
});

export const changeFileStatus = () => ({
  type: CHANGE_FILE_STATUS,
});
