import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SarahEvelynnJohnsonResume from "./assets/SarahEvelynnJohnsonResume.pdf";
import sej from "./assets/sej.jpg";

export class SiteButtons extends React.Component {
  render() {
    return (
      <div id="squareSection">
        <div id="squareOne">
          <h2 id="homeButton"> Welcome-Bienvenido! </h2>
          <p>
            Making a difference with integrity is what I build my life around. I am a native Coloradan with a deep love for the outdoors and the startup community.
            <br/>
            <br/>
            When I am not at a startup event, coding or skiing, usually you can find me at a cafe or brewery with my dog, Benedict (named after Benedict Cumberbatch, of course).
          </p>
            <div id="navagateButton">
            <a href={"mailto:sarah@5280startupsolutions.co"} target="_blank">Contact Me</a>
</div>
        </div>
        <div id="squareTwo">
          <h2 id="homeButton"> What I Do </h2>
          <p>
            I specialize in creating the content that makes your business run. I have a long history of helping businesses out with their digital content creation (blogging, social media, deliverables) and market positioning (research, planning and implimentation).
            <br />
            <br />
            I recently graduated from Galvanize, a six-month full-stack web immersive program. I am now looking to dive into the development world because I have been lucky enough to find my passion.
          </p>
          <div id="resume">
            <a id="navagateButton" href={SarahEvelynnJohnsonResume} download="SarahEvelynnJohnsonResume">
              Download my Resume
            </a>
          </div>
        </div>
        <div id="squareThree">
          <img src={sej} id="sarahPhoto" alt="SarahEvelynn Johnson" />
        </div>
      </div>
    );
  }
}
