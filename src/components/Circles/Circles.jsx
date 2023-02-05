import "./Circles.css";
import blueCircle from "../../assets/blueCircle.png";
import yellowCircle from "../../assets/yellowCirlce.png";

const Circles = () => {
	return (
		<>
			<img src={blueCircle} alt="circle" className="blueCircle" />
			<img src={yellowCircle} alt="circle" className="yellowCircle" />
		</>
	);
};

export default Circles;
