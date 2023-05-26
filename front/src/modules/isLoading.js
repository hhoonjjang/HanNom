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

export const isLoadingThunk = createAsyncThunk(
  "isLoading/isLoadingThunk",
  async (isLoading) => {
    return await promiseTime(isLoading);
  }
);

const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: { isLoading: false },
  reducers: {
    setIsLoading: (state, action) => {
      return action.payload.isLoading;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(isLoadingThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(isLoadingThunk.fulfilled, (state, action) => {
        state.isLoading = action.payload;
      })
      .addCase(isLoadingThunk.rejected, (state, action) => {
        state.isLoading = undefined;
      });
  },
});

export const action = isLoadingSlice.actions;
export const reducer = isLoadingSlice.reducer;

export default isLoadingSlice;
