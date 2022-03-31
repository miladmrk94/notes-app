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

  const addnote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }
  return (
    <div className="container">
      <NoteList notes={notes} handleAddNote={addnote} handleDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
