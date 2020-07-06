import React from "react";
import email from "../../footerAssets/email.png";
import github from "../../footerAssets/github.png";
import linkedIn from "../../footerAssets/linkedIn.png";
import Resume from "../../footerAssets/Resume.png";
import SarahEvelynnJohnsonResume from "../../workAssets/SarahEvelynnJohnsonResume.pdf";

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div id="social">
          <a href={"mailto:sarahevelynnjohnson@gmail.com"} target="_blank">
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
        </div>
        <p id="copy">&copy; 2020, SarahEvelynn Johnson</p>
      </div>
    );
  }
}
