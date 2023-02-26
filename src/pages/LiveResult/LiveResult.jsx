import "./LiveResult.css";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { Bounce, Slide, Zoom } from "react-awesome-reveal";
const LiveResult = () => {
	const [data, setData] = useState([]);
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState([]);
	const [data4, setData4] = useState([]);
	const [data5, setData5] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const unsub = onSnapshot(doc(db, "results", "live-results"), (doc) => {
			setData(doc.data().badminton);
			setData1(doc.data().basketball);
			setData2(doc.data().football);
			setData3(doc.data().cricket);
			setData4(doc.data().table_tennis);
			setData5(doc.data().volleyball);
			setLoading(false);
		});

		return () => {
			unsub;
		};
	}, []);
	return (
		<div className="LiveResultsPage" id="live">
			<Zoom triggerOnce={true}>
				<h1 className="liveresults">RESULTS</h1>
			</Zoom>
			{data && data.length > 0 && (
				<div className="mainbadminton">
					<Zoom triggerOnce={true} delay={1000}>
						<p className="heading">Badminton</p>
					</Zoom>
					<Slide triggerOnce={true} delay={1500} direction="right">
						<div className="badmintondiv">
							{data &&
								data.map((item, id) => {
									return <img src={item} key={id} className="images"></img>;
								})}
						</div>
					</Slide>
				</div>
			)}
			{data1 && data1.length > 0 && (
				<div className="mainbasketball">
					<Zoom triggerOnce={true}>
						<p className="heading">Basketball</p>
					</Zoom>
					<Slide triggerOnce={true} delay={500} direction="right">
						<div className="basketballdiv">
							{data1 &&
								data1.map((item, id) => {
									return <img src={item} key={id} className="images"></img>;
								})}
						</div>
					</Slide>
				</div>
			)}
			{data2 && data2.length > 0 && (
				<div className="mainfootball">
					<Zoom triggerOnce={true}>
						<p className="heading">Football</p>
					</Zoom>
					<Slide triggerOnce={true} delay={500} direction="right">
						<div className="footballdiv">
							{data2 &&
								data2.map((item, id) => {
									return <img src={item} key={id} className="images"></img>;
								})}
						</div>
					</Slide>
				</div>
			)}
			{data3 && data3.length > 0 && (
				<div className="maincricket">
					<Zoom triggerOnce={true}>
						<p className="heading">Cricket</p>
					</Zoom>
					<Slide triggerOnce={true} delay={500} direction="right">
						<div className="cricketdiv">
							{data3 &&
								data3.map((item, id) => {
									return <img src={item} key={id} className="images"></img>;
								})}
						</div>
					</Slide>
				</div>
			)}
			{data4 && data4.length > 0 && (
				<div className="maintabletennis">
					<Zoom triggerOnce={true}>
						<p className="heading">Table Tennis</p>
					</Zoom>
					<Slide triggerOnce={true} delay={500} direction="right">
						<div className="tabletennisdiv">
							{data4 &&
								data4.map((item, id) => {
									return <img src={item} key={id} className="images"></img>;
								})}
						</div>
					</Slide>
				</div>
			)}
			{data5 && data5.length > 0 && (
				<div className="mainvollyball">
					<Zoom triggerOnce={true}>
						<p className="heading">Vollyball</p>
					</Zoom>
					<Slide triggerOnce={true} delay={500} direction="right">
						<div className="vollyballdiv">
							{data5 &&
								data5.map((item, id) => {
									return <img src={item} key={id} className="images"></img>;
								})}
						</div>
					</Slide>
				</div>
			)}
			{data.length === 0 &&
				data1.length === 0 &&
				data2.length === 0 &&
				data3.length === 0 &&
				data4.length === 0 &&
				data5.length === 0 && (
					<Bounce triggerOnce={true}
						style={{
							color: "grey",
							textAlign: "center",
							fontSize: "2rem",
							margin: "2rem 0",
						}}
					>
						Awaiting results...
					</Bounce>
				)}
		</div>
	);
};

export default LiveResult;
