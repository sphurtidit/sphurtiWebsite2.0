import "./Contactcard.css";
import back from "../../assets/back3.webp";
import { Slide } from "react-awesome-reveal";


const Contactcard = ({ data }) => {

  return (
    <Slide triggerOnce={true} delay={1000}>
      <div className="cardcontainer">
        <div>
          <img
            src={back}
            className="contactcard1"
            alt="not available"
            style={{ backgroundImage: `url(${data.imageUrl})` }}
          ></img>
        </div>

        <div>
          <p className="name">{data.name}</p>
          <p className="designation">{data.designation}</p>
          <p className="number">{data.phone}</p>
        </div>
      </div>
    </Slide>
  );
};

export default Contactcard;
