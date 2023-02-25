import "./Home.css";
import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase";
import MessageCard from "../../components/MessageCard/MessageCard";
import toast, { Toaster } from 'react-hot-toast';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Timer from "../../components/Timer/Timer";

import { Zoom } from "react-awesome-reveal";

function Home() {
	const [data, setData] = useState([]);
	const [isLive, setIsLive] = useState("");
	const [link, setLink] = useState("")
	const [loading, setLoading] = useState(true);
	const [playerImg, setPlayerImg] = useState([]);

	useEffect(() => {
		const unsub = onSnapshot(doc(db, "contact", "message"), (doc) => {
			setData(doc.data().faculty_message);
			setLoading(false);
		});

		return () => {
			unsub;
		};
	}, []);

	useEffect(() => {
		const unsub = onSnapshot(doc(db, "contact", "home"), (doc) => {
			setIsLive(doc.data().isLive);
			setLink(doc.data().link);
			setPlayerImg(doc.data().images);
		});

		return () => {
			unsub;
		};
	}, [])

	const handleRegisterbtn = () => {
		if (isLive) {
			window.open(link, "_blank")
		}
		else {
			toast.error('registrations not opened yet!!');
		}
	}

	return (
		<div className="home">
			<Toaster />
			<Zoom triggerOnce={true} delay={500} className="theGame">
				THE GAME
			</Zoom>
			<div className="mainhome" id="home">
				<div className="left">
					<div className="content">
						<Zoom triggerOnce={true} delay={1000} className="headding">
							<div className="mainHeading">
								<span className="sphurtiText">SPHURTI </span>
								<span className="year">2023</span>
							</div>
						</Zoom>

						<Zoom triggerOnce={true} delay={1000} className="subcontent">
							<div className="sub1">
								Unleash Your Potential,
								<br /> Embrace the Game
							</div>
							{/* <div className="sub2">
								Lorem ipsum dolor amet sit Lorem ipsum dolor amet <br /> sit
								Lorem ipsum dolor amet sit Lorem ipsum dolor <br /> amet sit
							</div> */}
						</Zoom>
						<Zoom triggerOnce={true} delay={1500} className="btnn">
							<button
								className="registerbtn"
								onClick={() => handleRegisterbtn()}
							>
								REGISTER
							</button>
						</Zoom>
					</div>
				</div>
				<Zoom triggerOnce={true} className="right">
					{/* <img src={player} alt="" /> */}
					<Carousel
						className="carousel"
						autoPlay={true}
						infiniteLoop={true}
						width={"22rem"}
						interval={2000}
						showArrows={false}
						showIndicators={false}
						showStatus={false}
						showThumbs={false}
						key={playerImg.length}
					>
						{playerImg.map((item, id) => {
							return <img src={item} alt="" key={id} />;
						})}
					</Carousel>
				</Zoom>
			</div>

			<div className="timer">
				<Zoom triggerOnce={true}>
					<h1 className="timerheading">Sphurti will kick off in :</h1>
				</Zoom>
				<Zoom triggerOnce={true}>
					<Timer />
				</Zoom>
			</div>


			<div className="messages" id="about">
				<Zoom triggerOnce={true} className="msgHeading">
					MESSAGES
				</Zoom>
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
