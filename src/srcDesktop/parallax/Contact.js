import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

export default class Contact extends React.Component {
  state = {
    message: "",
    isLoading: false
  };

  getBasicInfo = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      Name: data.get("Name"),
      Subject: data.get("Subject"),
      Message: data.get("Message"),
      Email: data.get("Email")
    };
  };

  sendMessage = event => {
    this.setState({ isLoading: true });
    fetch("https://dpt-email-server.herokuapp.com/sejContact", {
      method: "post",
      body: JSON.stringify(this.getBasicInfo(event)),
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.response = resp.message;
      })
      .then(
        setTimeout(() => {
          this.setState({
            message: "Ping Sent! Talk to you soon.",
            isLoading: false
          });
        }, 1000)
      );
  };

  render() {
    return (
      <div>
        <h2 id="contactHeader">Contact Me</h2>
        <br />
        <div id="contactForm">
        <form onSubmit={this.sendMessage}>
          <div id="basicContact">
            <label htmlFor="Name">Name:</label>
            <input type="text" name="Name" />
          </div>
          <div id="basicContact">
            <label htmlFor="Email">Email:</label>
            <input type="text" name="Email" />
          </div>
          <div id="basicContact">
            <label htmlFor="Subject">Subject:</label>
            <input type="text" name="Subject" />
          </div>
          <div id="message">
            <label htmlFor="Message">Message:</label>
            <br />
            <input type="text" name="Message" id="messageBox" />
          </div>
          <br />
          <div id="loader">
            {this.state.isLoading === true ? (
              <Loader
                type="ThreeDots"
                color="#22435e"
                height="50"
                width="100"
              />
            ) : (
              <p> {this.state.message} </p>
            )}
          </div>
          <div id="sumbit">
            <input type="submit" id="submitButton" value="Submit" />
          </div>
        </form>
        </div>
      </div>
    );
  }
}
