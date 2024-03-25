import { createSlice } from "@reduxjs/toolkit";

export interface Todos {
  description: string;
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt: string;
}

interface AuthStateProps {
  todos: Todos[];
  isLoading: boolean;
  isEditing: boolean;
  currentTodo: Todos;
};
const initialState : AuthStateProps = {
  todos : [],
  isLoading: true,
  isEditing: false,
  currentTodo: {
    title: "",
    description: "",
    isCompleted: false,
    id: "",
    createdAt: "",
  }
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
    },
    addTodo: (state, action) => {
      state.todos.unshift(action.payload)
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
    setCurrentTodo: (state, action) => {
     state.currentTodo = action.payload;
    },
  },
});

export const { setTodos, setIsEditing, setCurrentTodo } = todosSlice.actions;
export default todosSlice.reducer;
