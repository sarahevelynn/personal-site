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
import startupWeek from "./assets/startupWeek.mp4";
import startupweeknav from "./assets/startupweeknav.png";

export class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <div id="webProjects">
          <div id="projectTile">
            <a id="projectTitle" href={startupWeek} download="startupWeek">
              <img
                id="projectIcon"
                src={startupweeknav}
                alt="Startup Week Nav"
              />
            </a>
            <a id="projectTitle" href={startupWeek} download="startupWeek">
              Startup Week Navigator
            </a>
            <h3 id="workDescription">
              {" "}
              Click to download a video demo of my Startup Week Navigator React
              Native App aimed at improving event choice and networking.{" "}
            </h3>
            <h4> React Native | AWS | Node | Express | Knex | PostgreSQL </h4>
          </div>

          <div id="projectTile">
            <a
              id="projectTitle"
              target="_blank"
              href={"http://5280startupsolutions.co/"}
            >
              <img
                id="projectIcon"
                src={startupLogo}
                alt="5280 Startup Solutions, LLC"
              />
            </a>
            <a
              id="projectTitle"
              target="_blank"
              href={"http://5280startupsolutions.co/"}
            >
              5280 Startup Solutions, LLC
            </a>
            <h3 id="workDescription">
              {" "}
              Click to browse my company site and see what we are up to and who
              works with us. Written in React.js
            </h3>
            <h4> React | Node | Express | Knex | PostgreSQL </h4>
          </div>
        </div>

        <div id="webProjects">
          <div id="projectTile">
            <a
              id="projectTitle"
              target="_blank"
              href={"https://social-cloud-trends.firebaseapp.com/"}
            >
              <img id="projectIcon" src={socialCloudLogo} alt="Social Cloud" />
            </a>
            <a
              id="projectTitle"
              target="_blank"
              href={"https://social-cloud-trends.firebaseapp.com/"}
            >
              Social Cloud
            </a>
            <h3 id="workDescription">
              Click to checkout real time, location specific visual
              representation of social trends to see what is going on around the
              country. Available as a Chrome extension!
            </h3>
            <h4>
              {" "}
              React | D3 | Twitter API | Node | Express | Knex | PostgreSQL{" "}
            </h4>
          </div>

          <div id="projectTile">
            <a
              id="projectTitle"
              target="_blank"
              href={"https://tracktivism.herokuapp.com/"}
            >
              <img id="projectIcon" src={tracktivismLogo} alt="Tracktivism" />
            </a>
            <a
              id="projectTitle"
              target="_blank"
              href={"https://tracktivism.herokuapp.com/"}
            >
              Tracktivism
            </a>
            <h3 id="workDescription">
              Click to view an activism tracking app where you can track
              legislaiton that matters to you and log "Resistance Points".
            </h3>
            <h4> React | Node | Express | Knex | PostgreSQL </h4>
          </div>
        </div>

        <div id="webProjects">
          <div id="projectTile">
            <a
              id="projectTitle"
              target="_blank"
              href={"https://intern-connect.firebaseapp.com/"}
            >
              <img
                id="projectIcon"
                src={internConnectLogo}
                alt="Intern Connect"
              />
            </a>
            <a
              id="projectTitle"
              target="_blank"
              href={"https://intern-connect.firebaseapp.com/"}
            >
              Intern Connect
            </a>
            <h3 id="workDescription">
              Click to "apply" for an intern or internship and be matched! Put
              in your details and see who in the startup world is available to
              work with you.
            </h3>
            <h4> HTML5 | CSS3 | ES6 | Node | Express </h4>
          </div>

          <div id="projectTile">
            <a
              id="projectTitle"
              target="_blank"
              href={"https://www.billtrack50.com/blog/author/sarah/"}
            >
              <img id="projectIcon" src={BillTrack50Logo} alt="BillTrack50" />
            </a>
            <a
              id="projectTitle"
              target="_blank"
              href={"https://www.billtrack50.com/blog/author/sarah/"}
            >
              BillTrack 50
            </a>
            <h3 id="workDescription">
              Click to "apply" for an intern or internship and be matched! Put
              in your details and see who in the startup world is available to
              work with you.
            </h3>
            <h4>
              {" "}
              6 Years | 112 Articles | 20,000 Reads | 3.5 Minute Average Time
              Spent{" "}
            </h4>
          </div>
        </div>

        <div id="webProjects">
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
            <h4>
              {" "}
              Logo Design | Branding | SquareSpace Design | Deliverables{" "}
            </h4>
          </div>

          <div id="projectTile">
            <a id="projectTitle" href={GC} download="GC">
              <img id="projectIcon" src={GoldCalLogo} alt="Gold Calendar" />
            </a>
            <a id="projectTitle" href={GC} download="GC">
              Gold Calendar
            </a>
            <h3 id="workDescription">
              Click to explore tool that offers companies in the event industry
              to streamline their availability through a custom widget.
            </h3>
            <h4> Development | Branding | Collateral | Digital Marketing </h4>
          </div>

          <div id="projectTile">
            <a
              id="projectTitle"
              href={MHWAnnualReport}
              download="MHWAnnualReport"
            >
              <img id="projectIcon" src={MHWLogo} alt="Mile High Workshop" />
            </a>
            <a
              id="projectTitle"
              href={MHWAnnualReport}
              download="MHWAnnualReport"
            >
              Mile High Workshop
            </a>
            <h3 id="workDescription">
              Click to discover an amazing concious captial company seeking to
              rebuild from addictions, homelessness and incarceration.
            </h3>
            <h4> Deliverables | Branding | Collateral | Digital Marketing </h4>
          </div>
        </div>
      </div>
    );
  }
}
