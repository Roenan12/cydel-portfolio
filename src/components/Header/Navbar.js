import React, { useState } from "react";
import "./Navbar.css";
import { navItems } from "../../constants";
import cydel from "../../assets/cydel.png";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

export function Navbar({ theme, onSetTheme }) {
  //change nav color on scroll
  const [colorNav, setNavColor] = useState(false);

  function changeNavColor() {
    if (window.scrollY >= 90) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }

  window.addEventListener("scroll", changeNavColor);

  //show mobile nav
  const [clickMenu, setClickMenu] = useState(false);

  function handleClickMenu() {
    setClickMenu((show) => !show);
  }

  function handleChangeTheme() {
    theme === "light" ? onSetTheme("dark") : onSetTheme("light");
  }

  return (
    <header className={colorNav ? "header header-bg" : "header"}>
      <nav className={`navbar ${clickMenu ? "active" : ""}`}>
        <div className="logo">
          <a href="#home">
            <img className="cydel-logo" src={cydel} alt="company logo" />
          </a>
          <a href="#home">
            <span>Cydel</span>
          </a>
        </div>

        <ul className={clickMenu ? "nav-menu active" : "nav-menu"}>
          {navItems.map((item, index) => (
            <li
              className="nav-item"
              key={index}
              onClick={() => setClickMenu(false)}
            >
              <a href={item.href} onCLick={handleClickMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="theme-icon" onClick={handleChangeTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </div>

        <div className="hamburger" onClick={handleClickMenu}>
          {clickMenu ? (
            <X className="icon" size={30} />
          ) : (
            <Menu className="icon" size={30} />
          )}
        </div>
      </nav>
    </header>
  );
}
