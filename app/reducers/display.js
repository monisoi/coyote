import {
  REFRESH_DISPLAY_STATE,
  ON_FOCUS_NUMBER_INPUT,
} from '../actions/types';

const initialState = {
  displayNumberInput: false,
};

export default (state = initialState, action = {}) => {
  const { type } = action;
  switch (type) {
    case REFRESH_DISPLAY_STATE: {
      return initialState;
    }
    case ON_FOCUS_NUMBER_INPUT: {
      return {
        ...state,
        displayNumberInput: true,
      };
    }
    default: {
      return state;
    }
  }
};
