import React, { useState } from "react";
import "./Navbar.css";
import { navItems } from "../../data";
import cydel from "../../assets/cydel.webp";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

function Navbar() {
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
        <div className={colorNav ? "logo logo-color" : "logo"}>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <img className="cydel-logo" src={cydel} alt="company logo" />
          </Link>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <span>Cydel</span>
          </Link>
        </div>

        <ul className={clickMenu ? "nav-menu active" : "nav-menu"}>
          {navItems.map((item, index) => (
            <li
              className={colorNav ? "nav-item nav-item-color" : "nav-item"}
              key={index}
            >
              <Link
                to={item.href}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                onClick={() => setClickMenu(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          className={colorNav ? "nav-btn nav-btn-color" : "nav-btn"}
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
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
        </Link>

        <div
          className={colorNav ? "hamburger hamburger-color" : "hamburger"}
          onClick={handleClickMenu}
        >
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

export default Navbar;
