import { ADD_CANDIDATE_EDUCATION, CHANGE_CANDIDATE_EDUCATION, RESET_CANDIDATE_EDUCATION } from '../actions/candidateEducationActions';

const INITIAL_STATE = [
  {
    id: 'formid1',
    education: 'СПбПУ им. Петра Великого',
    avarageScore: '7,2',
  },
];

const candidateEducationReducer = (state = INITIAL_STATE, { type, payload }) => {
  let newArr;
  switch (type) {
    case ADD_CANDIDATE_EDUCATION:
      return [...state, payload];
    case CHANGE_CANDIDATE_EDUCATION:
      return [...payload];
    case RESET_CANDIDATE_EDUCATION:
      newArr = state.filter((n) => n.education !== '');
      return [...newArr];

    default:
      return state;
  }
};

export default candidateEducationReducer;
