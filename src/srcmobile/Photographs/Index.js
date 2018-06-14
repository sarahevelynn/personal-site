import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import aspen from "./assets/aspen.jpg";
import bird from "./assets/bird.jpg";
import bone from "./assets/bone.jpg";
import comillas from "./assets/comillas.jpg";
import cows from "./assets/cows.jpg";
import denver from "./assets/denver.jpg";
import flowers from "./assets/flowers.jpg";
import hawaii from "./assets/hawaii.jpg";
import hut from "./assets/hut.jpg";
import hutTrip from "./assets/hutTrip.jpg";
import mountains from "./assets/mountains.jpg";
import peru from "./assets/peru.jpg";
import summit from "./assets/summit.jpg";
import tetons from "./assets/tetons.jpg";



export default class Photographs extends React.Component {
  render() {
    return (
      <div id="images" >
      <Header />
      <img src={aspen} className="mobileImage" alt="aspen"/>
      <img src={bird} className="mobileImage" alt="bird"/>
      <img src={bone} className="mobileImage" alt="bone"/>
      <img src={comillas} className="mobileImage" alt="comillas"/>
      <img src={cows} className="mobileImage" alt="cows"/>
      <img src={denver} className="mobileImage" alt="denver"/>
      <img src={flowers} className="mobileImage" alt="flowers"/>
      <img src={hawaii} className="mobileImage" alt="hawaii"/>
      <img src={hut} className="mobileImage" alt="hut"/>
      <img src={hutTrip} className="mobileImage" alt="hutTrip"/>
      <img src={mountains} className="mobileImage" alt="mountains"/>
      <img src={peru} className="mobileImage" alt="peru"/>
      <img src={summit} className="mobileImage" alt="summit"/>
      <img src={tetons} className="mobileImage" alt="tetons"/>
      </div>
    );
  }
}
