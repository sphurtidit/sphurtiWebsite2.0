import "./Home.css";
import React, { useEffect, useState } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase";
import MessageCard from "../../components/MessageCard/MessageCard";
import facebook from '../../assets/facebook-icon.png'
import insta from '../../assets/insta-icon.png'
import twitter from '../../assets/twitter-icon.png'
import youtube from '../../assets/youtube-icon.png'
import { Zoom } from "react-reveal";

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
        <Zoom>

          <p>SPHURTI <br></br>2023</p>
        </Zoom>
      </div>
      <div className="socials">
        <Zoom>
          <a href="/"><div><img src={facebook} alt="" /></div></a>
          <a href="/"><div><img src={insta} alt="" /></div></a>
          <a href="/"><div><img src={twitter} alt="" /></div></a>
          <a href="/"><div><img src={youtube} alt="" /></div></a>
        </Zoom>
      </div>
      <div className="messages">
        {loading && <h1>Loading...</h1>}
        {data &&
          data.map((item, id) => {
            return (
              <MessageCard data={item} key={id} />
            );
          })}
      </div>
    </div>
  )
}

export default Home

