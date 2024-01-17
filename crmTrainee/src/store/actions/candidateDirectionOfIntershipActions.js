export const CHANGE_CANDIDATE_DIRECTION_OF_INTERSHIP = 'CHANGE_CANDIDATE_DIRECTION_OF_INTERSHIP';

export const changeCandidateDirectionOfIntership = (details) => ({
  type: CHANGE_CANDIDATE_DIRECTION_OF_INTERSHIP,
  payload: details,
});

export const RESET_CANDIDATE_DIRECTION_OF_INTERSHIP = 'RESET_CANDIDATE_DIRECTION_OF_INTERSHIP';

export const resetCandidateDirectionOfIntership = (details) => ({
  type: RESET_CANDIDATE_DIRECTION_OF_INTERSHIP,
  payload: details,
});

export const ADD_CANDIDATE_DIRECTION_OF_INTERSHIP = 'ADD_CANDIDATE_DIRECTION_OF_INTERSHIP';

export const addCandidateDirectionOfIntership = () => ({
  type: ADD_CANDIDATE_DIRECTION_OF_INTERSHIP,
  payload: {
    direction: '',
    specialization: '',
    additionalEducation: '',
    technicalSkills: '',
    githubLink: '',
    id: Math.random(),
  },
});
