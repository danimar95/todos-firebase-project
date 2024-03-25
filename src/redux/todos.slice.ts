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
  filteredTodos: Todos[];
  isLoading: boolean;
  isEditing: boolean;
  currentTodo: Todos;
  filter: string;
};

const initialState : AuthStateProps = {
  todos : [],
  filteredTodos: [],
  filter: "all",
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
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
    setCurrentTodo: (state, action) => {
     state.currentTodo = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setFilteredTodos: (state) => {
      let filterByState: Todos[] = state.todos;
      if (state.filter === "completed") filterByState = state.todos.filter((todo) =>  todo.isCompleted === true);
      else if (state.filter === "pending") filterByState = state.todos.filter((todo) =>  todo.isCompleted === false);
      state.filteredTodos = filterByState;
    },
  },
});

export const { setTodos, setIsEditing, setCurrentTodo, setFilteredTodos, setFilter } = todosSlice.actions;
export default todosSlice.reducer;
