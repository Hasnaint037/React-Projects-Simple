import { configureStore } from "@reduxjs/toolkit";
import reducer from "./numberSlice.js";

export const store = configureStore({
  reducer: reducer,
});
