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
            <p className='title'>{data.title}</p>
            <Link to={data.link} ><button className='button'>Explore More...</button></Link>
        </div>
        </div>

     
    
  )
}

export default EventCards;
