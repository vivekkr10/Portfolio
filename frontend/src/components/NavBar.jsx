import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div ref={navRef}>
      <section id="nav-bar">
        <div id="container">
          <p>Vivek's Portfolio</p>

          {/* Hamburger Icon */}
          <div id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span>{menuOpen ? '✖' : '☰'}</span>
          </div>

          {/* Menu Buttons */}
          <div id="nav-bar-btns" className={menuOpen ? "open" : ""}>
            <NavLink to="/">
              <button>Home</button>
            </NavLink>
            <NavLink to="/projects">
              <a href="#projects">
              <button>Projects</button>
            </a>
            </NavLink>            
            <NavLink to="/about">
              <button>About</button>
            </NavLink>
            <NavLink to="/contact">
              <button>Contact</button>
            </NavLink>
            <button>Hire me</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
