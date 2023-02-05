import { Link } from "react-router-dom";
import "./EventCards.css";

const EventCards = ({ data }) => {
	return (
		<div className="cardcontainer">
			<Link to="/eventpage" state={{ data: data }}>
				<img src={data.thumbnail} alt="not available"></img>
			</Link>
			<div>
				<Link to="/eventpage" state={{ data: data }} className="title">
					{data.name}
				</Link>
			</div>
		</div>
	);
};

export default EventCards;
