import React from "react";
import { Box, Flex, Link, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
    >
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        Skypho21 Portfolio
      </Heading>
      <Box>
        <Link href="#projects" p={4} _hover={{ color: "gray.200" }}>
          Projects
        </Link>
        <Link href="#about" p={4} _hover={{ color: "gray.200" }}>
          About
        </Link>
        <Link href="#contact" p={4} _hover={{ color: "gray.200" }}>
          Contact
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
