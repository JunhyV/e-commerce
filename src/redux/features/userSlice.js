import { createSlice} from "@reduxjs/toolkit";
import { callLogin } from "../../utils/callLogin";

const initialState = {
  user: {
    data: "",
    success: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: async (state, action) => {
        const {email, password} = action.payload;
            const data = await callLogin(email, password);   
            state.user = data;
    },
    signOut: () => {
      return initialState;
    },
  },
});

export const { signOut, signUp } = userSlice.actions;

export const userReducer = userSlice.reducer;
