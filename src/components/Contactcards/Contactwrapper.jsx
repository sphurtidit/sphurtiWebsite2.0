import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase";
import "./Contactcard.css";
import Contactcard from "./Contactcard";
import Studentcontact from "./Studentcontact";
import { Zoom, JackInTheBox } from "react-awesome-reveal";

const Contactwrapper = () => {
	const [data, setData] = useState([]);
	const [state, setState] = useState([]);
	const [heads, setHeads] = useState([])
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const unsub = onSnapshot(doc(db, "contact", "faculty_contact"), (doc) => {
			setData(doc.data().faculty_contact);
			setLoading(false);
		});

		return () => {
			unsub;
		};
	}, []);
	useEffect(() => {
		const unsub2 = onSnapshot(doc(db, "contact", "student_contact"), (doc) => {
			setState(doc.data().student_contact);
			setHeads(doc.data().head_contact);
			setLoading(false);
		});

		return () => {
			unsub2;
		};
	}, []);
	return (
		<>
			{loading && <h1>Loading...</h1>}
			{!loading && (
				<Zoom triggerOnce={true} delay={1000}>
					<h2
						style={{
							color: "white",
							textAlign: "center",
							marginBottom: "1rem",
						}}
					>
						Faculty contact
					</h2>
				</Zoom>
			)}
			<div className="div4">
				{data && data.map((item, id) => <Contactcard data={item} key={id} />)}
			</div>
			{!loading && (
				<Zoom triggerOnce={true}>
					<h2
						style={{
							color: "white",
							textAlign: "center",
							marginTop: "2rem",
						}}
					>
						Student contact
					</h2>
				</Zoom>
			)}
			<div className="div6">
				{heads &&
					heads.map((item, id) => <Studentcontact data={item} key={id} />)}
			</div>
			<div className="div5">
				{state &&
					state.map((item, id) => <Studentcontact data={item} key={id} />)}
			</div>
		</>
	);
};

export default Contactwrapper;
