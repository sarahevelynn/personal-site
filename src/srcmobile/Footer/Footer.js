import React from "react";
import email from "./assets/email.png";
import twitter from "./assets/twitter.png";
import github from "./assets/github.png";
import linkedIn from "./assets/linkedIn.png";
import SarahEvelynnJohnsonResume from "./assets/SarahEvelynnJohnsonResume.pdf";
import Resume from "./assets/Resume.png";

export default function Footer() {
  return (
    <footer>
      <div id="social">
        <a href={"mailto:sarah@5280startupsolutions.co"} target="_blank">
          <img src={email} className="socialPhotos" alt="email us" />
        </a>
        <a href={"https://github.com/sarahevelynn"} target="_blank">
          <img src={github} className="socialPhotos" alt="github" />
        </a>
        <a
          href={SarahEvelynnJohnsonResume}
          download="SarahEvelynnJohnsonResume"
        >
          <img src={Resume} className="socialPhotos" alt="Resume" />
        </a>
        <a href={"https://www.linkedin.com/in/sarahevelynn/"} target="_blank">
          <img src={linkedIn} className="socialPhotos" alt="linkedIn" />
        </a>
        <a href={"https://twitter.com/sarah_evelynn"} target="_blank">
          <img src={twitter} className="socialPhotos" alt="twitter" />
        </a>
      </div>
    </footer>
  );
}
