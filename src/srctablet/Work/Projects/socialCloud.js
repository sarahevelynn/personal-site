import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import socialCloudLogo from "../assets/socialCloudLogo.png";

export default class SocialCloud extends React.Component {
  render() {
    return (
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
          Click to checkout real time, location specific visual representation
          of social trends to see what is going on around the country. Available
          as a Chrome extension!
        </h3>
        <h4 id="workDetails">
          React | D3 | Twitter API | Node | Express | Knex | PostgreSQL
        </h4>
      </div>
    );
  }
}
