import {
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  VStack,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import React from "react";
import { useGlobalContext } from "./context";

function Home() {
  const { searchNotes } = useGlobalContext();

  return (
    <VStack
      m={4}
      w={{ base: "90vw", sm: "90vw", md: "80vw", lg: "70vw" }}
      spacing="4"
    >
      <Heading>Notes App</Heading>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.500"
          children={<FaSearch />}
        />
        <Input
          type="text"
          variant="flushed"
          bg="gray.100"
          borderColor="gray.500"
          borderBottom="2px"
          borderTopRadius="xl"
          placeholder="Search Note by Title"
          fontWeight="bold"
          onChange={(e) => searchNotes(e.target.value)}
        />
      </InputGroup>
    </VStack>
  );
}

export default Home;
