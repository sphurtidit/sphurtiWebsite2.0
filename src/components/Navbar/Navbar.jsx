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
	const [liveStream, setLiveStream] = useState(false);
	const [streamLink, setStreamLink] = useState("");
	const [disablebtn, setDisablebtn] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setpathname(window.location.href);
		}, 300);
	}, [navOpen]);

	useEffect(() => {
		const unsub = onSnapshot(doc(db, "contact", "home"), (doc) => {
			setIsLive(doc.data().isLive);
			setLink(doc.data().link);
			setLiveStream(doc.data().stream_is_live);
			setStreamLink(doc.data().stream_link);
		});

		return () => {
			unsub;
		};
	}, [])

	useEffect(() => {
		liveStream && setDisablebtn(false)
		!liveStream && setDisablebtn(true)
	}, [liveStream])



	const handleRegisterbtn = () => {
		if (isLive) {
			window.open(link, "_blank")
		}
		else {
			toast.error('registrations not opened yet!!');
		}
	}
	const handleLiveBtn = () => {
		window.open(streamLink, "_blank")
	}

	return (
		<>
			<div className="navbar">
				<div className="navLeft">
					<img src={sphurtiLogo} alt="" />
				</div>
				<div className="navCenter">
					<Link activeClass={`${pathname.includes("home") ? "active" : ""}`} to="home" spy={true} smooth={true} offset={-150} duration={1} onClick={() => setNavOpen("abeOoo")}>
						HOME
					</Link>
					<Link activeClass={`${pathname.includes("about") ? "active" : ""}`} to="about" spy={true} smooth={true} offset={-80} duration={1} onClick={() => setNavOpen("boy")}>
						MESSAGES
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
				</div>
				<div className="navRight">
					<button
						className="liveButton"
						disabled={disablebtn}
						onClick={() => handleLiveBtn()}
					>
						GO LIVE
					</button>
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
					<Link activeClass={`${pathname.includes("home") ? "active" : ""}`} to="home" spy={true} smooth={true} offset={-150} duration={1} onClick={() => setNavOpen("abeOoo")}>
						HOME
					</Link>
					<Link activeClass={`${pathname.includes("about") ? "active" : ""}`} to="about" spy={true} smooth={true} offset={-60} duration={1} onClick={() => setNavOpen("boy")}>
						MESSAGES
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
