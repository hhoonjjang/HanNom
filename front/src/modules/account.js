import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const promiseTime = (count) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(count);
      }, 100);
    } catch (error) {
      reject(error);
    }
  });
};

export const accountThunk = createAsyncThunk(
  "account/accountThunk",
  async (account) => {
    return await promiseTime(account);
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState: { isLoading: false, account: "" },
  reducers: {
    setAccount: (state, action) => {
      return action.payload.account;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(accountThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(accountThunk.fulfilled, (state, action) => {
        state.account = action.payload;
        state.isLoading = false;
      })
      .addCase(accountThunk.rejected, (state, action) => {
        state.isLoading = undefined;
      });
  },
});

export const action = accountSlice.actions;
export const reducer = accountSlice.reducer;

export default accountSlice;
