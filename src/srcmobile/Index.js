import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./Footer/Footer.js";
import Section from "./frontPage/Index.js";
import myWork from "./Work/Index.js";
import AboutMe from "./About/AboutMe.js";
import Contact from "./Contact/Index.js";
import Photographs from "./Photographs/Index";

export default class Mobile extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-content">
            <Route exact path="/" component={Section} />
            <Route path="/myWork" component={myWork} />
            <Route path="/about" component={AboutMe} />
            <Route
              path="/contact"
              render={() => <Contact getNewContact={this.getNewContact} />}
            />
            <Route path="/photography" component={Photographs} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
