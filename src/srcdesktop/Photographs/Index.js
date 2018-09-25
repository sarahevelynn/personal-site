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
import Footer from "../Footer/Footer.js";



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
      <Footer />
      </div>
    );
  }
}
