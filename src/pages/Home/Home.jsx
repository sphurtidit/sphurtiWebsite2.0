import "./Home.css";
import React, { useEffect, useState } from "react";
// import homecourt from '../../assets/basketball-court.png'
// import player from '../../assets/basketball-player.png'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase";
import MessageCard from "../../components/MessageCard/MessageCard";
// import facebook from "../../assets/facebook-icon.png";
// import insta from "../../assets/insta-icon.png";
// import twitter from "../../assets/twitter-icon.png";
// import youtube from "../../assets/youtube-icon.png";
// import { Zoom } from "react-reveal";
import player from "../../assets/homePlayer.png";

function Home() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsub = onSnapshot(doc(db, "contact", "message"), (doc) => {
			setData(doc.data().faculty_message);
			setLoading(false);
		});

		return () => {
			unsub;
		};
	}, []);

	return (
		// <div className="home">
		// 	<div className="mainTitle">
		// 		{/* <Zoom> */}
		// 		<p>
		// 			SPHURTI <br></br>2023
		// 		</p>
		// 		{/* </Zoom> */}
		// 	</div>
		// 	<div className="socials">
		// 		{/* <Zoom> */}
		// 		<div>
		// 			<img src={facebook} alt="" />
		// 		</div>
		// 		<div>
		// 			<img src={insta} alt="" />
		// 		</div>
		// 		<div>
		// 			<img src={twitter} alt="" />
		// 		</div>
		// 		<div>
		// 			<img src={youtube} alt="" />
		// 		</div>
		// 		{/* </Zoom> */}
		// 	</div>
		// 	<div className="messages">
		// 		{loading && <h1>Loading...</h1>}
		// 		{data &&
		// 			data.map((item, id) => {
		// 				return <MessageCard data={item} key={id} />;
		// 			})}
		// 	</div>
		// </div>
		<div className="home">
			<div className="theGame">THE GAME</div>
			<div className="mainhome" id="home">
				<div className="left">
					<div className="content">
						<div className="mainHeading">
							<span>SPHURTI </span>
							<span className="year">2023</span>
						</div>
						<div className="subcontent">
							<div className="sub1">
								Unleash Your Potential,
								<br /> Embrace the Game
							</div>
							<div className="sub2">
								Lorem ipsum dolor amet sit Lorem ipsum dolor amet <br /> sit
								Lorem ipsum dolor amet sit Lorem ipsum dolor <br /> amet sit
							</div>
						</div>
						<button className="registerbtn">REGISTER</button>
					</div>
				</div>
				<div className="right">
					<img src={player} alt="" />
				</div>
			</div>
			<div className="messages" id="about">
				<div className="msgHeading">MESSAGES</div>
				{loading && <h1>Loading...</h1>}
				{data &&
					data.map((item, id) => {
						return <MessageCard data={item} key={id} />;
					})}
			</div>
		</div>
	);
}

export default Home;
