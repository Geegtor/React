import { CHANGE_USER_CONTACTS } from '../actions/userContactsAction';

const INITIAL_STATE = {
  email: '',
  skype: '',
  phone: '',
};

const userContactsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_USER_CONTACTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default userContactsReducer;
