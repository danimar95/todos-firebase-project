import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useAppDispatch } from "../../hooks";
import { setToken } from "../../redux/auth.slice";
const TopBar = () => {
  const dispatch = useAppDispatch();
  const HandleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setToken(""));
        localStorage.removeItem('authToken');
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error('error', error);
      });
  };
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#B2C8BA",
        color: "#435B66",
        fontWeight: 600,
        width: "100%",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome Martha!
        </Typography>
        <Button color="inherit" onClick={HandleLogOut}>
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
