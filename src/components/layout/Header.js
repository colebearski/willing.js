import React from "react";

// CSS
import "./header.css";

function Header() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home" />
            Home
          </li>
          <li>
            <a href="#about" />
            About
          </li>
          <li>
            <a href="#projects" />
            Projects
          </li>
          <li>
            <a href="#contact" />
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
