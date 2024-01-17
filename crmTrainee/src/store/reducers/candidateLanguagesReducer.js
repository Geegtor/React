import { CHANGE_CANDIDATE_LANGUAGES } from '../actions/candidateLanguagesActions';

const INITIAL_STATE = {
  english: 'C1',
  german: 'не владею',
};

const candidateLanguagesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_CANDIDATE_LANGUAGES:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default candidateLanguagesReducer;
