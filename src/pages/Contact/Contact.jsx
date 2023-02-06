import Contactwrapper from "../../components/Contactcards/Contactwrapper";
import "./Contact.css";
import Circles from "../../components/Circles/Circles";
import ig from "../../assets/ig.png"
import fb from "../../assets/fb.png"
import yt from "../../assets/yt.png"
import twitter from "../../assets/svg.png"
import { Link } from "react-router-dom";

function Contact() {
	return (
		<div
			className="ContactPage"
			style={{
				width: "100%",
				position: "relative",
				padding: "2rem 1.5rem 3rem 1.5rem",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Circles />
			<Contactwrapper />
      <div className="socials">
        <Link to="">
          <img src={fb} className="icons" alt="img not available"></img>
        </Link>
        <Link target="_blank" to="https://www.instagram.com/dit_sphurti_/">
          <img src={ig} className="icons" alt="img not available"></img>
        </Link>
        <Link to="">
          <img src={twitter} className="icons" alt="img not available"></img>
        </Link>
        <Link to="">
          <img src={yt} className="icons" alt="img not available"></img>
        </Link>
      </div>
		</div>
	);
}

export default Contact;
