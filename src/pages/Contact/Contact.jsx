import Contactwrapper from "../../components/Contactcards/Contactwrapper";
import image1 from "../../assets/rectangle26.png";

function Contact() {
	return (
		<div
			style={{
				backgroundImage: `url(${image1})`,
				backgroundRepeat: "no-repeat",
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
