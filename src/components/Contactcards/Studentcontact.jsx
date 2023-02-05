import "./Contactcard.css";

const Studentcontact = ({ data }) => {
	console.log(data);
	return (
    <div className="cardcontainer">
      <div className="cardinner">
        <div className="div1">
          <img src={data.imageUrl} alt="not available"></img>
        </div>
        <div className="div2">
          <p className="name">{data.name}</p>
          <p className="number">{data.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Studentcontact;
