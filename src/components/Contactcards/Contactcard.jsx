import React from "react";
import "./Contactcard.css";

const Contactcard = ({ data }) => {
	return (

		<div className="cardcontainer">
			<img src={data.thumbnail} alt="not available"></img>
			<div className="div2">
				<p className="name">{}</p>
                <p className="number">{}</p>
			</div>
		</div>
	);
};

export default Contactcard;
