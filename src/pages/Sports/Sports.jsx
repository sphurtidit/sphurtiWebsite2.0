import React from 'react'
import './Sports.css';
import image1 from "../../assets/grp147.png"
import Eventswrapper from '../../components/EventCards/Eventwrapper';

function Sports() {
  return (
    <div style={{backgroundImage:`url(${image1})`,width:'100%', height:'1000px'}}>
      SPORTS.
      <Eventswrapper/>
    </div>
  )
}

export default Sports
