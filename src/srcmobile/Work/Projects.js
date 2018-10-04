import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StartupWeekNav from "./Projects/startupWeekNav";
import FiftyTwoEighty from "./Projects/fiftyTwoEighty";
import SaveAway from "./Projects/saveAway";
import SocialCloud from "./Projects/socialCloud";
import Tracktivism from "./Projects/tracktivism";
import InternConnect from "./Projects/internConnect";
import BillTrends from "./Projects/billTrends";
import PicShares from "./Projects/picShare";
import BillTrack from "./Projects/billTrack";
import DPT from "./Projects/DPT";
import GoldCalendar from "./Projects/goldCalendar";
import MileHighWorkshop from "./Projects/mileHighWorkshop";

export class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <SaveAway />
        <StartupWeekNav />
        <SocialCloud />
        <FiftyTwoEighty />
        <Tracktivism />
        <BillTrends />
        <PicShares />
        <InternConnect />
        <BillTrack />
        <GoldCalendar />
        <MileHighWorkshop />
      </div>
    );
  }
}
