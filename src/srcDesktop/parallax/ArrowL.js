import React from "react";
import Plx from "react-plx";
import SEJ from "../../photoAssets/SEJ.png";

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
        endValue: 75,
        property: "rotateY",
        unit: "deg"
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
        startValue: 75,
        endValue: 0,
        property: "rotateY",
        unit: "deg"
      }
    ]
  }
];

export default class ArrowTransitionL extends React.Component {
  render() {
    return (
      <div id="SEJLogo">
        <Plx parallaxData={parallaxData}>
          <img src={SEJ} alt="SEJ" id="SEJ" />
        </Plx>
      </div>
    );
  }
}
