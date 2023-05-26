import { configureStore } from "@reduxjs/toolkit";
import { reducer as accountReducer } from "./account.js";
import { reducer as usernameReducer } from "./username.js";
import { reducer as isLoadingReducer } from "./isLoading.js";
const store = configureStore({
  reducer: {
    account: accountReducer,
    username: usernameReducer,
    isLoading: isLoadingReducer,
  },
});

export default store;
