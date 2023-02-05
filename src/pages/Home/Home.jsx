import "./Home.css";
import React, { useEffect, useState } from 'react'
import homecourt from '../../assets/basketball-court.png'
import player from '../../assets/basketball-player.png'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase";
import MessageCard from "../../components/MessageCard/MessageCard";

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
    <div className="home">
      <div className="mainTitle">
        <p>SPHURTI <br></br>2023</p>
      </div>
      <div className="messages">
        {loading && <h1>Loading...</h1>}
        {data &&
          data.map((item, id) => {
            return (
              <MessageCard data={item} key={id}/>
            );
          })}
      </div>
    </div>
  )
}

export default Home

