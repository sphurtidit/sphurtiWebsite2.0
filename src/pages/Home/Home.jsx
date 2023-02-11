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
import toast, { Toaster } from 'react-hot-toast';

function Home() {
	const [data, setData] = useState([]);
	const [isLive,setIsLive]=useState("");
	const [link,setLink]=useState("")
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

	useEffect(()=>{
		const unsub = onSnapshot(doc(db, "contact", "home"), (doc) => {
			setIsLive(doc.data().isLive);
		});
	
		return () => {
			unsub;
		};
	},[])

	useEffect(()=>{
		const unsub = onSnapshot(doc(db, "contact", "home"), (doc) => {
			setLink(doc.data().link);
		});
	
		return () => {
			unsub;
		};
	},[])

	const handleRegisterbtn=()=>{
		if(isLive)
		{
			window.open(link,"_blank")
		}
		else{
			toast.error('registrations not opened yet!!');
		}
	}

	return (
		<div className="home">
			<Toaster />
			<div className="theGame">THE GAME</div>
			<div className="mainhome" id="home">
				<div className="left">
					<div className="content">
						<div className="mainHeading">
							<span className="sphurtiText">SPHURTI </span>
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
						<button className="registerbtn"
						onClick={()=>handleRegisterbtn()}
						>
							REGISTER
						</button>
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
