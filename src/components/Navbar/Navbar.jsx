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
                    <li className={`${pathname === "/" ? "active" : ""}`}><Link onClick={()=>closeMenu()} to="/">Home</Link></li>
                    <li className={`${pathname === "/sports" ? "active" : ""}`}><Link onClick={()=>closeMenu()} to="/sports">Sports</Link></li>
                    <li className={`${pathname === "/live" ? "active" : ""}`}><Link onClick={()=>closeMenu()} to="/live">Live Results</Link></li>
                    <li className={`${pathname === "/guidelines" ? "active" : ""}`}><Link onClick={()=>closeMenu()} to="/guidelines">Guidelines</Link></li>
                    <li className={`${pathname === "/contact" ? "active" : ""}`}><Link onClick={()=>closeMenu()} to="/contact">Contact Us</Link></li>
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
