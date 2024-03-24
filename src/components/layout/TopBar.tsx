import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <AppBar position="static" sx={{bgcolor: '#B2C8BA', color: '#435B66', fontWeight: 600, width: '100%'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome Martha!
        </Typography>
        <Button color="inherit">Log out</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
