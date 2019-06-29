import React from "react";
import email from "../../footerAssets/email.png";
import twitter from "../../footerAssets/twitter.png";
import github from "../../footerAssets/github.png";
import linkedIn from "../../footerAssets/linkedIn.png";
import SarahEvelynnJohnsonResume from "../../generalAssets/SarahEvelynnJohnsonResume.pdf";
import Resume from "../../footerAssets/Resume.png";

export default function StickyFooter() {
  return (
    <footer id="footerBottom">
      <p id="copy">&copy; 2019, SarahEvelynn Johnson</p>
      <div id="social">
        <a href={"mailto:sarah@5280startupsolutions.co"} target="_blank">
          <img src={email} className="socialPhoto" alt="email us" />
        </a>
        <a href={"https://github.com/sarahevelynn"} target="_blank">
          <img src={github} className="socialPhoto" alt="github" />
        </a>
        <a
          href={SarahEvelynnJohnsonResume}
          download="SarahEvelynnJohnsonResume"
        >
          <img src={Resume} className="socialPhoto" alt="Resume" />
        </a>

        <a href={"https://www.linkedin.com/in/sarahevelynn/"} target="_blank">
          <img src={linkedIn} className="socialPhoto" alt="linkedIn" />
        </a>
        <a href={"https://twitter.com/sarah_evelynn"} target="_blank">
          <img src={twitter} className="socialPhoto" alt="twitter" />
        </a>
      </div>
    </footer>
  );
}
