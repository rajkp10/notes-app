import React, { useState, useEffect, useContext } from "react";
import {
  TITLE_ERROR,
  DESCRIPTION_ERROR,
  ADDED_SUCCESS,
  // EDITED_SUCCESS,
  DELETED_SUCCESS,
  SUCCESS,
  ERROR,
} from "./messages";
import { useToast } from "@chakra-ui/react";
const AppContext = React.createContext();

const initialValues = {
  title: "",
  description: "",
};

const AppProvider = ({ children }) => {
  const [values, setValues] = useState(initialValues);
  const [allNotes, setAllNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [notes, setNotes] = useState(allNotes);

  const toast = useToast();

  const addNote = (note) => {
    setAllNotes([...allNotes, note]);
    setValues(initialValues);
    message(ADDED_SUCCESS, SUCCESS);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setAllNotes(newNotes);
    message(DELETED_SUCCESS, SUCCESS);
  };

  const searchNotes = (param) => {
    const searchedNotes = allNotes.filter((note) => {
      return note.title.toLowerCase().includes(param.toLowerCase());
    });
    setNotes(searchedNotes);
  };

  const checkInput = (titleInput, descriptionInput) => {
    if (!titleInput) {
      message(TITLE_ERROR, ERROR);
      return false;
    }
    if (!descriptionInput) {
      message(DESCRIPTION_ERROR, ERROR);
      return false;
    }
    return true;
  };

  const message = (title, status) => {
    toast({
      title: title,
      status: status,
      position: "top",
      variant: "left-accent",
      duration: 1500,
      isClosable: false,
    });
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(allNotes));
    setNotes(allNotes);
  }, [allNotes]);

  return (
    <AppContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        searchNotes,
        values,
        setValues,
        checkInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
