import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import tracktivismLogo from "../../../workAssets/tracktivismLogo.png";

export default class Tracktivism extends React.Component {
  render() {
    return (
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
          Click to view an activism tracking app where you can track legislaiton
          that matters to you and log "Resistance Points".
        </h3>
        <h4 id="workDetails"> React | Node | Express | Knex | PostgreSQL </h4>
      </div>
    );
  }
}
