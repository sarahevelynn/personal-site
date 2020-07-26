import React from "react";
import Plx from "react-plx";
import benni from "../../photoAssets/benni.jpg";

export default class WhatImAbout extends React.Component {
  render() {
    return (
      <div className="mobileBox">
        <div className="dialogBox">
          <h2> What I'm About </h2>
          <p>
            I build my life around the idea of continuous improvement. There is
            always work to do. Whether it be learning a new skill, industry,
            language, platform, craft, or sport, there is a whole world out
            there for us to experience to shape our minds, hearts, & skill sets.
            <br />
            My favorite parts of myself are a direct result of the times I said,
            “Why not, I can figure that out.”
            <br />
            <br />
            When I am not at a meetup, coding, climbing, skiing, or crafting,
            you will find me working but wishing I was out with my dog,
            Benedict.
          </p>
          <p id="leftAlignText">
            (named after Benedict Cumberbatch, of course)
          </p>
        </div>
        <div>
          <img src={benni} id="benniShotT" alt="benni" />
        </div>
      </div>
    );
  }
}
