import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { auth } from '../firebase';
import { register } from "../services/auth/requests";
import { useAppDispatch } from "../hooks";
import { setToken } from "../redux/auth.slice";

interface AuthenticationProps {
  isRegistration: boolean,
};

const Authentication = ({
    isRegistration,
}: AuthenticationProps) => {
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = async() => {
    const registerUser = await register(auth, email, password)
    .then(async(userCredential) => {
      const token = await userCredential.user.getIdToken()
      dispatch(setToken(token))
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <FormControl
        sx={{
          p: 1,
          display: "flex",
          gap: 2,
          width: "500px",
          borderRadius: 2,
          boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h6" component="h2">
          {isRegistration ? "Register Form" : "Log in Forn"}
        </Typography>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Box sx={{ position: "relative" }}>
          <TextField
            label="Password"
            type={`${hidePass ? "password" : "text"}`}
            sx={{ width: "100%" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <IconButton
            aria-label="show-password"
            sx={{ position: "absolute", right: "1rem", top: "0.5rem" }}
            onClick={() => setHidePass(!hidePass)}
          >
            {hidePass ? (
             <VisibilityOffIcon/>
            ): (
             <VisibilityIcon />
            )}
          </IconButton>
        </Box>
        <Button
          sx={{
            p: 1,
            mt: 2,
            display: "flex",
            width: "20%",
            alignSelf: "end",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Authentication;
