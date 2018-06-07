import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.png";

export default function Header() {
  return (
    <header id="header">
      <div>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div id="navBar">
      <h2 id="name"> SarahEvelynn Johnson </h2>
        <h3 id="tagline">Startup Junkie || Full-Stack Developer</h3>
      </div>
    </header>
  );
}
