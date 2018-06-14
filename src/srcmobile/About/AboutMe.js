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
        <div >
          <div id="mobileTop">
            <h2 id="homeButton"> Bienvenido! </h2>
            <p>
              Making a difference with integrity is what I build my life around.
              I am a native Coloradan with a deep love for the outdoors and the
              startup community.
              <br />
              <br />
              When I am not at a startup event, coding or skiing, usually you
              can find me at a cafe or brewery with my dog, Benedict.
              <br />
              (named after Benedict Cumberbatch)
            </p>
            <div id="navagateButton">
              <a href={"mailto:sarah@5280startupsolutions.co"} target="_blank">
                Contact Me
              </a>
            </div>
          </div>
          <div id="mobileMiddle">
            <h2 id="homeButton"> What I Do </h2>
            <p>
              I specialize in creating the content that makes businesses run.
              <br />
              :: Digital Content Creation ::
              <br />
              Blogging, Social Media, Deliverables
              <br />
              :: Market Positioning ::
              <br /> Research, Planning and Implimentation
              <br />
              <br />
              Recently, I graduated from <a href="https://www.galvanize.com/denver-platte/web-development" target="_blank"> Galvanize</a>, a six-month full-stack web
              immersive program. Now I am looking to dive into the world of
              development. I am actively seeking an opportunity to learn from an experienced
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
          <div id="mobileTop">
            <img src={sej} id="Photo" alt="SarahEvelynn Johnson" />
          </div>
        </div>
      </div>
    );
  }
}
