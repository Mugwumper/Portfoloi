import React, { Component } from "react";
//import { Link } from "react-router-dom";  
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <header style={getStyle_Header}>
          <h1>Thomas Lewis</h1>
          <Navbar />

      </header>
    );
  }
}

const getStyle_Header = {
  fontFamily: "Palatino Linotype",
  textShadow: "2px 2px 2px #372AE8",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
