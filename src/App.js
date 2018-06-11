import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Section from "./frontPage/Index.js"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-content">
            <Route exact path="/" component={Section} />
            <Footer />
          </div>
      </Router>
      </div>

    );
  }
}

export default App;
