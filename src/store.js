//import { legacy_createStore as createStore} from 'redux'
//import rootReducer from './redux/reducers'

import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./redux-toolkit/ingredients/ingredientsSlice";

import StateLoader from "./stateLoader";
const stateLoader = new StateLoader();

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
  },
});

store.subscribe(() => {
  //console.log("updated state", store.getState());
  stateLoader.saveState(store.getState());
});

export default store;
