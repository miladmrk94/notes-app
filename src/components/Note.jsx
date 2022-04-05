import { MdDeleteForever } from "react-icons/md";
import { motion } from "framer-motion";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <motion.div
      animate={{
        scale: 0.9,
      }}
      whileHover={{ scale: 1 }}
      className="note"
    >
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          cursor={"pointer"}
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </motion.div>
  );
};
export default Note;
