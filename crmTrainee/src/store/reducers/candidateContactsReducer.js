import { CHANGE_CANDIDATE_CONTACTS, ADD_CANDIDATE_OTHER_INFO, RESET_CANDIDATE_OTHER_INFO } from '../actions/candidateContactsActions';

const INITIAL_STATE = {
  skype: 'k_kan',
  email: 'example@mail.com',
  phone: '+7 912 345 67 89',
  telegram: '@telegram',
  other: [{ link: 'linkedin.com/in/k_kan', id: '111' }],
};

const candidateContactsReducer = (state = INITIAL_STATE, { type, payload }) => {
  let newArr;
  switch (type) {
    case ADD_CANDIDATE_OTHER_INFO:
      return { ...state, other: [...state.other, payload] };
    case CHANGE_CANDIDATE_CONTACTS:
      return { ...state, ...payload };
    case RESET_CANDIDATE_OTHER_INFO:
      newArr = state.other.filter((i) => i.link !== '');
      return { ...state, other: [...newArr] };

    default:
      return state;
  }
};

export default candidateContactsReducer;
