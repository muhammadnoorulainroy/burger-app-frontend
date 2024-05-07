const initialState = 0;

const handleMeatCount = (state = initialState, action) => {
  switch (action.type) {
    case "INC_MEAT":
      return state + 1;
    case "DEC_MEAT":
      return state - 1;
    default:
      return state;
  }
};

export default handleMeatCount;
