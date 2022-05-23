import "./App.css";
import { VStack } from "@chakra-ui/react";
import Home from "./components/Home";
import NotesList from "./components/NotesList";

function App() {
  return (
    <VStack>
      <Home />
      <NotesList />
    </VStack>
  );
}

export default App;
