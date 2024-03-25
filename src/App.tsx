import { Box, Container } from "@mui/material";
import Home from "./views/Home";
import Authentication from "./views/Authentication";
import { useAppSelector } from "./hooks";

function App() {
  const token = useAppSelector((state) => state.auth.token);

  return (
    <Container sx={{height: "100%"}} maxWidth={false} disableGutters>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          background: "linear-gradient(to right, #C06C84, #6C5B7B, #618baf)",
        }}
      >
        {token ? <Home /> : <Authentication />}
      </Box>
    </Container>
  );
}

export default App;
