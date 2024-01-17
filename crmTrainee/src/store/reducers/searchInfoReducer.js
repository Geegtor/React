import { CHANGE_SEARCH_INFO } from '../actions/searchInfoActions';

const INITIAL_STATE = {
  locations: '',
  departments: '',
};

const searchInfoReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_SEARCH_INFO:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default searchInfoReducer;
