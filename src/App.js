import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Homepage from "./Welcome/Index.js"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-content">
            <Header />
            <Route exact path="/" component={Homepage} />
            <Footer />
          </div>
      </Router>
      </div>

    );
  }
}

export default App;
