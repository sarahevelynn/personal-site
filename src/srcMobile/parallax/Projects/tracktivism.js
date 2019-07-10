import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import tracktivismLogo from "../../../workAssets/tracktivismLogo.png";

export default class Tracktivism extends React.Component {
  render() {
    return (
      <div id="projectTile3">
        <a
          id="projectTitle"
          target="_blank"
          href={"https://tracktivism.herokuapp.com/"}
        >
          <img id="projectIconM" src={tracktivismLogo} alt="Tracktivism" />
        </a>
        <a
          id="projectTitle"
          target="_blank"
          href={"https://tracktivism.herokuapp.com/"}
        >
          Tracktivism
        </a>
        <h3 id="workDescription">
          Click to view an activism tracking app where you can track legislation
          that matters to you & log "Resistance Points"
        </h3>
        <h4 id="workDetails"> React | Node | Express | Knex | PostgreSQL </h4>
      </div>
    );
  }
}
