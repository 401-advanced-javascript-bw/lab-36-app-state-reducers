let initialState = { currentNumber: 18 };

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'RESET':
      return initialState;
    case 'CHANGE':
      return { currentNumber: Math.random() * 10 };
    default:
      return state;
  }
};
