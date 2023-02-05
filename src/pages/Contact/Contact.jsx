import Contactwrapper from "../../components/Contactcards/Contactwrapper";
import "./Contact.css";

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
		>
			<Contactwrapper />
		</div>
	);
}

export default Contact;
