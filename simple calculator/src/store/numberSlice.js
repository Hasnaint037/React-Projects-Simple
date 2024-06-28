import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};
const slice = createSlice({
  name: "number",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.number = Number(state.number) + Number(action.payload);
    },
    remove: (state, action) => {
      state.number = Number(state.number) - Number(action.payload);
    },
    multiply: (state, action) => {
      state.number = Number(state.number) * Number(action.payload);
    },
    divide: (state, action) => {
      state.number = Number(state.number) / Number(action.payload);
    },
    clear: (state, action) => {
      state.number = 0;
    },
  },
});

export const { add, remove, multiply, divide, clear } = slice.actions;
export default slice.reducer;
