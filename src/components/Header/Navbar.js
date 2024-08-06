import React, { useState } from "react";
import "./Navbar.css";
import { navItems } from "../../constants";
import cydel from "../../assets/cydel.png";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

export function Navbar() {
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
              <a href={item.href} onClick={handleClickMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="nav-btn" href="#contact">
          <p>Inquire</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>

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
