import { LIST_DATA } from '../actions/userDataListAction';

const INITIAL_STATE = {
  roles: [],
  officeLocations: [],
  departments: [],
};

const userDataListReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LIST_DATA:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default userDataListReducer;
