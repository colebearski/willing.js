import React from "react";
import { Link } from "react-router-dom";
import gundam from "../../images/gundam.png";

// CSS
import "./../css/header.css";

function Header() {
  const imageStyle = {
    width: "15%"
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm py-0">
        <Link to="" className="navbar-brand ml-auto">
          <img src={gundam} style={imageStyle} alt="CP" />
        </Link>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
