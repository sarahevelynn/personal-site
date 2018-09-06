import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GoldCalLogo from "../assets/GoldCalLogo.png";
import GC from "../assets/GC.pdf";

export default class GoldCalendar extends React.Component {
  render() {
    return (
      <div id="projectTile">
        <a id="projectTitle" href={GC} download="GC">
          <img id="projectIcon" src={GoldCalLogo} alt="Gold Calendar" />
        </a>
        <a id="projectTitle" href={GC} download="GC">
          Gold Calendar
        </a>
        <h3 id="workDescription">
          Click to explore tool that offers companies in the event industry to
          streamline their availability through a custom widget.
        </h3>
        <h4 id="workDetails">
          
          Development | Branding | Collateral | Digital Marketing
        </h4>
      </div>
    );
  }
}
