import {
  Box,
  Button,
  FormControl,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface ToDoModalFormProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isEditing: boolean;
}

const ToDoModalForm = ({ isOpen, setIsOpen }: ToDoModalFormProps) => {
  const handleClose = () => {
    setIsOpen(false);
  };

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
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
        }}
      >
        <Box display='flex' justifyContent='space-between'>
          <Typography id="modal-modal-title" variant="h6">
            Add To Do
          </Typography>
          <IconButton aria-label="close-modal" onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <FormControl sx={{
          p:1,
          display:'flex',
          justifyContent:'end',
        }}>
          <TextField
            id="outlined-multiline-flexible"
            label="To do name"
            multiline
            maxRows={4}
          />
          <Button sx={{
            p:1,
            mt:2,
            display: 'flex',
            width: '20%',
            alignSelf: "end",
          }}>Submit</Button>
        </FormControl>
      </Box>
    </Modal>
  );
};

export default ToDoModalForm;
