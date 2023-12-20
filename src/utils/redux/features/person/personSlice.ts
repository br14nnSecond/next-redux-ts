import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPersonState {
  name: string | "";
  age: number | "";
  gender: "Male" | "Female" | "";
}

const initialState: IPersonState = {
  name: "",
  age: "",
  gender: "",
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeAge: (state, action: PayloadAction<number | "">) => {
      state.age = action.payload;
    },
    changeGender: (state, action: PayloadAction<"Male" | "Female" | "">) => {
      state.gender = action.payload;
    },
  },
});

export const { changeName, changeAge, changeGender } = personSlice.actions;
export default personSlice.reducer;
