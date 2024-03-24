import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  token: '',
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;
export const selectCount = (state: RootState) => state.auth.token
export default authSlice.reducer;