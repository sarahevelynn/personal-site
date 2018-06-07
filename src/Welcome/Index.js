import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sunflower from "./assets/sunflower.jpg";

import { SiteButtons } from "./SiteButtons";
import { Projects } from "./Projects";


export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <SiteButtons />
        <Projects />
      </div>
    );
  }
}
