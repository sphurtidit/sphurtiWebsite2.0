import "./EventCards.css";
import { Modal } from "@mantine/core";
import { useState } from "react";
import close from "../../assets/closeButton.png";
import back from "../../assets/back3.webp";
import { Bounce,Slide } from "react-awesome-reveal";

const EventCards = ({ data }) => {
	const [modal, setModal] = useState(false);
	return (
		<>
			<Modal
				opened={modal}
				onClose={() => setModal(false)}
				centered
				overflow="inside"
				overlayBlur="10"
				withCloseButton={false}
			>
				<img
					src={close}
					alt="close"
					className="modalCloseButton"
					onClick={() => setModal(false)}
				/>
				<div className="modalTitle">{data.name}</div>
				<div className="modalbody">
					<div className="modalDetails">
						<div>
							<p>Registration Fees :</p>
							<p>{data.registration_fees}</p>
						</div>
						<div>
							<p>Prize Money :</p>
						</div>
						<div>
							<p></p>
							<p>Winners: </p>
							<p>{data.prize_money}</p>
						</div>
						<div>
							<p></p>
							<p>Runner Up: </p>
							<p>{data.prize_runner}</p>
						</div>
					</div>
					<div className="rules">
						<p>Rules:</p>
						<ul className="modalRules">
							{data &&
								data.rules.map((rule, id) => {
									return <li key={id}> {rule} </li>;
								})}
						</ul>
						{data.image && (
							<img src={data.image} alt="rules" style={{ width: "100%" }} />
						)}
					</div>
					<div className="modalShedule">
						<p>Schedule:</p>
						{data &&
							data.schedule &&
							data.schedule.map((img, id) => {
								return <img src={img} alt="shedule" key={id} />;
							})}
						{(!data.schedule || data.schedule.length === 0) && (
							<p>Schedule will be updated soon</p>
						)}
					</div>
					<div className="coordinators">
						<p>Coordinators:</p>
						{data &&
							data.coordinators.map((coordinator, id) => {
								return (
									<div className="coordinator" key={id}>
										<p>{coordinator.name}:</p>
										<p>{coordinator.phone}</p>
									</div>
								);
							})}
					</div>
					{data.registration_is_live && (
						<a href={data.registration_link} target="_black">
							Register
						</a>
					)}
					{!data.registration_is_live && (
						<p class="modalNotOpen">Registerations not open</p>
					)}
				</div>
			</Modal>
			<Slide triggerOnce={true} cascade damping={0.3}>
				<div className="cardcontainer" onClick={() => setModal(true)}>
					<div>
						<img
							src={back}
							className="contactcard1"
							alt="not available"
							style={{
								backgroundImage: `url(${data.thumbnail})`,
							}}
						></img>
					</div>

					<div>
						<p className="name">{data.name}</p>
					</div>
				</div>
			</Slide>
		</>
	);
};

export default EventCards;
