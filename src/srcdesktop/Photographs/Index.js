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
      <img src={aspen} className="desktopPhotos" alt="aspen"/>
      <img src={bird} className="desktopPhotos" alt="bird"/>
      <img src={bone} className="desktopPhotos" alt="bone"/>
      </div>
      <div id="imageContainer">
      <img src={comillas} className="desktopPhotos" alt="comillas"/>
      <img src={cows} className="desktopPhotos" alt="cows"/>
      <img src={denver} className="desktopPhotos" alt="denver"/>
      </div>
      <div id="imageContainer">
      <img src={flowers} className="desktopPhotos" alt="flowers"/>
      <img src={hawaii} className="desktopPhotos" alt="hawaii"/>
      <img src={hut} className="desktopPhotos" alt="hut"/>
      </div>
      <div id="imageContainer">
      <img src={hutTrip} className="desktopPhotos" alt="hutTrip"/>
      <img src={mountains} className="desktopPhotos" alt="mountains"/>
      <img src={peru} className="desktopPhotos" alt="peru"/>
      </div>
      <div id="imageContainer">
      <img src={summit} className="desktopPhotos" alt="summit"/>
      <img src={tetons} className="desktopPhotos" alt="tetons"/>
      </div>
      </div>
    );
  }
}
