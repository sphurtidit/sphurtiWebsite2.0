import EventCards from "./EventCards";
import { events } from "../../constants/Dummydata";
import "./EventCards.css";

const Eventswrapper = () => {
  return (
    <div className="EventCard">
            {events.map((item, id) => (
              <EventCards data={item} key={id} />
            ))}
          
        
    </div>
  );
};

export default Eventswrapper;
