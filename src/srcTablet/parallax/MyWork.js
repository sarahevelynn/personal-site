import React from "react";
import Plx from "react-plx";
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

export default class MyWork extends React.Component {
  render() {
    return (
      <div>
        <h2> My Work </h2>
        <div id="mProjects">
          <SaveAway />
          <StartupWeekNav />
        </div>
        <div id="mProjects">
          <SocialCloud />
          <FiftyTwoEighty />
        </div>
        <div id="mProjects">
          <DPT />
          <BillTrends />
        </div>
        <div id="mProjects">
          <Tracktivism />
          <InternConnect />
        </div>
        <div id="mProjects">
          <BillTrack />
          <PicShares />
        </div>
        <div id="mProjects">
          <GoldCalendar />
          <MileHighWorkshop />
        </div>
      </div>
    );
  }
}
