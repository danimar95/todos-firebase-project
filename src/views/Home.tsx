import { Box } from "@mui/material";
import CardList from "../components/layout/CardList";
import TopBar from "../components/layout/TopBar";

const Home = () => (
  <Box sx={{ display: "flex", height: "100%" ,width: "100%", justifyContent: "center", alignItems: "center" }}>
    <TopBar />
    <CardList />
  </Box>
);

export default Home;
