import { GO_TO_NEXT_TURN } from '../actions/types';

const initialState = {
  turn: 1,
  calledNumber: 0,
};

export default (state = initialState, action = {}) => {
  const { type } = action;
  switch (type) {
    case GO_TO_NEXT_TURN:
      const { turn } = state;
      return {
        ...state,
        turn: (turn + 1) % 6 || 6,
        calledNumber: 0,
      }
    default:
      return state;
  }
};
