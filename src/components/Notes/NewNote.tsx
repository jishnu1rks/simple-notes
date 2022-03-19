import React, { useState } from "react";
import "./Notes.css";
import { useNotes } from "../Context/notes";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";

const maxCharCount = 100;
const NewNote = () => {
  const noteContext = useNotes();
  const [text, setText] = useState("");
  const [currentCharCount, setCurrentCharCount] = useState(maxCharCount);

  const handleNoteTextChange = (e: any) => {
    const charLength = e.target.value?.length;
    setCurrentCharCount(maxCharCount - charLength);
    if (currentCharCount <= maxCharCount) {
      setText(e.target.value);
    }
  };

  const handleAddNote = (e: any) => {
    e.preventDefault();
    const newNote = {
      id: nanoid(),
      text: text.trim(),
      date: new Date().toLocaleString(),
    };
    noteContext.addNotes(newNote);
    setText("");
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.9 }}
    >
      <article className="newnote">
        <textarea
          value={text}
          onChange={handleNoteTextChange}
          placeholder="type here"
          maxLength={maxCharCount}
        ></textarea>
        <div className="note__footer">
          <div className="words">
            <span className={`${currentCharCount === 0 ? "red" : ""}`}>
              {currentCharCount}
            </span>
            remaining
          </div>
          <button onClick={handleAddNote}>Save</button>
        </div>
      </article>
    </motion.div>
  );
};

export default NewNote;
