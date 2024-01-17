export const CHANGE_CANDIDATE_LANGUAGES = 'CHANGE_CANDIDATE_LANGUAGES';

export const changeCandidateLanguages = (details) => ({
  type: CHANGE_CANDIDATE_LANGUAGES,
  payload: details,
});
