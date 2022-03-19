import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./Notes.css";
import { useNotes } from "../Context/notes";
import moment from "moment";
import { motion } from "framer-motion";

const Note = ({ notedetails }: any) => {
  const notesContext = useNotes();
  const handleNoteRemove = (e: React.MouseEvent, notedetails: any) => {
    e.preventDefault();
    notesContext.removeNote(notedetails?.id);
  };
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <article>
        <textarea
          disabled
          defaultValue={notedetails.text}
          style={{
            pointerEvents: "none",
            color: "#262626",
          }}
        ></textarea>
        <div className="note__footer">
          <div className="date">
            {moment(notedetails.date).format("DD/MM/yyyy hh:mm A")}
          </div>
          <motion.div
            className="delete"
            whileHover={{ scale: 1.5 }}
            onClick={(e) => handleNoteRemove(e, notedetails)}
          >
            <AiOutlineDelete />
          </motion.div>
        </div>
      </article>
    </motion.div>
  );
};

export default Note;
