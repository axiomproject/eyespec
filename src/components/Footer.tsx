import React from "react";
import "../styles/Footer.css";
import logo from "../img/logo-no-background.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <img src={logo} alt="Footer Logo" />
        <h5 className="footercreds">Made with 💜 by JC</h5>
      </div>
    </footer>
  );
}
