import "./Sports.css";
import Eventswrapper from "../../components/EventCards/Eventwrapper";
import Circles from "../../components/Circles/Circles";

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
			}}
		>
			<Circles />
			<Eventswrapper />
		</div>
	);
}

export default Sports;
