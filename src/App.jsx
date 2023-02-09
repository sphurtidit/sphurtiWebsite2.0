import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Sports from "./pages/Sports/Sports";
import EventPage from "./pages/EventPage/EventPage";

import Guidelines from "./pages/Guidelines/Guidelines";
import ContactUs from "./pages/Contact/Contact";
import LiveResult from "./pages/LiveResult/LiveResult"

function App() {
	return (
    <>
      <Navbar />
      <Home />
      <Sports />
      <LiveResult />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
