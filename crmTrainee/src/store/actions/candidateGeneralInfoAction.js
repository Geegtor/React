export const CHANGE_CANDIDATE_GENERAL_INFO = 'CHANGE_CANDIDATE_GENERAL_INFO';

export const changeCandidateGeneralInfo = (details) => ({
  type: CHANGE_CANDIDATE_GENERAL_INFO,
  payload: details,
});
