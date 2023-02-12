import React from "react";
import "./Footer.css";

import imgleft from "../../assets/footer-logo-left.png";
import imgright from "../../assets/footer-logo-right.png";
import imgcenter from "../../assets/footer-logo-center.png";

function Footer() {
	return (
    <div className="footer">
      <div className="footerimages">
        <img src={imgleft} alt="" />
        <img src={imgcenter} alt="" />
        <img src={imgright} alt="" />
      </div>
      <div className="developers">
        Made by Team{" "}
        <a href="http://linktr.ee/ByteBuilders" target="_blank">
          <span>ByteBuilders</span>{" "}
        </a>
      </div>
    </div>
  );
}

export default Footer;
