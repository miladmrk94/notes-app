import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NotesList";
import Header from "./components/Header";

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


  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])
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
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleButton={setDarkMode} darkmodeTrue={darkMode} />
        <NoteList notes={notes} handleAddNote={addnote} handleDeleteNote={deleteNote} />
      </div>

    </div>
  );
}

export default App;
