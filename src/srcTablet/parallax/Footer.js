import React from "react";
import email from "../../footerAssets/email.png";
import github from "../../footerAssets/github.png";
import linkedIn from "../../footerAssets/linkedIn.png";
import Resume from "../../footerAssets/Resume.png";
import SarahEvelynnJohnsonResume from "../../workAssets/SarahEvelynnJohnsonResume.pdf";

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footerM">
      <div id="social">
          <a href={"mailto:sarahevelynnjohnson@gmail.com"} target="_blank">
            <img src={email} className="socialPhotoT" alt="email us" />
          </a>
          <a href={"https://github.com/sarahevelynn"} target="_blank">
            <img src={github} className="socialPhotoT" alt="github" />
          </a>
          <a
            href={SarahEvelynnJohnsonResume}
            download="SarahEvelynnJohnsonResume"
          >
            <img src={Resume} className="socialPhotoT" alt="Resume" />
          </a>

          <a href={"https://www.linkedin.com/in/sarahevelynn/"} target="_blank">
            <img src={linkedIn} className="socialPhotoT" alt="linkedIn" />
          </a>
        </div>
        <p>&copy; 2020, Sarah Evelynn Johnson</p>
      </div>
    );
  }
}
