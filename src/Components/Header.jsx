import { Flex, Box, Link, Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      as="header"
      bg="teal.500"
      color="white"
      p={4}
      justify="space-between"
      align="center"
    >
      <Heading size="md">Your Name</Heading>
      <Box>
        <Link href="#about" p={2} _hover={{ textDecoration: "underline" }}>About</Link>
        <Link href="#projects" p={2} _hover={{ textDecoration: "underline" }}>Projects</Link>
        <Link href="#contact" p={2} _hover={{ textDecoration: "underline" }}>Contact</Link>
      </Box>
    </Flex>
  );
}

export default Header;
