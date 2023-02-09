import React, { useEffect, useState } from "react";
import sphurtiLogo from "../../assets/sphurtiLogo.png";
import navMenu from "../../assets/navMenu.png";
import closeBtn from "../../assets/closeButton.png";
import "./Navbar.css";

function Navbar() {
	const [navOpen, setNavOpen] = useState("");
	const [pathname, setpathname] = useState("home");
	useEffect(() => {
		setTimeout(() => {
			setpathname(window.location.href);
		}, 300);
	}, [navOpen]);

	return (
		<>
			<div className="navbar">
				<div className="navLeft">
					<img src={sphurtiLogo} alt="" />
				</div>
				<div className="navCenter">
					<a
						className={`${pathname.includes("home") ? "active" : ""}`}
						href="#home"
						onClick={() => setNavOpen("abeOoo")}
					>
						HOME
					</a>
					<a
						className={`${pathname.includes("about") ? "active" : ""}`}
						href="#about"
						onClick={() => setNavOpen("boy")}
					>
						ABOUT
					</a>
					<a
						className={`${pathname.includes("contact") ? "active" : ""}`}
						href="#contact"
						onClick={() => setNavOpen("cat")}
					>
						CONTACT
					</a>
					<a
						className={`${pathname.includes("sports") ? "active" : ""}`}
						href="#sports"
						onClick={() => setNavOpen("doctor")}
					>
						SPORTS
					</a>
				</div>
				<div className="navRight">
					<a
						className={`${pathname.includes("register") ? "active" : ""}`}
						onClick={() => setNavOpen("www")}
					>
						REGISTER
					</a>
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
					<a
						className={`${pathname.includes("home") ? "active" : ""}`}
						href="#home"
						onClick={() => setNavOpen("")}
					>
						HOME
					</a>
					<a
						className={`${pathname.includes("about") ? "active" : ""}`}
						href="#about"
						onClick={() => setNavOpen("")}
					>
						ABOUT
					</a>
					<a
						className={`${pathname.includes("contact") ? "active" : ""}`}
						href="#contact"
						onClick={() => setNavOpen("")}
					>
						CONTACT
					</a>
					<a
						className={`${pathname.includes("sports") ? "active" : ""}`}
						href="#sports"
						onClick={() => setNavOpen("")}
					>
						SPORTS
					</a>
				</div>
			</div>
		</>
	);
}

export default Navbar;
