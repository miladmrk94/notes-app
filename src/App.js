import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NotesList";

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Hello ! im shayan , This is first notes",
      date: "13/04/2021"
    },
    {
      id: nanoid(),
      text: "Hello ! im shayan , This is second notes",
      date: "13/04/2021"
    },
    {
      id: nanoid(),
      text: "Hello ! im shayan , This is third notes",
      date: "13/04/2021"
    }
  ]);
  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
