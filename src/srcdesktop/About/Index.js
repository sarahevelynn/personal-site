import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SarahEvelynnJohnsonResume from "../../generalAssets/SarahEvelynnJohnsonResume.pdf";
import sej from "../../aboutAssets/sej.jpg";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

export default class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="squareSection">
          <div id="outterSquare">
            <h2 id="homeButton"> Bienvenido! </h2>
            <p>
              I build my life around the idea of continuous improvement. Whether
              it be learning a new skill, language, craft or sport, there is
              always more out there for us to experience to help shape our minds
              and personalities. You never know what you will discover. My
              favorite parts of myself are a direct result of the times I said,
              “Why not, I can figure that out.”
              <br />
              <br />
              When I am not at a meetup, coding, crafting, climbing or skiing,
              usually you can find me working at a cafe or brewery with my dog,
              Benedict.
              <br />
              (named after Benedict Cumberbatch, of course)
            </p>
            <div id="navagateButton">
              <a href={"mailto:sarah@5280startupsolutions.co"}>Contact Me</a>
            </div>
          </div>
          <div id="innerSquare">
            <h2 id="homeButton"> What I Do </h2>
            <p>
              From advice to creation to execution I pick up skills quickly.
              <br />
              - Website and Web App Development
              <br />
              - Research, Planning and Implimentation
              <br />
              - Market Positioning
              <br />
              - Digital Content Creation
              <br />
              I am a graduate of the University of Denver and Galvanize, a
              six-month full-stack web immersive program.
              <br />
              <br />
              I am looking for opportunities to dive into the world of security
              consulting in tech. I would love to expand my hacking skills and
              join a red team or a penetration testing team. I have extensive
              experience testing applications but am looking to incorporate my
              development skills and knack for seeing issues for more rewarding,
              challenging work. Mentorship at my next position is a priority.
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
