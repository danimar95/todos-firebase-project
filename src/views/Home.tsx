import { Box } from "@mui/material";
import CardList from "../components/layout/CardList";
import TopBar from "../components/layout/TopBar";

const Home = () => {
  return (
    <Box sx={{width: '100%'}}>
      <TopBar />
      <CardList />
    </Box>
  );
};

export default Home;
