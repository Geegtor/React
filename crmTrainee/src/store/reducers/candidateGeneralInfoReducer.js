import { CHANGE_CANDIDATE_GENERAL_INFO } from '../actions/candidateGeneralInfoAction';

const INITIAL_STATE = {
  surname: 'Кандидат',
  name: 'Кандидат',
  birthday: new Date('1970-1-1'),
  adres: 'Санкт-Петербург, ул. Ленина 1, кв 23',
  location: 'Санкт-Петербург',
};

const candidateGeneralInfoReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_CANDIDATE_GENERAL_INFO:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default candidateGeneralInfoReducer;
