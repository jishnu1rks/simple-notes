import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Notes from "./components/Notes";
import { NotesProvider } from "./components/Context/notes";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };
  return (
    <div className={`app ${darkMode ? "darkMode" : ""}`}>
      <div className="content">
        <NotesProvider>
          <Navbar
            isdarkMode={darkMode}
            handleModeChange={() => setDarkMode(!darkMode)}
          />
          <Search handleSearchChange={handleSearchChange} />
          <Notes search={searchText} />
        </NotesProvider>
      </div>
    </div>
  );
}

export default App;
