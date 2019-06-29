import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import DesktopBreakpoint from "./Responsive_Utilities/desktop_breakpoint";
import Desktop from "./srcDesktop/Index.js";

function App() {
  return (
    <div className="App">
      <DesktopBreakpoint>
        <Desktop />
      </DesktopBreakpoint>
    </div>
  );
}

export default App;
