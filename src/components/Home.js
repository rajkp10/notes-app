import {
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  VStack,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import React from "react";

function Home() {
  return (
    <VStack m={4} w={{ sm: "90vw", md: "80vw", lg: "70vw" }} spacing="4">
      <Heading>Notes App</Heading>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.500"
          children={<FaSearch />}
        />
        <Input type="text" variant="outline" />
      </InputGroup>
    </VStack>
  );
}

export default Home;
