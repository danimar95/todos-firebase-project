import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Dispatch, SetStateAction } from "react";
import { getDatabase, ref, remove, set } from "firebase/database";
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
    remove(ref(db, `users/${token}/todos/${id}`))
      .then(() => {
        console.log("deleted successfully");
      })
      .catch((error) => {
        console.log("error deleting", error);
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
          bgcolor: "#EBF3E8",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 500,
        }}
      >
        <CardContent sx={{ display: "flex", gap: 3, flexDirection: "column" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={10}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {isCompleted ? (
                <IconButton aria-label="checked" size="medium">
                  <CheckBoxIcon />
                </IconButton>
              ) : (
                <IconButton aria-label="unchecked" size="medium">
                  <CheckBoxOutlineBlankIcon />
                </IconButton>
              )}
              <Typography variant="h6">{title}</Typography>
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
