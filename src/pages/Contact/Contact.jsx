import Contactwrapper from "../../components/Contactcards/Contactwrapper";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
	return (
    <div
      className="ContactPage"
      style={{
        width: "100%",
        position: "relative",
        padding: "2rem 1.5rem 3rem 1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      id="contact"
    >
      <div>
        <p className="Ourteam">CONTACT</p>
      </div>

      <Contactwrapper />
    </div>
  );
}

export default Contact;
