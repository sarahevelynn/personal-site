import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StartupWeekNav from "./Projects/startupWeekNav";
import FiftyTwoEighty from "./Projects/fiftyTwoEighty";
import SocialCloud from "./Projects/socialCloud";
import Tracktivism from "./Projects/tracktivism";
import InternConnect from "./Projects/internConnect";
import BillTrack from "./Projects/billTrack";
import DPT from "./Projects/DPT";
import GoldCalendar from "./Projects/goldCalendar";
import MileHighWorkshop from "./Projects/mileHighWorkshop";

export class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <div id="webProjects">
          <StartupWeekNav />
          <SocialCloud />
        </div>

        <div id="webProjects">
          <FiftyTwoEighty />
          <Tracktivism />
        </div>

        <div id="webProjects">
          <InternConnect />
          <BillTrack />
        </div>

        <div id="webProjects">
          <GoldCalendar />
          <MileHighWorkshop />
        </div>
      </div>
    );
  }
}
