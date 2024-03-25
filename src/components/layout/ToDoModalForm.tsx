import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  Modal,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector } from "../../hooks";
import { getDatabase, ref, set, update } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

interface ToDoModalFormProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ToDoModalForm = ({ isOpen, setIsOpen }: ToDoModalFormProps) => {
  const token = useAppSelector((state) => state.auth.token);
  const isEditing = useAppSelector((state) => state.todos.isEditing);
  const currentTodo = useAppSelector((state) => state.todos.currentTodo);
  const todos = useAppSelector((state) => state.todos.todos);
  const [title, setTite] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const createTodo = async () => {
    const data = {
      id: uuidv4(),
      title: title,
      description: description,
      isCompleted: isCompleted,
      createdAt: new Date().toDateString(),
    };

    const db = getDatabase();
    await set(ref(db, `users/${token}/todos/${data.id}`), data)
      .then(() => {
        setIsOpen(false);
      })
      .catch((err) => {
        setIsOpen(false);
        console.error("err", err);
      });
  };

  const editTodo = async() => {
    const db = getDatabase();
    const updatedTodo = {
      title: title,
      id: currentTodo.id,
      description: description,
      createdAt: currentTodo.createdAt,
      isCompleted: isCompleted,
    };

    return await update(ref(db), {[`users/${token}/todos/${currentTodo.id}`]: updatedTodo})
      .then(() => {
        setIsOpen(false);
      })
      .catch((error) => {
        setIsOpen(false);
        console.error("error", error);
      });
  };

  useEffect(() => {
    setTite(currentTodo.title || "");
    setDescription(currentTodo.description || "");
    setIsCompleted(currentTodo.isCompleted || false);
  }, [currentTodo]);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "#e7e1e5",
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography id="modal-modal-title" variant="h6">
            {`${isEditing ? "Edit" : "Add"} To Do`}
          </Typography>
          <IconButton aria-label="close-modal" onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <FormControl
          sx={{
            p: 1,
            display: "flex",
            justifyContent: "end",
            gap: 2,
          }}
        >
          <TextField
            id="outlined-multiline-flexible"
            label="To do title"
            multiline
            maxRows={2}
            value={title}
            onChange={(e) => setTite(e.target.value)}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="To do description"
            multiline
            maxRows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Box display="flex" justifyContent="space-between">
            <FormControlLabel
              control={
                <Switch
                  checked={isCompleted}
                  onChange={() => setIsCompleted(!isCompleted)}
                  color="secondary"
                />
              }
              label={`${currentTodo.isCompleted ? "Completed" : "Pending"}`}
            />
            <Button
              sx={{
                p: 1,
                display: "flex",
                width: "20%",
                alignSelf: "end",
              }}
              onClick={isEditing ? editTodo : createTodo}
            >
              Submit
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Modal>
  );
};

export default ToDoModalForm;
