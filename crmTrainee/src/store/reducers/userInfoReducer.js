import { CHANGE_USER_INFO } from '../actions/userInfoAction';

const INITIAL_STATE = {
  surname: '',
  name: '',
  birthday: '',
  officeLocation: {},
  roles: [{}],
};

const userInfoReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_USER_INFO:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default userInfoReducer;
