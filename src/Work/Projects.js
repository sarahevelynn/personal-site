import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import internConnectLogo from "./assets/internConnectLogo.png";
import tracktivismLogo from "./assets/tracktivismLogo.png";
import socialCloudLogo from "./assets/socialCloudLogo.png";
import DPTLogo from "./assets/DPTLogo.png";
import BillTrack50Logo from "./assets/BillTrack50Logo.png";
import GoldCalLogo from "./assets/GoldCalLogo.png";
import GC from "./assets/GC.pdf";
import MHWLogo from "./assets/MHWLogo.png";
import MHWAnnualReport from "./assets/MHWAnnualReport.pdf";
import startupLogo from "./assets/startupLogo.png";

export class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <div id="webProjects">
          <div id="projectTile">
            <img
              id="projectIcon"
              src={startupLogo}
              alt="5280 Startup Solutions, LLC"
            />
            <a
              id="projectTitle"
              target="_blank"
              href={"http://5280startupsolutions.co/"}
            >
              5280 Startup Solutions, LLC
            </a>
          </div>

          <div id="projectTile">
            <img id="projectIcon" src={tracktivismLogo} alt="Tracktivism" />
            <a
              id="projectTitle"
              target="_blank"
              href={"https://tracktivism.herokuapp.com/"}
            >
              Tracktivism
            </a>
          </div>

          <div id="projectTile">
            <img id="projectIcon" src={socialCloudLogo} alt="Intern Connect" />
            <a
              id="projectTitle"
              target="_blank"
              href={"https://intern-connect.firebaseapp.com/"}
            >
              Social Cloud
            </a>
          </div>

          <div id="projectTile">
            <img
              id="projectIcon"
              src={internConnectLogo}
              alt="Intern Connect"
            />
            <a
              id="projectTitle"
              target="_blank"
              href={"https://intern-connect.firebaseapp.com/"}
            >
              Intern Connect
            </a>
          </div>
        </div>

        <div id="webProjects">
          <div id="projectTile">
            <img id="projectIcon" src={BillTrack50Logo} alt="Intern Connect" />
            <a
              id="projectTitle"
              target="_blank"
              href={"https://www.billtrack50.com/blog/"}
            >
              BillTrack 50
            </a>
          </div>

          <div id="projectTile">
            <img id="projectIcon" src={DPTLogo} alt="Intern Connect" />
            <a
              id="projectTitle"
              target="_blank"
              href={"https://intern-connect.firebaseapp.com/"}
            >
              DPT
            </a>
          </div>

          <div id="projectTile">
            <img id="projectIcon" src={GoldCalLogo} alt="Intern Connect" />
            <a id="projectTitle" href={GC} download="Gold Calendar Collateral">
              Gold Calendar
            </a>
          </div>

          <div id="projectTile">
            <img id="projectIcon" src={MHWLogo} alt="Intern Connect" />
            <a
              id="projectTitle"
              href={MHWAnnualReport}
              download="MHW Annual Report"
            >
              Mile High Workshop
            </a>
          </div>
        </div>
      </div>
    );
  }
}
