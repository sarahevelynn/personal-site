import React from "react";
import Plx from "react-plx";
import SarahEvelynnJohnsonResume from "../../workAssets/SarahEvelynnJohnsonResume.pdf";
import SeJohnson from "../../photoAssets/SeJohnson.jpg";


export default class WhatIDo extends React.Component {
  render() {
    return (
      <div className="multiItemMove">
        <div className="dialogBox">
          <h2> What I Do </h2>
          <p>From advice to creation to execution, I pick up skills quickly.</p>
          <p id="list">
            + Website & Web App Development
            <br />
            + Research, Planning & Implimentation
            <br />
            + Market Positioning
            <br />
            + Digital Content Creation
            <br />
            <br />
          </p>
          <p>
            I am a graduate of the University of Denver (BS Marketing & Finance)
            <br /> & from Galvanize, a six-month full-stack web immersive
            program.
            <br />
            <br />
            I am in search of opportunities in the world of security penetration
            consulting in tech. I have extensive working in a dev environment
            developing & testing applications. I want to incorporate my
            development skills & knack for spotting problems for more rewarding,
            challenging work. Mentorship at my next position is a priority.
          </p>
          <div  id="navagateButton">
            <a

              href={SarahEvelynnJohnsonResume}
              download="SarahEvelynnJohnsonResume"
            >
              Download my Resume
            </a>
          </div>
          </div>
          <div>
          <img src={SeJohnson} class="headShot" alt="SeJ" />
        </div>
        </div>
    );
  }
}
