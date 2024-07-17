import React from "react";
import "./Navbar.css";
import cydel from "../../assets/cydel.png";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

export const Navbar = ({ theme, onSetTheme }) => {
  function handleToggleMode() {
    theme === "light" ? onSetTheme("dark") : onSetTheme("light");
  }
  return (
    <nav className="navbar">
      <img src={cydel} alt="company logo" className="logo" />
      <p>Cydel</p>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <button className="btn-toggle" onClick={handleToggleMode}>
        {theme === "light" ? <Moon color="#303841" /> : <Sun color="#EEEEEE" />}
      </button>
    </nav>
  );
};
