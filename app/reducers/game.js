import {
  START_NEW_GAME,
  GO_TO_NEXT_TURN,
  CALL_COYOTE,
  CHANGE_CALL_NUMBER,
  CALL_NUMBER,
} from '../actions/types';

const PLAYERS = 6;

const initialState = {
  turnOf: 1,
  inputNumber: 0,
  calledNumber: 0,
  lifePoints: [3, 3, 3, 3, 3, 3],
};

const reflectDamage2lifePoints = (answer, calledNumber, turnOf, lifePoints) => {
  let currentLifePoints = [...lifePoints];
  if (calledNumber > answer) {
    currentLifePoints[turnOf - 1] -= 1;
  } else {
    currentLifePoints[0] -= 1;
  }
  return currentLifePoints;
};

const isGameOver = lifePoints => lifePoints[0] <= 0;

const isValidNumber = (inputNumber, formerCalledNumber) =>
  Number(inputNumber) ? inputNumber > formerCalledNumber : false;

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
        inputNumber: calledNumber + 4,
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
    case CHANGE_CALL_NUMBER: {
      const { inputNumber = 0 } = action || {};
      return {
        ...state,
        inputNumber,
      };
    }
    case CALL_NUMBER: {
      const { inputNumber = 0 } = action || {};
      const { turnOf, calledNumber } = state;
      return isValidNumber(inputNumber, calledNumber)
        ? {
            ...state,
            turnOf: (turnOf + 1) % 6 || 6,
            calledNumber: inputNumber + 1,
          }
        : state;
    }
    default: {
      return state;
    }
  }
};
