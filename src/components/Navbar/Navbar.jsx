import React, { useEffect, useState } from "react";
import sphurtiLogo from "../../assets/sphurtiLogo.png";
import navMenu from "../../assets/navMenu.png";
import closeBtn from "../../assets/closeButton.png";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase";
import toast, { Toaster } from 'react-hot-toast';
import "./Navbar.css";
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'

function Navbar() {
	const [navOpen, setNavOpen] = useState("");
	const [pathname, setpathname] = useState("home");
	const [isLive, setIsLive] = useState("");
	const [link, setLink] = useState("")
	useEffect(() => {
		setTimeout(() => {
			setpathname(window.location.href);
		}, 300);
	}, [navOpen]);

	useEffect(() => {
		const unsub = onSnapshot(doc(db, "contact", "home"), (doc) => {
			setIsLive(doc.data().isLive);
		});

		return () => {
			unsub;
		};
	}, [])

	useEffect(() => {
		const unsub = onSnapshot(doc(db, "contact", "home"), (doc) => {
			setLink(doc.data().link);
		});

		return () => {
			unsub;
		};
	}, [])

	const handleRegisterbtn = () => {
		if (isLive) {
			// window.location.href=link;
			window.open(link, "_blank")
		}
		else {
			toast.error('registrations not opened yet!!');
		}
	}

	return (
		<>
			<div className="navbar">
				<div className="navLeft">
					<img src={sphurtiLogo} alt="" />
				</div>
				<div className="navCenter">
					{/* <a
						className={`${pathname.includes("home") ? "active" : ""}`}
						href="#home"
						onClick={() => setNavOpen("abeOoo")}
					>
						HOME
					</a> */}
					<Link activeClass={`${pathname.includes("home") ? "active" : ""}`} to="home" spy={true} smooth={true} offset={-150} duration={1} onClick={() => setNavOpen("abeOoo")}>
						HOME
					</Link>
					<Link activeClass={`${pathname.includes("about") ? "active" : ""}`} to="about" spy={true} smooth={true} offset={-80} duration={1} onClick={() => setNavOpen("boy")}>
						ABOUT
					</Link>
					<Link activeClass={`${pathname.includes("sports") ? "active" : ""}`} to="sports" spy={true} smooth={true} offset={-80} duration={1} onClick={() => setNavOpen("doctor")}>
						SPORTS
					</Link>
					<Link activeClass={`${pathname.includes("live") ? "active" : ""}`} to="live" spy={true} smooth={true} offset={-80} duration={1} onClick={() => setNavOpen("kuchBhi")}>
						LIVE RESULTS
					</Link>
					<Link activeClass={`${pathname.includes("contact") ? "active" : ""}`} to="contact" spy={true} smooth={true} offset={-80} duration={1} onClick={() => setNavOpen("cat")}>
						CONTACT
					</Link>
					{/* <a
						className={`${pathname.includes("about") ? "active" : ""}`}
						href="#about"
						onClick={() => setNavOpen("boy")}
					>
						ABOUT
					</a> */}
					{/* <a
						className={`${pathname.includes("sports") ? "active" : ""}`}
						href="#sports"
						onClick={() => setNavOpen("doctor")}
					>
						SPORTS
					</a> */}
					{/* <a
						className={`${pathname.includes("live") ? "active" : ""}`}
						href="#live"
						onClick={() => setNavOpen("kuchbhi")}
					>
						LIVE RESULTS
					</a>
					<a
						className={`${pathname.includes("contact") ? "active" : ""}`}
						href="#contact"
						onClick={() => setNavOpen("cat")}
					>
						CONTACT
					</a> */}
				</div>
				<div className="navRight">
					<a
						className={`${pathname.includes("register") ? "active" : ""}`}
						onClick={() => handleRegisterbtn()}
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
					{/* <a
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
						className={`${pathname.includes("sports") ? "active" : ""}`}
						href="#sports"
						onClick={() => setNavOpen("")}
					>
						SPORTS
					</a>
					<a
						className={`${pathname.includes("live") ? "active" : ""}`}
						href="#live"
						onClick={() => setNavOpen("")}
					>
						LIVE RESULT
					</a>
					<a
						className={`${pathname.includes("contact") ? "active" : ""}`}
						href="#contact"
						onClick={() => setNavOpen("")}
					>
						CONTACT
					</a> */}
					<Link activeClass={`${pathname.includes("home") ? "active" : ""}`} to="home" spy={true} smooth={true} offset={-150} duration={1} onClick={() => setNavOpen("abeOoo")}>
						HOME
					</Link>
					<Link activeClass={`${pathname.includes("about") ? "active" : ""}`} to="about" spy={true} smooth={true} offset={-60} duration={1} onClick={() => setNavOpen("boy")}>
						ABOUT
					</Link>
					<Link activeClass={`${pathname.includes("sports") ? "active" : ""}`} to="sports" spy={true} smooth={true} offset={-60} duration={1} onClick={() => setNavOpen("doctor")}>
						SPORTS
					</Link>
					<Link activeClass={`${pathname.includes("live") ? "active" : ""}`} to="live" spy={true} smooth={true} offset={-60} duration={1} onClick={() => setNavOpen("kuchBhi")}>
						LIVE RESULTS
					</Link>
					<Link activeClass={`${pathname.includes("contact") ? "active" : ""}`} to="contact" spy={true} smooth={true} offset={-60} duration={1} onClick={() => setNavOpen("cat")}>
						CONTACT
					</Link>
				</div>
			</div>
		</>
	);
}

export default Navbar;
