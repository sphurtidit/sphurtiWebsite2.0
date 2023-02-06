import React from "react";
import "./messageCard.css";
// import { Zoom } from "react-reveal";

function MessageCard({ data }) {
	return (
		<div className="messageCard">
			<div className="msgImg">
				{/* <Zoom> */}
				<img src={data.imageUrl} alt="" />
				{/* </Zoom> */}
			</div>
			<div className="messageDetail">
				{/* <Zoom> */}
				<div className="message">{data.message}</div>
				<div className="identity">
					-{data.name},{data.designation}
				</div>
				{/* </Zoom> */}
			</div>
		</div>
	);
}

export default MessageCard;
