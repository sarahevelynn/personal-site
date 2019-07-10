import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PicShare from "../../../workAssets/PicShare.png";

export default class PicShares extends React.Component {
  render() {
    return (
      <div id="projectTile3">
        <a
          id="projectTitle"
          target="_blank"
          href={"https://picsharerails.herokuapp.com/"}
        >
          <img id="projectIconMM" src={PicShare} alt="PicShare" />
        </a>
        <a
          id="projectTitle"
          target="_blank"
          href={"https://picsharerails.herokuapp.com/"}
        >
          PicShare
        </a>
        <h3 id="workDescription">
          Click to "upload" your images to a new social network, PicShare
          <br />
          Make an account, upload images, see your friends' feed & comment on
          their work
        </h3>
        <h4 id="workDetails"> Ruby | Rails | HTML5 | CSS3| ES6 </h4>
      </div>
    );
  }
}
