import React from "react";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={getStyle_NavBar} >
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
           <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const getStyle_NavBar = {
    marginBottom: "0"
}

export default Navbar;
