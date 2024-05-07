import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baconQty: 0,
  cheeseQty: 0,
  lettuceQty: 0,
  meatQty: 0,
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    increaseBacon(state) {
      state.baconQty++;
    },
    decreaseBacon(state) {
      state.baconQty--;
    },
    increaseCheese(state) {
      state.cheeseQty++;
    },
    decreaseCheese(state) {
      state.cheeseQty--;
    },
    increaseLettuce(state) {
      state.lettuceQty++;
    },
    decreaseLettuce(state) {
      state.lettuceQty--;
    },
    increaseMeat(state) {
      state.meatQty++;
    },
    decreaseMeat(state) {
      state.meatQty--;
    },
  },
});

export const {
  increaseBacon,
  decreaseBacon,
  increaseCheese,
  decreaseCheese,
  increaseLettuce,
  decreaseLettuce,
  increaseMeat,
  decreaseMeat,
} = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
