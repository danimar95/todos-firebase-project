import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
const existToken = localStorage.getItem('authToken') !== null ? JSON.parse(localStorage.getItem('authToken')!) : '';

const initialState = {
  token: existToken,
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