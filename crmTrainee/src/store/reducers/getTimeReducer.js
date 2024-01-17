// !!! WARNING !!!
// the code in this file was written during initial setup and shold be corrected or removed

import { SET_TIME, SET_PENDING_STATUS } from '../actions/getTimeActions';
import { setTimeStatus } from '../../utils/constants';

const getTimeReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TIME:
      return {
        ...state,
        data: action.data,
        status: setTimeStatus.resolved,
      };

    case SET_PENDING_STATUS:
      return {
        ...state,
        status: setTimeStatus.pending,
      };

    default:
      return state;
  }
};

export default getTimeReducer;
