import React from "react";
import Plx from "react-plx";
import arrows from "../../photoAssets/arrows.png";

const parallaxData = [
  {
    start: "self",
    startOffset: "10vw",
    end: "self",
    endOffset: "50vh",
    easing: "easeInSine",
    properties: [
        {
            startValue: 0,
            endValue: 0.5,
            property: "opacity",
            unit: ""
          },{
            startValue: -5,
            endValue: -15,
            property: "translateY",
            unit: "vh"
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
          },
          {
          startValue: -15,
          endValue: -5,
          property: "translateY",
          unit: "vh"
        }
    ]
  }
];

export default class ArrowTransitionR extends React.Component {
  render() {
    return (
      <div>
        <Plx parallaxData={parallaxData}>
        <img src={arrows} id="arrowLeft" alt="aspen" />
        </Plx>
      </div>
    );
  }
}
