import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import benniComp from "./assets/benniComp.JPG";
import FrontHeader from "../Header/FrontHeader.js";

const divStyle = {
  width: "100%",
  height: "650px",
  backgroundImage: `url(${benniComp})`,
  backgroundSize: "cover"
};

export default class Section extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <FrontHeader />
        <div id="introInfo">
          <h1 id="name"> SarahEvelynn Johnson </h1>
          <h2> || Startup Junkie || </h2>
          <h2> || Full-Stack Web Developer || </h2>
          <h2> || Digital Marketing & Content Creation || </h2>
        </div>
      </div>
    );
  }
}
