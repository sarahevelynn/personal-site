import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import benniComp from "../../frontPageAssets/benniComp.JPG";
import SarahEvelynnJohnsonResume from "../../generalAssets/SarahEvelynnJohnsonResume.pdf";
import FrontHeader from "../Header/FrontHeader";
import StickyFooter from "../Footer/StickyFooter";

var sectionStyle = {
  backgroundImage: `url(${benniComp})`,
  height: "50px",
  backgroundSize: "cover"
};

export default class Welcome extends React.Component {
  render() {
    return (
      <div style={sectionStyle}>
        <FrontHeader />
        <div id="introInfo">
          <div>
            <h1 id="name"> SarahEvelynn Johnson </h1>
          </div>
          <div>
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
        <StickyFooter />
      </div>
    );
  }
}