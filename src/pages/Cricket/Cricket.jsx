import {useEffect,useState} from 'react';
import "./Cricket.css";
import { doc, onSnapshot } from "firebase/firestore";

const Cricket = () => {
/*  const[data,setData]=useState([]);
    useEffect(() => {
        const docref = doc(db,"sports",sports);
        const unsub = onSnapshot(
            docref,
            (snapshot)=>{setData(snapshot.data());
            }

            )
            return unsub;
    },[]);
    */
  return (
    
    <div>
      <p>cricket page</p>


    </div>
  )

  }
export default Cricket;
