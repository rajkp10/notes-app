import "./App.css";
import { Divider, VStack } from "@chakra-ui/react";
import Home from "./components/Home";
import NotesList from "./components/NotesList";

function App() {
  return (
    <VStack>
      <Home />
      <Divider w={{ base: "90vw", sm: "90vw", md: "80vw", lg: "70vw" }} />
      <NotesList />
    </VStack>
  );
}

export default App;
