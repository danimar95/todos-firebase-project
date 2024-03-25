import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import PendingIcon from "@mui/icons-material/Pending";
import { Dispatch, SetStateAction } from "react";
import { getDatabase, ref, remove } from "firebase/database";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Todos, setCurrentTodo, setIsEditing } from "../../redux/todos.slice";

interface TodoCardProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  todo: Todos;
}

const ToDoCard = ({ isOpen, setIsOpen, todo }: TodoCardProps) => {
  const { title, isCompleted, description, id, createdAt } = todo;
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  
  const handleDeleteTodo = () => {
    const db = getDatabase();
    remove(ref(db, `users/${token}/todos/${id}`)).catch((error) => {
      console.error("error deleting", error);
    });
  };

  const handleEditTodo = () => {
    dispatch(setIsEditing(true));
    dispatch(setCurrentTodo(todo));
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#cec9d6",
          boxShadow: 1,
          borderRadius: 2,
          minWidth: 500,
          px: 2
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column", p: 1 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={10}
              display="flex"
              justifyContent="start"
              alignItems="center"
              gap={2}
            >
              {isCompleted ? (
                <DoneIcon color="disabled" />
              ) : (
                <PendingIcon color="disabled" />
              )}
              <Typography
                variant="overline"
                sx={{
                  textDecorationLine: isCompleted ? "line-through" : "none",
                }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Grid container item spacing={3}>
                <Grid item xs={6}>
                  <IconButton
                    aria-label="edit"
                    size="medium"
                    onClick={handleEditTodo}
                  >
                    <EditIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={6}>
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    onClick={handleDeleteTodo}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {description}
          </Grid>
          <Typography
            sx={{ alignSelf: "end" }}
            variant="subtitle2"
          >{`Created at: ${createdAt}`}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ToDoCard;
