import { configureStore, createSlice } from "@reduxjs/toolkit";

const initCount = { count: 0 };

const countSlice = createSlice({
  name: "count",
  initialState: initCount,
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
  },
});

const store = configureStore({
  reducer: {
    count: countSlice.reducer,
  },
});

export const countAction = countSlice.actions;
export default store;
