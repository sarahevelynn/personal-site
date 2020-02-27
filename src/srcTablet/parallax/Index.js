import React from "react";
import Header from "./Header";
import WhatIDo from "./WhatIDo";
import WhatImAbout from "./WhatImAbout";
import MyWork from "./MyWork";
import Contact from "./Contact";
import Footer from "./Footer";
import arrows from "../../photoAssets/arrows.png";
import summit from "../../photoAssets/summit.jpg";
import bone from "../../photoAssets/bone.jpg";
import tetons from "../../photoAssets/tetons.jpg";
import aspen from "../../photoAssets/aspen.jpg";

export default class ParallaxPractice extends React.Component {
  render() {
    return (
      <div id="AppM">
        <Header />
        <img src={arrows} id="arrowSeparator" alt="SeJ" />
        <WhatIDo className="content" />
        <img src={summit} className="separatorM" alt="SeJ" />
        <WhatImAbout className="content" />
        <img src={bone} className="separatorM" alt="SeJ" />
        <MyWork className="content" />
        <img src={tetons} className="separatorM" alt="SeJ" />
        // <Contact />
        // <img src={aspen} className="separatorM" alt="SeJ" />
        <Footer />
      </div>
    );
  }
}
