import { START_NEW_GAME, GO_TO_NEXT_TURN, CALL_COYOTE } from '../actions/types';

const PLAYERS = 6;

const initialState = {
  turnOf: 1,
  calledNumber: 0,
  playersLife: [3, 3, 3, 3, 3, 3],
};

const reflectDamage2PlayersLife = (answer, calledNumber, turnOf, playersLife) => {
  let currentPlayersLife = [...playersLife];
  if (calledNumber > answer) {
    currentPlayersLife[turnOf - 1] -= 1;
  } else {
    currentPlayersLife[0] -= 1;
  }
  return currentPlayersLife;
}

export default (state = initialState, action = {}) => {
  const { type } = action;
  switch (type) {
    case START_NEW_GAME: {
      return {
        ...state,
        turnOf: Math.floor(Math.random() * PLAYERS + 1),
        calledNumber: 1,
      };
    }
    case GO_TO_NEXT_TURN: {
      const { turnOf, calledNumber } = state;
      return {
        ...state,
        turnOf: (turnOf + 1) % 6 || 6,
        calledNumber: calledNumber + 3,
      };
    }
    case CALL_COYOTE: {
      const { turnOf, calledNumber, playersLife } = state;
      const { answer = 0 } = action || {};
      return {
        ...state,
        turnOf: (turnOf + 1) % 6 || 6,
        calledNumber: 1,
        playersLife: reflectDamage2PlayersLife(answer, calledNumber, turnOf, playersLife),
      };
    }
    default: {
      return state;
    }
  }
};
