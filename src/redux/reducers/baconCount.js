const initialState = 0;

const handleBaconCount = (state = initialState, action) => {
  switch (action.type) {
    case "INC_BACON":
      return state + 1;
    case "DEC_BACON":
      return state - 1;
    default:
      return state;
  }
};

export default handleBaconCount;
