import "./Sports.css";
import Eventswrapper from "../../components/EventCards/Eventwrapper";
import rectangle from "../../assets/Rectangle.png"

function Sports() {
	return (
		<div
			className="sportsPage"
			style={{
				position: "relative",
				width: "100%",
				padding: "2rem 1.5rem 3rem 1.5rem",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "transparent",
			}}
		>
			<Eventswrapper />
		</div>
	);
}

export default Sports;
