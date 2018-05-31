import { START_NEW_GAME, CALL_COYOTE } from '../actions/types';

export const NIGHT = 100;
export const DOUBLE = 101;
export const MAX0 = 102;
export const UNKNOWN = 103;
export const SPECIAL_CARDS = [NIGHT, DOUBLE, MAX0, UNKNOWN];

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
  NIGHT,
  DOUBLE,
  MAX0,
  UNKNOWN,
];

const initialState = {
  deck: DECK,
  field: [],
  trash: [],
  answer: 0,
};

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

const isSpecialCard = card => !!SPECIAL_CARDS.includes(card);

const reflectUnknown = (deck, field) => {
  if (field.includes(UNKNOWN)) {
    const currentDeck = [...deck];
    const currentField = [...field, ...currentDeck.splice(0, 1)];
    return {
      deck: currentDeck,
      field: currentField,
    };
  }
  return {
    deck,
    field,
  };
};

const findMaxCard = field => {
  let max = 0;
  for (let card of field) {
    if (card > max && !isSpecialCard(card)) {
      max = card;
    }
  }
  return max;
};

const reflectMaxZero = field => {
  if (field.includes(MAX0)) {
    const max = findMaxCard(field);
    return field.map(card => (card === max ? 0 : card));
  }
  return field;
};

const reflectDouble = (field, subTotal) =>
  field.includes(DOUBLE) ? subTotal * 2 : subTotal;

const calculateAnswer = field => {
  const total = reflectMaxZero(field).reduce(
    (prev, current) => (isSpecialCard(current) ? prev : prev + current),
    0
  );
  return reflectDouble(field, total);
};

const needsShuffle = (deck, field) => deck.length <= 6 || field.find(x => x === NIGHT);

export default (state = initialState, action = {}) => {
  const { type } = action;
  switch (type) {
    case START_NEW_GAME: {
      const { deck, field, trash } = initialState;
      const shuffledDeck = shuffle(deck);
      const { deck: distDeck, field: distField, trash: distTrash } = distributeCards(
        shuffledDeck,
        field,
        trash
      );
      const { deck: unveiledDeck, field: unveiledField } = reflectUnknown(distDeck, distField);
      const answer = calculateAnswer(unveiledField);
      return {
        ...state,
        deck: unveiledDeck,
        field: unveiledField,
        trash: distTrash,
        answer,
      };
    }
    case CALL_COYOTE: {
      const { deck, field, trash } = needsShuffle(state.deck, state.field)
        ? { deck: shuffle(initialState.deck), field: initialState.field, trash: initialState.trash }
        : state;
      const { deck: distDeck, field: distField, trash: distTrash } = distributeCards(
        deck,
        field,
        trash
      );
      const { deck: unveiledDeck, field: unveiledField } = reflectUnknown(distDeck, distField);
      const answer = calculateAnswer(unveiledField);
      return {
        ...state,
        deck: unveiledDeck,
        field: unveiledField,
        trash: distTrash,
        answer,
      };
    }
    default: {
      return state;
    }
  }
};
