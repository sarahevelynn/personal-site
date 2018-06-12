import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Section from "./frontPage/Index.js";
import myWork from "./Work/Index.js";
import AboutMe from "./About/AboutMe.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-content">
            <Route exact path="/" component={Section} />
            <Route exact path="/myWork" component={myWork} />
            <Route exact path="/about" component={AboutMe} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
