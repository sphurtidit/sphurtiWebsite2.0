import "./LiveResult.css";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase";


const LiveResult = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "results", "live-results"), (doc) => {
      setData(doc.data().badminton);
      setLoading(false);
    });

    return () => {
      unsub;
    };
  }, []);
	return (
    <div className="LiveResultsPage">
      <h1 className="liveresults">Live Results</h1>
	  <div>
		<div className="cricketdiv">
			<h2>badminton result</h2>
			<div>{data && data.map((itm,id) =>{return })}</div>

		</div>
	  </div>
      
    </div>
  );
}

export default LiveResult;
