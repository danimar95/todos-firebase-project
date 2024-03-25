import { Box, Button, Card, CardContent, CardHeader } from "@mui/material";
import ToDoCard from "./ToDoCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DoneIcon from "@mui/icons-material/Done";
import PendingIcon from "@mui/icons-material/Pending";
import ListIcon from "@mui/icons-material/List";
import { useEffect, useState } from "react";
import ToDoModalForm from "./ToDoModalForm";
import { getDatabase, onValue, ref } from "firebase/database";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  setCurrentTodo,
  setFilter,
  setFilteredTodos,
  setIsEditing,
  setTodos,
} from "../../redux/todos.slice";

const CardList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = useAppSelector((state) => state.auth.token);
  const todos = useAppSelector((state) => state.todos.todos);
  const filteredTodos = useAppSelector((state) => state.todos.filteredTodos);
  const isLoading = useAppSelector((state) => state.todos.isLoading);
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    setIsOpen(!isOpen);
    dispatch(setIsEditing(false));
    dispatch(setCurrentTodo({}));
  };

  const handleFilter = (filter: string) => {
    dispatch(setFilter(filter));
    dispatch(setFilteredTodos());
  };

  useEffect(() => {
    const db = getDatabase();
    const unsubscribe = onValue(ref(db, `users/${token}/todos`), (snapshot) => {
      const data = snapshot.val();
      dispatch(setTodos(Object.values(data || {})));
      dispatch(setFilteredTodos());
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#e7e1e5",
          boxShadow: 1,
          borderRadius: 2,
          px: 4,
          minWidth: 800,
          m: 4,
        }}
      >
        <CardContent
          sx={{ p: 0, display: "flex", gap: 1, flexDirection: "column" }}
        >
          <Box display="flex" justifyContent="space-between">
            <CardHeader title="To Dos App" />
            <Button
              sx={{
                borderRadius: 2,
                color: "#4a4767",
                fontWeight: "500",
              }}
              startIcon={<AddCircleIcon />}
              onClick={handleAddTodo}
            >
              Add To Do
            </Button>
          </Box>
          <Box>
            <Button
              sx={{
                borderRadius: 2,
                color: "#4a4767",
                fontWeight: "500",
              }}
              endIcon={<DoneIcon />}
              onClick={() => handleFilter("completed")}
            >
              Completed
            </Button>
            <Button
              sx={{
                borderRadius: 2,
                color: "#4a4767",
                fontWeight: "500",
              }}
              endIcon={<PendingIcon />}
              onClick={() => handleFilter("pending")}
            >
              Pending
            </Button>
            <Button
              sx={{
                borderRadius: 2,
                color: "#4a4767",
                fontWeight: "500",
              }}
              endIcon={<ListIcon />}
              onClick={() => handleFilter("all")}
            >
              All
            </Button>
          </Box>
          <Box
            sx={{
              maxHeight: "50vh",
              overflow: "auto",
              gap: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {filteredTodos.map((todo) => (
              <ToDoCard
                key={`${todo.id}-${todo.createdAt}`}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                todo={todo}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
      <ToDoModalForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};

export default CardList;
