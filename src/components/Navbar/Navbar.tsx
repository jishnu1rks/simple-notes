import React from "react";
import "./Navbar.css";
import { GrNotes } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";

type NavbarProps = {
  isdarkMode: boolean;
  handleModeChange: () => void;
};

export default function Navbar({ isdarkMode, handleModeChange }: NavbarProps) {
  return (
    <nav>
      <div className="logo">
        <GrNotes />
        <h2>Simple Notes</h2>
      </div>
      <button
        className={`${isdarkMode ? "light" : ""}`}
        onClick={handleModeChange}
      >
        {!isdarkMode ? <MdOutlineDarkMode /> : <BsFillLightningChargeFill />}
        {isdarkMode ? "Light " : "Dark "} Mode
      </button>
    </nav>
  );
}
