import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
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
        <CardContent sx={{display: 'flex', gap: 3, flexDirection: 'column'}}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={8}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h6">{title}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Grid container item spacing={3}>
                <Grid item xs={4}>
                  {completed ? (
                    <IconButton aria-label="checked" size="medium">
                      <CheckBoxIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="unchecked" size="medium">
                      <CheckBoxOutlineBlankIcon />
                    </IconButton>
                  )}
                </Grid>
                <Grid item xs={4}>
                  <IconButton
                    aria-label="edit"
                    size="medium"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <EditIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={4}>
                  <IconButton aria-label="delete" size="medium">
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{border: '1px solid rgba(0, 0, 0, 0.12)', p: 1, borderRadius: 2}}>This is my card description</Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ToDoCard;
