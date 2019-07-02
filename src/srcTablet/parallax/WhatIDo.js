import React from "react";
import Plx from "react-plx";
import SarahEvelynnJohnsonResume from "../../workAssets/SarahEvelynnJohnsonResume.pdf";
import SeJohnson from "../../photoAssets/SeJohnson.jpg";

export default class WhatIDo extends React.Component {
  render() {
    return (
      <div className="mobileBox">
        <div className="dialogBox">
          <h2> What I Do </h2>
          <p>I pick up skills quickly - from advice to creation to execution</p>
          <p id="list">
            + Website & Web App Development
            <br />
            + Research, Planning & Implementation
            <br />
            + Market Positioning
            <br />
            + Digital Content Creation
            <br />
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
        <div>
          <img src={SeJohnson} id="headShotT" alt="SeJ" />
        </div>
      </div>
    );
  }
}
