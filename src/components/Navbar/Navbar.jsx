import React, { useEffect, useState } from "react";
import sphurtiLogo from "../../assets/sphurtiLogo.png";
import navMenu from "../../assets/navMenu.png";
import closeBtn from "../../assets/closeButton.png";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase";
import toast, { Toaster } from 'react-hot-toast';
import "./Navbar.css";

function Navbar() {
	const [navOpen, setNavOpen] = useState("");
	const [pathname, setpathname] = useState("home");
	const [isLive,setIsLive]=useState("");
	const [link,setLink]=useState("")
	useEffect(() => {
		setTimeout(() => {
			setpathname(window.location.href);
		}, 300);
	}, [navOpen]);

	useEffect(()=>{
		const unsub = onSnapshot(doc(db, "contact", "home"), (doc) => {
			setIsLive(doc.data().isLive);
		});
	
		return () => {
			unsub;
		};
	},[])

	useEffect(()=>{
		const unsub = onSnapshot(doc(db, "contact", "home"), (doc) => {
			setLink(doc.data().link);
		});
	
		return () => {
			unsub;
		};
	},[])

	const handleRegisterbtn=()=>{
		if(isLive)
		{
			// window.location.href=link;
			window.open(link,"_blank")
		}
		else{
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
						className={`${pathname.includes("sports") ? "active" : ""}`}
						href="#sports"
						onClick={() => setNavOpen("doctor")}
					>
						SPORTS
					</a>
					<a
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
					</a>
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
					</a>
				</div>
			</div>
		</>
	);
}

export default Navbar;
