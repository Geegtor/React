export const CHANGE_CANDIDATE_EDUCATION = 'CHANGE_CANDIDATE_EDUCATION';

export const changeCandidateEducation = (details) => ({
  type: CHANGE_CANDIDATE_EDUCATION,
  payload: details,
});

export const RESET_CANDIDATE_EDUCATION = 'RESET_CANDIDATE_EDUCATION';

export const resetCandidateEducation = (details) => ({
  type: RESET_CANDIDATE_EDUCATION,
  payload: details,
});

export const ADD_CANDIDATE_EDUCATION = 'ADD_CANDIDATE_EDUCATION';

export const addCandidateEducation = () => ({
  type: ADD_CANDIDATE_EDUCATION,
  payload: { education: '', avarageScore: '', id: Math.random() },
});
