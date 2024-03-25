import { Box, Button, Card, CardContent, CardHeader } from "@mui/material";
import ToDoCard from "./ToDoCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import ToDoModalForm from "./ToDoModalForm";
import { getDatabase, onValue, ref } from "firebase/database";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentTodo, setIsEditing, setTodos } from "../../redux/todos.slice";

const CardList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = useAppSelector((state) => state.auth.token);
  const todos = useAppSelector((state) => state.todos.todos);
  const isLoading = useAppSelector((state) => state.todos.isLoading)
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    setIsOpen(!isOpen)
    dispatch(setIsEditing(false));
    dispatch(setCurrentTodo({}));
  }

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, `users/${token}/todos`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      dispatch(setTodos(Object.values(data)));
    });
  }, [dispatch]);



  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#D2E3C8",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 500,
          m:4,
        }}
      >
        <CardContent sx={{ p: 0, display: 'flex', gap: 2, flexDirection: "column"}}>
          <Box display="flex" justifyContent="space-between">
            <CardHeader title="To Dos App" />
            <Button
              sx={{
                borderRadius: 2,
                color: "#86A789",
                fontWeight: "500",
              }}
              startIcon={<AddCircleIcon />}
              onClick={handleAddTodo}
            >
              Add To Do
            </Button>
          </Box>
          {todos.map((todo) => (
            <ToDoCard
              key={`${todo.id}-${todo.createdAt}`}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              todo={todo}
            />
          ))}
        </CardContent>
      </Card>
      <ToDoModalForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};

export default CardList;
