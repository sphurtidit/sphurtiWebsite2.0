import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase";
import "./Contactcard.css";
import Contactcard from "./Contactcard";
import Studentcontact from "./Studentcontact";

const Contactwrapper = () => {
	const [data, setData] = useState([]);
    const [state,setState]=useState([]);
	const [loading, setLoading] = useState(true);
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
			setLoading(false);
		});

		return () => {
			unsub2;
		};
	}, []);
	return (
    <div className="ContactCard">
      {loading && <h1>Loading...</h1>}
      <div className="div3">
        <p className="heading">Faculty Contact</p>
        <div className="div4">
          {data && data.map((item, id) => <Contactcard data={item} key={id} />)}
        </div>
        <p className="heading">Student Contact</p>
        <div className="div5">
          {state &&
            state.map((item, id) => <Studentcontact data={item} key={id} />)}
        </div>
      </div>
    </div>
  );
};

export default Contactwrapper;
