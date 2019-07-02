import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import DesktopBreakpoint from "./Responsive_Utilities/desktop_breakpoint";
import TabletBreakpoint from "./Responsive_Utilities/tablet_breakpoint";
import PhoneBreakpoint from "./Responsive_Utilities/phone_breakpoint";
import Desktop from "./srcDesktop/Index.js";
import Mobile from "./srcMobile/Index.js";
import Tablet from "./srcTablet/Index.js";

function App() {
  return (
    <div className="App">
      <DesktopBreakpoint>
        <Desktop />
      </DesktopBreakpoint>

      <TabletBreakpoint>
        <Tablet />
      </TabletBreakpoint>

      <PhoneBreakpoint>
        <Mobile />
      </PhoneBreakpoint>
    </div>
  );
}

export default App;
