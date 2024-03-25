import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  token: localStorage.getItem('authToken') !== null ? JSON.parse(localStorage.getItem('authToken')!) : '',
  isRegistration: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsRegistration: (state, action) => {
      state.isRegistration = action.payload;
    },
  },
});

export const { setToken, setIsRegistration } = authSlice.actions;
export const selectCount = (state: RootState) => state.auth.token
export default authSlice.reducer;