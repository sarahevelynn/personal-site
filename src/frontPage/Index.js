import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import benniComp from "./assets/benniComp.JPG";
import FrontHeader from "../Header/FrontHeader.js";
import Responsive from "react-responsive";

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const Example = () => (
  <div>
    <Desktop>Desktop or laptop</Desktop>
    <Tablet>Tablet</Tablet>
    <Mobile>Mobile</Mobile>
    <Default>Not mobile (desktop or laptop or tablet)</Default>
  </div>
);

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
        <div>
          <Desktop>
            <FrontHeader />
            <div id="introInfo">
              <h1 id="name"> SarahEvelynn Johnson </h1>
              <h2> || Startup Junkie || </h2>
              <h2> || Full-Stack Web Developer || </h2>
              <h2> || Digital Marketing & Content Creation || </h2>
            </div>
          </Desktop>
          <Tablet>
            <FrontHeader />
            <div id="introInfo">
              <h1 id="name"> SarahEvelynn Johnson </h1>
              <h2> || Startup Junkie || </h2>
              <h2> || Full-Stack Web Developer || </h2>
              <h2> || Digital Marketing & Content Creation || </h2>
            </div>
          </Tablet>
          <Mobile>
            {" "}
            <FrontHeader />
            <div id="introInfo">
              <h1 id="name"> SarahEvelynn Johnson </h1>
              <h2> || Startup Junkie || </h2>
              <h2> || Full-Stack Web Developer || </h2>
              <h2> || Digital Marketing & Content Creation || </h2>
            </div>
          </Mobile>
        </div>
      </div>
    );
  }
}
