import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <Box>
      <Header />
      <Box p={5}>
        <Heading as="h1" size="xl" textAlign="center" mb={10}>
          My Portfolio
        </Heading>
        <Projects />
        <About />
        <Contact />
      </Box>
    </Box>
  );
}

export default App;
