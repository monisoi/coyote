import { START_NEW_GAME, GO_TO_NEXT_TURN, CALL_COYOTE } from '../actions/types';

const PLAYERS = 6;

const initialState = {
  turnOf: 1,
  calledNumber: 0,
  lifePoints: [3, 3, 3, 3, 3, 3],
};

const reflectDamage2lifePoints = (answer, calledNumber, turnOf, lifePoints) => {
  let currentlifePoints = [...lifePoints];
  if (calledNumber > answer) {
    currentlifePoints[turnOf - 1] -= 1;
  } else {
    currentlifePoints[0] -= 1;
  }
  return currentlifePoints;
};

const isGameOver = lifePoints => lifePoints[0] <= 0;

export default (state = initialState, action = {}) => {
  const { type } = action;
  switch (type) {
    case START_NEW_GAME: {
      return {
        ...initialState,
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
      const { turnOf, calledNumber, lifePoints } = state;
      const { answer = 0 } = action || {};
      return isGameOver(lifePoints)
        ? {
            ...initialState,
            turnOf: Math.floor(Math.random() * PLAYERS + 1),
            calledNumber: 1,
          }
        : {
            ...state,
            turnOf: (turnOf + 1) % 6 || 6,
            calledNumber: 1,
            lifePoints: reflectDamage2lifePoints(answer, calledNumber, turnOf, lifePoints),
          };
    }
    default: {
      return state;
    }
  }
};
