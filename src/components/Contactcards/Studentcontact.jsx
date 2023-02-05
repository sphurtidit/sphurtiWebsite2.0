import "./Contactcard.css";

const Studentcontact = ({ data }) => {
	return (
		<div className="cardcontainer">
			<img src={data.imageUrl} alt="not available"></img>
			<div className="div2">
				<p className="name">{data.name}</p>
				<p className="number">{data.phone}</p>
			</div>
		</div>
	);
};

export default Studentcontact;
