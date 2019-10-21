import React from "react";


function Footer() {
  return (
    <footer className="footer" style={getStyle_Footer}>
      <span style={getStyle_FooterSpan}>TPLewis, LLC</span>
    </footer>
  );
}

const getStyle_Footer = {
  bottom: "0",
  width: "80%",
  minHeight: "100px",
  filter: "brightness(10%)",
    //background: "rgb(19, 0, 38) 100%s",
  position: "absolute",
  textAlign: "center"
}

const getStyle_FooterSpan = {
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  padding: "3px",
  //filter: "brightness(10%)",
  background: "#030229"
}


export default Footer;
