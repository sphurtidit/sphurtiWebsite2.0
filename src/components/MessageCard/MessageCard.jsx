import React, { useState } from "react";
import "./messageCard.css";
import { Slide } from "react-awesome-reveal";

function MessageCard({ data }) {
	const text = data.message;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => { setIsReadMore(!isReadMore) };
	if (data.place === 1) {
		return (
			<Slide triggerOnce={true}>
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
						<div className="message">{isReadMore ? text.slice(0, 250) : text} {text.length > 150 &&
							<span onClick={toggleReadMore}>
								{isReadMore ? '...read more' : ' ...show less'}
							</span>
						}</div>
					</div>
				</div>
			</Slide>

		);
	}
	else {
		return (
			<Slide triggerOnce={true} direction="right">
				<div className="messageCard reverse">
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
						<div className="message">{isReadMore ? text.slice(0, 250) : text} {text.length > 150 &&
							<span onClick={toggleReadMore}>
								{isReadMore ? '...read more' : ' ...show less'}
							</span>
						}</div>
					</div>
				</div>
			</Slide>

		);
	}

}

export default MessageCard;
