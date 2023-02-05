import "./Sports.css";
import Eventswrapper from "../../components/EventCards/Eventwrapper";
import image1 from "../../assets/rectangle26.png"

function Sports() {
	return (
		<div
			className="sportsPage"
			style={{
				backgroundImage:`url(${image1})`,
				position: "relative",
				width: "100%",
				padding: "2rem 1.5rem 3rem 1.5rem",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				
			}}
		>
			<Eventswrapper />
		</div>
	);
}

export default Sports;
