import React, { useState } from 'react'
import sphurtiLogo from '../../assets/sphurtiLogo.png'
import navMenu from '../../assets/navMenu.png'
import closeBtn from '../../assets/closeButton.png'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'



function Navbar() {

    const { pathname } = useLocation();
    const [menuVisible, setMenuVisble] = useState("");

    const showNavbar = () => {
        setMenuVisble("visible");
    }

    const closeMenu=()=>{
        setMenuVisble("");
    }

    return (
        <>
            <div className="navbar">
                <div className={`logo${menuVisible}`}>
                    <img src={sphurtiLogo} alt="" />
                </div>
                <div className={`listNavbar${menuVisible}`}>
                    <li className={`${pathname === "/" ? "active" : ""}`}><Link to="/">Home</Link></li>
                    <li className={`${pathname === "/sports" ? "active" : ""}`}><Link to="/sports">Sports</Link></li>
                    <li className={`${pathname === "/live" ? "active" : ""}`}><Link to="/live">Live Results</Link></li>
                    <li className={`${pathname === "/guidelines" ? "active" : ""}`}><Link to="/guidelines">Guidelines</Link></li>
                    <li className={`${pathname === "/contact" ? "active" : ""}`}><Link to="/contact">Contact Us</Link></li>
                </div>
                <div className={`hamburger${menuVisible}`}>
                    <img onClick={()=>showNavbar()} src={navMenu} alt="" />
                </div>
                <div className={`closeMenu${menuVisible}`}>
                    <img onClick={()=>closeMenu()} src={closeBtn} alt="" />
                </div>
            </div>

        </>
    )
}

export default Navbar
