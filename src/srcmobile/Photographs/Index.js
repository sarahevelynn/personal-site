import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header.js";
import aspen from "../../photoAssets/aspen.jpg";
import bird from "../../photoAssets/bird.jpg";
import bone from "../../photoAssets/bone.jpg";
import comillas from "../../photoAssets/comillas.jpg";
import cows from "../../photoAssets/cows.jpg";
import denver from "../../photoAssets/denver.jpg";
import flowers from "../../photoAssets/flowers.jpg";
import hawaii from "../../photoAssets/hawaii.jpg";
import hut from "../../photoAssets/hut.jpg";
import hutTrip from "../../photoAssets/hutTrip.jpg";
import mountains from "../../photoAssets/mountains.jpg";
import peru from "../../photoAssets/peru.jpg";
import summit from "../../photoAssets/summit.jpg";
import tetons from "../../photoAssets/tetons.jpg";

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
