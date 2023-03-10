import "./Contactcard.css";
import back from "../../assets/back3.webp";
import { Slide } from "react-awesome-reveal";

const Studentcontact = ({ data }) => {
  return (
    <Slide triggerOnce={true}>
      <div className="cardcontainer">
        <img
          src={back}
          className="contactcard1"
          alt="not available"
          style={{
            backgroundImage: `url(${data.imageUrl})`,
            backgroundSize: "contain",
            backgroundPosition: "0 2rem"
          }}
        ></img>
        <div className="div2">
          <p className="name">{data.name}</p>
          <p className="designation">{data.designation}</p>
          <p className="number">{data.phone}</p>
        </div>
      </div>
    </Slide>

  );
};

export default Studentcontact;
