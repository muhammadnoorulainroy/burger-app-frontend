export const increaseLettuce = () => {
  return { type: "INC_LETTUCE" };
};

export const decreaseLettuce = () => {
  return { type: "DEC_LETTUCE" };
};

export const increaseMeat = () => {
  return { type: "INC_MEAT" };
};

export const decreaseMeat = () => {
  return { type: "DEC_MEAT" };
};

export const increaseBacon = () => {
  return { type: "INC_BACON" };
};

export const decreaseBacon = () => {
  return { type: "DEC_BACON" };
};

export const increaseCheese = () => {
  return { type: "INC_CHEESE" };
};

export const decreaseCheese = () => {
  return { type: "DEC_CHEESE" };
};

export const login = () => {
  return { type: "LOGIN" };
};

export const signout = () => {
  return { type: "SIGN_OUT" };
};

export const signup = (user) => {
  return { type: "SIGN_UP", payload: user };
};
