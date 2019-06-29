import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ParallaxPractice from "./parallax/Index";

var baseURL = "https://sarahevelynnjohnson.herokuapp.com/";

export default class Desktop extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-content">
            <Route exact path="/" component={ParallaxPractice} />
          </div>
        </Router>
      </div>
    );
  }
}
