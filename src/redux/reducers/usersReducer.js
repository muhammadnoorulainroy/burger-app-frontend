const initialState = [];

const addUser = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default addUser;
