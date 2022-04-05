import AddNote from "./AddNote";
import Note from "./Note";
import { motion } from "framer-motion";

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <motion.div className="notes-list">
      {notes.map((note) => {
        return (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        );
      })}
      <AddNote handleAddNote={handleAddNote} />
    </motion.div>
  );
};
export default NoteList;
