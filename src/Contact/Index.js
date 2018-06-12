import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header.js";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
      <Header />
        <h2 id="formTitle">Contact Me</h2>
        <form id="contactForm" onSubmit={"mailto:sarah@5280startupsolutions.co"}>
          <label htmlFor="Name">Name:</label>
          <input type="text" name="Name" />
          <label htmlFor="Email">Email:</label>
          <input type="text" name="Email" />
          <label htmlFor="Subject">Subject:</label>
          <input type="text" name="Subject" />
          <label htmlFor="Message">Message:</label>
          <input type="text" name="Message" />
          <label htmlFor="Interest">Service of Interest</label>
          <select name="Interest">
            <option value="" disabled selected>
              Select something...
            </option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Writing">Writing</option>
          </select>
          <input type="submit" id="submitButton" value="Submit" />
        </form>
      </div>
    );
  }
}
