import React, { useState } from "react";
import sphurtiLogo from "../../assets/sphurtiLogo.png";
import navMenu from "../../assets/navMenu.png";
import closeBtn from "../../assets/closeButton.png";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
	const { pathname } = useLocation();
	const [navOpen, setNavOpen] = useState("");

	const showNavbar = () => {
		setMenuVisble("visible");
	};

	const closeMenu = () => {
		setMenuVisble("");
	};

	return (
		<>
			<div className="navbar">
				<div className="navLeft">
					<img src={sphurtiLogo} alt="" />
				</div>
				<div className="navCenter">
					<Link to="/" className={`${pathname === "/" ? "active" : ""}`}>
						Home
					</Link>
					<Link
						to="/sports"
						className={`${pathname === "/sports" ? "active" : ""}`}
					>
						Sports
					</Link>
					<Link
						to="/live"
						className={`${pathname === "/live" ? "active" : ""}`}
					>
						Live Results
					</Link>
					<Link
						to="/guidelines"
						className={`${pathname === "/guidelines" ? "active" : ""}`}
					>
						Guidelines
					</Link>
					<Link
						to="/contact"
						className={`${pathname === "/contact" ? "active" : ""}`}
					>
						Contact Us
					</Link>
				</div>
				<div className="navRight">
					<img
						onClick={() => setNavOpen("navMenuOpenshow")}
						src={navMenu}
						alt=""
					/>
				</div>
			</div>
			<div className={`nameMenuOpen ${navOpen}`}>
				<div className="navMenuCloseButton">
					<img
						src={closeBtn}
						alt="clsoeButton"
						onClick={() => setNavOpen("")}
					/>
				</div>
				<div className="mobileMenu">
					<Link
						to="/"
						className={`${pathname === "/" ? "active" : ""}`}
						onClick={() => setNavOpen("")}
					>
						Home
					</Link>
					<Link
						to="/sports"
						className={`${pathname === "/sports" ? "active" : ""}`}
						onClick={() => setNavOpen("")}
					>
						Sports
					</Link>
					<Link
						to="/live"
						className={`${pathname === "/live" ? "active" : ""}`}
						onClick={() => setNavOpen("")}
					>
						Live Results
					</Link>
					<Link
						to="/guidelines"
						className={`${pathname === "/guidelines" ? "active" : ""}`}
						onClick={() => setNavOpen("")}
					>
						Guidelines
					</Link>
					<Link
						to="/contact"
						className={`${pathname === "/contact" ? "active" : ""}`}
						onClick={() => setNavOpen("")}
					>
						Contact Us
					</Link>
				</div>
			</div>
		</>
	);
}

export default Navbar;
