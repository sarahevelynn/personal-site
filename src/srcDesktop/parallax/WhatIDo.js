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
          <p>
            I am a Jill of many trades. Adaptable, a quick learner, committed to
            high quality work & extremely detail oriented.
          </p>
          <p id="list">
            Project Assessment, Design, Development & Implementation
            <br />
            + Client Interviews for Issue Definition & Requirements Gathering
            <br />
            + Design (stories, wireframes, sprints)
            <br />
            + Development (coding, agile workflow, client demos)
            <br />
            + Platform Optimization (research new technologies, assess platforms
            & processes, provide actionable recommendations)
            <br />
            + Deliverables (design documents, presentations, manuals, workbooks)
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
            + Searching for opportunities in solution architecting,
            project/application delivery, and business analysis
            <br />
            + Experience in end to end application development, delivery & team
            management
            <br />
            + Looking to incorporate my acute attention to detail, functional
            skills, technical fluency & knack for spotting issues for more
            rewarding & challenging work
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
        <div className="dialogBox">
          <img src={SeJohnson} id="headShot" alt="SeJ" />
        </div>
      </div>
    );
  }
}
