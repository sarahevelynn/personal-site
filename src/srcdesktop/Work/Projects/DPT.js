import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DPTLogo from "../assets/DPTLogo.png";

export default class DPT extends React.Component {
  render() {
    return (
      <div id="projectTile">
        <a
          id="projectTitle"
          target="_blank"
          href={"https://www.degrandisphysicaltherapy.com/"}
        >
          <img
            id="projectIcon"
            src={DPTLogo}
            alt="Degrandis Physical Therapy"
          />
        </a>
        <a
          id="projectTitle"
          target="_blank"
          href={"https://www.degrandisphysicaltherapy.com/"}
        >
          DPT
        </a>
        <h3 id="workDescription">
          Click to checkout an amazing physical therapy business offering
          Functional Manual Therapy (FMT).
        </h3>
        <h4 id="workDetails">
          Logo Design | Branding | SquareSpace Design | Deliverables
        </h4>
      </div>
    );
  }
}
