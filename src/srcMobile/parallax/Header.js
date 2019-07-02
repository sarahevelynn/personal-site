import React from "react";
import Plx from "react-plx";
import benniComp from "../../photoAssets/benniComp.png";

const parallaxData = [
  {
    start: "self",
    startOffset: "10vw",
    end: "self",
    endOffset: "50vh",
    easing: "easeInSine",
    properties: [
      {
        startValue: 0.2,
        endValue: 1,
        property: "opacity",
        unit: ""
      }
    ]
  },
  {
    start: "self",
    startOffset: "60vh",
    end: "self",
    endOffset: "100vh",
    easing: "easeInSine",
    properties: [
      {
        startValue: 1,
        endValue: 0.2,
        property: "opacity",
        unit: ""
      }
    ]
  }
];

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <img src={benniComp} id="headerPhoto" alt="SEJ" />
        <Plx parallaxData={parallaxData}>
          <div id="headerText">
            <h1 id="h1M">
              {" "}
              Hello,
              <br />
              I'm Sarah Evelynn
            </h1>
          </div>
        </Plx>
      </div>
    );
  }
}
