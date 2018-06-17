import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.png";

export default function FrontHeader() {
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
          <h2 id="navItem1">Home</h2>
        </Link>
        <Link to="/myWork">
          <h2 id="navItem1">My Work</h2>
        </Link>
        <Link to="/about">
          <h2 id="navItem1">About Me</h2>
        </Link>
        <a href={"mailto:sarah@5280startupsolutions.co"}><h2 id="navItem1">Contact Me</h2></a>
        <Link to="/writings">
          <h2 id="navItem1">Writings</h2>
        </Link>
        <Link to="/photography">
          <h2 id="navItem1">Photographs</h2>
        </Link>
      </nav>
      </div>
    </header>
  );
}
