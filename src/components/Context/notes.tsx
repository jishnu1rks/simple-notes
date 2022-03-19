import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const NotesContext = createContext<any>(null);

export const NotesProvider = ({ children }: any) => {
  const [notes, setNotes] = useState<any>([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("simple-notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("simple-notes", JSON.stringify(notes));
  }, [notes]);

  const addNotes = (newNote: any) => {
    setNotes([...notes, newNote]);
  };

  const removeNote = (id: string) => {
    const newNotes = notes.filter((note: any) => note?.id !== id);
    setNotes(newNotes);
  };

  return (
    <NotesContext.Provider value={{ notes, addNotes, removeNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within NotesProvider");
  }
  return context;
};
