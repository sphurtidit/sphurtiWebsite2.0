import "./Social.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import { Link } from "react-router-dom";

const Social = () => {
	return (
    <div className="Social">
      <Link to="">
        <img src={facebook} alt="socail" />
      </Link>
      <Link to="https://www.instagram.com/dit_sphurti_/">
        <img src={instagram} alt="socail" />
      </Link>
      <Link to="">
        <img src={twitter} alt="socail" />
      </Link>
      <Link to="">
        <img src={youtube} alt="socail" />
      </Link>
    </div>
  );
};

export default Social;
