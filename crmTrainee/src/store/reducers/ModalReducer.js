import { TOGGLE_MODAL_EXIT } from '../actions/modalActions';

const INITIAL_STATE = {
  exitModal: false,
};

const ModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_EXIT:
      return {
        ...state,
        exitModal: !state.exitModal,
      };
    default:
      return state;
  }
};

export default ModalReducer;
