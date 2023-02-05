import "./Circles.css";
import blueCircle from "../../assets/blueCircle.png";
import yellowCircle from "../../assets/yellowCirlce.png";
import purpleCircle from "../../assets/purpleCircle.png";

const Circles = () => {
	return (
		<>
			<img src={blueCircle} alt="circle" className="blueCircle" />
			<img src={yellowCircle} alt="circle" className="yellowCircle" />
			<img src={purpleCircle} alt="circle" className="purpleCircle" />
		</>
	);
};

export default Circles;
