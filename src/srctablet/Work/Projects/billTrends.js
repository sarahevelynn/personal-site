import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import billsTrends from "../../../workAssets/billsTrends.png";

export default class BillTrends extends React.Component {
  render() {
    return (
      <div id="projectTile2">
        <a
          id="projectTitle"
          target="_blank"
          href={"https://bt50-trends-map.firebaseapp.com/"}
        >
          <img id="projectIcon" src={billsTrends} alt="BillTrack50" />
        </a>
        <a
          id="projectTitle"
          target="_blank"
          href={"https://bt50-trends-map.firebaseapp.com/"}
        >
          BillTrack Trending Bills
        </a>
        <h3 id="workDescription">
          Click to examine the trending 2018 bills from across the country. Use
          the interactive map of the United States to read brief descriptions
          and click to read the specifics about the bills.
        </h3>
        <h4 id="workDetails">HTML5 | CSS3 | ES6 | Svidget.io</h4>
      </div>
    );
  }
}
