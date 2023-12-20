import { createSlice } from "@reduxjs/toolkit";

interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    resetState: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, resetState } = counterSlice.actions;
export default counterSlice.reducer;
