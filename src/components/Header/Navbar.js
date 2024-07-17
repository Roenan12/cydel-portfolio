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
      <a href="#home">
        <img src={cydel} alt="company logo" className="logo" />
      </a>
      <p>Cydel</p>

      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button className="btn-toggle" onClick={handleToggleMode}>
        {theme === "light" ? <Moon color="#303841" /> : <Sun color="#EEEEEE" />}
      </button>
    </nav>
  );
};
