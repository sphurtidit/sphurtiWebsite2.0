import React, { useState } from 'react'
import sphurtiLogo from '../../assets/sphurtiLogo.png'
import navMenu from '../../assets/navMenu.png'
import closeBtn from '../../assets/closeButton.png'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'



function Navbar() {

    const {pathname}=useLocation();
    const [menuOpened,setMenuOpened]=useState(false);

    const showNavbar=()=>{
        setMenuOpened(!menuOpened);
    }

    return (
        <>
            <div className="navbar">
                <ul>
                    <img className="sphurtiLogo" src={sphurtiLogo} alt="" />
                    <li className={`${pathname === "/" ? "active" : ""}`}><Link to="/">Home</Link></li>
                    <li className={`${pathname === "/sports" ? "active" : ""}`}><Link to="/sports">Sports</Link></li>
                    <li className={`${pathname === "/live" ? "active" : ""}`}><Link to="/live">Live Results</Link></li>
                    <li className={`${pathname === "/guidelines" ? "active" : ""}`}><Link to="/guidelines">Guidelines</Link></li>
                    <li className={`${pathname === "/contact" ? "active" : ""}`}><Link to="/contact">Contact Us</Link></li>
                    <img className="menuIcon" onClick={()=>showNavbar()} src={navMenu} alt="" />
                    {/* <img src={closeBtn} alt="" /> */}
                </ul>
            </div>

        </>
    )
}

export default Navbar
