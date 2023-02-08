import React from "react";
import "./messageCard.css";

function MessageCard({ data }) {
	if(data.place===1)
	{
		return (
			<div className="messageCard">
				<div className="msgImg">
					<img src={data.imageUrl} alt="" />
				</div>
				<div className="messageDetail">
					<div className="identity">
						{data.name}
					</div>
					<div className="designationHeading">
						{data.designation}
					</div>
					<div className="message">{data.message}</div>
				</div>
			</div>	
		);
	}
	else{
		return (
			<div className="messageCard">
				<div className="messageDetail">
					<div className="identity">
						{data.name}
					</div>
					<div className="designationHeading">
						{data.designation}
					</div>
					<div className="message">{data.message}</div>
				</div>
				<div className="msgImg">
					<img src={data.imageUrl} alt="" />
				</div>
			</div>	
		);
	}
	
}

export default MessageCard;
