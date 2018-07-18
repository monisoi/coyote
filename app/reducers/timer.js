import {
  UPDATE_TIMER,
  GO_TO_NEXT_TURN,
  CALL_COYOTE,
} from '../actions/types';

const initialState = {
  time: 3,
};

export default (state = initialState, action = {}) => {
  const { type } = action;
  switch (type) {
    case UPDATE_TIMER: {
      return {
        ...state,
        time: state.time - 1,
      }
    }
    case GO_TO_NEXT_TURN: {
      return initialState;
    }
    case CALL_COYOTE: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
