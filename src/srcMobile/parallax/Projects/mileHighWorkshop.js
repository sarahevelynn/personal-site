import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MHWLogo from "../../../workAssets/MHWLogo.png";
import MHWAnnualReport from "../../../workAssets/MHWAnnualReport.pdf";

export default class MileHighWorkshop extends React.Component {
  render() {
    return (
      <div id="projectTile3">
        <a id="projectTitle" href={MHWAnnualReport} download="MHWAnnualReport">
          <img id="projectIconM" src={MHWLogo} alt="Mile High Workshop" />
        </a>
        <a id="projectTitle" href={MHWAnnualReport} download="MHWAnnualReport">
          Mile High Workshop
        </a>
        <h3 id="workDescription">
          Click to discover an amazing concious capital company seeking to
          rebuild people's lives after addiction, homelessness & incarceration
        </h3>
        <h4 id="workDetails">

          Deliverables | Branding | Collateral | Digital Marketing
        </h4>
      </div>
    );
  }
}
