import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";

import { data } from "./data";

function NotesList() {
  return (
    <VStack m={4} w={{ sm: "90vw", md: "80vw", lg: "70vw" }}>
      <SimpleGrid w="100%" minChildWidth="250px" spacing="4" border="2x">
        <VStack
          h="200px"
          borderRadius="2xl"
          boxShadow="xl"
          bg="blue.300"
          justifyContent="center"
        >
          <IconButton
            icon={<FaPlus />}
            size="lg"
            colorScheme="green"
            isRound="true"
          />
        </VStack>
        {data.map((dat) => (
          <VStack
            p="3"
            h="200px"
            bg="yellow.200"
            borderRadius="2xl"
            boxShadow="xl"
            divider={<StackDivider />}
          >
            <Text h="10%">{dat.title}</Text>
            <Text
              h="70%"
              w="100%"
              alignSelf="flex-start"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {dat.description}
            </Text>
            <ButtonGroup h="20%" gap="3" alignSelf="flex-end" size="sm">
              <IconButton icon={<FaEdit />} colorScheme="blue" />
              <IconButton icon={<FaTrashAlt />} colorScheme="red" />
            </ButtonGroup>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default NotesList;
