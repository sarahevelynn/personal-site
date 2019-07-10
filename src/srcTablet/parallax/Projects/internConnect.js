import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import internConnectLogo from "../../../workAssets/internConnectLogo.png";

export default class InternConnect extends React.Component {
  render() {
    return (
      <div id="projectTile2">
        <a
          id="projectTitle"
          target="_blank"
          href={"https://intern-connect.firebaseapp.com/"}
        >
          <img id="projectIconM" src={internConnectLogo} alt="Intern Connect" />
        </a>
        <a
          id="projectTitle"
          target="_blank"
          href={"https://intern-connect.firebaseapp.com/"}
        >
          Intern Connect
        </a>
        <h3 id="workDescription">
          Click to "apply" for an intern or internship and be matched
          <br />
          Put in your details & see who in the startup world is available to
          work with you
        </h3>
        <h4 id="workDetails"> HTML5 | CSS3 | ES6 | Node | Express </h4>
      </div>
    );
  }
}
