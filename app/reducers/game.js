const initialState = {
  turn: 0,
  calledNumber: 0,
};

export default (state = initialState, action = {}) => {
  const { type } = action;
  switch (type) {
    default: {
      return state;
    }
  }
};
