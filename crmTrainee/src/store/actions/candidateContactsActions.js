export const CHANGE_CANDIDATE_CONTACTS = 'CHANGE_CANDIDATE_CONTACTS';

export const changeCandidateContacts = (details) => ({
  type: CHANGE_CANDIDATE_CONTACTS,
  payload: details,
});

export const RESET_CANDIDATE_OTHER_INFO = 'RESET_CANDIDATE_OTHER_INFO';

export const resetCandidateOtherInfo = (details) => ({
  type: RESET_CANDIDATE_OTHER_INFO,
  payload: details,
});

export const ADD_CANDIDATE_OTHER_INFO = 'ADD_CANDIDATE_OTHER_INFO';

export const addCandidateOtherInfo = () => ({
  type: ADD_CANDIDATE_OTHER_INFO,
  payload: { link: '', id: Math.random() },
});
