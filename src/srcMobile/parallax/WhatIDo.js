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
          <p>I am a Jill of many trades. Adaptable, a quick learner, committed to high quality work, & extremely detail oriented.</p>
          <p id="list">
          Project Design, Development, & Implementation
          <br />
            + Client Interviews for Issue Definition & Requirements Gathering
            <br />
            + Design (stories, wireframes, sprints)
            <br />
            + Development (coding, agile workflow, client demos)
            <br />
            + Deliverables (design documents, presentations, manuals, workbooks)
            <br />
            + Research & Writing
            <br />
            + Market Positioning & Branding
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
            + Searching for opportunities in project/application delivery
             <br />
             + Experience in end to end application development, delivery & team management
             <br />
             + Looking to incorporate my acute attention to detail, functional skills, technical fluency, & knack for spotting
             issues for more rewarding & challenging work
             <br />
             + Mentorship at my next position is a priority
          </p>
          <br />
          <div id="navagateButtonM">
            <a
              href={SarahEvelynnJohnsonResume}
              download="SarahEvelynnJohnsonResume"
            >
              Download my Resume
            </a>
          </div>
        </div>
        <div>
          <img src={SeJohnson} id="headShotM" alt="SeJ" />
        </div>
      </div>
    );
  }
}
