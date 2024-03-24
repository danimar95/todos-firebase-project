import { Box } from "@mui/material";
import "./App.css";
import Authentication from "./views/Authentication";
import Home from "./views/Home";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Authentication isRegistration/>
    </Box>
  );
}

export default App;
