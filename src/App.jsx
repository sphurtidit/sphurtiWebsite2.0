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
import Volleyball from './pages/Volleyball/Volleyball'
import Badminton from './pages/Badminton/Badminton'
import Basketball from './pages/Basketball/Basketball'
import Cricket from './pages/Cricket/Cricket'
import TableTennis from './pages/TableTennis/TableTennis'
import Football from './pages/Football/Football'

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
          <Route path="/Volleyball" element={<Volleyball />} />
          <Route path="/Badminton" element={<Badminton/>} />
          <Route path="/Basketball" element={<Basketball />} />
          <Route path="/Cricket" element={<Cricket/>} />
          <Route path="/TableTennis" element={<TableTennis />} />
          <Route path="/Football" element={<Football/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
