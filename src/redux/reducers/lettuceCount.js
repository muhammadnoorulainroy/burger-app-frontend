const initialState = 0;

const handleLettuceCount = (state = initialState, action) => {
  switch (action.type) {
    case "INC_LETTUCE":
      return state + 1;
    case "DEC_LETTUCE":
      return state - 1;
    default:
      return state;
  }
};

export default handleLettuceCount;
