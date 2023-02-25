import React, { useState } from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';

const Timer = () => {
    const[show,setShow]=useState(false);
        return (
          <>
            {show && <div>
              <p className='aftertext' style={{color:"white", fontSize:"2rem"}}>Woohoooo Sphurti is live now check out the live results !!!</p>
            </div>}
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
