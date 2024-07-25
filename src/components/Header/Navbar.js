import React from "react";
import "./Navbar.css";
import { navItems } from "../../constants";
import cydel from "../../assets/cydel.png";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

export const Navbar = ({ theme, onSetTheme, clickMenu, onClickMenu }) => {
  function handleToggleMode() {
    theme === "light" ? onSetTheme("dark") : onSetTheme("light");
  }

  function handleClickMenu() {
    onClickMenu((show) => !show);
  }
  return (
    <nav className={`navbar ${clickMenu ? "active" : ""}`}>
      <div className="logo-wrapper">
        <a href="#home">
          <img src={cydel} alt="company logo" className="logo" />
        </a>
        <a href="#home">
          <span>Cydel</span>
        </a>
      </div>

      <ul className={`nav-links ${clickMenu ? "active" : ""}`}>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <button
        className={`btn-toggle ${clickMenu ? "active" : ""}`}
        onClick={handleToggleMode}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </button>

      {clickMenu ? (
        <X className="icon" onClick={handleClickMenu} />
      ) : (
        <Menu className="icon" onClick={handleClickMenu} />
      )}
    </nav>
  );
};
