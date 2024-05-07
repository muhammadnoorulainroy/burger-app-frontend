const initialState = 0;

const handleCheeseCount = (state = initialState, action) => {
  switch (action.type) {
    case "INC_CHEESE":
      return state + 1;
    case "DEC_CHEESE":
      return state - 1;
    default:
      return state;
  }
};

export default handleCheeseCount;
