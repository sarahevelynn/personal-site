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
              I specialize in creating the content that makes businesses run.
              <br />
              - Digital Content Creation
              <br />
              - Blogging, Social Media, Deliverables
              <br />
              - Market Positioning
              <br /> - Research, Planning and Implimentation
              <br />
              <br />
              Recently, I graduated from
              <a
                href="https://www.galvanize.com/denver-platte/web-development"
                target="_blank"
              >
                Galvanize
              </a>, a six-month full-stack web immersive program.
              <br />
              Now I am looking to dive into the world of consulting in tech. I
              am actively seeking new consulting clients or an opportunity for a
              career with a company in tech consulting or project management.
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
              <br />
              :: Digital Content Creation ::
              <br />
              Blogging, Social Media, Deliverables
              <br />
              :: Market Positioning ::
              <br /> Research, Planning and Implimentation
              <br />
              <br />
              Recently, I graduated from
              <a
                href="https://www.galvanize.com/denver-platte/web-development"
                target="_blank"
              >
                Galvanize
              </a>, a six-month full-stack web immersive program. Now I am
              looking to dive into the world of development. I am actively
              seeking an opportunity to learn from an experienced developer.
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
