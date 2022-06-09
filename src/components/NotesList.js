import React from "react";
import {
  ButtonGroup,
  IconButton,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import AddNote from "./AddNote";
import { useGlobalContext } from "./context";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

function NotesList() {
  const { notes, deleteNote } = useGlobalContext();

  return (
    <VStack
      m={4}
      py={4}
      w={{ base: "90vw", sm: "90vw", md: "80vw", lg: "70vw" }}
    >
      <SimpleGrid w="100%" columns={{ sm: 1, md: 2, lg: 3 }} spacing="4">
        <AnimatePresence>
          <AddNote />
          {notes.map((note) => (
            <VStack
              p="3"
              h="250px"
              bg="yellow.300"
              border="2px"
              borderColor="yellow.800"
              borderRadius="2xl"
              boxShadow="xl"
              divider={<StackDivider />}
              key={note.id}
              as={motion.div}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              layout
            >
              <Text h="10%" fontSize="xl" fontWeight="bold">
                {note.title}
              </Text>
              <Text
                h="70%"
                w="100%"
                alignSelf="flex-start"
                overflow="auto"
                className="content"
              >
                {note.description}
              </Text>
              <ButtonGroup h="20%" gap="2" alignSelf="flex-end" size="sm">
                {/* <IconButton icon={<FaEdit />} colorScheme="blue" /> */}
                <IconButton
                  icon={<FaTrashAlt />}
                  colorScheme="red"
                  onClick={() => deleteNote(note.id)}
                />
              </ButtonGroup>
            </VStack>
          ))}
        </AnimatePresence>
      </SimpleGrid>
    </VStack>
  );
}

export default NotesList;
