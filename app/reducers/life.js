const initialState = {
  playersLife: [3, 3, 3, 3, 3, 3],
};

export default (state = initialState, action = {}) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
