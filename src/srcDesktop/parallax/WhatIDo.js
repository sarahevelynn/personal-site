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
          <p>I learn quickly, am committed to high quality work, & am extremely detail oriented.</p>
          <p id="list">
          + Project Design, Implementation, & Management
          <br />
            + Application Development
            <br />
            + Client Engagement (Application Design, Demos, & Execution)
            <br />
            + Research & Writing
            <br />
            + Market Positioning & Branding
            <br />
            + Digital Content Creation

            <br />
          </p>
          <p>
            Graduate of:
            <br /> University of Denver (BS Marketing & Finance)
            <br />Galvanize (six-month full-stack web immersive program)
            <br />
            <br />
            + Searching for opportunities in the technology world of security
            penetration
            <br />
            + Extensive experience in development environments - developing &
            testing applications
            <br />
            + Looking to incorporate my development skills & knack for spotting
            problems for rewarding & challenging work
            <br />
            + Mentorship at my next position is a priority
          </p>
          <br />
          <div id="navagateButton">
            <a
              href={SarahEvelynnJohnsonResume}
              download="SarahEvelynnJohnsonResume"
            >
              Download my Resume
            </a>
          </div>
        </div>
        <img src={SeJohnson} id="headShot" alt="SeJ" />
      </div>
    );
  }
}
