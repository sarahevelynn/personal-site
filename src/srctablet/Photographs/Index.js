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
