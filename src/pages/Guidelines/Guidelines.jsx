import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase";

import "./GuideLines.css";

function Guidelines() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const unsub = onSnapshot(doc(db, "sports", "guidelines"), (doc) => {
			setData(doc.data().guidelines);
			setLoading(false);
		});

		return () => {
			unsub;
		};
	}, []);

	return (
		<div className="Guidlinespage">
			{loading && <h1>Loading...</h1>}
			<ul>
				{data &&
					data.map((item, id) => {
						return <li key={id}>{item}</li>;
					})}
			</ul>
		</div>
	);
}

export default Guidelines;
