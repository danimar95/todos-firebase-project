import { Box } from "@mui/material";
import "./App.css";
import Home from "./views/Home";
import Authentication from "./views/Authentication";
import { useAppSelector } from "./hooks";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";

function App() {
  const token = useAppSelector((state) => state.auth.token);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    > 
    {token ? (
     <Home />
    ): (
      <Authentication />
    )}
    </Box>
  );
}

export default App;
