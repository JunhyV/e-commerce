import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: {
    data: "",
    success: false,
  },
  signUp: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
      state.signUp = true
      console.log(state.user);
    },
    signOut: () => {
      return initialState;
    },
  },
});

export const { signOut, signUp } = userSlice.actions;

export const userReducer = userSlice.reducer;
