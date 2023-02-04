import React from "react";
import "./Contactcard.css";

const Studentcontact= ({ state }) => {
	return (
    <div className="cardcontainer">
      <img src={data.imageUrl} alt="not available"></img>
      <div className="div2">
        <p className="name">{state.name}</p>
        <p className="number">{state.phone}</p>
      </div>
    </div>
  );
};

export default Studentcontact;
