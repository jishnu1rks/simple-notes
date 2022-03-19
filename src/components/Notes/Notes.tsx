import React, { useEffect, useState } from "react";
import "./Notes.css";
import NewNote from "./NewNote";
import Note from "./Note";
import { useNotes } from "../Context/notes";
import { motion, AnimatePresence } from "framer-motion";
import { ImFileEmpty } from "react-icons/im";
const Notes = ({ search }: any) => {
  const notesContext = useNotes();
  const [noteslist, setNoteslist] = useState([]);
  const [addNote, setAddNote] = useState(true);
  useEffect(() => {
    setNoteslist(
      notesContext.notes.filter((note: any) => note.text.includes(search))
    );
  }, [notesContext.notes, search]);
  return (
    <AnimatePresence>
      <div className="notes__header">
        <h2>Notes List</h2>
        {!addNote ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setAddNote(!addNote)}
          >
            Add Note
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setAddNote(!addNote)}
          >
            Show Notes Only
          </motion.button>
        )}
      </div>
      <div className="article__list">
        {addNote && <NewNote />}
        {!addNote && noteslist.length === 0 && (
          <div className="empty">
            <ImFileEmpty />
            <p>
              click <span>Add Note</span> button
            </p>
          </div>
        )}
        {noteslist?.map((note: any) => (
          <Note key={note?.id} notedetails={note} />
        ))}
      </div>
    </AnimatePresence>
  );
};

export default Notes;
