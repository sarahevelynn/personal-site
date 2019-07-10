import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import startupLogo from "../../../workAssets/startupLogo.png";

export default class startupWeekNav extends React.Component {
  render() {
    return (
      <div id="projectTile2">
        <a
          id="projectTitle"
          target="_blank"
          href={"http://5280startupsolutions.co/"}
        >
          <img
            id="projectIconM"
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
          Click to browse my company site & see what we are up to & who
          works with us
        </h3>
        <h4 id="workDetails"> React | Node | Express | Knex | PostgreSQL </h4>
      </div>
    );
  }
}
