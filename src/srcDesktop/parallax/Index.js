import React from "react";
import Plx from "react-plx";
import Header from "./Header";
import WhatIDo from "./WhatIDo";
import WhatImAbout from "./WhatImAbout";
import MyWork from "./MyWork";
import Contact from "./Contact";
import summit from "../../photoAssets/summit.jpg";
import bone from "../../photoAssets/bone.jpg";
import aspen from "../../photoAssets/aspen.jpg";

import ArrowTransitionL from "./ArrowL";
import ArrowTransitionR from "./ArrowR";

const parallaxData = [
  {
    start: "self",
    startOffset: "10vw",
    end: "self",
    endOffset: "80vh",
    easing: "easeInSine",
    properties: [
      {
        startValue: 10,
        endValue: -40,
        property: "translateY",
        unit: "vh"
      }
    ]
  }
];

const parallaxDataA = [
  {
    start: "self",
    startOffset: "10vw",
    end: "self",
    endOffset: "60vh",
    easing: "easeInSine",
    properties: [
      {
        startValue: 10,
        endValue: 5,
        property: "translateY",
        unit: "vh"
      }
    ]
  }
];

export default class ParallaxPractice extends React.Component {
  render() {
    return (
      <div id="App">
        <Header />
        <ArrowTransitionR />
        <WhatIDo className="content" />
        <Plx parallaxData={parallaxData}>
          <img src={summit} className="separator" alt="SeJ" />
        </Plx>
        <WhatImAbout className="content" />
        <Plx parallaxData={parallaxData}>
          <img src={bone} className="separator" alt="SeJ" />
        </Plx>
        <Plx parallaxData={parallaxDataA}>
          <ArrowTransitionR />
        </Plx>
        <MyWork className="content" />
        <Plx parallaxData={parallaxData}>
          <img src={aspen} className="separator" alt="SeJ" />
        </Plx>
        <Plx parallaxData={parallaxDataA}>
          <ArrowTransitionR />
        </Plx>
        <Contact />
      </div>
    );
  }
}
