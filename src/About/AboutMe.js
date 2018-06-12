import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SarahEvelynnJohnsonResume from "./assets/SarahEvelynnJohnsonResume.pdf";
import sej from "./assets/sej.jpg";
import Header from "../Header/Header.js";

export default class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="squareSection">
          <div id="outterSquare">
            <h2 id="homeButton"> Bienvenido! </h2>
            <p>
              Making a difference with integrity is what I build my life around.
              I am a native Coloradan with a deep love for the outdoors and the
              startup community.
              <br />
              <br />
              When I am not at a startup event, coding or skiing, usually you
              can find me at a cafe or brewery with my dog, Benedict (named
              after Benedict Cumberbatch, of course).
            </p>
            <div id="navagateButton">
              <a href={"mailto:sarah@5280startupsolutions.co"} target="_blank">
                Contact Me
              </a>
            </div>
          </div>
          <div id="innerSquare">
            <h2 id="homeButton"> What I Do </h2>
            <p>
              I specialize in creating the content that makes businesses run.
              This means helping businesses with their digital content creation
              (blogging, social media, deliverables) and market positioning
              (research, planning and implimentation).
              <br />
              <br />
              Recently, I graduated from Galvanize, a six-month full-stack web
              immersive program. Now I am looking to dive into the world of
              development and for an opportunity to learn from an experienced
              developer.
            </p>
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
          <div id="outterSquare">
            <img src={sej} id="sarahPhoto" alt="SarahEvelynn Johnson" />
          </div>
        </div>
      </div>
    );
  }
}
