import { Box, Card, CardContent, CardHeader, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Dispatch, SetStateAction } from "react";

interface TodoCardProps {
  title: string;
  completed: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ToDoCard = ({ title, completed, isOpen, setIsOpen }: TodoCardProps) => {
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
        <CardContent>
          <Grid container spacing={2}>
            <Grid
              item
              xs={8}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box>{title}</Box>
            </Grid>
            <Grid item xs={4}>
              <Grid container item spacing={3}>
                <Grid item xs={4}>
                  {completed ? (
                    <IconButton aria-label="checked" size="large">
                      <CheckBoxIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="unchecked" size="large">
                      <CheckBoxOutlineBlankIcon />
                    </IconButton>
                  )}
                </Grid>
                <Grid item xs={4}>
                  <IconButton aria-label="edit" size="large" onClick={() => setIsOpen(!isOpen)}>
                    <EditIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={4}>
                  <IconButton aria-label="delete" size="large">
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ToDoCard;
