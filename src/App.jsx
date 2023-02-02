import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Sports from './pages/Sports/Sports'
import LiveResult from './pages/LiveResult/LiveResult'
import Guidelines from './pages/Guidelines/Guidelines'
import ContactUs from './pages/Contact/Contact'


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/live" element={<LiveResult />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
