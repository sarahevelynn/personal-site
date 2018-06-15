import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Section from "./frontPage/Index.js";
import myWork from "./Work/Index.js";
import AboutMe from "./About/Index.js";
import Contact from "./Contact/Index.js";
import Photographs from "./Photographs/Index";


var baseURL = "https://sarahevelynnjohnson.herokuapp.com/";


export default class Desktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalSite: []
    };
  }
  componentDidMount() {
    fetch(baseURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          personalSite: response.personalSite
        });
      })
      .catch(error => console.log(error));
  }

  getNewContact = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      Name: data.get("Name"),
      Email: data.get("Email"),
      Subject: data.get("Subject"),
      Message: data.get("Message"),
      Interest: data.get("Interest")
    };
  };

  addContact = event => {
    event.preventDefault();
    fetch(baseURL + "personalSite", {
      method: "post",
      body: JSON.stringify(this.getNewContact(event)),
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        this.componentDidMount();
      })
      .catch(error => {
        console.log(error);
      });
  };

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
