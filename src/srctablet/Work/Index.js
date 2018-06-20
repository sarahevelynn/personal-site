import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sunflower from "./assets/sunflower.jpg";
import { Projects } from "./Projects";
import Header from "../Header/Header.js";
import SarahEvelynnJohnsonResume from "./assets/SarahEvelynnJohnsonResume.pdf";

export default class myWork extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <div id="resume">
        <a
          id="navagateButton"
          href={SarahEvelynnJohnsonResume}
          download="SarahEvelynnJohnsonResume"
        >
          Download my Resume
        </a>
      </div>
        <Projects />
      </div>
    );
  }
}
