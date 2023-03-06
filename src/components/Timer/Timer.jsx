import React, { useState } from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
import { Zoom } from "react-awesome-reveal";

const Timer = () => {
    const[show,setShow]=useState(false);
        return (
          <>
            {show && <Zoom>
              <p className='aftertext' style={{color:"white", fontSize:"2.5rem",fontWeight:"600",marginTop:"2rem"}}><span style={{color:"#f74f63"}}> Woohoooo !!</span>  Sphurti is live now !!!</p>
            </Zoom>}
            <FlipCountdown
              theme="dark"
              size="medium"
              onTimeUp={() =>
                setShow(true)
              }
              
              hideYear
              hideMonth
              endAt={"2023-03-13 00:00:00"} // Date/Time
            />
          </>
        );
    }


export default Timer
