import React, { useRef } from "react";

import {
  VStack,
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  ModalFooter,
  ButtonGroup,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPlus, FaCheck } from "react-icons/fa";
import { nanoid } from "nanoid";
import { useGlobalContext } from "./context";

function AddNote() {
  const { addNote, values, setValues, checkInput } = useGlobalContext();

  const addModal = useDisclosure();
  const firstRef = useRef();

  const handleSubmit = () => {
    const note = {
      id: nanoid(),
      title: values.title,
      description: values.description,
    };
    addNote(note);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <VStack
        h="250px"
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
          onClick={addModal.onOpen}
        />
      </VStack>
      <Modal
        isOpen={addModal.isOpen}
        onClose={addModal.onClose}
        initialFocusRef={firstRef}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb="6">
              <FormLabel>Title</FormLabel>
              <Input
                ref={firstRef}
                type="text"
                placeholder="Title..."
                value={values.title}
                onChange={handleChange}
                name="title"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                size="md"
                resize="vertical"
                placeholder="Description..."
                value={values.description}
                onChange={handleChange}
                name="description"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <IconButton
                icon={<FaCheck />}
                colorScheme="green"
                onClick={() => {
                  if (checkInput(values.title, values.description)) {
                    handleSubmit();
                    addModal.onClose();
                  }
                }}
              />
              <Button colorScheme="red" onClick={addModal.onClose}>
                Close
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddNote;
