import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sunflower from "./assets/sunflower.jpg";
import { Projects } from "./Projects";
import Header from "../Header/Header.js";



export default class myWork extends React.Component {
  render() {
    return (
      <div>
      <Header />
        <Projects />
      </div>
    );
  }
}
