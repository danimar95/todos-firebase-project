import { Box } from "@mui/material";
import "./App.css";
import Home from "./views/Home";

function App() {
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
      <Home />
    </Box>
  );
}

export default App;
