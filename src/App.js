import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DesktopBreakpoint from "./Responsive_Utilities/desktop_breakpoint";
import TabletBreakpoint from "./Responsive_Utilities/tablet_breakpoint";
import PhoneBreakpoint from "./Responsive_Utilities/phone_breakpoint";
import Desktop from "./srcdesktop/Index.js";
import Mobile from "./srcmobile/Index.js";
import Tablet from "./srctablet/Index.js";

var baseURL = "https://sarahevelynnjohnson.herokuapp.com/";


class App extends Component {
 render() {
 return (
 <div>
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
}


export default App;
