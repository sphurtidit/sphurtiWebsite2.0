import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase";
import EventCards from "./EventCards";
import "./EventCards.css";

const Eventswrapper = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const unsub = onSnapshot(doc(db, "sports", "sports"), (doc) => {
			setData(doc.data().details);
			setLoading(false);
		});

		return () => {
			unsub;
		};
	}, []);
	return (
		<div className="EventCard">
			{loading && <h1>Loading...</h1>}
			{data && data.map((item, id) => <EventCards data={item} key={id} />)}
		</div>
	);
};

export default Eventswrapper;
