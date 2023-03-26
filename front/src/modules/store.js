import { configureStore } from "@reduxjs/toolkit";
import { reducer as accountReducer } from "./account.js";
import { reducer as usernameReducer } from "./username.js";
const store = configureStore({
  reducer: { account: accountReducer, username: usernameReducer },
});

export default store;
