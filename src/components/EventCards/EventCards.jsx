import "./EventCards.css";
import back from "../../assets/back3.webp"

const EventCards = ({ data }) => {
	return (
		<div className="cardcontainer">
			<div>
				<img
					src={back}
					className="contactcard1"
					alt="not available"
					style={{ backgroundImage: `url(${data.thumbnail})` }}
				></img>
			</div>

			<div>
				<p className="name">{data.name}</p>
			</div>
		</div>
	);
};

export default EventCards;
