import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.png";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div id="navBar">
      <nav>
        <Link to="/">
          <h2 id="navItem">Home</h2>
        </Link>
        <Link to="/myWork">
          <h2 id="navItem">My Work</h2>
        </Link>
        <Link to="/about">
          <h2 id="navItem">About Me</h2>
        </Link>
        <a href={"mailto:sarah@5280startupsolutions.co"}><h2 id="navItem">Contact Me</h2></a>
        <Link to="/writings">
          <h2 id="navItem">Writings</h2>
        </Link>
        <Link to="/photography">
          <h2 id="navItem">Photographs</h2>
        </Link>
      </nav>
      </div>
    </header>
  );
}
