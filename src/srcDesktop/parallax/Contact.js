import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";

export default class Contact extends React.Component {
  state = {
    redirect: false,
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
          message: "Ping Sent!",
          isLoading: false
        });
      }, 1000)
    );
};

  render() {
    return (
      <div>
        <h2>Contact Me</h2>
        <form id="contactForm" onSubmit={this.sendMessage}>
          <label htmlFor="Name">Name:</label>
          <input type="text" name="Name" />
          <label htmlFor="Email">Email:</label>
          <input type="text" name="Email" />
          <label htmlFor="Subject">Subject:</label>
          <input type="text" name="Subject" />
          <label htmlFor="Message">Message:</label>
          <input type="text" name="Message" />
          <label htmlFor="Interest">Reason for Contact</label>
          <select name="Interest">
            <option value="" disabled selected>
              Select something...
            </option>
            <option value="Web Development">General Contact</option>
            <option value="App Development">Web/App Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Writing">Writing</option>
          </select>
          <br />
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
          <input type="submit" id="submitButton" value="Submit" />
        </form>
      </div>
    );
  }
}
