import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todos.slice";
import authSlice from "./auth.slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    todos: todosSlice,
    auth: authSlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>;
