const initialState = {
  deck: [
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
  ],
  field: [0, 0, 0, 0, 0, 0],
  trash: [],
  answer: 0,
};

// 100: 夜
// 101: x2
// 102: Max->0
// 103: ?

export default (state = initialState, action = {}) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
