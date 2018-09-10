import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import startupWeek from "../assets/startupWeek.mp4";
import startupweeknav from "../assets/startupweeknav.png";

export default class StartupWeekNav extends React.Component {
  render() {
    return (
      <div id="projectTile">
        <a id="projectTitle" href={startupWeek} download="startupWeek">
          <img id="projectIcon" src={startupweeknav} alt="Startup Week Nav" />
        </a>
        <a id="projectTitle" href={startupWeek} download="startupWeek">
          Startup Week Navigator
        </a>
        <h3 id="workDescription">
          Click to download a video demo of my Startup Week Navigator React
          Native App aimed at improving event choice and networking for Startup
          Week Denver.
        </h3>
        <h4 id="workDetails">
          React Native | AWS | Node | Express | Knex | PostgreSQL
        </h4>
      </div>
    );
  }
}
