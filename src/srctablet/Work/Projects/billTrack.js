import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BillTrack50Logo from "../../../workAssets/BillTrack50Logo.png";

export default class BillTrack extends React.Component {
  render() {
    return (
      <div id="projectTile2">
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
          Click to read my blogs from over the years covering legislative
          movements, social issues and how to use an amazing legislation and
          regulation tracking platform.
        </h3>
        <h4 id="workDetails">
          6 Years | 112 Articles | 20,000 Reads | 3.5 Minute Average Time Spent
        </h4>
      </div>
    );
  }
}
