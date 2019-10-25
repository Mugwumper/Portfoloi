import React from "react";
import { NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" className  
// on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-toggleable-sm">
      <NavLink className="normal navbar-brand" to="/">
      <img src={process.env.PUBLIC_URL + "/favicon.ico"} width="30" height="30" className="d-inline-block align-top" alt=""></img>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item">
            <Link
              to="/contact"
              style={getStyle_navLink}
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li> */}
          <li className="nav-item">
            <NavLink
              to="/resume"
              style={getStyle_navLink}
              // className={
              //   window.location.pathname === "/resume"
              //     ? "nav-link active"
              //     : "nav-link"
              // }
              className="normal" activeClassName="activeItem" 

            >
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/portfolio"
              style={getStyle_navLink}
              // className={
              //   window.location.pathname === "/portfolio"
              //     ? "nav-link active"
              //     : "nav-link"
              // }
              className="normal" activeClassName="activeItem" 
            >
              Portfolio
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/about"
              style={getStyle_navLink}
              className={
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

const getStyle_navLink = {
  textDecoration: "none",
  margin: "15px",
};

export default Navbar;
