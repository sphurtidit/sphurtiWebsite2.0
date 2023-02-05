import { Link } from "react-router-dom";
import "./EventCards.css";

const EventCards = ({ data }) => {
	return (
    <div className="cardcontainer">
      <div className="cardinner">
        <div className="div1">
          <Link to="/eventpage" state={{ data: data }}>
            <img src={data.thumbnail} alt="not available"></img>
          </Link>
        </div>
        <div className="div2">
          <Link to="/eventpage" state={{ data: data }} className="title">
            {data.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCards;
