import React from 'react';
import { Link } from 'react-router-dom';
import "./EventCards.css";

const EventCards = ({data}) => {
  return (
        <div className='cardcontainer'>
          <div className='div1' >
              <img src={data.thumbnail} className='cardimage' alt='img not available'></img>
          </div>
          <div className='div2'>
              <Link to={data.link} className="title">{data.title}</Link>
          </div>
        </div>

     
    
  )
}

export default EventCards;
