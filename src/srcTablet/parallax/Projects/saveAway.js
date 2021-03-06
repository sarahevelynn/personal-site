import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import saveAwayLogo from "../../../workAssets/saveAwayLogo.png";

export default class SaveAway extends React.Component {
  render() {
    return (
      <div id="projectTile2">
        <a
          id="projectTitle"
          target="_blank"
          href={"https://saveaway-401k.firebaseapp.com/"}
        >
          <img id="projectIconM" src={saveAwayLogo} alt="SaveAway 401k" />
        </a>
        <a
          id="projectTitle"
          target="_blank"
          href={"https://saveaway-401k.firebaseapp.com/"}
        >
          SaveAway 401k
        </a>
        <h3 id="workDescription">
          Click to see a new 401k investing platform made for small businesses
          & startups
          <br />
          They are a new company & ready to take customers
        </h3>
        <h4 id="workDetails"> React | Node | Express | Knex | PostgreSQL </h4>
      </div>
    );
  }
}
