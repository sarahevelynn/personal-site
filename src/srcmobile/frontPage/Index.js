import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import benniComp from "./assets/benniComp.JPG";
import FrontHeader from "../Header/FrontHeader.js";
import SarahEvelynnJohnsonResume from "./assets/SarahEvelynnJohnsonResume.pdf";

const divStyle = {
  width: "100%",
  height: "auto",
  backgroundImage: `url(${benniComp})`,
  backgroundSize: "cover"
};

export default class Section extends React.Component {
  render() {
    return (
      <div>
        <div style={divStyle}>
          <FrontHeader />
          <div id="Info">
            <h1 id="SeJ"> SarahEvelynn Johnson </h1>
            <h2> || Startup & Consulting Junkie || </h2>
            <h2> || Full-Stack Web Developer || </h2>
            <h2> || Digital Marketing & Content Creation || </h2>
          </div>
          <div id="resume">
            <a
              id="navagateButton"
              href={SarahEvelynnJohnsonResume}
              download="SarahEvelynnJohnsonResume"
            >
              Download my Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}
