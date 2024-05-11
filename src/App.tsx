import Header from "./components/Header";
import ItemGrid from "./components/ItemGrid";
import { Grid, GridItem, Box, Show, HStack } from "@chakra-ui/react";
import "./App.css";
import Item from "./components/Item";

const App = () => {
  return (
    <Grid
      templateColumns="1fr"
      templateRows="auto 1fr"
      gap={4}
      padding={4}
      bg="#E8E6E7"
      minHeight="100vh"
    >
      <GridItem>
        <Header />
      </GridItem>
      <GridItem>
        <Item />
      </GridItem>
    </Grid>
  );
};

export default App;
