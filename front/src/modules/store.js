import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./counter.js";

export const store = configureStore({
  reducer: { count: reducer },
});
