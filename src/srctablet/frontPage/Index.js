import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import benniComp from "./assets/benniComp.JPG";
import FrontHeader from "../Header/FrontHeader";
import SarahEvelynnJohnsonResume from "./assets/SarahEvelynnJohnsonResume.pdf";

var sectionStyle = {
  backgroundImage: `url(${benniComp})`,
  backgroundSize: "cover",
  height: "100%"
};

export default class Welcome extends React.Component {
  render() {
    return (
      <section style={sectionStyle}>
        <FrontHeader />

        <div id="introInfo">
          <div>
            <h1 id="name"> SarahEvelynn Johnson </h1>
          </div>
          <div>
            <h2> || Startup Junkie || </h2>
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
      </section>
    );
  }
}
