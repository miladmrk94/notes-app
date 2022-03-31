import AddNote from "./AddNote";
import Note from "./Note";

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
       
          
            <div className="notes-list">

                {notes.map((note) => {
                    return <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />
                })}
                <AddNote handleAddNote={handleAddNote} />

            </div>

        
    )
}
export default NoteList;