import EventCards from "./EventCards";
import { events } from "../../../Constants/Dummydata";

const Eventswrapper = () => {
  return (
    <div className="EventCard">
      <section className="">
        <div className="">
          <div className="">
            {events.map((item, id) => (
              <EventCards data={item} key={id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eventswrapper;
