import { CHANGE_CANDIDATE_ACHIEVEMENT } from '../actions/candidateAchievementAction';

const INITIAL_STATE = {
  olympiads: 'Призёр кубка ректороа по инженерным соревнованиям 2018',
};

const candidateAchievementReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_CANDIDATE_ACHIEVEMENT:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default candidateAchievementReducer;
