import { combineReducers } from "redux";

import handleBaconCount from "./baconCount";
import handleCheeseCount from "./cheeseCount";
import handleLettuceCount from "./lettuceCount";
import handleMeatCount from "./meatCount";
import isLoggedIn from "./authReducer";
import addUser from "./usersReducer";


const rootReducer = combineReducers({
  handleBaconCount,
  handleCheeseCount,
  handleLettuceCount,
  handleMeatCount,
  isLoggedIn,
  addUser
});

export default rootReducer;
