import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import { Projects } from "./Projects";
import Footer from "../Footer/Footer.js";
import SarahEvelynnJohnsonResume from "../../generalAssets/SarahEvelynnJohnsonResume.pdf";
import sunflower from "../../workAssets/sunflower.jpg";

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
        <Footer />
      </div>
    );
  }
}
