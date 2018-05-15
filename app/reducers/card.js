import { START_NEW_GAME, CALL_COYOTE } from '../actions/types';

const DECK = [
  20,
  15,
  15,
  10,
  10,
  10,
  5,
  5,
  5,
  5,
  4,
  4,
  4,
  4,
  3,
  3,
  3,
  3,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  -5,
  -5,
  -10,
  100,
  101,
  102,
  103,
];

const initialState = {
  deck: DECK,
  field: [0, 0, 0, 0, 0, 0],
  trash: [],
  answer: 0,
};

// 100: 夜
// 101: x2
// 102: Max->0
// 103: ?

const shuffle = array => {
  let n = array.length;
  let t, i;
  let shuffledArray = [...array];
  while (n) {
    i = Math.floor(Math.random() * n--);
    t = shuffledArray[n];
    shuffledArray[n] = shuffledArray[i];
    shuffledArray[i] = t;
  }
  return shuffledArray;  
};

const distributeCards = (deck, field, trash) => {
  const currentTrash = [...trash, ...field];
  const currentDeck = [...deck];
  const currentField = currentDeck.splice(0, 6);
  return {
    deck: currentDeck,
    field: currentField,
    trash: currentTrash,
  };
};

const sumElements = array => array.reduce((prev, current) => prev + current);

export default (state = initialState, action = {}) => {
  const { type } = action;
  switch (type) {
    case START_NEW_GAME: {
      const { deck, field, trash } = initialState;
      const shuffledDeck = shuffle(deck);
      const cards = distributeCards(shuffledDeck, field, trash);
      return {
        ...state,
        ...cards,
        answer: sumElements(cards.field),
      };
    }
    case CALL_COYOTE: {
      const { deck, field, trash } = state;
      const cards = distributeCards(deck, field, trash);
      return {
        ...state,
        ...cards,
      };
    }
    default: {
      return state;
    }
  }
};
