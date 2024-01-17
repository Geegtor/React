import { CHANGE_CANDIDATE_WORK_EXPERIENCE } from '../actions/candidateWorkExperienceAction';

const INITIAL_STATE = {
  workExperience: 'AI company, специалист технической поддержк, 23.01.23- настоящее время',
};

const candidateWorkExperienceReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_CANDIDATE_WORK_EXPERIENCE:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default candidateWorkExperienceReducer;
