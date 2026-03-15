import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "Nayan",
  //initial value is required
  initialState: {
    value: 0,
  },
  // it's a function for changing states
  reducers: {
    increment: (state) => {
      // this is action to perform
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
