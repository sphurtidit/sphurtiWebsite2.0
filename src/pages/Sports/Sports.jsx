import "./Sports.css";
import Eventswrapper from "../../components/EventCards/Eventwrapper";
import { Zoom } from "react-awesome-reveal";
function Sports() {
	return (
		<div
			className="sportsPage"
			style={{
				width: "100%",
				position: "relative",
				padding: "2rem 1.5rem 3rem 1.5rem",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
			id="sports"
		>
			<Zoom triggerOnce={true}>
				<p
					style={{
						color: "white",
						textAlign: "center",
						fontFamily: "Anton",
						fontStyle: "normal",
						fontWeight: "400",
						fontSize: "4rem",
						margin: "0 auto 2rem auto",
					}}
				>
					SPORTS
				</p>
			</Zoom>
			<Eventswrapper />
		</div>
	);
}

export default Sports;
