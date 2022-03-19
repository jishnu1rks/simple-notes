import React, { useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

const Search = ({ handleSearchChange }: any) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    handleSearchChange(e.target.value);
  };
  return (
    <div className="search">
      <FaSearch />
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
