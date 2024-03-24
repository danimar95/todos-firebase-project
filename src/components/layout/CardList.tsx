import { Box, Button, Card, CardContent, CardHeader } from "@mui/material";
import ToDoCard from "./ToDoCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import ToDoModalForm from "./ToDoModalForm";

const CardList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      height="80vh"
      overflow="auto"
    >
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#D2E3C8",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 500,
        }}
      >
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <CardHeader title="To Dos App with ReactJS" />
            <Button
              sx={{
                borderRadius: 2,
                color: '#86A789',
                fontWeight: '500'
              }}
              startIcon={<AddCircleIcon />}
              onClick={() => setIsOpen(!isOpen)}
            >
              Add To Do
            </Button>
          </Box>
          <ToDoCard title="Take a shower" completed isOpen={isOpen} setIsOpen={setIsOpen} />
        </CardContent>
      </Card>
      <ToDoModalForm isOpen={isOpen} setIsOpen={setIsOpen} isEditing={false} />
    </Box>
  );
};

export default CardList;
