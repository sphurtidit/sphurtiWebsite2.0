import "./Social.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";

const Social = () => {
	return (
		<div className="Social">
			<img src={facebook} alt="socail" />
			<img src={instagram} alt="socail" />
			<img src={twitter} alt="socail" />
			<img src={youtube} alt="socail" />
		</div>
	);
};

export default Social;
