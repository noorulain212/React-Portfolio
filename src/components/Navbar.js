import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure you have Navbar styles

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">My Portfolio</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button onClick={toggleDarkMode} className="mode-btn">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
