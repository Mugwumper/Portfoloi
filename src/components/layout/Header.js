import React, { Component } from "react";
//import { Link } from "react-router-dom";  
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <header>
          <h1  style={getStyle_Header}>Thomas Lewis</h1>
          <Navbar />

      </header>
    );
  }
}

const getStyle_Header = {
  // fontFamily: "Palatino Linotype",
  fontFamily: "Iceland",
  
  textShadow: "2px 2px 2px #372AE8",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
