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
        <h2> Projects </h2>
        <div className="projects">
          <SaveAway />
          <StartupWeekNav />
          <SocialCloud />
        </div>

        <div className="projects">
          <FiftyTwoEighty />
          <DPT />
          <BillTrends />
        </div>

        <div className="projects">
          <Tracktivism />
          <InternConnect />
          <BillTrack />
        </div>

        <div className="projects">
          <PicShares />
          <GoldCalendar />
          <MileHighWorkshop />
        </div>
      </div>
    );
  }
}
