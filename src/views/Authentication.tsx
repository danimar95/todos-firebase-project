import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { auth } from "../firebase";
import { logIn, signUp } from "../services/auth/requests";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setIsRegistration, setToken } from "../redux/auth.slice";

const Authentication = () => {
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isRegistration = useAppSelector((state) => state.auth.isRegistration);
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    if (isRegistration) {
      await signUp(auth, email, password)
        .then(async (userCredential) => {
          dispatch(setToken(userCredential.user.uid));
          localStorage.setItem(
            "authToken",
            JSON.stringify(userCredential.user.uid)
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      await logIn(auth, email, password)
        .then(async (userCredential) => {
          dispatch(setToken(userCredential.user.uid));
          localStorage.setItem(
            "authToken",
            JSON.stringify(userCredential.user.uid)
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          if (errorCode === "auth/invalid-credential") {
            console.log(
              "Invalid credentials. Please review them or go to the Register Form first"
            );
          } else {
            console.log(errorMessage);
          }
        });
    }
  };

  const handleRegister = () => {
    dispatch(setIsRegistration(!isRegistration));
  };

  const resetValues = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    resetValues();
  }, [isRegistration]);

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
          {isRegistration ? "Register Form" : "Log in Form"}
        </Typography>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Box sx={{ position: "relative" }}>
          <TextField
            label="Password"
            type={`${hidePass ? "password" : "text"}`}
            sx={{ width: "100%" }}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <IconButton
            aria-label="show-password"
            sx={{ position: "absolute", right: "1rem", top: "0.5rem" }}
            onClick={() => setHidePass(!hidePass)}
          >
            {hidePass ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Button
            sx={{
              p: 1,
              mt: 2,
              display: "flex",
              width: "30%",
            }}
            onClick={handleRegister}
          >
            {isRegistration ? "Log in Form" : "Register Form"}
          </Button>
          <Button
            sx={{
              p: 1,
              mt: 2,
              display: "flex",
              width: "30%",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default Authentication;
