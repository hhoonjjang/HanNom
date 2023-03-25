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

export const usernameThunk = createAsyncThunk(
  "username/usernameThunk",
  async (username) => {
    return await promiseTime(username);
  }
);

const usernameSlice = createSlice({
  name: "username",
  initialState: { isLoading: false, username: "" },
  reducers: {
    setusername: (state, action) => {
      return action.payload.username;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(usernameThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(usernameThunk.fulfilled, (state, action) => {
        state.username = action.payload;
        state.isLoading = false;
      })
      .addCase(usernameThunk.rejected, (state, action) => {
        state.isLoading = undefined;
      });
  },
});

export const action = usernameSlice.actions;
export const reducer = usernameSlice.reducer;

export default usernameSlice;
