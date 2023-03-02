import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";

import imgleft from "../../assets/footer-logo-left.png";
import imgright from "../../assets/footer-logo-right.png";
import imgcenter from "../../assets/footer-logo-center.png";

function Footer() {
  const socialsLink=["https://www.instagram.com/dit_sphurti_/","https://www.facebook.com/profile.php?id=100089729117172&mibextid=ZbWKwL","https://twitter.com/dit_sphurti_?t=F3gTMtydkwzb7y5PQPve-g&s=08"]

  const handlesocials=(i)=>{
    window.open(socialsLink[i], "_blank")
  }

	return (
    <div className="footer">
      <div className="footerimages">
        <img className="leftImgfooter" src={imgleft} alt="" />
        <img src={imgcenter} alt="" />
        <img src={imgright} alt="" />
      </div>
      <div className="socials">
        <FaInstagram
          color="white"
          size={"1.5em"}
          onClick={()=>handlesocials(0)}
        />
        <FaFacebookSquare
          color="white"
          size={"1.5em"}
          onClick={()=>handlesocials(1)}
        />
        <FaTwitter
          color="white"
          size={"1.5em"}
          onClick={()=>handlesocials(2)}
        />
      </div>
      <div className="developers">
        Made by {" "}
        <a className="bytebuilderlink" href="http://linktr.ee/ByteBuilders" target="_blank">
          <span>Sphurti Technical Team</span>{" "}
        </a>
      </div>
    </div>
  );
}

export default Footer;
