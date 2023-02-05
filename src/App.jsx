import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sports from "./pages/Sports/Sports";
import EventPage from "./pages/EventPage/EventPage";
import LiveResult from "./pages/LiveResult/LiveResult";
import Guidelines from "./pages/Guidelines/Guidelines";
import ContactUs from "./pages/Contact/Contact";

function App() {
	return (
		<>
			<Router>
				<div className="App">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/sports" element={<Sports />} />
						<Route path="/live" element={<LiveResult />} />
						<Route path="/guidelines" element={<Guidelines />} />
						<Route path="/contact" element={<ContactUs />} />
						<Route path="/eventpage" element={<EventPage />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</>
	);
}

export default App;
