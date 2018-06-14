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
      <div id="imageContainer">
      <img src={aspen} className="photos" alt="aspen"/>
      <img src={bird} className="photos" alt="bird"/>
      </div>
      <div id="imageContainer">
      <img src={bone} className="photos" alt="bone"/>
      <img src={comillas} className="photos" alt="comillas"/>
      </div>
      <div id="imageContainer">
      <img src={cows} className="photos" alt="cows"/>
      <img src={denver} className="photos" alt="denver"/>
      </div>
      <div id="imageContainer">
      <img src={flowers} className="photos" alt="flowers"/>
      <img src={hawaii} className="photos" alt="hawaii"/>
      </div>
      <div id="imageContainer">
      <img src={hut} className="photos" alt="hut"/>
      <img src={hutTrip} className="photos" alt="hutTrip"/>
      </div>
      <div id="imageContainer">
      <img src={mountains} className="photos" alt="mountains"/>
      <img src={peru} className="photos" alt="peru"/>
      </div>
      <div id="imageContainer">
      <img src={summit} className="photos" alt="summit"/>
      <img src={tetons} className="photos" alt="tetons"/>
      </div>
      </div>
    );
  }
}
